import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }: { children: any }) {
  return (
    <div className="mx-auto h-[90vh] bg-mars-lighter/50 antialiased selection:bg-mars-base selection:text-mars-lighter">
      <div className="mx-auto flex h-full max-w-xl flex-col p-4">
        <Navbar />
        <div className="mx-auto flex flex-1 items-center pb-4">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
