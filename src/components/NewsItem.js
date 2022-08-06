import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props
        return (
            <div>
                <div className="card my-2" style={{ width: "18rem" }} >
                    <img src={imageUrl?imageUrl:"https://static3.bigstockphoto.com/8/0/3/large1500/308500552.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
