import Image from "next/image";

export default function Manage() {
  return (
    <div className="w-full">
      <div className="p-3 space-y-5">
        <ul className="flex text-xl ">
          <li className="w-[200px]">Name</li>
          <li className="w-[200px] ">User ID</li>
          <li className="w-[200px] ">Designation</li>
          <li className="w-[200px] ">Actions</li>
        </ul>
      </div>
      <div className="border-t-2 p-3 space-y-5 font-thin text-xl">
        <ul className="flex  ">
          <li className="w-[200px] ">Raheel</li>
          <li className="w-[200px] ">@RaheelC082</li>
          <li className="w-[200px] ">Cashier</li>
          <li className="w-[200px] flex space-x-6 ">
            <button>
              <Image src={"/Edit.png"} alt={"edit"} width={25} height={20} />
            </button>
            <button>
              <Image src={"/trash.png"} alt={"edit"} width={20} height={20} />
            </button>
          </li>
        </ul>
        <ul className="flex  ">
          <li className="w-[200px] ">Raheel</li>
          <li className="w-[200px] ">@RaheelC082</li>
          <li className="w-[200px] ">Cashier</li>
          <li className="w-[200px] flex space-x-6 ">
            <button>
              <Image src={"/Edit.png"} alt={"edit"} width={25} height={20} />
            </button>
            <button>
              <Image src={"/trash.png"} alt={"edit"} width={20} height={20} />
            </button>
          </li>
        </ul>
        <ul className="flex  ">
          <li className="w-[200px] ">Raheel</li>
          <li className="w-[200px] ">@RaheelC082</li>
          <li className="w-[200px] ">Cashier</li>
          <li className="w-[200px] flex space-x-6 ">
            <button>
              <Image src={"/Edit.png"} alt={"edit"} width={25} height={20} />
            </button>
            <button>
              <Image src={"/trash.png"} alt={"edit"} width={20} height={20} />
            </button>
          </li>
        </ul>
        <ul className="flex  ">
          <li className="w-[200px] ">Raheel</li>
          <li className="w-[200px] ">@RaheelC082</li>
          <li className="w-[200px] ">Cashier</li>
          <li className="w-[200px] flex space-x-6 ">
            <button>
              <Image src={"/Edit.png"} alt={"edit"} width={25} height={20} />
            </button>
            <button>
              <Image src={"/trash.png"} alt={"edit"} width={20} height={20} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
