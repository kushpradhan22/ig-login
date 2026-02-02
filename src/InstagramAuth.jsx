import React, { useState } from "react";
import phoneImage from "./assets/image.png";
import googleplayImage from "./assets/gplay.png";
import microsoftImage from "./assets/Microsoft.png";
import logo from "./assets/logo.png";


const InstagramAuth = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-5xl w-full flex items-center justify-center px-4">

        {/* LEFT PHONE IMAGE */}
        <div className="hidden md:flex w-1/2 justify-center">
          <img
            src={phoneImage}
            alt="Instagram preview"
            className="h-[550px]"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-1/2 flex flex-col items-center">

          {/* CARD */}
          <div className=" w-full max-w-sm bg-white border border-gray-300 py-10 px-8">
            <img 
            src={logo}
            alt="ig logo"
            className="w-[100%] object-contain"
          />

            {/* LOGIN FORM */}
            {!isSignup && (
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Phone number, username, or email"
                  className="input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                />
                <button className="btn">Log in</button>

                <Divider />

                <p className="text-center text-sm text-blue-900 font-semibold cursor-pointer">
                  Log in with Facebook
                </p>

                <p className="text-center text-xs text-blue-800 mt-4 cursor-pointer">
                  Forgotten your password?
                </p>
              </form>
            )}

            {/* SIGNUP FORM */}
            {isSignup && (
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Mobile Number or Email"
                  className="input"
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                />

                <button className="btn">Sign up</button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  By signing up, you agree to our Terms & Privacy Policy.
                </p>
              </form>
            )}
          </div>

          {/* SWITCH CARD */}
          <div className="w-full max-w-sm bg-white border border-gray-300 mt-4 py-4">
            <p className="text-center text-sm">
              {isSignup ? "Have an account?" : "Don’t have an account?"}{" "}
              <span
                className="text-blue-500 font-semibold cursor-pointer"
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup ? "Log in" : "Sign up"}
              </span>
            </p>
          </div>

          {/* APP DOWNLOAD */}
          <div className="mt-6 text-center">
            <p className="text-sm mb-3">Get the app.</p>
            <div className="flex gap-2 justify-center">
              <img
                src={googleplayImage}
                alt="Google Play"
                className="h-10"
              />
              <img
                src={microsoftImage}
                alt="Microsoft"
                className="h-10"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

/* Reusable Components */
const Divider = () => (
  <div className="flex items-center my-6">
    <div className="flex-grow h-px bg-gray-300"></div>
    <span className="mx-4 text-xs text-gray-400 font-semibold">OR</span>
    <div className="flex-grow h-px bg-gray-300"></div>
  </div>
);

export default InstagramAuth;
