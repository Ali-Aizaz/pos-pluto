export default function UserDetails() {
  return (
    <div className="ml-5 w-[300px] h-[60vh] flex flex-col font-medium items-center">
      <div className="w-full bg-theme-light-black/40 p-2">
        <h1 className="text-xl text-black ">Raheel Hussain</h1>
        <label className="text-xl text-theme-purple">Name</label>
      </div>
      <div className="w-full bg-theme-light-black/20 p-2">
        <h1 className="text-xl text-black ">0300-2175467</h1>
        <label className="text-xl text-theme-purple">Phone number</label>
      </div>
      <div className="w-full bg-theme-light-black/30 p-2">
        <h1 className="text-xl text-black ">29-nov-2023</h1>
        <label className="text-xl text-theme-purple">Date of sales</label>
      </div>
      <div className="w-full bg-theme-light-black/20 p-2">
        <h1 className="text-xl text-black ">564091</h1>
        <label className="text-xl text-theme-purple">Receipt No.</label>
      </div>
      <div className="w-full bg-theme-purple/40 p-2">
        <h1 className="text-xl text-black ">RS 7800</h1>
        <label className="text-xl text-theme-purple">TOTAL AMOUNT</label>
      </div>
      <button className="text-3xl text-white bg-black px-3 py-2 mt-2 w-[150px]">
        Return
      </button>
    </div>
  );
}
