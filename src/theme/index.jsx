import React, { useEffect, useState } from 'react';
import './css/style.css';
import './css/theme.css';
import WhiteLogo from './images/white.png';
import BlackLogo from './images/black.png';

const Theme = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);
  useEffect(() => {
    console.log(darkTheme);
  }, [darkTheme]);
  return (
    <>
      <header
        className={`${
          darkTheme ? 'dark_theme' : 'bg-gray-300'
        } flex justify-between items-center px-10 py-2`}
      >
        <img
          className="w-20"
          src={darkTheme ? WhiteLogo : BlackLogo}
          alt="Amazon"
        />
        <nav className="flex justify-between items-center">
          <a href="# " className="block list-none px-2 mx-1">Home</a>
          <a href="# " className="block list-none px-2 mx-1">Blog</a>
          <a href="# " className="block list-none px-2 mx-1">About</a>
          <a href="# " className="block list-none px-2 mx-1">Contact</a>
          <a href="# " onClick={toggleTheme} className="block list-none px-2 mx-1">
            {darkTheme ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </a>
        </nav>
      </header>
      <section className={`${darkTheme ? 'dark_theme' : 'bg-gray-100'} flex flex-col items-center justify-center w-full h-screen`}>
      <div className={`p-5 m-20 rounded-full cursor-pointer ${!darkTheme ? 'bg-gray-400' : 'dark_theme'}`}>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id numquam
          accusamus debitis esse nulla laudantium illo. Animi, eligendi hic
          distinctio asperiores impedit qui, saepe eius libero nemo doloribus
          unde? Quisquam.
        </p>
     </div>
      </section>
    <section className={`${!darkTheme ? 'bg-gray-200' : 'dark_theme'} flex flex-col items-center justify-center w-full bg-gray-200 h-screen`}>
     <div className={`p-5 m-20 rounded-full cursor-pointer rounded-full  ${!darkTheme ? 'bg-gray-400' : 'dark_theme'}`}>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id numquam
          accusamus debitis esse nulla laudantium illo. Animi, eligendi hic
          distinctio asperiores impedit qui, saepe eius libero nemo doloribus
          unde? Quisquam.
        </p>
     </div>
      </section>
    </>
  );
};

export default Theme;