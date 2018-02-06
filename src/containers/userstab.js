import React, { Component } from 'react';
import UserList from './userlist'
import SearchBar from './searchbar'

export default class UserTab extends Component {
    render() {
        return <div>
            <SearchBar/>
            <UserList/>
        </div>
    }
}