import React from "react";

export default function Note(props: {
  data: {
    id: number;
    data: { text: string; colour: string }[];
    setData: React.Dispatch<
      React.SetStateAction<{ text: string; colour: string }[]>
    >;
  };
}) {
  const properties = props.data;

  return (
    <div
      className=" border-2 border-black 
      rounded-lg
      w-auto"
      style={{ background: properties.data[properties.id].colour }}
    >
      <span className="text-black">{properties.data[properties.id].text}</span>
      <div>
        <button
          className="bg-white rounded-lg px-8"
          onClick={() => {
            const newText = prompt(
              "Edit your text",
              properties.data[properties.id].text,
            );
            newText !== "" && newText !== null
              ? properties.setData(
                  properties.data.map((x, i) => {
                    if (i === properties.id)
                      return { text: newText, colour: x.colour };
                    return x;
                  }),
                )
              : console.log("no text entered");
          }}
        >
          Edit
        </button>
        <button
          className="bg-white rounded-lg px-8"
          onClick={() => {
            properties.setData(
              properties.data.filter((_, i) => i !== properties.id),
            );
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
