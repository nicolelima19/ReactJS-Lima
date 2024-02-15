import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Cupones from "./components/Cupones"
import Locales from "./components/Locales"
import Novedades from "./components/Novedades"
import Footer from "./components/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Error404 from "./components/Error404"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart"
import CartContextProvider from "./components/context/CartContext"

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Cupones />
        <Locales />
        <Novedades />
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
