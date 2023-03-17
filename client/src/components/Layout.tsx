import Navbar from "./Navbar";

function Layout({ children }: { children: any }) {
  return (
    <div className="h-screen bg-gray-900">
      <header className="bg-gray-900 text-gray-100 max-w-6xl mx-auto">
        <Navbar />
      </header>
      <div className="max-w-6xl mx-auto bg-gray-900">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
