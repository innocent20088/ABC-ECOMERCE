import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page home">

      <h1>Welcome to ABC E-Commerce</h1>

      <p>
        Your trusted online shopping platform in Rwanda.
      </p>

      <Link className="button" to="/products">
        View Products
      </Link>

    </div>
  );
}

export default Home;