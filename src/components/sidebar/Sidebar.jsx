import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, fs } from "../../config/Config";
import { FaTimes } from "react-icons/fa";

const navlink = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();

  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data().FullName);
            })
            .catch(error => {
              console.error("Error fetching user data:", error);
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }

  const user = GetCurrentUser();

  const [totalProducts, setTotalProducts] = useState(0);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart " + user.uid).onSnapshot((snapshot) => {
          const qty = snapshot.docs.length;
          setTotalProducts(qty);
        });
      }
    });
  }, []);

  return (
    <div
    className={`fixed z-20 left-0 top-0 bg-gray-800 w-64 h-full overflow-y-auto ease-in-out transition-all duration-300 transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}
    >
      <div
        className="absolute top-3 right-4 bg-transparent border-none text-xl cursor-pointer outline-none"
        onClick={toggle}
      >
        <FaTimes className="text-black" />
      </div>
      <div className="grid grid-cols-1 grid-rows-3 gap-y-4 text-center mt-20">
        {navlink.map((item) => (
          <Link
            className="rounded-md bg-black py-2 px-5 text-white outline-none transition duration-200 ease-in-out hover:bg-white hover:text-black"
            to={item.path}
            key={item.name}
            onClick={toggle} // Close sidebar when link is clicked
          >
            {item.name}
          </Link>
        ))}
      </div>
      <nav className="mr-[1.8rem] mt-[2rem]">
        {user ? (
          <Link
            className="rounded-md bg-green-500 py-2 px-6 text-white outline-none transition duration-200 ease-in-out hover:bg-white hover:text-black"
            to="/"
            onClick={() => {
              auth.signOut();
              navigate("/signin");
            }}
          >
            LogOut
          </Link>
        ) : (
          <Link
            className="rounded-md bg-black py-2 px-5 text-white outline-none transition duration-200 ease-in-out hover:bg-white hover:text-black"
            to="/signin"
            onClick={toggle} // Close sidebar when link is clicked
          >
            Sign In
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
