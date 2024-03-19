//import logo from './logo.svg';


import Enhancecomment from "./components/comment";
import Enhancelike from "./components/likeComponent";
import Enhanceshare from "./components/share";

//import './App.css';
function App() {
  return (
    <div className="App">
         <Enhancelike/>
         <Enhancecomment/>
         <Enhanceshare/>
    </div>
  );
}

export default App;
