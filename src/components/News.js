import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = []
    constructor() {
        super();
        console.log('Hello i am constructor');
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1
        }

    }
    async componentDidMount() {
        console.log('cdm'); // component-did-mount runs after the render function.
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c4d44dafae0a43bd873d99bbcc08504b&page=1";

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.setState({
            articles: data.articles,
            loading: false
        });

    }
    // asyn
    render() {
        return (

            <div className='container my-3'>
                <h2>NewsMoneky - Top Headlines</h2>
                <div className="row">
                    {this.state.articles?.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imgURL={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}


                </div>
                <div className="container">
                    <button type="button" class="btn btn-dark">Previous</button>
                    <button type="button" class="btn btn-dark">Next</button>
                </div>
            </div>
        )
    }
}

export default News
