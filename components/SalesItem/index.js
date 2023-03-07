import Image from "next/image";

const SalesItem = () => {
  return (
    <div className="w-[90%] flex justify-between bg-white h-28 rounded-3xl">
      <ul className="p-4 text-lg">
        <li>
          Product name: <strong>store</strong>
        </li>
        <li>
          Category: <strong>Kitchen</strong>
        </li>
        <li>
          Quantity: <strong>4</strong>
        </li>
      </ul>
      <div className="flex flex-col justify-between p-4 items-end">
        <Image src="/trash.png" alt="remove from cart" width={30} height={40} />
        <label className="text-lg font-bold">RS 4520</label>
      </div>
    </div>
  );
};

export default SalesItem;
