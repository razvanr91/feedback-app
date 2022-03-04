import React from 'react'
import PropTypes from "prop-types"

function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    vesrion: "primaty",
    type: "button",
    isDisabled: false
}

Button.propTypes = {
    childre: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button