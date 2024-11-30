import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(email, "\n", password);
  };

  return (
    <div className="w-full max-w-xs login-body">
      <form className="bg-neutral-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-100 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded 
            w-full py-2 px-3 text-gray-700 leading-tight 
            focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-100 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border 
            border-red-500 rounded w-full py-2 px-3 
            text-gray-700 mb-3 leading-tight 
            focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="******************"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 
            text-white font-bold py-2 px-4 rounded 
            focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a
            className="inline-block align-baseline font-bold 
            text-sm text-blue-500 hover:text-blue-800"
            href="https://"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
