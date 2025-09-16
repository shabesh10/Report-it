import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "./components/navbar/Navbar";

function App() {
  const items = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen bg-[#F0D6EB] dark:bg-neutral-900">
        {/* Navbar wrapper */}
        <Navbar>
          {/* Desktop Nav */}
          <NavBody>
            <NavbarLogo />
            <div className="hidden md:flex gap-6">
              {items.map((item, idx) => (
                <NavLink
                  key={idx}
                  to={item.link}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md font-medium ${
                      isActive ? "text-pink-700 underline" : "text-black dark:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <NavbarButton href="#" variant="primary">
              Sign Up
            </NavbarButton>
          </NavBody>

          {/* Mobile Nav */}
          <MobileNav visible={mobileOpen}>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
              />
            </MobileNavHeader>
            <MobileNavMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
              {items.map((item, idx) => (
                <NavLink
                  key={idx}
                  to={item.link}
                  className={({ isActive }) =>
                    `block w-full py-2 ${
                      isActive ? "text-pink-700 font-semibold" : "text-black dark:text-white"
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <NavbarButton href="#" variant="primary">
                Sign Up
              </NavbarButton>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>

        {/* Page content */}
        <main className="mt-32 p-8">
          <Routes>
            <Route path="/" element={<h1 className="text-4xl font-bold">Home Page</h1>} />
            <Route path="/about" element={<h1 className="text-4xl font-bold">About Page</h1>} />
            <Route path="/contact" element={<h1 className="text-4xl font-bold">Contact Page</h1>} />
            <Route path="/blog" element={<h1 className="text-4xl font-bold">Blog Page</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;