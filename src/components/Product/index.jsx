import classNames from 'classnames'

const ProductComponent = ({ product, display, count }) => {
  return (
    <div
      className={classNames(
        'text-black/80 font-normal space-y-5 transition-maxHeight overflow-hidden',
        {
          'max-h-0': !display,
          'max-h-100': display,
        }
      )}
    >
      <div className="flex space-x-10">
        <div>
          <h1 className="text-base font-bold">Name</h1>
          <p>{product.name}</p>
        </div>
        <div>
          <h1 className="text-base font-bold">Category</h1>
          <p>{product.categoryName}</p>
        </div>
        <div>
          <h1 className="text-base font-bold">Quantity</h1>
          <p>{count}</p>
        </div>
      </div>
      <div className="flex space-x-10">
        {Object.keys(product.details).map((key) => (
          <div key={key}>
            <h1 className="text-sm font-bold">{key}</h1>
            <p>{product.details[key]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductComponent
