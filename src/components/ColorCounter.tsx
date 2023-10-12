import { useState } from "react";
function ColorCounter() {
//   const [buttonText, setButtonText] = useState("");

//   const handleButtonClick = (button: string) =>
//     setButtonText(button + " was pressed");

  const Counter = () => {
    const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex-container btn btn-outline-primary">
        <button
          type="button"
          key="red"
          onClick={() =>{setCount(count+1)}}
        >Red</button>
      </div>
      <p>You have pressed Red {count} times</p>
    </>
  );
}
export default ColorCounter;
