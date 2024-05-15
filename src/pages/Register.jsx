import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { uploadImage } from "../utilities/imageUploader";
import { saveUserData } from "../api/authAPIs";
import {
  showToastOnError,
  showToastOnSuccess,
} from "../utilities/displayToast";
import { GoogleAuthProvider } from "firebase/auth";
import { BiLogoGoogle } from "react-icons/bi";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [showPass, setShowPass] = useState(false);
  const { registerWithEmailAndPassword, updateUsersProfile, signInWithGoogle } =
    useAuth();
  const navigate = useNavigate();

  //==================== Register Using Email and Password ====================
  const onSubmit = async (data) => {
    try {
      const imageData = await uploadImage(data.photo[0]);

      registerWithEmailAndPassword(data.email, data.pass)
        .then(async (result) => {
          updateUsersProfile(data.name, imageData?.data?.display_url)
            .then(async () => {
              const dbResponse = await saveUserData(result?.user);
              console.log(dbResponse);
              reset();
              showToastOnSuccess("Account created successfully");
              navigate("/");
            })
            .catch((err) => {
              showToastOnError(err.code + "---------" + err.message);
            });
        })
        .catch((err) => {
          showToastOnError(err.code + "---------" + err.message);
        });
    } catch (err) {
      showToastOnError(err.message);
    }
  };

  //================== Register using Google ==================
  const handleRegistrationWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithGoogle(provider)
      .then(async (result) => {
        if (result?.user?.email) {
          const dbResponse = await saveUserData(result?.user);
          console.log(dbResponse);
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((err) => {
        showToastOnError(err.code + "---" + err.message);
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
        {/* <form
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
        </form> */}

        <form
          className="w-full lg:w-3/4 h-fit flex flex-col gap-2 sm:gap-3 lg:gap-4 px-0 text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-[#444] text-4xl font-semibold text-center mt-4 sm:mt-0">
            Sign UP
          </h1>

          <div className="relative">
            <div className="h-[48px] w-[48px] flex justify-center items-center absolute top-0 left-0 bg-[#95D0D4] rounded-lg">
              <i className="fa-solid fa-signature text-xl text-white"></i>
            </div>
            <input
              id="in1"
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              className="input bg-[#a1dada41] w-full pl-16 rounded-lg border focus:border-[#7DDDD9] focus:outline-none"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is required</p>
            )}
          </div>

          <div className="relative">
            <div className="h-[48px] w-[48px] flex justify-center items-center absolute top-0 left-0 bg-[#95D0D4] rounded-lg">
              <i className="fa-solid fa-envelope text-xl text-white"></i>
            </div>
            <input
              id="in2"
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input bg-[#a1dada41] w-full pl-16 rounded-lg border focus:border-[#7DDDD9] focus:outline-none"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
          </div>

          <div className="relative">
            <div className="h-[48px] w-[48px] flex justify-center items-center absolute top-0 left-0 bg-[#95D0D4] rounded-lg">
              <i className="fa-solid fa-key text-xl text-white"></i>
            </div>
            <input
              id="in3"
              type={showPass ? "text" : "password"}
              {...register("pass", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              placeholder="Password"
              className="input bg-[#a1dada41] w-full pl-16 rounded-lg border focus:border-[#7DDDD9] focus:outline-none"
            />
            <span
              className=" text-base absolute right-4 translate-y-[50%]"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </span>
            {errors.pass?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.pass?.type === "minLength" && (
              <p className="text-red-500">
                Password has to be at least 6 characters long
              </p>
            )}
            {errors.pass?.type === "pattern" && (
              <p className="text-red-500">
                <ul className="list-disc">
                  Password must have at least
                  <li>1 uppercase letter</li>
                  <li>1 lowercase letter</li>
                  <li>1 digit</li>
                  <li>1 special character</li>
                </ul>
              </p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base">
                Pick your profile picture
              </span>
            </label>
            <input
              type="file"
              {...register("photo")}
              required
              className="file-input file-input-bordered w-full"
            />
          </div>

          <input
            type="submit"
            value="Sign Up"
            className="btn w-1/2 mx-auto bg-[#FE7E51] text-lg font-medium text-white hover:text-[#FE7E51] normal-case rounded-lg"
          />
        </form>
        <div
          className="w-full lg:w-3/4 h-fit flex flex-col items-center gap-2 sm:gap-4 px-0
          text-[#444]"
        >
          <p className="text-sm sm:text-lg  text-center">
            Already registered?
            <Link className="font-bold" to="/login">
              Go to log in
            </Link>
          </p>
          <p className="text-sm sm:text-lg font-medium">Or sign in with</p>

          <BiLogoGoogle
            className="btn w-1/2 mx-auto bg-[#FE7E51] text-sm sm:text-lg font-medium text-white hover:text-[#FE7E51] normal-case rounded-lg"
            onClick={handleRegistrationWithGoogle}
          ></BiLogoGoogle>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
