import Image from "next/image";

export default function InputField({
  src,
  placeholder,
  value,
  setValue,
  extraCss,
}) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
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
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
