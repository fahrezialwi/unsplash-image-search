import React, { Component } from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.fun(this.state.keyword)
    }

    onChangeText = (e) => {
        this.setState({keyword: e.target.value})
    }

    render() {
        return (
            <div>
                <h3 className="text-center mt-3">Unsplash Image Search</h3>
                <form 
                    className="form-group mt-3 mb-5" 
                    onSubmit={this.onSubmitForm}> 
                    <input 
                        type="text" 
                        onChange = {this.onChangeText}
                        className="form-control" 
                        placeholder="What do you want to search?"/>
                </form>
            </div>
        )
    }
}

export default SearchBar