import { Link, Outlet, useParams } from 'react-router-dom';

function ProductDetails() {

  const { id } = useParams();

  return (
    <div className="page">

      <h1>Product Details</h1>

      <h2>Product ID: {id}</h2>

      <p>
        This page displays information about product {id}.
      </p>

      <div className="nested-links">

        <Link to="reviews">
          Reviews
        </Link>

        <Link to="specs">
          Specifications
        </Link>

      </div>

      <div className="nested-content">
        <Outlet />
      </div>

    </div>
  );
}

export default ProductDetails;