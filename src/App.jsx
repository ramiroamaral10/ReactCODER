import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


const App = () => {
  return (
    <div className="container-fluid">
      <NavBar titulo="BOOKS STORE" />
      <ItemListContainer />
      
    </div>
  )
}

export default App;