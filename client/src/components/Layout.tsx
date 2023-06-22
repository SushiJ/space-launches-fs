import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }: { children: any }) {
  return (
    <div className="bg-gray-900 bg-transparent h-screen flex flex-col max-w-6xl mx-auto">
      <Navbar />
      <div className="max-w-6xl mx-auto pb-4 flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
