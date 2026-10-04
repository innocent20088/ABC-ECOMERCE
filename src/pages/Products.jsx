import { Link, useSearchParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Smartphone',
    category: 'electronics',
    price: 300000
  },
  {
    id: 2,
    name: 'Laptop',
    category: 'electronics',
    price: 800000
  },
  {
    id: 3,
    name: 'Shoes',
    category: 'fashion',
    price: 50000
  },
  {
    id: 4,
    name: 'T-Shirt',
    category: 'fashion',
    price: 25000
  }
];

function Products() {

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category');
  const price = searchParams.get('price');

  let filteredProducts = products;

  // Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter(
      product => product.category === category
    );
  }

  // Filter by price
  if (price === 'low') {
    filteredProducts = filteredProducts.filter(
      product => product.price <= 100000
    );
  }

  return (
    <div className="page">

      <h1>Products</h1>

      <div className="filters">

        <button
          onClick={() => setSearchParams({})}
        >
          All
        </button>

        <button
          onClick={() =>
            setSearchParams({ category: 'electronics' })
          }
        >
          Electronics
        </button>

        <button
          onClick={() =>
            setSearchParams({ category: 'fashion' })
          }
        >
          Fashion
        </button>

        <button
          onClick={() =>
            setSearchParams({ price: 'low' })
          }
        >
          Low Price
        </button>

      </div>

      <div className="product-grid">

        {filteredProducts.map(product => (

          <div className="product-card" key={product.id}>

            <h2>{product.name}</h2>

            <p>
              Category: {product.category}
            </p>

            <p>
              Price: {product.price.toLocaleString()} RWF
            </p>

            <Link
              to={`/products/${product.id}`}
              className="button"
            >
              View Details
            </Link>

          </div>

        ))}

      </div>

      {filteredProducts.length === 0 && (
        <p>No products found.</p>
      )}

    </div>
  );
}

export default Products;