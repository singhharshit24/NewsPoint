import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        category: 'general'
    }
    static propTypes = {
        category: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            article: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `NewsPoint - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`
    }

    updatePage = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0511b5d5b6d54e549084bf48187a0dbd&page=${this.state.page}&pagesize=12`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            article: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0511b5d5b6d54e549084bf48187a0dbd&page=${this.state.page}&pagesize=12`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // // console.log(parsedData);
        // this.setState({
        //     article: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
        this.updatePage()
    }

    handlenext = async () => {
        if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 12)) {
            // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0511b5d5b6d54e549084bf48187a0dbd&page=${this.state.page + 1}&pagesize=12`;
            // this.setState({ loading: true })
            // let data = await fetch(url);
            // let parsedData = await data.json();
            // // console.log(parsedData);
            // this.setState({
            //     article: parsedData.articles,
            //     page: this.state.page + 1,
            //     totalResults: parsedData.totalResults,
            //     loading: false
            // })
            //         this.setState({
            //             page: this.state.page + 1
            //         })
            this.updatePage()
        }

    }

    handleprev = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0511b5d5b6d54e549084bf48187a0dbd&page=${this.state.page - 1}&pagesize=12`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // // console.log(parsedData);
        // this.setState({
        //     article: parsedData.articles,
        //     page: this.state.page - 1,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
        //     this.setState({
        //         page: this.state.page - 1
        //     })
        this.updatePage()
    }

    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0511b5d5b6d54e549084bf48187a0dbd&page=${this.state.page+1}&pagesize=12`;
        this.setState({
            page: this.state.page + 1
        })
        // this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            article: this.state.article.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    }

    render() {

        return (
            <div className='container my-4'>
                {/* <div className="container my-4"> */}
                <h1><strong><i>N</i>ews<b>P</b>o!nt</strong> - Da!ly {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} <i><b>N</b></i>ews</h1>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.article.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.article.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row my-3">
                            {
                                this.state.article.map((element) => {
                                    // console.log(element)
                                    return <div className='col-md-3' key={element.url} >
                                        <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
                                            description={element.description ? element.description.slice(0, 80) : "Click below to read more"}
                                            imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={new Date(element.publishedAt).toGMTString()}
                                            author={element.author ? element.author : "Unknown"} source={element.source.name} />
                                    </div>
                                })
                            }
                        </div>
                    </div>

                </InfiniteScroll>
                {/* </div> */}
                {/* <div className="container" >
                    <div className="btn-group mb-4" style={{ float: "right" }} role="group" aria-label="Basic example">
                        <button type="button" disabled={this.state.page <= 1 ? true : false} className="btn btn-dark" onClick={this.handleprev}>&larr; Previous</button>
                        <button type="button" disabled={this.state.page === Math.ceil(this.state.totalResults / 12) ? true : false} className="btn btn-dark" onClick={this.handlenext} >Next &rarr;</button>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default News
