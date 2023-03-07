import { CardIcon } from "components/Icons";
import Image from "next/image";

const Card = ({ card }) => {
  const { color, image, tag, price, caption } = card;
  return (
    <div className="ml-10 mb-5">
      <CardIcon color={color} />
      <div
        className={`w-44 -translate-y-[300px] h-[300px] flex flex-col justify-end translate-x-48 aspect-video absolute object-contain`}
      >
        <Image src={image} alt="card " width={300} height={200} />
      </div>
      <div className="absolute space-y-8 -translate-y-[11.5rem] translate-x-5">
        <h1 className="text-2xl font-semibold">{tag}</h1>
        <h1 className="text-3xl font-bold">{price}</h1>
        <h1 className="text-xl underline">{caption}</h1>
      </div>
    </div>
  );
};

export default Card;
