import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="logo"
      />
      </div>
     <form>
        <input type="text" placeholder="Email Address" className="p-2 m-2"/>
        <input type="text" placeholder="Password"
     </form>


    </div>
    
  );
};
export default Login;
