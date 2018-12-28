import React from 'react';

const BookCardsTitle = (props) => {
    return ( 
        <div className="container-fluid">
            <div className="row">
                {props.books.map( (books, idx) =>
                    <div className="card col-lg-4 text-center border-light bg-light" key={idx} >
                        <div className="card-body">
                            <h5 className="card-title">{books.title}</h5>
                            <p className="card-text">{books.subtitle}</p>
                            {/* <button className="btn btn-outline-primary btn-block">Purchase for ${books.price}</button> */}
                            <form onSubmit={props.addToCart}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">${books.price} ea.</span>
                                    </div>
                                    <input id={books.id} type="number" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Add Quantity"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add to Cart</button>
                                    </div>
                                </div>
                            </form>
                            <p className="card-text"><small className="text-muted">{books.author}</small></p>
                            <div className="dropdown">
                                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Description
                                </button>
                                <div className="dropdown-menu bg-secondary text-white" aria-labelledby="dropdownMenuButton">
                                    <p style={{margin: "5px"}}>{books.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BookCardsTitle