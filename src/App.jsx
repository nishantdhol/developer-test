import React, { useState }  from 'react';
import {addItem, deleteItem} from './redux/actions';
import { useDispatch ,  useSelector} from "react-redux";

export default function App() {

  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const items = useSelector(state => state.wishList) || [];

  const handleInputChange = event => {
    return setInput(event.target.value);
  };

  const handleAddItem = () => {
    if(input && input.trim().length && items.indexOf(input) === -1){
      dispatch(addItem(input));
      setInput("");
    }
    else if(items.indexOf(input) !== -1)  {
      alert("Item already in the list.")
      setInput("");
    }
    else {
      alert("Enter Item name.")

    }
  };

  const handleSubmit = () => {
    if (items.length > 0){
      items.forEach( item =>
      dispatch(deleteItem(item))
      )
      setInput("");
      alert("Wish List Submitted to Santa");
    }
    else {
      alert("Add items before submitting.");
    }
  };

  const handleDelete = (item) => {
      dispatch(deleteItem(item));
  }


  return (

    <div className = "main-box" >

      <h1>MY WISHLIST</h1>

      <div className="display-box">

        {items.length > 0 && (
          <div>
          {items.map((item, idx) => (
              <div key={idx} onClick={() => handleDelete(item)} > {item}
              </div>
          ))}
          </div>
        )}

      </div>

      <input className = "input-box" id="input" placeholder="Add item..." value={input} onChange={handleInputChange} />

      <button className="button-add-item" onClick={handleAddItem} >
        Add
      </button>

      <button className="button-submit" onClick={handleSubmit} >
        Submit
      </button>

    </div>

  );
}
