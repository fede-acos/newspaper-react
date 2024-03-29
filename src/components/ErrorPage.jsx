import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center text-red-600">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Oops!</h1>
          <p className="py-6">Sorry, an error has occurred..</p>
          <button
            onClick={handleClick}
            className="btn-xs btn mt-5 border-none bg-red-600 hover:bg-red-500 sm:btn-sm md:btn-md lg:btn-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
