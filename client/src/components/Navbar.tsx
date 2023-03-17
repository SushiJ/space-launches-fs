import { Link } from "preact-router";
import { HistoryIcon, LaunchIcon, UpcomingIcon } from "./Icons";
import { Logo } from "./Logo";

function Navbar() {
  return (
    <nav className="flex items-center py-4 justify-between">
      <Link className="text-emerald-400" href="/">
        <Logo />
      </Link>
      <div className="text-2xl flex items-center space-x-4">
        <Link
          className="flex items-center hover:text-emerald-400"
          activeClassName=""
          href="/"
        >
          <span className="mx-1">
            <LaunchIcon />
          </span>
          Launch
        </Link>
        <Link
          className="flex items-center hover:text-emerald-400"
          activeClassName=""
          href="/upcoming"
        >
          <span className="mx-1">
            <UpcomingIcon />
          </span>
          Upcoming
        </Link>
        <Link
          className="flex items-center hover:text-emerald-400"
          activeClassName=""
          href="/history"
        >
          <span className="mx-1">
            <HistoryIcon />
          </span>
          History
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
