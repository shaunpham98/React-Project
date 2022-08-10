import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites"
import Create from "./components/CRUD/Create";
import Edit from "./components/CRUD/Edit";

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
            <Route path="/create" element={<Create />}/>
            <Route path="/edit" element={<Edit />}/>
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
