import { render } from "preact";
import Router from "preact-router";
import "./index.css";
import HistoryPage from "./pages/History";
import HomePage from "./pages/Home";
import LaunchPage from "./pages/Launch";
import UpcomingPage from "./pages/Upcoming";

const Main = () => (
  <Router>
    {/* @ts-expect-error */}
    <HomePage path="/" />
    {/* @ts-expect-error */}
    <LaunchPage path="/launches" />
    {/* @ts-expect-error */}
    <UpcomingPage path="/upcoming" />
    {/* @ts-expect-error */}
    <HistoryPage path="/history" />
  </Router>
);
render(<Main />, document.getElementById("app") as HTMLElement);
