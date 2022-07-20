import Navbar from "./Components/Navbar.js";
import './App.css';
import LeftBar from "./Components/LeftBar.js";
import SingnIn from "./Components/SingnIn.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Navbar/>
        <LeftBar/>
        <SingnIn/>
    </div>
  );
}

export default App;
