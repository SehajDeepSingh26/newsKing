import React, { Component } from 'react'
import NewsItem from './NewsItem';
// @ts-ignore
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    
    }

    constructor() {
        super();
        console.log('Hello i am constructor');
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }

    }
    async componentDidMount() {
        console.log('cdm'); // component-did-mount runs after the render function.
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c4d44dafae0a43bd873d99bbcc08504b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
            articles: parseddata.articles,
            totalResults: parseddata.totalResults,
            loading: false
        })

    }
    handlePrevBtn = async () => {
        console.log('prev');
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c4d44dafae0a43bd873d99bbcc08504b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parseddata.articles,
            loading: false
        })
    }
    handleNextBtn = async () => {
        console.log('next');
        if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c4d44dafae0a43bd873d99bbcc08504b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parseddata = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parseddata.articles,
                loading: false
            })
        }
    }
    // asyn
    render() {
        return (

            <div className='container my-3'>
                <h1 className="text-center" style={{margin: '35px 0px'}}>
                    <h2>NewsMoneky - Top Headlines</h2>
                    {this.state.loading && <Spinner />}
                </h1>
                <div className="row">
                    {!this.state.loading && this.state.articles?.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,80):""} imgURL={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}


                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevBtn}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextBtn}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
