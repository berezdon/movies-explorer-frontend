import "./NavLink.css";

function NavLink () {
  return (
    <div className="nav-link">
      <a href="https://vk.com/berezdon" className="nav-link__link" target="_blank" rel="noopener noreferrer">
        Вконтакте
      </a>
      <a href="https://github.com/berezdon" className="nav-link__link" target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </div>
  )
}

export default NavLink
