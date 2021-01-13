import React, { Component } from 'react'
import './App.css';
import NewsList from '../components/NewsList/NewsList';
import Search from '../components/Search/Search';
import NoRecords from '../components/NoRecods/NoRecords';

class App extends Component {
  state = {
    news: [],
    apiKey: '',
    keyword: 'US',
  }

  componentDidMount() {
    fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + this.state.apiKey)
      .then(res => res.json())
      .then(res => {
        this.setState({ news: res.articles })
      })
  }

  ClickHandler = () => {
    const queryString = document.getElementById('searchInput').value;
    fetch('https://newsapi.org/v2/everything?q=' + queryString + '&apiKey=' + this.state.apiKey)
      .then(res => res.json())
      .then((res => {
        const searchResult = res.articles;
        this.setState({ news: searchResult, keyword: queryString });
      }))
  }

  render() {
    return (
      <div className="App">
        <h1>News for {this.state.keyword}</h1>
        <Search clickHandler={this.ClickHandler} />
        {this.state.news && this.state.news.length !== 0 ?
          <NewsList newsArr={this.state.news} /> : <NoRecords /> 
        }
      </div>
    );
  }
}
export default App;
