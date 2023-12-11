"use client";
export const Question1 = () => {
  return (
    <div className="flex flex-col items-center gap-[30px]">
      <div className="flex flex-col items-center gap-[30px]">
        <h1 className="bg-white">Multiply</h1>
        <div style={{ display: "flex", gap: "30px" }}>
          {data.map((user) => (
            <button style={{ border: "1px solid"}}></button>
            ))}
        </div>
      </div>
    </div>
  );
};


const data = [
  { id: 1, name: `` },
  { id: 2, name: `` },
  { id: 3, name: `` },
  { id: 4, name: `` }
];