import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [registrationError, setRegistrationError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const img = e.target.pic.value;
    const email = e.target.mail.value;
    const password = e.target.pw.value;

    console.log(img);
    setRegistrationSuccess("");
    setRegistrationError("");

    if (password.length < 6) {
      setRegistrationError("Password must be at least 6 characters");
      return;
    } else if (/[A-Z]/.test(password) === false) {
      setRegistrationError("Password must have at least 1 uppercase letter");
      return;
    } else if (!/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/.test(password)) {
      setRegistrationError("At least one special character is required");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: img,
        })
          .then()
          .catch();
        setRegistrationSuccess("Account created successfully");
        toast.success("Account created successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        setRegistrationError(error.message);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-28 py-10 bg-[url('/public/gridfiti.png')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
      <div className="w-2/3 mx-auto bg-[#f4f3f081] text-center my-16 p-10 space-y-6 rounded-lg backdrop-blur-sm">
        <div className="px-16 py-10">
          <h1 className="font-rac text-gray-800 text-7xl font-bold">
            Register
          </h1>
        </div>
        <form
          className="w-full flex flex-col justify-center items-center gap-6 px-16"
          onSubmit={handleRegister}
        >
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            className="border p-4 w-full rounded-lg"
            required
          />
          <input
            type="text"
            name="pic"
            id=""
            placeholder="Photo Url"
            className="border p-4 w-full rounded-lg"
          />

          <input
            type="email"
            name="mail"
            id=""
            placeholder="Email"
            className="border p-4 w-full rounded-lg"
            required
          />
          <div className="w-full flex relative ">
            <input
              type={showPassword ? "text" : "password"}
              name="pw"
              id=""
              placeholder="Password"
              className="border p-4 w-full rounded-lg"
              required
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
          {registrationSuccess && (
            <p className="text-green-500">{registrationSuccess}</p>
          )}

          {registrationError && (
            <p className="text-red-500">{registrationError}</p>
          )}

          <button className="btn bg-red-600 text-white w-1/2">Sign Up</button>
        </form>
        <p className="">
          Already user?
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
