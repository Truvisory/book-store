import React from 'react';
import MaterialIcon from 'material-icons-react';

const BookCardsAuthor = (props) => {
    return ( 
        <div className="container-fluid">
            <div className="row">
                {props.books.map( (books, idx) =>
                    <div className="card col-lg-4 text-center border-light bg-light" key={idx} >
                        <div className="card-body">
                            <h5 className="card-title">{books.author}</h5>
                            <p className="card-text">{books.title}</p>
                            <form onSubmit={props.addToCart}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">${books.price}</span>
                                    </div>
                                    <input id={books.id} type="number" className={props.quantClass} aria-label="Amount (to the nearest dollar)" placeholder={props.placeholder} />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2"><MaterialIcon icon="add_shopping_cart" size={18}/></button>
                                    </div>
                                </div>
                            </form>
                            <p className="card-text"><small className="text-muted">{books.subtitle}</small></p>
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

export default BookCardsAuthor