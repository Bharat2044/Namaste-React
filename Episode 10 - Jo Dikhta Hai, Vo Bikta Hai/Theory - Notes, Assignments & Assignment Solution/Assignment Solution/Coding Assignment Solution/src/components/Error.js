import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../../../../../public/images/error-image.jpg";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col  justify-center items-center h-[calc(100vh-40px)] gap-y-[10px] my-[20px]">
      <div className="flex items-center justify-center">
        <img
          className="w-[90%] rounded-lg"
          src={errorImage}
          alt="Error Image"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-y-[10px]">
        <h1>Oops! Something Went Wrong!!</h1>
        <h3 className="error-data">{err.data}</h3>
        <h3 className="flex justify-center items-center gap-y-[10px]">
          <Link
            className="text-white bg-[#e46f20] p-[10px] font-semibold rounded-[8px] cursor-pointer hover:bg-[#016034] transition-all 0.3s ease-in-out"
            to="/"
          >
            Back Home
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Error;
