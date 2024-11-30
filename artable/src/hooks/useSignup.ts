// import { useContext } from "react";
import { useAuthcontext } from "./useAuthContext";
import { useState } from "react";

const uri = "http://localhost:3000/";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch }: any = useAuthcontext();

  const signup = async (
    first_name: string,
    last_name: string,
    email: string,
    password: string
  ) => {
    setIsLoading(true);
    setError(null);

    const req = await fetch(uri, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ first_name, last_name, email, password }),
    });

    const res = await req.json();

    if (!res.ok) {
      setIsLoading(false);
      setError(res.error);
    }

    // Save the user to local starage (Browser)
    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(res));

      // Update the auth context
      dispatch({ type: "LOGIN" });
      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
