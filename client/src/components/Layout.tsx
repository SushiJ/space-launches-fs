import Navbar from "./Navbar";

function Layout({ children }: { children: any }) {
  return (
    <div className="bg-gray-900 h-auto">
      <header className="bg-gray-900 text-gray-100 max-w-6xl mx-auto">
        <Navbar />
      </header>
      <div className="max-w-6xl mx-auto pb-4 h-auto">{children}</div>
    </div>
  );
}

export default Layout;
