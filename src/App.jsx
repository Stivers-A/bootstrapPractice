import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
function App() {
  return (
    <>
    <div id="background">
      <div id="pageHeader" className="container-fluid px-0">
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand px-2" href="#">
            <h1>Brand Name</h1>
          </a>

          <div className="navbar-nav px-1">
            <a
              className="navbar-link px-4 link-underline-secondary link-offset-2"
              href="#"
            >
              <h2>Homepage</h2>
            </a>
            <a
              className="navbar-link px-4 link-underline-secondary link-offset-2"
              href="#"
            >
              <h2>View Products</h2>
            </a>

            <a
              className="navbar-link px-4 link-underline-secondary link-offset-2"
              href="#"
            >
              <h2>Sign In</h2>
            </a>

            <a
              className="navbar-link px-4 link-underline-secondary link-offset-2"
              href="#"
            >
              <h2>Cart</h2>
            </a>
          </div>
        </nav>
      </div>

      <div id="pageBody" className="my-2 p-5 container-fluid justify-content-start w-75">
        <div class="row">
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">Two of three columns</div>
          <div class="col-sm">Three of three columns</div>
        </div>
      </div>
      <div id="pageFooter"></div>
    </div>
    </>
  );
}

export default App;
