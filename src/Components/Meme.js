import React, {Component} from 'react'
import axios from 'axios'

class Meme extends Component {
  constructor(){
    super()
    this.state = {}
  }

  delete = (id) => {
    axios.delete(`/api/memes/${id}`).then(results => {
      this.props.updateMemes(results.data)
    })
  }

  edit = (id) => {
    this.props.history.push(`/addmeme/${id}`)
  }

  render(){
    return(
      <div className="meme-box">
        <img src={`${this.props.memeInfo.url}`} alt='pic of meme' />
        <div>{this.props.memeInfo.title}</div>
        <button onClick={() => this.delete(this.props.memeInfo.id)}></button>
      </div>
    )
  }

}

export default Meme