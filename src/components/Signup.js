import React from "react";
import Header from "./Header";

const Signup = () => {
  return (
    <div className="relative">
      <img
        className="absolute w-full h-auto object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
        alt="bg-cover"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-75 z-10"></div>
      <div className="absolute my-6 left-70 right-80 text-white mx-auto z-20">
        <select  className="bg-black opacity-40 px-4 py-2 border rounded-md" name="">
          <option className="" value="English">English</option>
          <option className="" value="हिन्दी">हिन्दी</option>
        </select>
        <button className="bg-red-600 mx-2 px-5 py-2 rounded-md" ><a href="/">Sign In</a></button>
      </div>
      <Header />

      <div className="absolute my-36 text-center mx-auto right-0 left-0 text-white z-10">
        <h1 className="font-bold text-6xl my-4">Unlimited movies,</h1>
        <h1 className="font-bold text-6xl my-4">TV shows and more</h1>
        <h3 className="font-semibold text-xl my-4">
          Starts at ₹149. Cancel at any time.
        </h3>
        <h2 className="font-semibold text-xl my-2">
          Ready to watch? Enter your email to create or restart your membership.
        </h2>
        <div className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Email address"
            className="outline-none px-6 py-3 my-2 bg-slate-900 w-1/4 bg-opacity-80 border rounded-md "
          ></input>
          <button className="bg-red-600 px-6 py-3 font-semibold rounded-md my-2 mx-2 text-white">
            Get Started {">"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Signup;