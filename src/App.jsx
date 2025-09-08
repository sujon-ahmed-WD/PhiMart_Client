
import Button from './components/Button';
import FirstComponents from './components/firstComponents'
import List from './components/list';
 
// import './firstComponents'

function App() {
    // const fruits=["Apple","Banana","Orange","Grapes","Mango","Pine Apple"];
    // const citice=["Dhaka","Rajshahi","rongpur","Green"];
    const handleClick=()=>console.log("this this button");
  return (
    <>
     <FirstComponents/>
       {/* <List items={fruits} heading="fruits"/>
       <List items={citice} heading="Cities"/> */}
       <Button items={handleClick} color="info">this not button</Button>
    </>
      
  );
}

export default App
