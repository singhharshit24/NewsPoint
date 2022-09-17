import React, { useEffect } from 'react'
import newsPointLogoVan from "./newsPointLogoVan.png"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation()
    useEffect(() => {
        console.log(location.pathname)
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/"><img style={{ width: "50px" }} src={newsPointLogoVan} alt="" /><strong><i>N</i>ews<b>P</b>o!nt</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                    <a className="nav-link" href="/">About Us</a>
                                </li> */}
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/business" ? "active" : ""}`} to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""}`} to="/entertainment">Entertainment</Link>
                            </li>
                            {/* <li className="nav-item">
                                    <Link className="nav-link" to="/general">General</Link>
                                </li> */}
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/health" ? "active" : ""}`} to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/science" ? "active" : ""}`} to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/sports" ? "active" : ""}`} to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/technology" ? "active" : ""}`} to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar
