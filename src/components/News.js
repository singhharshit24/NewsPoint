import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            article: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0511b5d5b6d54e549084bf48187a0dbd&page=1&pagesize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            article: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    handlenext = async () => {
        if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 20)) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0511b5d5b6d54e549084bf48187a0dbd&page=${this.state.page + 1}&pagesize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            // console.log(parsedData);
            this.setState({
                article: parsedData.articles,
                page: this.state.page + 1,
                totalResults: parsedData.totalResults
            })
        }

    }

    handleprev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0511b5d5b6d54e549084bf48187a0dbd&page=${this.state.page - 1}&pagesize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            article: parsedData.articles,
            page: this.state.page - 1,
            totalResults: parsedData.totalResults
        })
    }

    render() {

        return (
            <div>
                <div className="container my-4">
                    <h1><strong><i>N</i>ews<b>P</b>o!nt</strong> - Da!ly <i><b>N</b></i>ews</h1>
                    <div className="row my-3">
                        {
                            this.state.article.map((element) => {
                                console.log(element)
                                return <div className='col-md-3' key={element.url} >
                                    <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : "Click below to read more"} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="container ">
                    <div className="btn-group mb-4" role="group" aria-label="Basic example">
                        <button type="button" disabled={this.state.page <= 1 ? true : false} className="btn btn-dark" onClick={this.handleprev}>&larr; Previous</button>
                        {/* <button type="button" className="btn btn-dark">Middle</button> */}
                        <button type="button" disabled={this.state.page === Math.ceil(this.state.totalResults / 20) ? true : false} className="btn btn-dark" onClick={this.handlenext} >Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
