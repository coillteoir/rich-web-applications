import React from "react";
import Note from "./Note";

function App() {
  const colours = [
    "#94a3b8",
    "#f87171",
    "#fbbf24",
    "#4ade80",
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#fb7185",
  ];
  const [inputText, setInputText] = React.useState<string>("");

  const [data, setData] = React.useState<{ text: string; colour: string }[]>(
    [],
  );
  const [colour, setColour] = React.useState<string>(colours[0]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const userin: any = <input type="text" onChange={handleChange} />;
  return (
    <div className="bg-green-100 h-full">
      <h1 className="text-3xl">To-Do App</h1>
      {userin}
      <button
        className="rounded"
        style={{ background: colour }}
        onClick={() => {
          if (inputText.length !== 0) {
            setData(data.concat({ text: inputText, colour: colour }));
          }
        }}
      >
        Submit
      </button>
      <div className="flex">
        {colours.map((x, i) => (
          <div
            className={"w-10 h-10"}
            style={{ background: x }}
            onClick={(e: any) => {
              setColour(colours[i]);
            }}
          ></div>
        ))}
      </div>

      <div>
        {data.map((_, id) => (
          <Note data={{ id, data, setData }} />
        ))}
      </div>
    </div>
  );
}

export default App;
