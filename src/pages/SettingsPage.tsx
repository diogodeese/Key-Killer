import Nav from '../components/Nav';
import Settings from '../components/Settings';

function SettingsPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-600">
      <div className="absolute top-8">
        <Nav />
      </div>
      <div className="absolute top-[15%]">
        <Settings />
      </div>
    </div>
  );
}

export default SettingsPage;
