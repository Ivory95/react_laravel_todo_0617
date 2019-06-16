import React,{ Component } from 'react';
import ReactDOM from 'react-dom';


function RenderRow(props){
  return props.todos.map(todo => {
    return (
      <tr key={todo.id} className="trans">
        <td>{todo.id}</td>
        <td>{todo.name}</td>
        <td>{todo.title}</td>
        <td><span className="delete" onClick={() => props.deleteTask(todo)}>delete</span></td>
      </tr>
    );
  })
}

export default class TodoApp extends Component {
  constructor(){
    super();
    this.state = {
      todos:[],
      name:'',
    }
    this.inputChange = this.inputChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

  }

  componentDidMount(){
    axios
    .get('api/get')
    .then(res => {
      this.setState({
        todos:res.data
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  inputChange(event){
    switch(event.target.name){
      case 'todo':
        this.setState({
          todo:event.target.value
        });
        break;
      case 'name':
          this.setState({
            name:event.target.value
          });
          break;
      default:
        break;
    }
  }
  addTodo(){
    if(this.state.todo == ''){
      return;
    }
    axios
    .post('/api/add',{
      title:this.state.todo,
      name:this.state.name
    })
    .then(res=>{
      this.setState({
        todos:res.data,
        todo:''
      });
    })
    .catch(error => {
      console.log(error)
    })
  }

  deleteTask(todo){
    axios
    .post('/api/del',{
      id:todo.id
    })
    .then(res=>{
      this.setState({
        todos:res.data,
      })
    })
    .catch(error => {
      console.log(error);
    })
  }
  render(){
    return (
      <React.Fragment>
      <div className="from-group mt-4">
        <label htmlFor="todo">タイトル(名前やカテゴリー)</label>
        <input type="text" className="form-control" name="name" onChange={this.inputChange}/>
        <label htmlFor="todo">新規Todo</label>
        <input type="text" className="form-control" name="todo" onChange={this.inputChange}/>
        <span className="add" onClick={this.addTodo}>Add Todo</span>
      </div>
      <div></div>
      <table className="mt-5 table">
      <thead>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Todo</th>
        <th>Click to Delete</th>
        </tr>
      </thead>
      <tbody>
      <RenderRow  todos={this.state.todos} deleteTask={this.deleteTask} />
      </tbody>
      </table>
      </React.Fragment>
    );
  }
}

if(document.getElementById('todoApp')){
  ReactDOM.render(<TodoApp />,document.getElementById('todoApp'));
}