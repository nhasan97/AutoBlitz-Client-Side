import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import app from "../firebase/firebase.config";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const auth = getAuth(app);
  const { signInUser } = useContext(AuthContext);

  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginWithEmailPass = (e) => {
    e.preventDefault();
    const email = e.target.mail.value;
    const password = e.target.pw.value;

    setLoginError("");
    setLoginSuccess("");

    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        setLoginSuccess("welcome" + result.user.email);
        e.target.reset();
        toast.success("Login Successful!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate(location?.state ? location.state : `/`);
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        navigate(location?.state ? location.state : `/`);
      })
      .catch((error) => {
        const msg = error.message;
        console.log(msg);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-24 py-24">
      <div className="w-[50%] mx-auto flex flex-col justify-center items-center p-10 gap-6 border rounded-lg">
        <div className="bg-[url('/public/Resources/1494-removebg-preview.png')] bg-cover bg-no-repeat bg-center p-16 ">
          <h1 className="text-[#AC9B74] text-4xl font-bold mt-6">Login</h1>
        </div>

        <form
          className="w-full flex flex-col justify-center items-center gap-6"
          onSubmit={handleLoginWithEmailPass}
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
              type={showPassword ? "text" : "password"}
              name="pw"
              id=""
              placeholder="password"
              required
              className="border p-4 w-full rounded-lg"
            />
            <span
              className="p-4 absolute top-0 right-0"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
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
          <button className="btn bg-[#617663] text-white w-full">Login</button>
        </form>

        <div className="w-full border-t flex flex-col justify-center items-center">
          <h1 className="w-fit text-center px-4 py-2 relative translate-y-[-50%] bg-white border rounded">
            OR
          </h1>
          <div className="flex gap-4">
            <button
              className="btn bg-[#AC9B74] text-white w-full"
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
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
