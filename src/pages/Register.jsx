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
    <div className="max-w-screen-xl mx-auto px-24 py-24">
      <div className="w-[50%] mx-auto flex flex-col justify-center items-center p-10 gap-6 border rounded-lg">
        <div className="bg-[url('/public/Resources/1494-removebg-preview.png')] bg-cover bg-no-repeat bg-center p-16 ">
          <h1 className="text-[#AC9B74] text-4xl font-bold mt-6">Register</h1>
        </div>
        <form
          className="w-full flex flex-col justify-center items-center gap-6"
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

          <button className="btn bg-[#617663] text-white w-full">
            Sign Up
          </button>
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
