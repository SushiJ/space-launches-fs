// TODO: FOOTER
import { Link } from "preact-router";
import { HistoryIcon, LaunchIcon, UpcomingIcon } from "./Icons";
import { Logo } from "./Logo";

function Footer() {
  return (
    <>
      <hr class="border-emerald-400 border-[1px]" />
      <nav className="flex items-center py-8 bg-transparent mx-auto">
        <Link className="flex items-center space-x-4 text-2xl" href="/">
          <Logo />
        </Link>
        <div className="text-2xl">
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
    </>
  );
}

export default Footer;
