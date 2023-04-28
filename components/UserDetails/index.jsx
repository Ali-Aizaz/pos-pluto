const UserDetails = () => {
  return (
    <div className="ml-5 flex h-[60vh] w-[300px] flex-col items-center font-medium">
      <div className="bg-theme-light-black/40 w-full p-2">
        <h1 className="text-xl text-black ">Raheel Hussain</h1>
        <label className="text-theme-purple text-xl">Name</label>
      </div>
      <div className="bg-theme-light-black/20 w-full p-2">
        <h1 className="text-xl text-black ">0300-2175467</h1>
        <label className="text-theme-purple text-xl">Phone number</label>
      </div>
      <div className="bg-theme-light-black/30 w-full p-2">
        <h1 className="text-xl text-black ">29-nov-2023</h1>
        <label className="text-theme-purple text-xl">Date of sales</label>
      </div>
      <div className="bg-theme-light-black/20 w-full p-2">
        <h1 className="text-xl text-black ">564091</h1>
        <label className="text-theme-purple text-xl">Receipt No.</label>
      </div>
      <div className="bg-theme-purple/40 w-full p-2">
        <h1 className="text-xl text-black ">RS 7800</h1>
        <label className="text-theme-purple text-xl">TOTAL AMOUNT</label>
      </div>
      <button className="mt-2 w-[150px] bg-black px-3 py-2 text-3xl text-white">
        Return
      </button>
    </div>
  );
};

export default UserDetails;
