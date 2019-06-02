import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../tasks/task.service';
import { Task } from '../tasks/task.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,private _taskService:TaskService) { }
  id:number=0;
  task:Task=new Task();
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params=>{
    this.id=+params.get('id');
    this._taskService.getByID(this.id).subscribe(response=>{
      this.task=response as Task;
    });
    });
  }

}
