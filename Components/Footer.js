import React from 'react';
var style = {
    backgroundColor: "lightseagreen",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "20px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '20px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                @ Naveen's Twitter{ children }
            </div>
        </div>
    )
}

export default Footer;