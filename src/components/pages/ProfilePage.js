import React, { Component } from 'react'

class ProfilePage extends Component {
    state = {}
    render() {
        console.log("profileProps", this.props)
        return (
            <>
                <h1>ProfilePage</h1>
            </>
        );
    }
}

export default ProfilePage;