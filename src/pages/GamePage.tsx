import Nav from '../components/Nav';
import Game from '../components/Game';

function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

function GamePage() {
  const isMobile = detectMob();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-600">
      {!isMobile ? (
        <>
          <div className="absolute top-8">
            <Nav />
          </div>
          <Game />
        </>
      ) : (
        <span className="text-center text-base text-white mb-4 w-[75%]">
          Key Killer is only playable on a computer with a keyboard
        </span>
      )}
    </div>
  );
}

export default GamePage;
