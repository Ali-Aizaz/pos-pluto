import Image from "next/image";
import { memo } from "react";
const InputField = ({ src, extraCss, onEdit, ...restProps }) => {
  return (
    <div className={`flex rounded-xl bg-white ${extraCss}`}>
      <Image
        src={src}
        alt="input icon"
        width={60}
        height={10}
        className={
          "aspect-square rounded-l-xl border-r border-black/20 bg-black/5 p-5"
        }
      />
      <input
        className="rounded-r-xl p-4 text-xl focus:outline-none"
        {...restProps}
        onChange={onEdit}
      />
    </div>
  );
};

export default memo(InputField);
