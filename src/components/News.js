import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    document.title = `NewsPoint - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`

    const updatePage = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=12`;
        setLoading(true)
        props.setProgress(30)
        let data = await fetch(url);
        props.setProgress(60)
        let parsedData = await data.json();
        console.log(parsedData)
        setArticle(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        updatePage(()=>{});
        // eslint-disable-next-line
    }, []);

    // const handlenext = async () => {
    //     if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 12)) {
    //         updatePage()
    //     }
    // }

    // const handleprev = async () => {
    //     updatePage()
    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=12`;
        setPage(page + 1)
        // this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticle(article.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

    return (
        <div className='container my-4'>
            {/* <div className="container my-4"> */}
            <h1 style={{marginTop: "80px"}}><strong><i>N</i>ews<b>P</b>o!nt</strong> - Da!ly {props.category.charAt(0).toUpperCase() + props.category.slice(1)} <i><b>N</b></i>ews</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row my-3">
                        {
                            article.map((element) => {
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

News.defaultProps = {
    category: 'general'
}
News.propTypes = {
    category: PropTypes.string,
}

export default News
