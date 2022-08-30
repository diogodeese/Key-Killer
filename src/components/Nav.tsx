import { AiFillTrophy, AiFillSetting, AiFillHome } from 'react-icons/ai';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';

function Nav() {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div className="w-screen flex">
      <div className="w-1/2 ml-[10%] text-left space-x-4">
        {location.pathname === '/settings' ? (
          <button
            className="button"
            onClick={() => {
              navigate('/');
            }}
          >
            <AiFillHome className="text-2xl" />
          </button>
        ) : (
          <button
            className="button"
            onClick={() => {
              navigate('/settings');
            }}
          >
            <AiFillSetting className="text-2xl" />
          </button>
        )}
        <button className="button">
          <MdOutlineLightMode className="text-2xl" />
        </button>
        {location.pathname === '/ranking' ? (
          <button
            className="button"
            onClick={() => {
              navigate('/');
            }}
          >
            <AiFillHome className="text-2xl" />
          </button>
        ) : (
          <button
            className="button"
            onClick={() => {
              navigate('/ranking');
            }}
          >
            <AiFillTrophy className="text-2xl" />
          </button>
        )}
      </div>
      <div className="w-1/2 mr-[10%] text-right space-x-4">
        <button
          className="button"
          onClick={() => {
            navigate('/login');
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Nav;
