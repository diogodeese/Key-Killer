import Nav from '../components/Nav';
import Ranking from '../components/Ranking';

function RankingPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-600">
      <div className="absolute top-8">
        <Nav />
      </div>
      <div className="absolute top-[15%]">
        <Ranking />
      </div>
    </div>
  );
}

export default RankingPage;
