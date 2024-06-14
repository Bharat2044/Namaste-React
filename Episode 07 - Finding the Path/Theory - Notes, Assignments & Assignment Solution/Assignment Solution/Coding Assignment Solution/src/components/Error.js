import errorImage from "../../../../../../public/images/error-image.jpg";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-page">
      <div className="error-image">
        <img src={errorImage} alt="Error Image" />
      </div>

      <div className="error-details">
        <h1>Oops! Something Went Wrong!!</h1>
        <h3 className="error-data">{err.data}</h3>

        <h3 className="error-back-home">
          <Link className="link-name" to="/">Back Home</Link>
        </h3>
      </div>
    </div>
  );
};

export default Error;
