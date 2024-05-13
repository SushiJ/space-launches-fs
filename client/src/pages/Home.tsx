import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div class="flex flex-col items-center">
        <div>
          <h1 class="text-center text-2xl text-mars-base">
            Celestial Explorer
          </h1>
          <h1 class="prose mx-10 mt-4 max-w-lg bg-gradient-to-br from-mars-base/90 via-mars-light to-mars-gray/80 bg-clip-text pt-4 text-center text-xl text-transparent lg:mx-auto">
            Your Virtual Space Launch Control Center
          </h1>
        </div>
        <p class="prose mt-8 px-4 text-center text-mars-base/80 lg:mt-14 lg:py-10">
          A web application designed to provide users a tool for tracking and
          managing space launches. This application keeps you informed about
          past private launches & past SpaceX launches and gives you the ability
          to cancel launches with click of a button.
        </p>
        <a
          href="/launches"
          class="mt-8 rounded-sm border-2 border-mars-base/20 bg-gradient-to-br from-mars-base/90 via-mars-light to-mars-gray/80 bg-clip-text p-4 text-xl text-transparent lg:my-16"
        >
          <div class="back flex h-full w-full items-center justify-center">
            <p
              class="
             bg-gradient-to-br from-mars-base/90 via-mars-light to-mars-gray/80 bg-clip-text text-sm text-transparent"
            >
              Schedule a launch
            </p>
          </div>
        </a>
      </div>
    </Layout>
  );
}

export default Home;
