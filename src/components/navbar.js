import React from 'react';
import MaterialIcon from 'material-icons-react';

const NavBar = (props) => {
  return (
    <nav className="navbar bg-dark">
        <a className="navbar-brand text-light" href="/#">Book Store</a>
        <div className="input-group container col-sm">
            <input 
                type="search" 
                className="form-control bg-light" 
                aria-label="Text input with segmented dropdown button" 
                placeholder="Search Titles"
                onChange={props.search} />
            <div className="input-group-append">
                <button 
                    type="button" 
                    className="btn btn-primary dropdown-toggle dropdown-toggle-split" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu text-center" style={{right: '0px'}}>
                    <a 
                        className="dropdown-item"
                        href="/#" 
                        id="author" 
                        onClick={props.author}>
                            Arrange List by Author
                    </a>
                    <a 
                        className="dropdown-item" 
                        href="/#" 
                        id="title" 
                        onClick={props.title}>
                            Arrange List by Title
                    </a>
                </div>
            </div>
            <button 
                type="button" 
                className="btn btn-outline-light btn-sm" 
                data-toggle="modal" 
                data-target="#exampleModal" 
                style={{marginLeft: '5px'}}>
                    <MaterialIcon 
                        icon="shopping_cart" 
                        color='white' 
                        size={20}/><span className={props.badge}>{props.orderItems}</span>
            </button>
        </div>
    </nav>
  )
}

export default NavBar