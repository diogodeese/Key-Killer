import Nav from '../components/Nav';
import Game from '../components/Game';

function GamePage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-600">
      <div className="absolute top-8">
        <Nav />
      </div>
      <Game />
    </div>
  );
}

export default GamePage;
