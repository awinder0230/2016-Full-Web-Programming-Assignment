import 'isomorphic-fetch';
import React, { Component } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

class ArticlesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };

    this.renderContent = this.renderContent.bind(this);
  }

  componentDidMount() {
    // fetch here
    fetch('/api/articles')
    .then(res => res.json())
    .then(json => { 
      this.setState({ articles: json });
    });
    console.log(this.state.articles);
  }

  renderContent = (content) => {
    return <div dangerouslySetInnerHTML={{__html: content}}/>;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
            {this.state.articles.map((article, index) => <ArticleList key={index + 1}
                title={article.title}
                href={"#/articles/"+article._id}
                tags={article.tags}
                //content={article.content.substr(0,20)}
                content={this.renderContent(article.content)}/>)}
        </div>
      </div>
    );
  }
}

export default ArticlesPage;

const ArticleList = props => <div className="list-group">
  <a href={props.href} className="list-group-item list-group-item-action">
    <h5 className="list-group-item-heading">{props.title}</h5>
    <p className="list-group-item-text">{props.content}</p>
  </a>
</div>

const ArticlesList = props => <div className="col-md-12">
  <div className="col-md-6">
    <a href={props.href}>{props.title}</a>
  </div>
  <div className="col-md-3">
    <h1>{props.tags}</h1>
  </div>
  <div>
    <h1></h1>
  </div>
</div>
