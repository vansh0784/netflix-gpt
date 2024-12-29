import React from "react";
import Header from "./Header"
const Signup = () => {
  return (
    <div>
      <img className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
          alt="bg-cover"
        />
      <Header/>
      <div className=" absolute h-screen w-full top-1/2 left-1/2 text-center text-white">
        <h1 className="font-bold ">Unlimited movies,</h1>
        <h1 className="font-bold">TV shows and more</h1>
        <h3 className="font-semibold">Starts at ₹149. Cancel at any time.</h3>

      </div>
    </div>
  );
};

export default Signup;
