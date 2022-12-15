import React from 'react'

const Navigation = () => {
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-light bg-white fixed-top'>
          <div className='container-fluid'>
            <button className='navbar-toggler' type='button' data-mdb-toggle='collapse'
              data-mdb-target='#navbarExample01' aria-controls='navbarExample01' aria-expanded='false'
              aria-label='Toggle navigation'>
              <i className='fas fa-bars'></i>
            </button>
            <div className='collapse navbar-collapse' id='navbarExample01'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item active'>
                  <h2 className='nav-link' aria-current='page' >Home</h2>
                </li>
                <li className='nav-item'>
                  <h2 className='nav-link'>Features</h2>
                </li>
                <li className='nav-item'>
                  <h2 className='nav-link' >Pricing</h2>
                </li>
                <li className='nav-item'>
                  <h2 className='nav-link' >About</h2>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navigation
