import React from 'react';

const BookCards = (props) => {
    return ( 
        <div className="container-fluid">
            <div className="row">
                {props.books.map( (books, idx) =>
                    <div className="card col-lg-4 text-center" key={idx} >
                        <div className="card-body">
                            <h5 className="card-title">{books.title}</h5>
                            <p className="card-text">{books.subtitle}</p>
                            <button className="btn btn-outline-primary btn-block">Purchase</button>
                            <p className="card-text"><small className="text-muted">{books.author}</small></p>
                            <div className="dropdown">
                                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Description
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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

export default BookCards