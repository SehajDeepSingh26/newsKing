import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title, description, imgURL, newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgURL} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>      
                            {/* We can use target = '_blank' to get the link open in new tab */}
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
