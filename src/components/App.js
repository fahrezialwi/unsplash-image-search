import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import axios from 'axios'

class App extends Component {

    state = {
        images: []
    }
    
    onSearchSubmit = (keyword) => {
        // axios.get('',{}).then(()=>{}).catch(()=>{})

        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                params: {
                    client_id: '0d447f2b383da5e6c1e4dad0d077879ca1995c05048520c3ecb10e6249e2d091',
                    query: keyword
                }
            }

        ).then((res) => {
            // Jika berhasil
            // console.log('Berhasil')
            this.setState({images: res.data.results})

        }).catch((err) => {
            // Jika gagal
            console.log(err.message)
        })
    }

    render(){
        return (
            <div className="container">
                <SearchBar fun = {this.onSearchSubmit} />
                <ImageList data = {this.state.images}/>
            </div>
        )
    }
}

export default App

/* 
    JSX adalah syntax yang disediakan oleh Javascript untuk memudahkan developer menyusun HTML di Javascript
*/