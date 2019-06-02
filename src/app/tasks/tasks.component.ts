import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 name:string="Mohamed";
 date:Date=new Date();
 tasks:Task[]=[];
  constructor(private _taskService:TaskService,private _httpClient:HttpClient) { }

  ngOnInit() {
   this.getTasks();
  }
  getTasks()
  {
    
    this._taskService.get().subscribe(
      response=>{
        this.tasks=response as Task[];
      },
      error=>{
        alert("sorry error");
      },
      ()=>{
      });
  }
  getPendingTasksCount():number
  {
    return this.tasks.filter(task=>!task.Done).length;
  }
  add(title:string)
  {
    let task:Task=new Task();
    task.Title=title;
    
    this._httpClient.post("http://api.mohamed-sadek.com/task/post",task).subscribe(
    response=>{
      task.ID=response as number;
      this.tasks.push(task);
    },
    error=>{}
    );
  }
  update(task:Task)
  {
    // if(task.Done)
    // {
    //   task.Done=false;
    // }
    // else
    // {
    //    task.Done=true;
    // }
    task.Done=!task.Done;
    this._httpClient.put("http://api.mohamed-sadek.com/task/put",task).subscribe(
      response=>{
      },
      error=>{
        task.Done=!task.Done;
      }
      );
  }
  delete(index:number)
  {
    let id:number=this.tasks[index].ID;
    this._httpClient.delete(`http://api.mohamed-sadek.com/task/delete/${id}`).subscribe(
      response=>{
        this.tasks.splice(index,1);
      },
      error=>{
        alert("sorry error");
      },
      ()=>{
      });
   
  }

}
