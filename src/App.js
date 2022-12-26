import React, {Component} from 'react';
import {Button, TextField} from '@material-ui/core';

export default class Todo extends Component {
  constructor () {
    super ();
    this.state = {
      todo_array: [],
      task: '',
      taskmid:'',
      tasksur:'',
      taskaddr: '',
      taskpin:'',
      edit_task: '',
    };
  }

  onChangeTask = e => {
    this.setState ({
      task: e.target.value,
    });
  };
  onChangeTasksur = e => {
    this.setState ({
      tasksur: e.target.value,
    });
  };
  onChangeTaskmid = e => {
    this.setState ({
      taskmid: e.target.value,
    });
  };
  onChangeTaskcity = e => {
    this.setState ({
      taskcity: e.target.value,
    });
  };
  onChangeTaskaddr = e => {
    this.setState ({
      taskaddr: e.target.value,
    });
  };
  onChangeTaskpin = e => {
    this.setState ({
      taskpin: e.target.value,
    });
  };

  addTask = () => {
    let {todo_array, task, taskmid, tasksur, taskcity,taskaddr,taskpin} = this.state;
    let obj = {
      id: todo_array.length == 0 ? 1 : todo_array[todo_array.length - 1].id + 1,
      name: task,
      mid:taskmid,
      sur:tasksur,
      city:taskcity,
      add:taskaddr,
      pin:taskpin,
      is_editing: false,
      is_done: false,
    };
    todo_array.push (obj);
    this.setState ({
      todo_array: todo_array,
      task: '',
    });
  };

  edit = object => {
    let {todo_array} = this.state;

    let i = todo_array.findIndex (task => task.id === object.id);
    todo_array[i].is_editing = !todo_array[i].is_editing;

    todo_array.map (task => {
      task.id !== object.id
        ? (task.is_editing = false)
        : (task.is_editing = task.is_editing);
      return task;
    });

    this.setState ({
      todo_array: todo_array,
      edit_task: object.name,
    });
  };

  editTask = task => {
    this.setState ({
      edit_task: task,
     
    });
  };

  saveEditTask = object => {
    let {todo_array, edit_task} = this.state;
    let i = todo_array.findIndex (task => task.id === object.id);
    todo_array[i].name = edit_task;

    this.setState (
      {
        todo_array: todo_array,
        edit_task: '',
      },
      e => {
        this.edit (object);
      }
    );
  };

  delete = object => {
    let {todo_array} = this.state;
    let i = todo_array.findIndex (task => task.id === object.id);
    todo_array.splice (i, 1);
    this.setState ({
      todo_array: todo_array,
    });
  };

  done = object => {
    let {todo_array} = this.state;
    let i = todo_array.findIndex (task => task.id === object.id);
    todo_array[i].is_done = true;

    this.setState ({
      todo_array: todo_array,
    });
  };

  render () {
    return (
      <div>
        <div>
          <h2>WELCOME FARMERS</h2>
        </div>

        <div className='inp'>
          <TextField
            id="standard-basic"
            autoComplete="off"
            value={this.state.task}
            onChange={this.onChangeTask}
            placeholder="Name"
          />
          <TextField
          id="standard-basic"
          autoComplete="off"
          value={this.state.taskmid}
          onChange={this.onChangeTaskmid}
          placeholder="middle name"
        />
        <TextField
          id="standard-basic"
          autoComplete="off"
          value={this.state.tasksur}
          onChange={this.onChangeTasksur}
          placeholder="last name"
         /><br/><TextField
        id="standard-basic"
        autoComplete="off"
        value={this.state.taskcity}
        onChange={this.onChangeTaskcity}
        placeholder="city"
         /><TextField
         id="standard-basic"
         autoComplete="off"
         value={this.state.taskaddr}
         onChange={this.onChangeTaskaddr}
         placeholder="village"
          /><TextField
      id="standard-basic"
      autoComplete="off"
      value={this.state.taskpin}
      onChange={this.onChangeTaskpin}
      placeholder="pincode"
          />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.task == ''}
            onClick={this.addTask}
          >
            Add
          </Button>
        </div>

        {this.state.todo_array.length > 0
          ? <div>
              <table className="centerTable" style={{marginTop: 20}}>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {this.state.todo_array.map ((object, i) => {
                  return (
                    <tbody>
                      <tr>
                        <td>
                          {object.is_editing
                            ? <TextField
                                id="standard-basic"
                                value={this.state.edit_task}
                                onChange={e => this.editTask (e.target.value)}
                              />
                            : object.is_done
                                ? <s>{object.name}, {object.sur}, {object.add}, {object.pin}</s>
                                : <span>{object.name}, {object.mid}, {object.sur}<br/> {object.city}, {object.add}, {object.pin}</span>}
                        </td>
                        <td>
                          {object.is_editing
                            ? <div>
                                <Button
                                  className="button_style"
                                  variant="outlined"
                                  color="primary"
                                  size="small"
                                  disabled={this.state.edit_task == ''}
                                  onClick={e => this.saveEditTask (object)}
                                >
                                  Save
                                </Button>
                                <Button
                                  className="button_style"
                                  variant="outlined"
                                  color=""
                                  size="small"
                                  onClick={e => this.edit (object)}
                                >
                                  Cancel
                                </Button>
                              </div>
                            : <div>
                                <Button
                                  className="button_style"
                                  variant="outlined"
                                  color="primary"
                                  size="small"
                                  onClick={e => this.edit (object)}
                                >
                                  Edit
                                </Button>
                                <Button
                                  className="button_style"
                                  variant="outlined"
                                  color="secondary"
                                  size="small"
                                  disabled={object.is_done}
                                  onClick={e => this.done (object)}
                                >
                                  Done
                                </Button>
                                <Button
                                  className="button_style"
                                  variant="outlined"
                                  size="small"
                                  onClick={e => this.delete (object)}
                                >
                                  Delete
                                </Button>
                              </div>}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          : <h2>EMPTY!</h2>}
      </div>
    );
  }
}