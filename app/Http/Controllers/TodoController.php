<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;

class TodoController extends Controller
{
  public function getTodos(){
    $todos = Todo::all();
    return $todos;
  }
  public function addTodo(Request $request){
    $todo = new Todo;
    $todo->title = $request->title;
    $todo->name = $request->name;
    $todo->save();

    $todos = Todo::all();
    return $todos;
  }
  public function deleteTask(Request $request){
    $todo = Todo::find($request->id);
    $todo->delete();

    $todos = Todo::all();
    return $todos;
  }
}
