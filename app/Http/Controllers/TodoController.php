<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    public function index() {
        $todos = Todo::all()->toArray();
        return $todos;
    }

    public function store(Request $request) {
        $todo = new Todo([
            'title' => $request->input('title'),
            'description' => $request->input('description')
        ]);
        $todo->save();
        return response()->json('Todo task added successfully :).');
    }

    public function show($id) {
        $todo = Todo::find($id);
        return response()->json($todo);
    }
    
    public function update($id, Request $request) {
        $todo = Todo::find($id);
        $todo->update($request->all());
        return response()->json('Todo task updated successfully :).');
    }

    public function destroy($id) {
        $todo = Todo::find($id);
        $todo->delete();
        return response()->json('Todo task deleted successfully :).');
    }
}
