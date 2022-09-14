import axios from 'axios';

import React, { Component } from 'react';

class DisplayPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data:[],
        }
    }

    getPostComments = async () => {
        const id = this.props.id
        const postComments = await axios.get(`http://localhost:3000/getPostComment/${id}`)
      console.log(postComments.data.title)
      
    }


    componentDidMount() {
        // console.log("inside the componentDidMount");
        this.getPostComments();
        // console.log("data= " + this.state.data.posts)
    }


    render() {
        return (
            <div>
                 {this.state.data.map((item, idx) => {
                    return (
                        <DisplayPost id={item.id} />
                    )
                })}

            </div>
        );
    }
}

export default DisplayPost;