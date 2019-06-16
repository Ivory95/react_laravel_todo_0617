<?php

use Illuminate\Database\Seeder;
use App\Todo;

class TodoSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $param = [
         'name' => 'ito',
         'title' => 'test1'
       ];
       $todo = new Todo;
       $todo->fill($param)->save();
       $param = [
        'name' => 'ito',
        'title' => 'test2'
      ];
      $todo = new Todo;
      $todo->fill($param)->save();
      $param = [
        'name' => 'ito',
        'title' => 'test3'
      ];
      $todo = new Todo;
      $todo->fill($param)->save();
    }
}
