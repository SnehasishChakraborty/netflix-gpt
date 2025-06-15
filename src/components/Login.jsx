import { useRef, useState } from "react"
import Header from "./Header"
import { validateEmail, validatePassword, validateName } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [nameErr, setNameErr] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleForm = () => {
    console.log(name, email, password)
    if(!isSignInForm) setNameErr(validateName(name.current.value))
    setEmailErr(validateEmail(email.current.value))
    setPasswordErr(validatePassword(password.current.value))
  }

  return (
    <>
      <Header />
      <form onSubmit={(e) => e.preventDefault()} className="absolute z-10 p-12 mx-auto my-36 rounded-lg w-3/12 left-0 right-0 bg-black/70">
        <h1 className="text-white text-2xl font-bold py-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {
          !isSignInForm && <input ref={name} className="py-4 px-4 my-4 w-full bg-gray-700 text-white rounded-lg" type="text" placeholder="Full Name" />
        }
        <p className="text-red-500 font-bold py-1 px-2">{nameErr}</p>
        <input ref={email} className="py-4 px-4 my-4 w-full bg-gray-700 text-white rounded-lg" type="email" placeholder="Email Address" />
        <p className="text-red-500 font-bold py-1 px-2">{emailErr}</p>
        <input ref={password} className="py-4 px-4 my-4 w-full bg-gray-700 text-white rounded-lg" type="password" placeholder="Password" />
        <p className="text-red-500 font-bold py-1 px-2">{passwordErr}</p>
        <button className="py-4 px-2 my-4 w-full bg-red-700 rounded-lg text-white font-bold cursor-pointer" onClick={handleForm}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <span className="text-white cursor-pointer hover:underline" onClick={toggleForm}>
          {isSignInForm ? "New to Netflix? Sign up Now." : "Already Registered? Sign in Now."}
        </span>
      </form>
      <img className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"
      alt="" />
    </>
  )
}

export default Login