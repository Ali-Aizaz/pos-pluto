import { CardComponent } from 'components'

const cards = [
  {
    tag: 'This week Sales',
    price: '10k Sales',
    link: '/sales?tab=Sales History',
    caption: 'Balance sheet',
    image: '/discount.png',
    color: '#0BF4C8',
  },
  {
    tag: 'Orders in Line',
    price: '750',
    link: '/sales?tab=Sales History',
    caption: 'view Sales history',
    image: '/bags.png',
    color: '#FAD85D',
  },
  {
    tag: 'Total Employees',
    price: '50',
    caption: 'View all Employees',
    link: 'roles?tab=Manage',
    image: '/woman.png',
    color: '#7A99EA',
  },
]

function Card() {
  return (
    <div className="flex w-full flex-wrap justify-start ">
      {cards.map((card) => (
        <CardComponent key={card.tag} card={card} />
      ))}
    </div>
  )
}

export default Card
