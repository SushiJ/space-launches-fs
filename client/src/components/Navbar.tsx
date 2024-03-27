import { Link } from "preact-router";
import { HistoryIcon, LaunchIcon, UpcomingIcon } from "./Icons";
import { Logo } from "./Logo";

function Navbar() {
  return (
    <header className="bg-gray-900 bg-transparent text-gray-100">
      <nav className="flex items-center py-8 justify-between bg-transparent">
        <Link
          className="flex items-center space-x-4 text-2xl hover:text-emerald-400"
          href="/"
        >
          <Logo />
          <h1 class="text-2xl ">C.E.</h1>
        </Link>
        <div className="text-2xl flex items-center space-x-4">
          <Link
            className="flex items-center hover:text-emerald-400"
            href="/launches"
          >
            <span className="mx-1">
              <LaunchIcon />
            </span>
            Launch
          </Link>
          <Link
            className="flex items-center hover:text-emerald-400"
            href="/upcoming"
          >
            <span className="mx-1">
              <UpcomingIcon />
            </span>
            Upcoming
          </Link>
          <Link
            className="flex items-center hover:text-emerald-400"
            href="/history"
          >
            <span className="mx-1">
              <HistoryIcon />
            </span>
            History
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
