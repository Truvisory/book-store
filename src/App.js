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
        filter: "title",
        orderList: []
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
    console.log(e.target[0].value)
    let filteredProducts = this.state.books.filter((stuff) => stuff.id === e.target[0].id * 1 )
    console.log(filteredProducts[0].title)
    e.target.reset()
    // let quantity = e.target
    // console.log(quantity)
  }

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

  render() {
    return (
      <div className="bg-light">
        <NavBar 
          author={this.author} 
          title={this.title}/>
        <CartModal />
        {this.state.books[0] && this.state.filter === "title"
          ? <BookCardsTitle
              books={this.state.books}
              addToCart={this.addToCart} />
          : this.state.books[0] && this.state.filter === "author"
            ? <BookCardsAuthor
                books={this.state.books}
                addToCart={this.addToCart} />
            : <Loader type="Grid" color="red" height={80} width={80} />}
      </div>
    );
  }
}

export default App;