import React from 'react';

function Footer() {
  return (
    <footer className="bg-white m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4">
        <hr className="mb-3 border-gray-200"/>
        <p className="text-sm text-gray-500 text-center"
        >2023 - <a
          href="/"
          className="hover:underline">GitHub</a>
        </p>
        <p className="text-sm text-gray-500 text-center"
        >Made with <a
          href="/"
          className="hover:underline">NewsAPI</a></p>
      </div>

    </footer>
  );
}

export default Footer;
