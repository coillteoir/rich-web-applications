import React from "react";

export default function Note(props: any) {
  const [data, setData] = React.useState<string>(props.data);
  return (
    <>
      <div className="flex items-center justify-center bg-yellow-500 w-auto rounded">
        <p className="text-white font-bold text-l">{data}</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </>
  );
}
