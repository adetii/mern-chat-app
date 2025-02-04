import GenderCheckBox from "./GenderCheckBox"; // Fixed import name to match the file correctly
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmedPassword: "",
    gender: "",
    dob: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
      <div className="w-full p-6 bg-plaintiff-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-500">
        <h1 className="text-3xl font-semibold text-center text-gray-50">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full input input-bordered h-10"
              value={inputs.fullname}
              onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmedPassword}
              onChange={(e) => setInputs({ ...inputs, confirmedPassword: e.target.value })}
            />
          </div>

          <GenderCheckBox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Date of Birth</span>
            </label>
            <input
              type="date"
              className="w-full input input-bordered h-10"
              value={inputs.dob}
              onChange={(e) => setInputs({ ...inputs, dob: e.target.value })}
            />
          </div>

          {/* Already have an account? Link */}
          <div className="text-center mt-3">
            <p className="text-sm text-gray-200">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:underline">
                Login here
              </Link>
            </p>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full h-10 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
              disabled={loading} // Prevents multiple submissions while loading
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;






//STARTUP CODE FOR SIGN UP PAGE

//   import GenderCheckBox from "./GenderCheckbox";

// const Signup = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
//         <div className="w-full p-6 bg-plaintiff-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-500">
//           <h1 className="text-3xl font-semibold text-center text-gray-50">
//             Sign Up <span className="text-blue-500">ChatApp</span>
//           </h1>
  
//           <form>
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Full Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter full name"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
  
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter username"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
  
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
  
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Confirm Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Confirm password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>

//             <GenderCheckBox />

//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Date of Birth</span>
//               </label>
//               <input
//                 type="date"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
  
//             {/* Already have an account? Link */}
//             <div className="text-center mt-3">
//               <p className="text-sm text-gray-200">
//                 Already have an account?{" "}
//                 <a href="/login" className="text-blue-400 hover:underline">
//                   Login here
//                 </a>
//               </p>
//             </div>
  
//             <div className="mt-4">
//               <button
//                 type="submit"
//                 className="w-full h-10 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
//               >
//                 Signup
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default Signup;
