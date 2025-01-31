import GenderCheckBox from "./GenderCheckbox";

const Signup = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
        <div className="w-full p-6 bg-plaintiff-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-500">
          <h1 className="text-3xl font-semibold text-center text-gray-50">
            Sign Up <span className="text-blue-500">ChatApp</span>
          </h1>
  
          <form>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full input input-bordered h-10"
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
              />
            </div>

            <GenderCheckBox />

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Date of Birth</span>
              </label>
              <input
                type="date"
                className="w-full input input-bordered h-10"
              />
            </div>
  
            {/* Already have an account? Link */}
            <div className="text-center mt-3">
              <p className="text-sm text-gray-200">
                Already have an account?{" "}
                <a href="/login" className="text-blue-400 hover:underline">
                  Login here
                </a>
              </p>
            </div>
  
            <div className="mt-4">
              <button
                type="submit"
                className="w-full h-10 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
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
