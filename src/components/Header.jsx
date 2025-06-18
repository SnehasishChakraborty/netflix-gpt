import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe()
  }, []);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="fixed z-30 w-screen px-6 py-4 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt=""
      />
      {user && (
        <div className="flex">
          <img className="w-12 h-12 my-2 mx-1" src={user.photoURL} alt="" />
          <div className=" my-2 mx-1">
            <p className="text-white">{user.displayName}</p>
            <p
              onClick={handleClick}
              className="font-bold text-white cursor-pointer hover:underline"
            >
              Sign Out
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
