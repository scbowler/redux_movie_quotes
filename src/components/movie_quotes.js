import React, { Component } from 'react';
import auth from '../hoc/auth';
import { connect } from 'react-redux';
import { getMovieQuote } from '../actions';

class MovieQuotes extends Component {
    componentDidMount(){
        this.props.getMovieQuote();
    }

    render(){
        return (
            <div>
                <h1 className="center">Movie Quote!</h1>
                <h4 className="center">{this.props.quote}</h4>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        quote: state.movie.quote
    };
}

export default connect(mapStateToProps, { getMovieQuote })(auth(MovieQuotes, '/sign-up'));
