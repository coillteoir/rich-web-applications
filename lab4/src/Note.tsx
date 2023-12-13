import React from "react";

let repodata: { lang: string; lines: number } = { lang: "", lines: 0 };

const getRepoData = (repo: string): void => {
  fetch("https://api.github.com/repos/" + repo + "/languages")
    .then((response) => {
      if (response.status === 200) return response.json();
      else throw new Error("fetch failed");
    })
    .then((data) => {
      const toplang = Object.keys(data).sort((a: any, b: any) => b - a)[0];
      repodata = { lang: toplang, lines: data[toplang] / 40 };
    })
    .catch((error) => console.error(error));
};

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

  getRepoData(properties.data[properties.id].text);

  return (
    <div
      className=" border-2 border-black 
      rounded-lg
      w-auto"
      style={{ background: properties.data[properties.id].colour }}
    >
      <span className="text-black">
        {(() =>
          repodata.lang !== ""
            ? "To rewrite " +
              properties.data[properties.id].text +
              " in rust, you'll need to rewrite " +
              repodata.lines +
              " lines of " +
              repodata.lang +
              " in Rust!"
            : "this repo does not exist but good luck")()}
      </span>
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
                    if (i === properties.id) getRepoData(newText);
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
