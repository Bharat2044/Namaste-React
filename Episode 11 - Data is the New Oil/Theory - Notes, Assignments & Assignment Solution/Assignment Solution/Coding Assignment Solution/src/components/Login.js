import { Formik } from "formik"; // import Formik from formik
import * as Yup from "yup"; // import Yup from yup
import { useNavigate } from "react-router-dom";

// create a schema for validation
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  function handleNavigate(values) {
    // Alert the input values of the form that we filled
    alert(values);
    // setTimeout for navigate from login page to home page
    setTimeout(() => {
      navigate("/");
    }, 0);
  }

  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // call handleNavigate and pass input filed data
          handleNavigate(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="flex justify-center items-center h-[100vh] w-full">
            <div className="relative z-10 bg-[#FFAF60] rounded-[10px] max-w-[380px] px-[40px] py-[25px] w-[50%]">
              {/* Passing handleSubmit parameter to html form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span className="text-[40px] text-[#4b6cb7] mb-[25px] block text-center font-[500px]">
                  Login
                </span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                  className="outline-none bg-[#F2F2F2] w-full border-0 rounded-[5px] m-0 mb-[15px] p-[15px] text-[14px] focus:border-[blue]"
                />
                {/* If validation is not passed show errors */}
                <p className="mt-0 mr-0 mb-[10px] ml-[10px] text-left text-[13px] text-[red]">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* input with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className="outline-none bg-[#F2F2F2] w-full border-0 rounded-[5px] m-0 mb-[15px] p-[15px] text-[14px] focus:border-[blue-500]"
                />
                {/* If validation is not passed show errors */}
                <p className="mt-0 mr-0 mb-[10px] ml-[10px] text-left text-[13px] text-[red]">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button
                  className="uppercase outline-none bg-[#4b6cb7] text-[#FFF] text-[16px] cursor-pointer w-full border-0 rounded-md py-[15px] px-[40px] active:bg-[#395591] hover:bg-[blue] transition-all 0.3s ease-in-out"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
