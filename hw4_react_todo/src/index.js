/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-plusplus */
const { Component } = React; // eslint-disable-line

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoCount: 0,
      completeCount: 0,
      txt: '',
      todos: [],
      completeList: [],
      liClassName: [],
    };

    // 一定要Bind, Bind handler here!
    this.newTodo = this.newTodo.bind(this);
    this.clearComplete = this.clearComplete.bind(this);
    this.inputWords = this.inputWords.bind(this);
    this.updateTxt = this.updateTxt.bind(this);
    this.updateComplete = this.updateComplete.bind(this);
    this.destroy = this.destroy.bind(this);
    this.selectAll = this.selectAll.bind(this);
  }

  updateTxt(t) {
    this.setState({ txt: t });
  }

  updateComplete(c) {
    if (c.target.checked) {
      const tmp1 = this.state.completeList;
      const tmp2 = this.state.liClassName;
      tmp1[c.target.id] = '1';
      tmp2[c.target.id] = 'completed';
      this.setState({
        liClassName: tmp2,
        completeList: tmp1,
        todoCount: this.state.todoCount - 1,
        completeCount: this.state.completeCount + 1 });
    } else {
      const tmp1 = this.state.completeList;
      const tmp2 = this.state.liClassName;
      tmp1[c.target.id] = '0';
      tmp2[c.target.id] = '';
      this.setState({
        liClassName: tmp2,
        completeList: tmp1,
        todoCount: this.state.todoCount + 1,
        completeCount: this.state.completeCount - 1 });
    }
  }


  destroy(c) {
    const index = c.target.id;
    if (this.state.completeList[index] === '1') {
      this.setState({ completeCount: this.state.completeCount - 1 });
    } else {
      this.setState({ todoCount: this.state.todoCount - 1 });
    }
    if (index > -1) {
      const tmp1 = this.state.todos;
      const tmp2 = this.state.completeList;
      const tmp3 = this.state.liClassName;
      delete tmp1[index];
      delete tmp2[index];
      delete tmp3[index];
      this.setState({ todos: tmp1, completeList: tmp2, liClassName: tmp3 });
    }
  }

  newTodo(e) {
    if (e.key === 'Enter' && this.state.txt.trim() !== '') {
      this.setState({ todoCount: this.state.todoCount + 1 });
      this.setState({ todos: this.state.todos.concat([this.state.txt.trim()]) });
      this.setState({ completeList: this.state.completeList.concat(['0']) });
      this.setState({ liClassName: this.state.liClassName.concat(['']) });
      this.updateTxt('');
    }
  }

  inputWords(w) {
    this.updateTxt(w.target.value);
  }


  clearComplete() {
    const length = this.state.completeList.length;
    for (let i = length - 1; i >= 0; --i) {
      if (this.state.completeList[i] === '1') {
        const tmp1 = this.state.completeList;
        const tmp2 = this.state.todos;
        const tmp3 = this.state.liClassName;
        delete tmp1[i];
        delete tmp2[i];
        delete tmp3[i];
        this.setState({ completeList: tmp1, todos: tmp2, liClassName: tmp3 });
      }
    }
  }

  selectAll() {
    const length = this.state.completeList.length;
    const tmp1 = [];
    const tmp2 = [];
    for (let i = 0; i < length; ++i) {
      tmp1.concat(['1']);
      tmp2.concat(['completed']);
    }
    this.setState({ completeList: tmp1, liClassName: tmp2 });
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <Header value={this.state.txt} update={this.inputWords} newTodo={this.newTodo} />
          <section className="main">
            <TodoItemHeader selectAll={this.selectAll} />
            <ul className="todo-list" id="todolist">
              {this.state.todos.map((todo, index) => <TodoItem
                name={this.state.liClassName[index]}
                txt={todo}
                i={index}
                onCheck={this.updateComplete}
                destroy={this.destroy} />)}
            </ul>
          </section>
          <CountDisplay count={this.state.todoCount} clear={this.clearComplete} />
        </section>
        <Info />
      </div>
    );
  }
}

const Header = props => <header className="header">
  <h1>todos</h1>
  <input
    className="new-todo"
    placeholder="What needs to be done?"
    value={props.value}
    onChange={props.update}
    onKeyPress={props.newTodo}>
  </input>
</header>;

const TodoItemHeader = props => <div>
  <input className="toggle-all" type="checkbox" onChange={props.selectAll}></input>
  <label htmlFor="toggle-all">Mark all as complete</label>
</div>;

const TodoItem = props => <li className={props.name}>
  <div className="view">
    <input className="toggle" onChange={props.onCheck} type="checkbox" id={props.i}></input>
    <label>{props.txt}</label>
    <button className="destroy" id={props.i} onClick={props.destroy}></button>
  </div>
</li>;


const CountDisplay = props => <footer className="footer">
  <span className="todo-count">{props.count} item(s) left</span>
  <button className="clear-completed" onClick={props.clear}>Clear completed</button>
</footer>;

const Info = () => <footer className="info">
  <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>;

ReactDOM.render( // eslint-disable-line
  <TodoApp />,
  document.getElementById('root')// eslint-disable-line
);
