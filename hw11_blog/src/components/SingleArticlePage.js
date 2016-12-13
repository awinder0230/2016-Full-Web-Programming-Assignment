import 'isomorphic-fetch';
import React, { Component, PropTypes } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';

class SingleArticlePage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: [],
      isEditing: false,
    };

    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDelClick = this.handleDelClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    // fetch with id
    fetch('/api/articles/'+this.props.id)
    .then(res => res.json())
    .then(json => { 
      this.setState({ title: json.title, content: json.content, tags: json.tags, });
    });
  }

  componentDidUpdate() {
    // fetch with id
  }

  handleTagsChange = (tags) => {
    this.setState({tags: tags,});
  };

  handleTitleChange = (t) => {
    this.setState({title: t.target.value});
  };

  handleQuillChange = (q) => {
    this.setState({content: q, })
  };
/*
  handleDelClick = () => {
    fetch('/api/articles/'+this.props.id, {
        method: 'DELETE',
      })
      .then( () => document.location.href= "#/articles")
      .then( () => console.log("I am here!"));
  };

*/
  handleDelClick = () => {
    const confirm = window.confirm('確定要刪除文章嗎？');
    if (confirm) {
      fetch('/api/articles/'+this.props.id, {
        method: 'DELETE'
      }).then( document.location.href = "#/articles");
      //.then( () => document.location.href= "#/articles")
    }
  };

  handleEditClick = () => {
    if(this.state.isEditing === false){
      this.setState({isEditing: true, });
    }
    else {
      this.setState({isEditing: false});
      fetch('/api/articles/', {
        method: 'PUT',
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
    }
  };

  renderTitle = () => {
    if(this.state.isEditing){
      return <input type="text" className="form-control" value={this.state.title} onChange={this.handleTitleChange}></input>;
    }
    else {
      return <h1>{this.state.title}</h1>;
    }
  };

  renderTags = () => {
    if(this.state.isEditing){
      return <TagsInput value={this.state.tags} onChange={this.handleTagsChange}/>;
      console.log("render tags");
      console.log(this.state.tags);
    }
    else {
      return <div>{this.state.tags}</div>;
    }  
  };

  renderContent = () => {
    if(this.state.isEditing){
      return <ReactQuill theme="snow" value={this.state.content} onChange={this.handleQuillChange}/>;
    }
    else {
      return <div dangerouslySetInnerHTML={{__html: this.state.content}}/>;
    }
  };

  render() {
    const { isEditing } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              {this.renderTitle()}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.renderTags()}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {this.renderContent()}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button
              className="btn btn-info"
              role="button"
              onClick={this.handleEditClick}
            >{isEditing ? '確認' : '編輯'}</button>
            {isEditing ? null :
            <button
              className="btn btn-warning"
              role="button"
              onClick={this.handleDelClick}
            >刪除</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SingleArticlePage;
