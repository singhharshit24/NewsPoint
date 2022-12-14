import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, publishedAt, author, source } = props
        return (
            <div>
                <div className="card my-2">
                    <img src={imageUrl ? imageUrl : "https://static3.bigstockphoto.com/8/0/3/large1500/308500552.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body" style={{ backgroundColor: "lightcyan", borderBottomLeftRadius: "7px", borderBottomRightRadius: "7px" }}>
                        <small style={{ color: "#adb5bd" }} >{publishedAt}</small><br />
                        <small>By {author}</small><br />
                        <small> <b>Source:</b> <i>{source}</i></small>
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
