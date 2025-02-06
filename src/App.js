import './App.css';
import LeftSide from './Componant/leftSide';
import Middle from './Componant/middle';
import RightSide from './Componant/rightSide';


<title>Instagram</title>
function App() {
  return (
    
    <div className="App">
      
     
     <div className="leftside">
       <LeftSide/>
     </div>
     <div className="middleside">
        <Middle/>
     </div>
     <div className="rightside">
        <RightSide/>
     </div>


    </div>
  );
}

export default App;
