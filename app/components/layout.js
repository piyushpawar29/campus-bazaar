import Header from "./header";
import Footer from "./footer";
import React from "react";
// Layout Component with Tailwind CSS
export default function Layout({ children }) {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="h-14 bg-gray-800">
          <Header />
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className=" bg-gray-800">
          <Footer />
        </footer>
      </div>
    );
  }