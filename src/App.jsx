import './App.css'
import List from "./todo/List.jsx";
import From from "./todo/From.jsx";

function App() {

  return (
    <>
        <div className="container">
            <h1 className="text-[50px] font-bold">TODO List Demo App</h1>
            <p className="">Do it now</p>
            <List/>
        </div>
    </>
  )
}

export default App
