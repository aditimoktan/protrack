function Navbar() {
  return (
    <>
      <div>
        <header className="bg-pink-400 flex w-full py-4 text-sm">
          <nav className="text-white mx-auto w-full px-4 flex justify-between items-center">
            <div className="relative items-center">
              <a className="font-bold text-xl no-underline" href="#">
                ProTrack
              </a>
            </div>
            <ul className="flex space-x-8">
              <li>
                <a className="hover:underline" href="#">
                  Dashboard
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Projects
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Tasks
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Profile
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Navbar;
