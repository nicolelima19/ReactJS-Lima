import Navbar from "./components/Navbar"
import Carrosel from "./components/Carrosel"
import ItemListContainer from "./components/ItemListContainer"
import Cupones from "./components/Cupones"
import Locales from "./components/Locales"
import Novedades from "./components/Novedades"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>
      <Navbar />
      <Carrosel />
      <ItemListContainer  greeting={"Sitio en mantenimiento."}/>
      <Cupones />
      <Locales />
      <Novedades />
      <Footer />
    </div>
  )
}

export default App;
