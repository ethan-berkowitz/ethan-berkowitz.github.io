import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function BabylonGame() {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const initializedRef = useRef(false);
  const gameRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {

    // Return if canvas is not made yet
    if (!canvasRef.current) return;
    if (initializedRef.current) return;
    initializedRef.current = true;
    let isMounted = true;

    // Prevent page from scrolling
    const preventScrollKeys = (e) => {
      const keys = ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'];
      if (keys.includes(e.code) && document.activeElement === canvasRef.current) {
        e.preventDefault();
      }
    };

    const preventScrollWheel = (e) => {
      if (document.activeElement === canvasRef.current) e.preventDefault();
    };

    window.addEventListener('keydown', preventScrollKeys, { passive: false });
    window.addEventListener('wheel', preventScrollWheel, { passive: false });

    // Initialize Game
    const initGame = async () => {
      try {
        const { game } = await import('../game/game.js');
        const { createScene } = await import('../game/createScene.js');
        const { applyCollision } = await import('../game/applyCollision.js');
        const { moveSphere } = await import('../game/moveSphere.js');
        const { updateScoreText } = await import('../game/updateScoreText.js');
        const { pointScored } = await import('../game/pointScored.js');
        const { reset } = await import('../game/reset.js');
        const { gameOver } = await import('../game/gameOver.js');

        if (!isMounted || !canvasRef.current) return;

        game.canvas = canvasRef.current;
        game.engine = new BABYLON.Engine(game.canvas, true);
        gameRef.current = game;

        await createScene(game);

        if (!isMounted) {
          game.engine.dispose();
          return;
        }

        game.score.p1 = 0;
        game.score.p2 = 0;
        game.reset.timer = game.reset.interval;
        game.infoSaved = false;
        game.currentState = game.state.start;

        game.engine.runRenderLoop(() => {
          if (!isMounted) return;

          game.canvas.focus();
          if (!game.scene || !game.scene.isReady()) return;

          switch (game.currentState) {
            case game.state.start: 
              reset(game);
              break;
            case game.state.playing:
              applyCollision(game);
              moveSphere(game);
              break;
            case game.state.pointScored:
              pointScored(game);
              break;
            case game.state.reset:
              reset(game);
              break;
            case game.state.gameOver:
              gameOver(game);
              setIsGameOver(true);
              break;
          }

          updateScoreText(game);
          game.scene.render();
        });

        const handleResize = () => { if (game.engine) game.engine.resize(); };
        window.addEventListener('resize', handleResize);
        setIsLoading(false);

        return () => {
          window.removeEventListener('resize', handleResize);
          if (game.engine) { game.engine.stopRenderLoop(); game.engine.dispose(); }
        };
      } catch (error) {
        console.error('Failed to initialize game:', error);
        setIsLoading(false);
      }
    };

    const cleanupPromise = initGame();

    return () => {
      isMounted = false;
      initializedRef.current = false;

      window.removeEventListener('keydown', preventScrollKeys);
      window.removeEventListener('wheel', preventScrollWheel);

      cleanupPromise?.then((cleanup) => cleanup && cleanup());
    };
  }, []);

  const handleReturnToTournament = () => {
    navigate("/tournament");
  };

  return (
    <div className="page-bg flex flex-col items-center justify-center min-h-screen w-screen">
      {isLoading && (
        <div className="absolute">
          Loading game...
        </div>
      )}
      <canvas
        ref={canvasRef}
        tabIndex={0}
        width="1280"
        height="720"
        id="renderCanvas"
        style={{
          display: isLoading ? 'none' : 'block',
          outline: 'none'
        }}
      />
      {isGameOver && (
        <div className="absolute bottom-10">
          <Button 
            variant="primary" 
            size="lg"
            onClick={handleReturnToTournament}
          >
            Return to Tournament
          </Button>
        </div>
      )}
    </div>
  );
}
