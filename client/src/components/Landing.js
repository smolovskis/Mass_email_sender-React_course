import React, {Component} from 'react'
import {connect} from "react-redux";

class Landing extends Component {
     render() {
        return (
           <div style={{ textAlign: 'center'}}>
               <h1>hello</h1>
               Whats up?
           </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default Landing;