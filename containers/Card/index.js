import { CardComponent } from "@/components";

const cards = [
  {
    tag: "This week Sales",
    price: "10k Sales",
    caption: "Balance sheet",
    image: "/discount.png",
    color: "#0BF4C8",
  },
  {
    tag: "Orders in Line",
    price: "750",
    caption: "view Sales history",
    image: "/bags.png",
    color: "#FAD85D",
  },
  {
    tag: "Total Employees",
    price: "50",
    caption: "View all Employees",
    image: "/woman.png",
    color: "#7A99EA",
  },
];

const Card = () => {
  return (
    <div className="w-full  ">
      <h1 className="text-2xl mb-6 ml-10">Hello, Raheel</h1>
      <div className="flex w-full justify-start flex-wrap ">
        {cards.map((card) => (
          <CardComponent key={card.tag} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Card;
