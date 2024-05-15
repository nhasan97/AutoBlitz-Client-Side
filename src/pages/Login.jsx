import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState("");

  const { loginWithEmailAndPassword, signInWithGoogle, loginWithGitHub } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  //================== Login using Email and Password ==================
  const handleLoginWithEmailAndPassword = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.pass.value;

    setLoginError("");

    loginWithEmailAndPassword(email, password)
      .then((result) => {
        form.reset();
        if (result?.user?.email) {
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((err) => setLoginError(err.code + "---" + err.message));
  };

  //================== Login using Google ==================
  const handleLoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithGoogle(provider)
      .then((result) => {
        if (result?.user?.email) {
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((err) => {
        setLoginError(err.code + "---" + err.message);
      });
  };

  //================== Login using Github ==================
  const handleLoginWithGitHub = () => {
    const provider = new GithubAuthProvider();

    loginWithGitHub(provider)
      .then((result) => {
        if (result?.user?.email) {
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((err) => {
        setLoginError(err.code + "---" + err.message);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-28 py-10 bg-[url('/public/gridfiti.png')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
      <div className="w-2/3 mx-auto bg-[#f4f3f081] text-center my-16 p-10 space-y-6 rounded-lg backdrop-blur-sm">
        <div className="bg-[url('/public/Resources/1494-removebg-preview.png')] bg-cover bg-no-repeat bg-center py-10 px-16">
          <h1 className="font-rac text-gray-800 text-7xl font-bold">Login</h1>
        </div>

        {/* <form
          className="w-full flex flex-col justify-center items-center gap-6"
          onSubmit={handleLoginWithEmailAndPassword}
        >
          <input
            type="email"
            name="mail"
            id=""
            placeholder="email"
            ref={emailRef}
            required
            className="border p-4 w-full rounded-lg"
          />
          <div className="w-full flex relative">
            <input
              type={showPass ? "text" : "password"}
              name="pw"
              id=""
              placeholder="password"
              required
              className="border p-4 w-full rounded-lg"
            />
            <span
              className="p-4 absolute top-0 right-0"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <FaEyeSlash className="text-2xl"></FaEyeSlash>
              ) : (
                <FaEye className="text-2xl"></FaEye>
              )}
            </span>
          </div>
          <div>
            {loginError && <p className="text-red-500">{loginError}</p>}
            {loginSuccess && <h1 className="text-green-500">{loginSuccess}</h1>}
            {user && <img src={user.photoURL} alt="" />}
          </div>
          <button className="btn bg-red-600 text-white w-1/2 mb-6">
            Login
          </button>
        </form>

        <div className="w-full border-t flex flex-col justify-center items-center">
          <h1 className="w-fit text-center px-4 py-2 relative translate-y-[-50%] bg-white border rounded">
            OR
          </h1>
          <div className="flex gap-4">
            <button
              className="btn bg-[#0e0d0d] text-white w-full"
              onClick={handleGoogleSignIn}
            >
              google
            </button>
          </div>
        </div>

        <p className="">
          Need an account?
          <Link to="/register" className="underline">
            Sign Up
          </Link>
        </p> */}

        <form
          className="flex flex-col gap-5 text-left w-full"
          onSubmit={handleLoginWithEmailAndPassword}
        >
          <h1 className="text-[#444] text-[30px] font-semibold text-center">
            Login
          </h1>

          <div className="relative">
            <div className="h-[48px] w-[48px] flex justify-center items-center absolute top-0 left-0 bg-[#7DDDD9] rounded-s-full">
              <i className="fa-solid fa-envelope text-xl text-white"></i>
            </div>
            <input
              type="email"
              id="in1"
              name="email"
              placeholder="Email"
              required
              className="input bg-[#a1dada41] w-full pl-16 rounded-full border focus:border-[#7DDDD9] focus:outline-none"
            />
          </div>

          <div className="relative">
            <div className="h-[48px] w-[48px] flex justify-center items-center absolute top-0 left-0 bg-[#7DDDD9] rounded-s-full">
              <i className="fa-solid fa-key text-xl text-white"></i>
            </div>
            <input
              type={showPass ? "text" : "password"}
              id="in2"
              name="pass"
              placeholder="Password"
              required
              className="input bg-[#a1dada41] w-full pl-16 rounded-full border focus:border-[#7DDDD9] focus:outline-none"
            />
            <span
              className="text-2xl absolute right-4 top-0 translate-y-[50%]"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <AiFillEyeInvisible></AiFillEyeInvisible>
              ) : (
                <AiFillEye></AiFillEye>
              )}
            </span>
          </div>

          {loginError && (
            <p className="text-red-500 text-center font-bold">{loginError}</p>
          )}

          <input
            type="submit"
            value="Sign In"
            className="btn w-1/2 mx-auto bg-[#323484] text-lg font-medium text-white hover:text-[#323484] normal-case rounded-full"
          />
        </form>

        <div className="flex flex-col justify-center items-center mt-5 space-y-5">
          <p className="text-base font-medium">Or Sign In with</p>
          <div className="flex gap-3">
            <button
              className="btn btn-circle bg-[#ff5c11dc] text-white hover:text-[#ff5c11dc]"
              onClick={handleLoginWithGoogle}
            >
              <i className="fa-brands fa-google text-xl"></i>
            </button>
            <button
              className="btn btn-circle hidden"
              onClick={handleLoginWithGitHub}
            >
              <i className="fa-brands fa-github text-xl"></i>
            </button>
          </div>
          <p className="text-base font-medium">
            Dont have an account?
            <Link className="ml-3 text-[#ff5c11dc]" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
