const Header = () => {
  return (
    <nav className="navbar bg-main">
      <div className="container-fluid">
        <div className="navbar-brand text-white" to="/">
          <div className="d-flex align-items-center">
            <img src="./logo.png" alt="logo" id="header-logo" className="img-fluid" />
            <div>BoolRoad</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
