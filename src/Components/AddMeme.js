import React, {Component} from 'react'
import axios from 'axios'

class AddMeme extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: 0,
      url: '',
      title: '',
      editing: false
    }
  }
  componentDidMount(){
    if(this.props.match.params.id){
      axios.get(`/api/memes/${this.props.match.params.id}`).then(results => {
        this.setState({
          id: results.data.id, 
          url: results.data.url, 
          title: results.data.title, 
          editing: true})
      })
    }
  }

  handleChange = ({name, value}) => {
    this.setState({[name]: value})
  }

  addMeme = (url, title) => {
    axios.post('/api/memes', {url, title}).then(results => {
      this.setState({id: 0, url: '', title: '', editing: false})
    })
    this.props.history.push('/memes')
  }

  updateMeme = (id, url, title) => {
    axios.put(`/api/memes/${id}`, {url, title}).then(results => {
      this.setState({id: 0, url: '', title: '', editing: false})
    })
    this.props.history.push('/memes')
  }

  render(){
    const {editing, id, url, title} = this.state
        return (
            <div className="add-box">
                <input
                    name='url'
                    onChange={e => this.handleChange(e.target)}
                    placeholder='Meme URL'
                    value={this.state.url}
                />
                <input
                    name='title'
                    onChange={e => this.handleChange(e.target)}
                    placeholder='Meme Title'
                    value={this.state.title}
                />
                {editing ? (
                    <button onClick={() => this.updateMeme(id, url, title)}>Update Meme!</button>
                ) : (
                    <button onClick={() => this.addMeme(url, title)}>Add Meme!</button>
                )}
            </div>
        );
  }
}

export default AddMeme