import { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => setResult(result.concat(e.target.id));

  // Clear all result //
  const clear = () => setResult("");

  // Delete Element by 1 Function //
  const deleteElement = () => setResult(result.slice(0, -1));

  //calculate the result
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("error");
    }
  };

  return (
    <div className="flex flex-col justify-centerflex justify-center items-center h-screen">
      <h1 className="font-bold text-2xl mb-4">Calculator</h1>
      <div className=" w-96 mx-auto bg-black rounded-lg  ">
        <div className="p-3 border-solid">
          <input
            type="text"
            value={result}
            disabled
            className=" w-full mb-4 p-2 text-right border-solid bg-slate-200  pt-2 rounded-md"
          />
        </div>
        <div className="button grid grid-cols-3 gap-2 p-2">
          <button
            id="1"
            className="font-bold p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            onClick={handleClick}
          >
            1
          </button>
          <button
            id="2"
            className=" font-bold p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            onClick={handleClick}
          >
            2
          </button>
          <button
            id="3"
            className=" font-bold p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            onClick={handleClick}
          >
            3
          </button>
          <button
            id="4"
            className=" font-bold p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            onClick={handleClick}
          >
            4
          </button>
          <button
            id="5"
            className="font-bold p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            onClick={handleClick}
          >
            5
          </button>
          <button
            id="6"
            className="font-bold p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            onClick={handleClick}
          >
            6
          </button>
          <button
            id="7"
            className="font-bold p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            onClick={handleClick}
          >
            7
          </button>
          <button
            id="8"
            className="font-bold p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            onClick={handleClick}
          >
            8
          </button>
          <button
            id="9"
            className="font-bold p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            onClick={handleClick}
          >
            9
          </button>

          <button
            id="."
            className="font-bold p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            onClick={handleClick}
          >
            .
          </button>
          <button
            id="0"
            className="font-bold p-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            onClick={handleClick}
          >
            0
          </button>

          <button
            id="+"
            className="font-bold p-2 rounded-md text-white bg-yellow-500 hover:bg-yellow-600"
            onClick={handleClick}
          >
            +
          </button>

          <button
            id="*"
            className="font-bold p-2 rounded-md text-white bg-yellow-500 hover:bg-yellow-600"
            onClick={handleClick}
          >
            *
          </button>

          <button
            id="-"
            className="font-bold p-2 rounded-md text-white bg-yellow-500 hover:bg-yellow-600"
            onClick={handleClick}
          >
            -
          </button>

          <button
            id="/"
            className="font-bold p-2 rounded-md text-white bg-yellow-500 hover:bg-yellow-600"
            onClick={handleClick}
          >
            /
          </button>

          <button
            className="font-bold p-2 rounded-md text-white bg-gray-500 hover:bg-gray-600"
            onClick={clear}
          >
            AC
          </button>
          <button
            className="font-bold p-2 rounded-md text-white bg-gray-500 hover:bg-gray-600"
            onClick={deleteElement}
          >
            DEL
          </button>

          <button
            id="="
            className="font-bold p-2 rounded-md text-white bg-gray-500 hover:bg-gray-600"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
