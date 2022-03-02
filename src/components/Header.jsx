import React from 'react'
import PropTypes from "prop-types";

function Header({greeting}) {
  return (
    <header>
        <div className="container">
            <h2>{greeting}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    greeting: "Feedback UI",
}

Header.propTypes = {
    greeting: PropTypes.string,
}

export default Header