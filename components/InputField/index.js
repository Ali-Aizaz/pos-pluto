import Image from "next/image";
const InputField = ({ src, extraCss, onEdit, ...restProps }) => {
  return (
    <div className={`flex bg-white rounded-xl ${extraCss}`}>
      <Image
        src={src}
        alt="input icon"
        width={60}
        height={10}
        className={
          "p-5 rounded-l-xl aspect-square border-r border-black/20 bg-black/5"
        }
      />
      <input
        className="p-4 text-xl rounded-r-xl focus:outline-none"
        {...restProps}
        onChange={onEdit}
      />
    </div>
  );
};

export default InputField;
