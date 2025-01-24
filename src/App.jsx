import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
function App() {
  return (
    <>
      <div id="background">
        <div id="pageHeader" className="container-fluid px-0 sticky-top">
          <nav className="shadow-lg navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand px-2" href="#">
              <h1>Brand Name</h1>
            </a>

            <div className="navbar-nav px-1">
              <a
                className="navbar-link px-4 link-underline-secondary link-offset-2"
                href="#"
              >
                <h2 className="activePage">Homepage</h2>
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
        <div id="pageBody" className="d-flex flex-row">
          <div
            id="content1"
            className="my-2 p-5 container-flex w-75 justify-content-start"
          >
            <div className="row px-0">
              <div className="col-sm shadow-sm px-o mx-1 display border border-0 rounded-4 d-flex flex-column justify-content-between">
                <h3 className="text-center container-flex border border-0 rounded bg-info my-2 ">
                  Free Plan
                </h3>
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Cras amet
                  mauris ultricies cubilia finibus hendrerit elit fames. Maximus
                  litora mollis vestibulum fames sodales. Posuere litora
                  ultrices diam pellentesque cras sagittis hac finibus molestie.
                  Phasellus dis metus senectus enim ex efficitur cubilia nostra.
                  Dictum habitasse fames, nostra quam facilisis elementum
                  maximus. Pharetra aliquam sit, semper lectus ex varius. Lorem
                  condimentum vehicula cubilia convallis libero commodo; ut
                  praesent.
                </p>
                <h4 className="clickMe text-center align-bottom container-flex border border-0 rounded bg-white">Free Sign up</h4>
              </div>
              <div className="col-sm shadow-sm px-o mx-1 display border border-0 rounded-4 d-flex flex-column justify-content-between">
                <h3 className="text-center container-flex border border-0 rounded bg-info  my-2">
                  Paid Plan
                </h3>
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Duis
                  pharetra sed hendrerit eu inceptos ligula ullamcorper.
                  Venenatis bibendum efficitur dictumst non velit venenatis
                  etiam purus. Arcu consequat congue sociosqu vehicula mi
                  natoque rutrum mattis. Feugiat efficitur consequat ante duis
                  aptent ante. Litora cursus tincidunt donec auctor nullam
                  lacinia. Dictum dis commodo tortor tincidunt fusce tempor
                  tempor maximus. Sed blandit semper morbi feugiat phasellus
                  habitant orci convallis. Erat auctor nulla ullamcorper tempor
                  dis hendrerit habitant nisl arcu.
                </p>
                <h4 className="clickMe text-center align-bottom container-flex border border-0 rounded bg-white">Start Now</h4>
              </div>
              <div className="col-sm shadow-sm px-o mx-1 display border border-0 rounded-4 d-flex flex-column justify-content-between">
                <h3 className="text-center container-flex border border-0 rounded bg-info  my-2">
                  Premium Plan
                </h3>
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Felis
                  vivamus magnis convallis luctus enim natoque parturient.
                  Hendrerit faucibus eros per euismod imperdiet. Vitae platea
                  primis ligula; lacinia libero tincidunt. Morbi purus imperdiet
                  arcu sollicitudin phasellus himenaeos nisl mauris luctus.
                  Tempor malesuada arcu pellentesque risus morbi. Venenatis
                  eleifend maecenas luctus; dis morbi fringilla placerat quam
                  mattis.
                </p>
                <h4 className="clickMe text-center align-bottom container-flex border border-0 rounded bg-white">Contact Us</h4>
              </div>
            </div>
          </div>
          <div
            id="content2"
            className="my-2 p-5 container-flex w-25 justify-content-end"
          >
            <p>Some words here</p>
          </div>
        </div>
        <div id="pageFooter"></div>
      </div>
    </>
  );
}

export default App;
