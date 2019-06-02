import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';
import { Task } from './task.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 
  constructor(private _httpClient:HttpClient) { }
  get()
  {
   return this._httpClient.get(`${environment.url}/task/get`);
  }
  getByID(id:number)
  {
   return this._httpClient.get(`${environment.url}/task/get/${id}`);
  }
  delete(id:number)
  {
   return this._httpClient.delete(`http://api.mohamed-sadek.com/task/delete/${id}`);
  }
  post(task:Task)
  {
   return this._httpClient.post(`http://api.mohamed-sadek.com/task/post`,task);
  }
  
}
