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
  }

  componentDidMount() {
    // fetch here
    fetch(`/api/articles`)
    .then(res => res.json())
    .then(json => { 
      this.setState({ articles: json });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            {this.state.articles.map((article, index) => <ArticlesList key={index + 1}
                title={article.title}
                href={"#/articles/"+(index+1).toString()}
                tags={article.tags}/>)}
        </div>
      </div>
    );
  }
}

export default ArticlesPage;

const ArticlesList = props => <div className="col-md-12">
  <div className="col-md-3">
    <h1 href={props.href}>{props.title}</h1>
  </div>
  <div className="col-md-9">
    <TagsInput value={props.tags}/>
  </div>
</div>
