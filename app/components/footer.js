import React from "react";
export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-30 border-t">
      <div className="flex items-center justify-center flex-col mt-3">
        
          <a
            href="https://github.com/piyushpawar29/campus-bazaar.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600"
          >
            Campus-Bazaar
          </a>
        
        <p className="text-sm text-gray-500">
          Copyright &copy;2024 All rights reserved
        </p>
        <p className="text-sm text-gray-500 items-end">Developed by Piyush Pawar</p>
      </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2 rounded-full fixed bottom-5 right-5"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      
    </footer>
  );
}
