import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SingleComic from "./pages/SingleComic";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <SingleComic />, path: "/comics/:id" },
      ],
      element: (
        <>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">
              <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="light"
                data-cy="success-toast"
              />
              <Outlet />
            </main>
            <Footer />
          </div>
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
