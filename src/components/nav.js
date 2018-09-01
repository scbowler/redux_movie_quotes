import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class Nav extends Component {
    renderLinks(){
        const { auth, signIn, signOut } = this.props;

        if(auth){
            return (
                <Fragment>
                    <li>
                        <Link to="/secret-list">Secret List</Link>
                    </li>
                    <li>
                        <Link to="/movie-quote">Movie Quote</Link>
                    </li>
                    <li>
                        <button onClick={signOut} className="btn orange darken-2">Sign Out</button>
                    </li>
                </Fragment>
            );
        }

        return (
            <Fragment>
                <li>
                    <Link to="/sign-in">Sign In</Link>
                </li>
                <li>
                    <Link to="/sign-up">Sign Up</Link>
                </li>
            </Fragment>
        );
    }

    render(){
        return (
            <nav style={{padding: '0 10px'}} className="blue">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Movie Quotes</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {
    signIn: signIn,
    signOut: signOut
})(Nav);
