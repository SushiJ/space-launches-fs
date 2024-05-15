import { Link } from "preact-router";
import { HistoryIcon, LaunchIcon, UpcomingIcon } from "./Icons";
import { Logo } from "./Logo";

function Navbar() {
  return (
    <header className="text-xs text-mars-base md:text-sm">
      <nav className="flex items-center justify-between lg:py-8">
        <Link
          className="flex items-center space-x-4 hover:text-mars-light"
          href="/"
        >
          <Logo />
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            className="flex items-center hover:text-mars-light"
            href="/launches"
          >
            <span className="mx-1">
              <LaunchIcon />
            </span>
            Launch
          </Link>
          <Link
            className="flex items-center hover:text-mars-light"
            href="/upcoming"
          >
            <span className="mx-1">
              <UpcomingIcon />
            </span>
            Upcoming
          </Link>
          <Link
            className="flex items-center hover:text-mars-light"
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
