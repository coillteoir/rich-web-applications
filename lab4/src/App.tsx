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
    <div className="bg-orange-400 h-full">
      <h1 className="text-5xl">Rewrite the world in Rust</h1>
      <h2 className="text-2xl">Choose a github repo to rewrite in rust</h2>
      {userin}
      <button
        className="rounded-lg border-black border-2"
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
            className={"rounded-lg border-2 border-black w-10 h-10"}
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
