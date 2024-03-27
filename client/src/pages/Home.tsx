import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div class="flex flex-col items-center mt-28">
        <div class="text-2xl text-gray-100">
          <h1 class="my-6 text-center text-xl">Celestial Explorer</h1>
          <h1 class="pt-4 mt-4 max-w-lg text-center text-4xl bg-gradient-to-br from-emerald-400 to-gray-100 bg-clip-text text-transparent">
            Your Virtual Space Launch Control Center
          </h1>
        </div>
        <p class="max-w-4xl text-gray-100 mt-14 py-10 text-2xl text-center">
          A web application designed to provide users a tool for tracking and
          managing space launches. This application keeps you informed about
          past private launches & past SpaceX launches and gives you the ability
          to cancel launches with click of a button.
        </p>
        <a
          href="/launches"
          class="bg-gradient-to-br from-emerald-400 to-gray-100 bg-clip-text text-transparent p-4 rounded-sm text-xl border-emerald-400 border-2 my-16"
        >
          Schedule a launch
        </a>
      </div>
    </Layout>
  );
}

export default Home;
