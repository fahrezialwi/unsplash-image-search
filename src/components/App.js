import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroller'
import '../style.css'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [],
            keyword: '',
            total: null,
            page: 2
        }
    }

    fetchMoreData = () => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                client_id: '0d447f2b383da5e6c1e4dad0d077879ca1995c05048520c3ecb10e6249e2d091',
                query: this.state.keyword,
                per_page: 12,
                page: this.state.page
            }
        }).then((res) => {
            if (res.data.results){
                this.setState(
                    (state) => ({
                        images: state.images.concat(res.data.results),
                        page: state.page + 1
                    })
                )
            }
        })
    }
    
    onSearchSubmit = (keyword) => {
        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                params: {
                    client_id: '0d447f2b383da5e6c1e4dad0d077879ca1995c05048520c3ecb10e6249e2d091',
                    query: keyword,
                    per_page: 12,
                }
            }
        ).then((res) => {
            this.setState({
                images: res.data.results,
                total: res.data.total,
                keyword: keyword
            })
        })
    }

    render(){   
        if (this.state.total === 0) {
            return (
                <div className="container">
                    <SearchBar fun = {this.onSearchSubmit} />
                    <div className="row">
                        <div className="col-12 text-center mt-2 mb-2">
                            No data found
                        </div>
                    </div>  
                </div>
            )     
        } else if (this.state.images.length === 0) {
            return (
                <div className="container">
                    <SearchBar fun = {this.onSearchSubmit} />
                </div>
            )
        } else if (this.state.images.length === this.state.total){
            return (
                <div className="container">
                    <SearchBar fun = {this.onSearchSubmit} />
                    <ImageList data = {this.state.movies} />
                    <div className="row">
                        <div className="col-12 text-center mt-2 mb-2">
                            All data loaded
                        </div>
                    </div>  
                </div>
            )
        } else {
            return (
                <div className="container">
                    <SearchBar fun = {this.onSearchSubmit} />
                    <ImageList data = {this.state.images} />
                    <InfiniteScroll
                        initialLoad = {false}
                        loadMore={this.fetchMoreData}
                        hasMore={true} 
                    >
                        <div className="row">
                            <div className="col-12 text-center mt-2 mb-2 bouncing-loader">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>  
                    </InfiniteScroll> 
                </div>
            )
        }
    }
}

export default App