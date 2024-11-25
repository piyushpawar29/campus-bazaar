import Header from "./header";
import Footer from "./footer";
import React from "react";
// Layout Component with Tailwind CSS
export default function Layout({ children }) {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="h-20 bg-gray-800">
          <Header />
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="h-20 bg-gray-800">
          <Footer />
        </footer>
      </div>
    );
  }