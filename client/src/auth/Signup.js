import React, { Component } from 'react';
import axios from "axios";

class Signup extends Component {
    state = {
        username: '',
        password: '',
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.inputChangeHandler}
                        name="username"
                        type="text"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        name="password"
                        type="password"
                    />
                </div>
                <div>
                    <button type="submit">Signup</button>
                </div>
            </form>
        );
    }

    submitHandler = event => {
        event.preventDefault();

        axios
            .post('http://localhost:5000/api/users', this.state)
            .then(response => {
                localStorage.setItem('jwt', response.data.token);

                console.log('signing props', this.props);
                this.props.history.push('/users');
            })
            .catch(err => {
                console.log('error', err.message);
            });
    };

    inputChangeHandler = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };
}



export default Signup;