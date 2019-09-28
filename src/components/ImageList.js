import React, { Component } from 'react'

class ImageList extends Component {

    renderList = () => { 
        return this.props.data.map((item, index) => {
            return (
                <div 
                    className="col-4" 
                    key={index}
                >
                    <a 
                        href={item.urls.full} 
                        key={index} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={item.urls.regular} 
                            alt={item.description}
                            style={{
                                objectFit: "cover",
                                objectPosition: "50% 0",
                                height: "350px",
                                width: "350px",
                                marginBottom: "30px"
                            }}
                        />
                    </a>
                </div>
            ) 
        })
    }
    
    render() {
        return (
            <div className="row">
                {this.renderList()}
            </div>
        )
    }
}

export default ImageList