import 'isomorphic-fetch';
import React, { Component } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';


class CreateArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: [],
      tag: '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleQuillChange = this.handleQuillChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleTitleChange = (t) => {
    this.setState({title: t.target.value, })
  }

  handleTagsChange(tags) {
    this.setState({tags: tags,});
  }

  handleQuillChange = (q) => {
    this.setState({content: q, })
  }

  handleSubmitClick = () => {
    const confirm = window.confirm('Are you sure you want to add this new article?');
    if (confirm) {
      // send POST by fetch
      fetch('/api/articles/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.state.title,
          content: this.state.content,
          tags: this.state.tags,
        }),
      })
      .then( () => this.clearState())
      .then( () => document.location.href= "#/articles");
    }
  }


  clearState = () => {
    this.setState({title: '', content: '', tags: [], tag: '',});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button
              className="btn btn-info pull-right"
              role="button"
              onClick={this.handleSubmitClick}
            >Submit</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input type="text" className="form-control" value={this.state.title} onChange={this.handleTitleChange} placeholder="New Title"></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TagsInput value={this.state.tags} onChange={this.handleTagsChange}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
             <ReactQuill theme="snow" value={this.state.content} onChange={this.handleQuillChange}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateArticlePage;
