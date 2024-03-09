import "../style/nav.css";
const Nav = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="navstart">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/img/logo.png" alt="" id="imglogo" />
          </a>
          <img
            src="/img/search.png"
            style={{
              width: "20px",
              position: "absolute",
              left: "9.8%",
              top: "38%",
              borderRadius: "0px 10px 10px 0px",
            }}
            alt=""
          />

          <input
            type="search"
            name=""
            value={searchQuery}
            onChange={onSearchChange}
            id="search"
            placeholder="Search Pixabay"
          />

          <select name="videos" id="videos-select">
            <option style={{ background: "black" }} value="">
              All images
            </option>
            <option style={{ background: "black" }} value="">
              Photos
            </option>
            <option style={{ background: "black" }} value="">
              Videos
            </option>
            <option style={{ background: "black" }} value="">
              Music
            </option>
            <option style={{ background: "black" }} value="">
              Sound Effects
            </option>
            <option style={{ background: "black" }} value="">
              Gits
            </option>
          </select>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-1 mb-lg-0">
              <li class="nav-item">
                <select name="videos" id="videos">
                  <option style={{ background: "black" }} value="">
                    Explore
                  </option>
                  <option style={{ background: "black" }} value="">
                    Media
                  </option>
                  <option style={{ background: "black" }} value="">
                    Discover
                  </option>
                  <option style={{ background: "black" }} value="">
                    Community
                  </option>
                  <option style={{ background: "black" }} value="">
                    About
                  </option>
                </select>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  style={{
                    color: "white",
                    marginRight: "40px",
                    marginLeft: "30px",
                    fontWeight: "600",
                  }}
                  aria-current="page"
                  href="#"
                >
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a href="">
                  {" "}
                  <button id="buttonj">Join</button>
                </a>
              </li>
            </ul>
            <span class="navbar-text">
              <a href="">
                {" "}
                <button id="buttonu">Uplaod</button>
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
