// TODO: FOOTER
import { Link } from "preact-router";
import { Logo } from "./Logo";

function Footer() {
  return (
    <>
      <hr class="border-emerald-400 border-[1px] " />
      <nav class="flex flex-col items-center pt-4 pb-1 bg-transparent text-emerald-400">
        <Link class="flex flex-col items-center" href="/">
          <Logo height="50" width="50" />
          <p class="py-2 text-lg">Celestial Explorer</p>
        </Link>
        <div class="text-sm space-x-6 pt-2 text-white">
          <Link class="hover:text-emerald-400" href="/launches">
            Launch
          </Link>
          <Link class="hover:text-emerald-400" href="/upcoming">
            Upcoming
          </Link>
          <Link class="hover:text-emerald-400" href="/history">
            History
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Footer;
