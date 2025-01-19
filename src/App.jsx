import "bootstrap/dist/css/bootstrap.css";
import './App.css';
function App() {
  return (
    <>
      <div className="container-fluid px-0">
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand " href="#">
            <h1>Brand Name</h1>
          </a>

          <div className="navbar-nav px-5">
                <a className="navbar-link px-4 link-underline-secondary" href="#">
                  <h2>Homepage</h2>
                </a>
                <a className="navbar-link px-4 link-underline-secondary" href="#">
                  <h2>View Products</h2>
                </a>

                <a className="navbar-link px-4 link-underline-secondary" href="#">
                  <h2>Sign In</h2>
                </a>

                <a className="navbar-link px-4 link-underline-secondary" href="#">
                  <h2>Cart</h2>
                </a>
          </div>
        </nav>
      </div>

      <div>
        <p>Sample Text</p>
      </div>
    </>
  );
}

export default App;
