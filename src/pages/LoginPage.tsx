import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function LoginPage() {
  const navigate = useNavigate();

  const context = UserAuth();

  const handleGoogleSignIn = async () => {
    if (context?.googleSignIn) {
      try {
        context.googleSignIn();
        navigate('/');
      } catch {
        console.error('error');
      }
    }
  };

  useEffect(() => {
    if (context?.user?.displayName != null) {
      navigate('/');
    }
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-600">
      <div className="border-2 border-slate-600 rounded-xl p-8 translate-y-[-40%] bg-slate-400 min-w-[450px] min-h-[350px] shadow-lg flex flex-col justify-center items-center">
        <p className="absolute top-8 text-xl">
          Log in to compete on the ranking table!
        </p>
        <button
          className="button"
          onClick={handleGoogleSignIn}
        >
          Google Login
        </button>
        <button
          className="button danger absolute bottom-8 w-full"
          onClick={() => {
            navigate('/');
          }}
        >
          Return
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
