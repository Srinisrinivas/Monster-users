import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({ users: json })
    })
  }

  handelChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render () {
    const {users, searchField} = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase()) 
    )
    return (
      <div className="App">
        <h1> Monsters users </h1>
        <SearchBox  placeholder='Search users' handelChange={this.handelChange}></SearchBox>
        <CardList users={filteredUsers}></CardList>
      </div>
    );
  }
}

export default App;
