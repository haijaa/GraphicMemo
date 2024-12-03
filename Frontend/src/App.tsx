import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
