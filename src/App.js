import React, { Component } from 'react';
import NavBar from './components/navbar'
import CartModal from './components/cartmodal';
import BookCards from './components/bookcards'
import Loader from 'react-loader-spinner'

class App extends Component {
  constructor(){
    super()
      this.state = {
        books: [],
        bookTitles: []
      }
  }

  getBookTitles = () => this.state.books.map(book => <p key={book.title}>{book.title}</p>)
  getBookAuthors = () => this.state.books.map(book => <p key={book.author}>{book.author}</p>)

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({books: json})
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
    const skoobs = this.state.books
    return (
      <div>
        <NavBar />
        <CartModal />
        <BookCards books={skoobs}/>
      </div>
    );
  }
}

export default App;