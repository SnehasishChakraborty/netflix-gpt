import { useRef, useState } from "react";
import Header from "./Header";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [nameErr, setNameErr] = useState(null);
  const [userErr, setUserErr] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleForm = () => {
    setUserErr(null);
    setIsSignInForm(!isSignInForm);
  };

  const handleForm = () => {
    let nameError = null;
    if (!isSignInForm) {
      nameError = validateName(name.current.value);
      setNameErr(nameError);
    }
    const emailError = validateEmail(email.current.value);
    const passwordError = validatePassword(password.current.value);

    if (!isSignInForm) setNameErr(nameError);
    setEmailErr(emailError);
    setPasswordErr(passwordError);

    if (emailError !== null || passwordError !== null || nameError !== null)
      return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          updateProfile(userCredential.user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR ,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              setUserErr(null);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setUserErr(errorCode + " - " + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setUserErr(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setUserErr(null);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setUserErr(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute z-10 p-12 mx-auto my-36 rounded-lg w-3/12 left-0 right-0 bg-black/70"
      >
        <h1 className="text-white text-2xl font-bold py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="py-4 px-4 my-4 w-full bg-gray-700 text-white rounded-lg"
            type="text"
            placeholder="Full Name"
          />
        )}
        <p className="text-red-500 font-bold py-1 px-2">{nameErr}</p>
        <input
          ref={email}
          className="py-4 px-4 my-4 w-full bg-gray-700 text-white rounded-lg"
          type="email"
          placeholder="Email Address"
        />
        <p className="text-red-500 font-bold py-1 px-2">{emailErr}</p>
        <input
          ref={password}
          className="py-4 px-4 my-4 w-full bg-gray-700 text-white rounded-lg"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold py-1 px-2">{passwordErr}</p>
        <button
          className="py-4 px-2 my-4 w-full bg-red-700 rounded-lg text-white font-bold cursor-pointer"
          onClick={handleForm}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white cursor-pointer hover:underline"
          onClick={toggleForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up Now."
            : "Already Registered? Sign in Now."}
        </p>
        {userErr && (
          <p className="text-red-500 font-bold py-1 px-2">{userErr}</p>
        )}
      </form>
      <img
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src={BG_IMG}
        alt=""
      />
    </>
  );
};

export default Login;
