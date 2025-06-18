import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptFlag } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstants";
import { addLang } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt?.gptFlag);
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
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleGPT = () => {
    dispatch(toggleGptFlag());
  };

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

  const handleLang = (e) => {
    dispatch(addLang(e.target.value));
  };

  return (
    <div className="fixed z-30 w-screen px-6 py-4 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src={LOGO} alt="" />
      {user && (
        <div className="flex">
          {gpt && (
            <div className="m-auto">
              <select
                className="flex bg-gray-600 py-2  text-white rounded-lg cursor-pointer"
                onChange={(e) => handleLang(e)}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    className="py-1 bg-gray-500 text-white"
                    key={lang.lang_id}
                    value={lang.lang_id}
                  >
                    {lang.lang_name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            onClick={toggleGPT}
            className="cursor-pointer bg-gray-700 text-white rounded-4xl px-6 mx-8 hover:bg-gray-700/50"
          >
            {!gpt ? "What's on your mind?" : "Wanna go back to browsing?"}
          </button>
          <img className="w-12 h-12 my-2 mx-1" src={user.photoURL} alt="" />
          <div className=" my-2 mx-2">
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
