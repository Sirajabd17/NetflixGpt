import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="bg-no-repeat bg-center"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>

      <form className=" w-3/12 absolute p-8 bg-black m-36 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-md">
        <h1 className="font-bold text-3xl py-3 pl-2 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full  rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full  rounded-md"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 m-2 w-full  rounded-md"
        />
        <button className="p-4 m-2 w-full bg-red-700 text-2xl rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex">
          <p className="p-2 m-1 text-sm text-gray-600">
            <span className="m-1">
              <input type="checkbox" />
            </span>
            Remember Me
          </p>
          <p className=" mt-3 ml-16 text-gray-600 text-sm">Need Help?</p>
        </div>

        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;
