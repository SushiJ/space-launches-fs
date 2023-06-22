import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div class="flex flex-col items-center mt-28">
        <div class="text-2xl text-gray-100">
          <h1 class="mt-6 text-center text-lg">
            Celestial Explorer
          </h1>
          <h1 class="mt-4 max-w-sm text-center text-3xl bg-gradient-to-br from-emerald-400 to-gray-100 bg-clip-text text-transparent">Your Virtual Space Launch Control Center</h1>
        </div>
        <p class="max-w-3xl text-gray-100 mt-14 text-xl">
          A web application designed to provide users a tool for tracking and managing space launches. This application that keeps you informed about past private launches & past SpaceX launches and gives you the ability to cancel launches with click of a button.
        </p>
        <a href="/launches" class="bg-gradient-to-br from-emerald-400 to-gray-100 bg-clip-text text-transparent p-4 rounded-sm text-xl border-emerald-400 border-2 my-16">Schedule a launch</a>
      </div>
    </Layout>
  )
}

export default Home;
