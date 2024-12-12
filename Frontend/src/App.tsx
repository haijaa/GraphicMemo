import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SingleComic from "./pages/SingleComic";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";

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
