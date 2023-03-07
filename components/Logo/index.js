import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex items-center translate-y-5 -space-x-10">
      <Image src={"/favicon.png"} alt="logo" width={150} height={150} />
      <h1 className="text-3xl font-bold"> POS PLUTO </h1>
    </div>
  );
};

export default Logo;
