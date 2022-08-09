import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites"
import EditRecipe from "./components/CRUD/EditRecipe";
import NewRecipe from './components/CRUD/NewRecipe'
import { Route, Routes} from "react-router-dom";
import {GlobalProvider} from './context/GlobalState'


function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/favourites" element={<Favourites />}/>
            <Route path="/new" element={<NewRecipe />}/>
            <Route path="/edit/:id" element={<EditRecipe />}/>
            </Routes>
        </div>
        <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;
