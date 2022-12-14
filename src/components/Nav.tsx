import { AiFillSetting, AiFillHome } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router-dom';

function Nav() {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div className="w-screen flex">
      <div className="w-full ml-[10%] text-left space-x-4">
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
      </div>
    </div>
  );
}

export default Nav;
