import { useState } from "react";
import Title from "../components/Title";

function Login() {
  const [currentState, setCurrentState] = useState("SIGN IN");
  const titleValue = currentState.split(" ");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 "
    >
      <div className="mb-4 text-4xl sm:text-5xl">
        <Title text1={titleValue[0]} text2={titleValue[1]} />
      </div>
      {currentState === "SIGN IN" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800 outline-none"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 outline-none"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 outline-none"
        placeholder="Password"
        required
      />
      <div className="flex justify-between w-full text-sm mt-[-8px]">
        <p className="border-b border-white cursor-pointer hover:border-black ">
          Forgot Your Password?
        </p>
        {currentState === "SIGN IN" ? (
          <p
            onClick={() => setCurrentState("SIGN UP")}
            className="border-b border-white cursor-pointer hover:border-black "
          >
            Don&apos;t have an account? Sign Up.
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("SIGN IN")}
            className="border-b border-white cursor-pointer hover:border-black "
          >
            Already have an account? Sign In.
          </p>
        )}
      </div>
      <button className="w-full py-3 mt-6 font-light text-white bg-black">
        {currentState === "SIGN IN" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;
