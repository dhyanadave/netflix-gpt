import React, { useEffect, useRef, useState } from "react";
import netflixUser from "../assets/netflixUser.jpg";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import downArrow from "../assets/downArrow.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

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

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    console.log("first");
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-full  px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      {/* 
      bg-black sm: bg-blue-900 md: bg-green-900
      bg-black => Default for mobile
      sm: bg-blue-900 => For Tab
      md: bg-green-900 => for Desktop
      */}
      {/* bg gradient to bottom from black*/}
      <img className="w-40 mx-auto md:mx-0" src={LOGO} defaultValue={"Logo"} />
      {user && (
        <div className="flex p-2 items-center">
          {showGptSearch && (
            <select
              className="bg-gray-800 text-white px-4 py-2 m-2 rounded-lg outline-none hover:bg-gray-700 transition duration-200 ease-in-out cursor-pointer shadow-md"
              onChange={handleLanguageChange}
            >
              {/* <option value={"en"}>English</option>
            <option value={"hi"}>Hindi</option>
            <option value={"es"}>Spanish</option> */}
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            // className="bg-purple-800 text-white px-4 py-2 rounded-lg mx-4 my-2"
            className="bg-gray-800 text-white px-4 py-2 mr-2 rounded-lg outline-none hover:bg-gray-700 transition duration-200 ease-in-out cursor-pointer shadow-md"

            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            src={user.photoURL}
            className="w-10 h-10 rounded-lg"
            alt="User Img"
          />
          {/* <button onClick={handleSignOut} className="font-bold text-white">
            Sign out
          </button> */}
          <button onClick={toggleDropdown}>
            <img
              src={downArrow}
              alt="downArrow"
              className="w-5 h-5 ml-2 rounded cursor-pointer"
            />
          </button>
        </div>
      )}

      {isOpen && (
        <div className="absolute mt-12 right-0  mr-10 w-56 rounded-md shadow-lg bg-black text-white z-50">
          <div className="py-1">
            <div className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
              👶 Children
            </div>
            <div className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
              ✏️ Manage Profiles
            </div>
            <div className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
              🔄 Transfer Profile
            </div>
            <div className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
              👤 Account
            </div>
            <div className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
              ❓ Help Centre
            </div>
            <hr className="border-gray-700 my-1" />
            <div
              onClick={handleSignOut}
              className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
            >
              🚪 Sign out of Netflix
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
