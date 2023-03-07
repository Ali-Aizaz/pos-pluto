import Image from "next/image";

const Card = ({ card }) => {
  const { color, image, tag, price, caption } = card;
  return (
    <div className="ml-10 mb-5">
      <svg
        height="200"
        viewBox="0 0 300 159"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28 0C12.536 0 0 12.536 0 28V131C0 146.464 12.536 159 28 159H268C284.661 159 298.349 146.266 299.861 130H295.5C292.462 130 290 127.538 290 124.5C290 121.462 292.462 119 295.5 119H300V85H295C292.239 85 290 82.7614 290 80C290 77.2386 292.239 75 295 75H300V41H295.5C292.462 41 290 38.5376 290 35.5C290 32.4624 292.462 30 295.5 30H299.939C298.906 13.2585 285.001 0 268 0H28Z"
          fill={color}
        />
      </svg>

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
