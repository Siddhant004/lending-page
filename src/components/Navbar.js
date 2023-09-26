import React from "react";

function Navbar() {
  return (
    <div>
      <header className="sticky top-0 z-10">
        <div className="wrapper flex justify-between px-9 pt-6 ">
          <div className="lftcon">
            <p>
              MY<span className="text-[#31de79]">LAB</span>
            </p>
          </div>
          <div className="rgtcon"></div>
          <nav>
            <ul className="flex gap-8 ">
              <a>
                <span className="text-[#31de79]">Home</span>
              </a>
              <a>Services</a>
              <a>Projects</a>
              <a>About</a>
              <a>Testimony</a>
              <a>Blog</a>
              <a>Contact</a>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
