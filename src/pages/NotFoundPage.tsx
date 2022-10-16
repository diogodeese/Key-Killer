import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-600">
      <span className="text-5xl font-semibold text-white pb-4 tracking-wider">
        404
      </span>
      <span className="text-xl font-semibold text-white pb-8">
        Page Not Found
      </span>

      <button
        className="button"
        onClick={() => navigate('/')}
      >
        Go Back
      </button>
    </div>
  );
}

export default NotFoundPage;
