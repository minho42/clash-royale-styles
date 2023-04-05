function App() {
  return (
    <div className="flex flex-col bg-[#0e4da8] h-screen p-10 gap-6">
      <Button1>btn1</Button1>
      <Button2>btn2</Button2>
    </div>
  );
}

export default App;

const Button1 = ({ children }) => {
  return (
    <button className="relative flex flex-shrink-0 justify-center h-[60px] w-[150px] hover:scale-95 duration-100 hover:shadow-xl">
      <div
        id="btn-shadow"
        className="absolute border-2 flex h-full w-[98%] translate-y-0.5 rounded-xl bg-gray-300"
      ></div>
      <div
        id="btn-border"
        className="absolute flex h-full w-full -translate-y-[2px] items-center justify-center rounded-xl border-2 border-gray-800 bg-amber-500 shadow-md"
      ></div>
      <div
        id="main"
        className="absolute flex h-[90%] w-[98%] items-center justify-center rounded-xl border-b border-amber-300 bg-amber-400"
      >
        <div
          id="top-half-highlight"
          className="absolute top-[2px] h-[50%] w-[98%] rounded-lg bg-white opacity-30"
        ></div>
        <div id="text" className="absolute font-mono text-3xl font-bold text-gray-800">
          {children}
        </div>
        <div
          id="top-right-highlight"
          className="absolute right-1 top-0.5 h-3 w-2 -rotate-45 rounded-lg bg-white"
        ></div>
      </div>
    </button>
  );
};

const Button2 = ({ children }) => {
  return (
    <button className="relative flex shrink-0 justify-center h-[80px] w-[150px] hover:scale-95 duration-100 hover:shadow-xl">
      {/* <div
        id="btn-shadow"
        className="absolute border-2 flex h-full w-[98%] translate-y-0.5 rounded-lg bg-gray-300"
      ></div> */}
      <div
        id="btn-border"
        className="absolute flex h-full overflow-hidden w-full -translate-y-[2px] items-center justify-center rounded-lg border-2 border-gray-800 bg-amber-700 shadow-md"
      >
        <div
          id="main"
          className="absolute flex top-0 h-[95%] w-full items-center justify-center rounded-b-lg bg-amber-500"
        >
          <div
            id="main-highlight"
            className="absolute flex items-center justify-center h-[90%] w-[96%] rounded bg-amber-400 shadow"
          >
            <div
              id="top-half-highlight"
              className="absolute top-0 h-[50%] w-full rounded bg-white opacity-30"
            ></div>
            <div
              id="text"
              className="absolute font-mono text-4xl font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]"
            >
              {children}
            </div>
          </div>
          <div
            id="top-right-highlight"
            className="absolute right-1 top-0.5 h-3 w-2 -rotate-45 rounded-lg bg-white opacity-70"
          ></div>
        </div>
      </div>
    </button>
  );
};
