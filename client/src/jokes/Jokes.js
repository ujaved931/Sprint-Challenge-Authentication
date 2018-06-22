import React from 'react';
import axios from 'axios';

class Jokes extends React.Component {
    state = {
        jokes: [{}],
    };

    render() {
        console.log(this.state)
        return (
            <ul>
                {this.state.jokes.map(user => 
                    <div> 
                    <li>{user.setup}</li> 
                    <li>{user.punchline}</li>
                    </div>
                )}
            </ul>
        );
    }

    componentDidMount() {
        const token = localStorage.getItem('jwt');
        
        const requestOptions = {
            headers: {
                Authorization: token,
            },
        };

        axios
            .get('http://localhost:5000/api/jokes', requestOptions)
            .then(response => {
                this.setState({ jokes: response.data });
                console.log(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    }
}

export default Jokes;