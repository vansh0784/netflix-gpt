import React, { useRef, useState } from "react";
import { isValidDetailSignUp } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase,set,ref } from "firebase/database";
import { app } from "../utils/firebase";
const db=getDatabase(app);
const AccountCreate = () => {
  const putData=()=>{
    set(ref(db,"users/netflix-gpt"),{
      id:1,
      name:"Vansh",
      age:"21",
    })
  }
  const [message, setMessage] = useState([]);
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const currPassword = useRef();
  const handleSubmit = () => {
    const message = isValidDetailSignUp(
      userName?.current?.value,
      email?.current?.value,
      password?.current?.value,
      currPassword?.current.value
    );
    setMessage(message);
    if (message) return;
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email?.current?.value,
        password?.current?.value)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+""+errorMessage);
        // setMessage({ errorMessage});
      });
  };
  return (
    <div className=" flex justify-evenly items-start">
      <img
        className="w-46 h-24 p-4"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-logo"
      />
      <form className=" w-3/12 my-36 px-4" onSubmit={(e) => e.preventDefault()}>
        <div className="text-black font-bold text-3xl text-left">
          <h1 className="py-1">Welcome back! </h1>{" "}
          <h1 className="py-1">Joining Netflix is </h1>{" "}
          <h1 className="py-1">easy. </h1>
        </div>
        <p className="text-gray-700 py-2 my-2">
          Sign up and you will be watching in no time.
        </p>
        <input
          type="text"
          placeholder="Email your name "
          aria-label="Email or phone number"
          className="py-3 px-2 w-full my-2 border-slate-600 outline-none border rounded-sm"
          ref={userName}
        />
        <input
          type="text"
          placeholder="Email or phone number"
          aria-label="Email or phone number"
          className="py-3 px-2 w-full my-2 border-slate-600 outline-none border rounded-sm"
          ref={email}
        />
        <input
          type="text"
          placeholder="Enter Password"
          aria-label="Email or phone number"
          className="py-3 px-2 w-full my-2 border-slate-600 outline-none border rounded-sm"
          ref={password}
        />
        <input
          type="text"
          placeholder="Confirm Password"
          aria-label="Email or phone number"
          className="py-3 px-2 w-full my-2 border-slate-600 outline-none border rounded-sm"
          ref={currPassword}
        />
        {message ? (
          <p className="text-red-600 font-bold text-xs my-2">{message}</p>
        ) : null}
        <p className="my-2 text-gray-700 text-xs text-center">
          Message and data rates may apply
        </p>
        <button
          className="bg-red-600 my-2 px-3 rounded-sm py-3 text-center w-full font-semibold text-white"
          onClick={handleSubmit}
        >
          Send sign-in code
        </button>
        <h3 className="text-gray-600 text-center">OR</h3>
        <button className="bg-gray-300 text-black my-2 px-3 rounded-sm py-3 text-center w-full font-semibold">
          Use password
        </button>
        <p className="text-xs text-gray-500 my-3">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue-700 px-1 text-xs">Learn more.</span>
        </p>
        {/* <p className='text-white font-bold text-left text-xl my-2 '>Enter Following Details</p>
                <input type="text" className='px-3 py-2 w-full my-3' placeholder='Enter your name' />
                <input type="text" className='px-3 py-2 w-full my-3' placeholder='Enter your name' /> */}
                <button className="text-red-600" onClick={putData}>Put Data</button>
      </form>
      <button className="my-10">
        <a href="/" className="text-black text-right px-8 py-2 font-bold">
          Sign In
        </a>
      </button>

    </div>
  );
};

export default AccountCreate;
