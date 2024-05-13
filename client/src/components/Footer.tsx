// TODO: FOOTER
import { Link } from "preact-router";
import { Logo } from "./Logo";

function Footer() {
  return (
    <>
      <nav class="flex flex-col items-center bg-mars-base pt-4 pb-1 text-mars-lighter">
        <Link class="flex flex-col items-center" href="/">
          <Logo height="50" width="50" />
          <p class="py-2 text-sm lg:text-lg">Celestial Explorer</p>
        </Link>
        <div class="space-x-6 pt-2 text-sm">
          <Link class="" href="/launches">
            Launch
          </Link>
          <Link class="" href="/upcoming">
            Upcoming
          </Link>
          <Link class="" href="/history">
            History
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Footer;
