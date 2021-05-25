import { useState, useEffect } from "react"
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [currentValue, setCurrentValue] = useState("");

  const deleteItem = (itemIndex) => {
    let newList = list; 
    newList[itemIndex] = undefined;
    setList([...newList]);
  };

  const updateList = () => {
    const newList = list; 
    newList.push(currentValue);
    setList(newList);
    setCurrentValue("");
    console.log(list)
  };

  return (
    <div>
      
      <input 
        placeholder="Shopping" 
        value={currentValue}
        onChange={(change)=>{
          setCurrentValue(change.target.value);
        }}></input>
      <button onClick={updateList}>Add</button>
      
      
      {list.map((item, index)=>{
        if(item){
          return (
            <div key={Math.random()}>
              <div>{item}</div>
              <button onClick={()=>deleteItem(index)}>delete</button>
            </div>
            )
        }
      })}

    </div>
  );
}

export default App;
