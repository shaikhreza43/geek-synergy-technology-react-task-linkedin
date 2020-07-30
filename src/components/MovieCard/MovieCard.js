import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Button, Col, CardImg, CardSubtitle } from 'reactstrap';
import './MovieCard.css';
import { Link } from 'react-router-dom';
import DownArrow from '../../assets/images/downarrow.svg';
import UpArrow from '../../assets/images/navigate-up-arrow.svg';

class MovieCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieData: [],
            category: 'movies',
            language: 'Hindi',
            genre: 'all',
            sort: 'voting'
        }
    }

    componentDidMount() {
        this.getDataFromApi();
    }

    getDataFromApi = () => {

        const requestObj = {
            category: this.state.category,
            language: this.state.language,
            genre: this.state.genre,
            sort: this.state.sort
        }

        fetch('/movieList', {
            method: 'POST',
            body: JSON.stringify(requestObj),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                this.setState({ movieData: data.result });
            })
            .catch(err => {
                if (err)
                    throw err;
            })

    }

    renderMovieCards = () => {
        let movies = this.state.movieData;
        let movieDiv = movies.map((movieInfo, index) => {
            return (<Col lg="4">
                <Card key={index}>
                    <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', left: '10px' }}>
                        <Link onClick={this.updateUpVote}><img src={UpArrow} className="up-arrow-image"></img></Link>
                        <label className="ml-1">{movieInfo.totalVoted}</label>
                        <Link onClick={this.updateDownVote}><img src={DownArrow} className="down-arrow-image"></img></Link>
                    </div>

                    <div style={{ marginLeft: '50px' }}>
                        <CardImg src={movieInfo.poster}></CardImg>
                        <CardBody>
                            <CardTitle><h4>{movieInfo.title}</h4></CardTitle>
                            <CardSubtitle><h6>Genre:{movieInfo.genre}</h6></CardSubtitle>
                            <CardSubtitle><h6>Director:{movieInfo.director}</h6></CardSubtitle>
                            <CardSubtitle><h6>Writer:{movieInfo.writers}</h6></CardSubtitle>
                            <CardSubtitle><h6>Starring:{movieInfo.stars}</h6></CardSubtitle>
                            <CardSubtitle><h6>Release Date:{new Date(movieInfo.releasedDate).toDateString()}</h6></CardSubtitle>
                            <label style={{ color: 'blue' }}><h6>{movieInfo.pageViews}&nbsp;views | Voted by {movieInfo.voting} people</h6></label><br />
                            <Button color="primary">Watch Trailer</Button>
                        </CardBody>
                    </div>

                </Card>
            </Col>
            )
        });

        return movieDiv;
    }

    render() {
        return (
            <>
                {this.renderMovieCards()}
            </>
        )
    }
}

export default MovieCard;