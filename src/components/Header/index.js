import './style.scss'

const Header = () => {
    return (
      <header class="p-3 bg-dark text-white">
      <div class="container" id="banner-container">
        <div class="flex-wrap item-holder-holder">
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 item-holder">
            <li class="item-li"><a href="#ref-1" class="nav-link px-2 text-white item">about me</a></li>
            <li class="main-li"><a href="#" class="nav-link px-2 text-white main-item">Sara's Portfolio</a></li>
            <li class="item-li"><a href="#ref-2" class="nav-link px-2 text-white item">my projects</a></li>
          </ul>
        </div>
      </div>
    </header>
    )
}

export default Header;