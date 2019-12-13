import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import posed from "react-pose"

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <div style={{height: `auto`}}>
      <div className="menu_button__outer">
      <p>Exp Supply Co</p>
        <MenuHoverButton className="menu_button__container">
          <FontAwesomeIcon icon={faBars} size={"2x"} />
        </MenuHoverButton>
      </div>
      <Sidebar className="sidebar"></Sidebar>
    </div>
  )
}

const MenuHoverButton = posed.div({
  hoverable: true,
  init: {
    scale: 1.0,
    transition: {
      duration: 250,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 250,
    },
  },
})

const Sidebar = posed.div({
  open: {
    x: `0%`,
    transition: {
      type: `spring`,
      stiffness: 75,
      delay: 200,
    },
  },
  closed: {
    x: `-100%`,
    transition: {
      duration: 200,
      delay: 150,
    },
  },
})

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
