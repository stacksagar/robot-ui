import React from 'react';
import './styles.css';
import robo from './images/robo.gif';
import Loading from './images/loading.gif';
import axios from 'axios';

class RoboFriends extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users: [],
      searchTerm: ''
    };
  }

  filterHandler = (searchTerm) => {
    this.setState({searchTerm})
  };

  filterResult = () => this.state.users.filter(user=>user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

  componentDidMount() {
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      this.setState({ users: response.data });
    })
    .catch((error) => {
      console.log('Error ', error);
    });
  }
  
  render() { 
    const users = this.filterResult();  
    return (
      <main>
        <header>
          <img src={robo} alt="ROBOT" />
          <input
            onChange={(e) => this.filterHandler(e.target.value)}
            type="search"
            placeholder="Search Rob..."
            value={this.state.searchTerm}
          />
        </header>

        {users.length === 0 ? (
          <div className="loading">
            {!this.state.searchTerm ? (
              <>
               <p>Loading...</p>
               <img src={Loading} alt="Loading..." />
              </>

            ): (
                <>
                  <p className="text-warning">Not Found!</p>
                  <button onClick={()=>this.setState({searchTerm:''})}>Clear All</button>
                </>
            )}
          </div>
        ) : (
          <div className="robo">
            {users.map((user, i) => (
              <div key={i}>
                <img src={`https://robohash.org/${i + 1}`} alt="" />
                <p>{user.name}</p>
                <small>{user.email}</small>
              </div>
            ))}
          </div>
        )}
      </main>
    );
  }
}

export default RoboFriends;
