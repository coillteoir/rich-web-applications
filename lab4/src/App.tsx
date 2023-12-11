import React from "react";
import "./App.css";
import Note from "./Note";

function App() {
  const [data, setData] = React.useState<string[]>([]);
  const [inputText, setInputText] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const userin: any = <input type="text" onChange={handleChange} />;
  return (
    <div
      className="w-full h-full
    flex 
    items-center justify-center 
    bg-black"
    >
      <>
        <h1 className="text-white text-5xl font-bold top-0">To-Do App</h1>
        {userin}
        <button
          className="bg-green-100"
          onClick={() => {
            setData(data.concat(inputText));
          }}
        >
          Submit
        </button>
        <ul>
          {data.map((x) => (
            <li>
              <Note data={x} />
            </li>
          ))}
        </ul>
      </>
    </div>
  );
}

export default App;
