import React, { Component } from 'react';

class Netflix extends Component{
    render(){
            //array of movies
            let movies = [
                {movieName: 'Goonies',
                yearReleased: '1984',
                genre: 'Children'},
                {movieName: 'Transformers',
                yearReleased: '2009',
                genre: 'Action'},
                {movieName: 'It',
                yearReleased: '2017',
                genre: 'Horror'}
            ];
            return(movies)
    }
}

export default Netflix;