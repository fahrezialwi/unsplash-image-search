import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        keyword: ''
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

// onSubmit, ketika tag input di dalam form di-enter
// e.preventDefault() akan menghentikan halaman dari refresh
// onChange, ketika ada perubahan di tag input text
// event.target.value adalah property berisi teks yang kita ketik
// this.setState() merupakan function untuk mengubah data pada state
// setState() akan menerima satu buah parameter yaitu object {}

// axios.get().then().catch()
// .then() akan menerima function yang akan dijalankan jika berhasil melakukan request
// (res) => {}, res akan berisi respon dari database
// .catch() akan menerima function yang akan dijalankan jika gagal request
// (err) => {}, err akan berisi pesan error