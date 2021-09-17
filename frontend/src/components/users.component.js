import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';
require('dotenv').config({ path: '../../../.env' });

const API_HOST = process.env.REACT_APP_API_HOST
const API_PORT = process.env.REACT_APP_API_PORT

export default class Users extends Component {
    
    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get(`http://${API_HOST}:${API_PORT}/users`)
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
