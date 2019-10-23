import React, { Component } from 'react'

export class Search extends Component {
    state = { }

    render() {
        return (
            <div className='btn-group'>
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select City
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className="dropdown-item" type="button">Amman</button>
    <button className="dropdown-item" type="button">Irbid</button>
    <button className="dropdown-item" type="button">Zarqa</button>
  </div>
</div> 



<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle ml-4" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select Field
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
    <button className="dropdown-item" type="button">Engineering</button>
    <button className="dropdown-item" type="button">IT</button>
    <button className="dropdown-item" type="button">Economy</button>
  </div>
</div> 

<form className="form-inline">
    <input className="form-control mr-sm-2 ml-4" type="search" placeholder="Search for a job " aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>

            </div>
        )
    }
}

export default Search

