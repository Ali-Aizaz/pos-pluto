import { CardComponent } from 'components'

const cards = [
  {
    tag: 'This week Sales',
    price: '10k Sales',
    caption: 'Balance sheet',
    image: '/discount.png',
    color: '#0BF4C8',
  },
  {
    tag: 'Orders in Line',
    price: '750',
    caption: 'view Sales history',
    image: '/bags.png',
    color: '#FAD85D',
  },
  {
    tag: 'Total Employees',
    price: '50',
    caption: 'View all Employees',
    image: '/woman.png',
    color: '#7A99EA',
  },
]

function Card() {
  return (
    <div className="w-full  ">
      <h1 className="mb-6 ml-10 text-2xl">Hello, Raheel</h1>
      <div className="flex w-full flex-wrap justify-start ">
        {cards.map((card) => (
          <CardComponent key={card.tag} card={card} />
        ))}
      </div>
    </div>
  )
}

export default Card
