import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import * as io from 'socket.io-client';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {

  private url = 'http://us.richardyych.cc:80';
  private socket;

  constructor(public http:Http) {

  }

  getAll() {
      return this.http.get('/api/chat').map(res => res.json());
  }

  createChat(data) {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/chat', JSON.stringify(data),{headers: headers}).map(res => res.json());
  }

  deleteChat(id) {

      return this.http.delete(`/api/chat/${id}`).map(res => res.json());
  }


  sendMessage(message){
    this.socket.emit('add-message', message);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}
