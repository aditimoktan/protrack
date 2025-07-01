import { Link } from "react-router-dom";
import profileIcon from "../assets/profileicon.png";


function Navbar() {
  return (
       
<>    
   
<header className="bg-white shadow-md w-full py-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-2">
          <span className="bg-gray-900 rounded-full w-9 h-9 flex items-center justify-center text-white font-bold text-2xl">
            P
          </span>
          <Link
            className="font-extrabold text-2xl  text-gray-700 tracking-wide no-underline"
            to="/home"
          >
            <span> ProTrack</span>
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              className="text-neutral-700 hover:text-violet-600 font-medium transition-colors duration-200 px-3 py-2 rounded hover:bg-violet-100 flex items-center space-x-2
"
              to="/dashboard"
            >
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              className="text-neutral-700 hover:text-violet-600 font-medium transition-colors duration-200 px-3 py-2 rounded hover:bg-violet-100 flex items-center space-x-2
"
              to="/projects"
            >
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              className="text-neutral-700 hover:text-violet-600 font-medium transition-colors duration-200 px-3 py-2 rounded hover:bg-violet-100 flex items-center space-x-2
"
              to="/tasks"
            >
              <span>Tasks</span>
            </Link>
          </li>
          <li>
            <Link
              className="text-neutral-700 hover:text-violet-600 font-medium transition-colors duration-200 px-3 py-2 rounded hover:bg-violet-100 flex items-center space-x-2 "
              to="/profile"
            >
              <img
                src={profileIcon}
                alt="Profile"
                className="w-6 h-6 rounded-full"
              />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Navbar;
