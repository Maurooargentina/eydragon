import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a EyDragon" /> 
    </div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>EyDragon</h1>
      <div className="card">
      </div>
    </>
  )
}

export default App
