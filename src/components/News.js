import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            article: [],
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0511b5d5b6d54e549084bf48187a0dbd";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ article: parsedData.articles })
    }

    render() {

        return (
            <div>
                <div className="container my-4">
                    <h1>Da!ly <i><b>N</b></i>ews</h1>
                    <div className="row my-3">
                        {
                            this.state.article.map((element) => {
                                console.log(element)
                                return <div className='col-md-3' key={element.url} >
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default News
