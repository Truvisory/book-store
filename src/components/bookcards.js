import React from 'react';

const BookCards = (props) => {
    console.log(props.books[4])
    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="card col-lg-4 text-center">
                    <div className="card-body">
                        <h5 className="card-title">Stuff</h5>
                        <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                        <button className="btn btn-outline-primary btn-block">Purchase</button>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <div className="dropdown">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Description
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p style={{margin: "5px"}}>"JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications."</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card col-lg-4 text-center">
                    <div className="card-body">
                        <h5 className="card-title">Stuff</h5>
                        <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                        <button className="btn btn-outline-primary btn-block">Purchase</button>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <div className="dropdown">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Description
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p style={{margin: "5px"}}>"JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications."</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card col-lg-4 text-center">
                    <div className="card-body">
                        <h5 className="card-title">Stuff</h5>
                        <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                        <button className="btn btn-outline-primary btn-block">Purchase</button>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <div className="dropdown">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Description
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p style={{margin: "5px"}}>"JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCards