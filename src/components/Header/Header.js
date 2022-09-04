import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
<header>
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <Link to="/"className="navbar-brand" >WebloSoft</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-link active" aria-current="page" href="/">Home</Link>
        <Link to="/login" className="nav-link" href="/">Login</Link>
        <Link to="/users" className="nav-link" href="/">Users</Link>

      </div>
    </div>
  </div>
</nav>
</header>     
  )
}
