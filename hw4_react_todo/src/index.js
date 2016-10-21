const { Component } = React;

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { todoCount: 0, completeCount: 0, txt: ''};

    // 一定要Bind, Bind handler here!
    this.newTodo = this.newTodo.bind(this);
    this.clearComplete = this.clearComplete.bind(this);
    this.inputWords = this.inputWords.bind(this);
    this.updateTxt = this.updateTxt.bind(this);
  }

  updateTxt(t){
    this.setState({txt: t});
  }
 

  newTodo(e){
  	// 只能用 setState 去改變 state
    // 直接修改 this.state 是無法自動觸發變更的
    if(e.key === 'Enter'){
      this.setState({todoCount: this.state.todoCount + 1});
      const ul = document.getElementById('todolist');

      const li = document.createElement("li");
      li.className = "main";
      li.className += "todo-list";
      //li.setAttribute("id", "notComplete");

      const div = document.createElement("div");
      div.className = "view";

      const input = document.createElement("input");
      input.className = "toggle";
      input.type = "checkbox";

      const label = document.createElement("label");
      label.appendChild(document.createTextNode(this.state.txt));

      const button = document.createElement("button");
      button.className = "destroy";

      div.appendChild(input);
      div.appendChild(label);
      div.appendChild(button);
      li.appendChild(div);
      ul.appendChild(li);

      this.updateTxt('');
    }
  }

  inputWords(w){
    this.updateTxt(w.target.value);
  }

  clearComplete(){

/*
var ul = document.getElementById("foo");
var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
  // do something with items[i], which is a <li> element
}
*/

  }
//update={this.inputWords}/>
  render() {
    return (
      <div>
        <Header
          value={this.state.txt}
          update={this.inputWords}
          newTodo={this.newTodo}/>
	      <TodoItem/>
	      <CountDisplay count={this.state.todoCount}/>
	      <Info/>
      </div>
    );
  }
}
//onChange={props.update}
const Header = (props) => <section className="todoapp">
  <header className="header">
    <h1>todos</h1>
    <input 
      className="new-todo" 
      placeholder="What needs to be done?"
      value={props.value}
      onChange={props.update}
      onKeyPress={props.newTodo}>
    </input>
  </header>
</section>


const TodoItem = () => <section className="main">
  <input className="toggle-all" type="checkbox"></input>
  <label htmlFor="toggle-all">Mark all as complete</label>
  <ul className="todo-list" id="todolist"></ul>
</section>

const CountDisplay = (props) => <footer className="footer">
  <span className="todo-count">{props.count} item(s) left</span>
  <button className="clear-completed">Clear completed</button>
</footer>

const Info = () => <footer className="info">
  <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
