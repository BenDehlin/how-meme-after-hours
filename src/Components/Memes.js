import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Meme from './Meme'

class Memes extends Component{
  constructor(props){
    super(props)
    this.state = {
      memes: []
    }
  }

  componentDidMount(){
    axios.get('/api/memes').then(results => {
      this.setState({memes: results.data})
    })
  }

  updateMemes=(data)=>{
    this.setState({memes: data})
  }


  render(){
    return(
      <div>
        <Link to='/addmeme'>Add Meme</Link>
        {
          this.state.memes.map((element) => (
            <Meme key={element.id} memeInfo={element} updateMemes={this.updateMemes} />
          ))
        }
      </div>
    )
  }
}

export default Memes