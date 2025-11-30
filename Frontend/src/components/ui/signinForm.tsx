// import { useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { EyeIcon, EyeOffIcon } from "lucide-react";
// import axios from "axios";

// import { serverUrl } from "../../constants/constants";
// import { useNavigate } from "react-router-dom";

// const signInSchema = z.object({
//   username: z
//     .string()
//     .min(3, "Username must be at least 3 characters")
//     .max(20, "Username must be at most 20 characters"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// type SignInFormInputs = z.infer<typeof signInSchema>;

// export default function SignInForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<SignInFormInputs>({
//     resolver: zodResolver(signInSchema),
//   });

//   const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
//     try {
//       const response = await axios.post(`${serverUrl}/user/signin`, data, {
//         withCredentials: true,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       if (response.data.success) {
//         navigate("/dashboard");
//         console.log("Signin successful:", response.data.message);
//       } else {
//         setError(response.data.message || "Signin failed");
//       }
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         setError(
//           error.response?.data?.message || "An error occurred during signin"
//         );
//       } else {
//         setError("An unexpected error occurred");
//       }
//       console.error("Error during signin:", error);
//     }
//   };

//   return (
//     <div className="rounded-lg flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         {/* <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//         </div> */}
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="username" className="sr-only">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 type="text"
//                 {...register("username")}
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-battleshipgray text-oxfordblue rounded-t-md focus:outline-none focus:ring-mediumslateblue focus:border-mediumslateblue focus:z-10 sm:text-sm"
//                 placeholder="Username"
//               />
//               {errors.username && (
//                 <p className="mt-2 text-sm text-red-600">
//                   {errors.username.message}
//                 </p>
//               )}
//             </div>
//             <div className="relative">
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 {...register("password")}
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-battleshipgray text-oxfordblue rounded-b-md focus:outline-none focus:ring-mediumslateblue focus:border-mediumslateblue focus:z-10 sm:text-sm"
//                 placeholder="Password"
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? (
//                   <EyeOffIcon className="h-5 w-5 text-battleshipgray" />
//                 ) : (
//                   <EyeIcon className="h-5 w-5 text-battleshipgray" />
//                 )}
//               </button>
//             </div>
//             {errors.password && (
//               <p className="mt-2 text-sm text-red-600">
//                 {errors.password.message}
//               </p>
//             )}
//           </div>

//           {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-mediumslateblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mediumslateblue"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import axios from "axios";

import { serverUrl } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

const signInSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInFormInputs = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await axios.post(`${serverUrl}/user/signin`, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.success) {
        navigate("/dashboard");
        console.log("Signin successful:", response.data.message);
      } else {
        setError(response.data.message || "Signin failed");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message || "An error occurred during signin"
        );
      } else {
        setError("An unexpected error occurred");
      }
      console.error("Error during signin:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-5">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm flex items-start gap-3">
            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <div className="space-y-4">
          {/* Username Field */}
          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-oxfordblue mb-1.5"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              {...register("username")}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.username 
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
                  : "border-gray-300 focus:border-mediumslateblue focus:ring-mediumslateblue/20"
              } placeholder-battleshipgray text-oxfordblue focus:outline-none focus:ring-2 transition-all`}
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-oxfordblue"
              >
                Password
              </label>
              <button
                type="button"
                className="text-sm text-mediumslateblue hover:text-primary font-medium transition-colors"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className={`w-full px-4 py-3 pr-12 rounded-lg border ${
                  errors.password 
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
                    : "border-gray-300 focus:border-mediumslateblue focus:ring-mediumslateblue/20"
                } placeholder-battleshipgray text-oxfordblue focus:outline-none focus:ring-2 transition-all`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-battleshipgray hover:text-oxfordblue transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
          className="w-full bg-primary hover:bg-mediumslateblue disabled:bg-battleshipgray disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </button>
      </div>
    </div>
  );
}