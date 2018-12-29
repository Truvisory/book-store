import React, { Component } from 'react';
import NavBar from './components/navbar'
import CartModal from './components/cartmodal';
import BookCardsTitle from './components/bookcardstitle'
import BookCardsAuthor from './components/bookcardsauthor'
import Loader from 'react-loader-spinner'
const url = 'http://localhost:8082/api/books'

class App extends Component {
  constructor(){
    super()
      this.state = {
        books: [],
        orderList: [],
        total: 0,
        filter: "title",
        badge: "d-none",
        quantClass: "form-control",
        placeholder: "Quantity"
      }
  }

  async componentDidMount() {
    const response = await fetch(url)
    const json = await response.json()
    this.setState({books: json})
  }

  author = () => this.setState({ filter: "author" })
  title = () => this.setState({ filter: "title" })
  addToCart = (e) => { e.preventDefault()
    let filteredProducts = 
      this.state.books.filter((stuff) => stuff.id === e.target[0].id * 1 )
    let order = {
      bookTitle: filteredProducts[0].title,
      quantity: e.target[0].value * 1,
      subTotal: filteredProducts[0].price * e.target[0].value}
    let total = this.state.total
    e.target[0].value < 1
      ? this.setState( {
          quantClass: "form-control alert-primary", 
          placeholder: "1 or Greater" })
      : this.setState( {
          orderList: [...this.state.orderList, order],
          badge: "badge badge-light",
          quantClass: "form-control",
          placeholder: "Quantity",
          total: total += order.subTotal})
    e.target.reset()
  }

  render() {
    return (
      <div className="bg-light">
        <NavBar 
          author={this.author} 
          title={this.title}
          badge={this.state.badge}
          orderItems={this.state.orderList.length}/>
        <CartModal 
          orderList={this.state.orderList}
          total={this.state.total}/>
        {this.state.books[0] && this.state.filter === "title"
          ? <BookCardsTitle
              books={this.state.books}
              addToCart={this.addToCart}
              quantClass={this.state.quantClass}
              placeholder={this.state.placeholder} />
          : this.state.filter === "author"
            ? <BookCardsAuthor
                books={this.state.books}
                addToCart={this.addToCart}
                quantClass={this.state.quantClass}
                placeholder={this.state.placeholder} />
            : <Loader type="Circles" color="red" height={200} width={200} /> }
      </div>
    );
  }
}

export default App;


// alternate fetch method
  // fetchBooks = () => {
  //   return fetch('http://localhost:8082/api/books')
  //   .then(res => res.json())
  //   .then(books => {
  //     this.setState({books: books})
  //     return books
  //   })
  // }

  // componentDidMount() {
  //   this.fetchBooks()
  //     .catch(err => console.error(err))
  // }