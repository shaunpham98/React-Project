import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites"
import { Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/favourites" element={<Favourites />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
