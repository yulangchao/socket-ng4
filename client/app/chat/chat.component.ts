import {Component} from '@angular/core';
import {ChatService} from './chat.service';
import {Router} from '@angular/router';
import { ToastComponent } from '../shared/toast/toast.component';

// Create metadata with the `@Component` decorator
@Component({
    // HTML tag for specifying this component
    selector: 'chat',
    templateUrl: './chat.component.html'
})
export class ChatComponent {

  // Initialize our `chatData.text` to an empty `string`
  chatData = {
    text: '',
    name: '',
    date: ''
  };

  mes = {
    text: '',
    name: '',
    date: ''
  };
  private chats: Array<any> = [];
  private check_chat: number = 0;
  private submit_name: number= 0;
  private length_check: number = 0;
  user = [];
  connection;
  message;
  constructor(private router: Router, public chatService: ChatService, public toast: ToastComponent) {
      console.log('Chat constructor go!');
      if (localStorage.getItem('token')) {
            this.chatData.name = JSON.parse(localStorage.getItem('token')).local.name;

            chatService.getAll()
            // `Rxjs`; we subscribe to the response
                .subscribe((res) => {

                    // Populate our `todo` array with the `response` data
                    this.chats = res;
                    this.length_check = this.chats.length;
                    // Reset `todo` input
                    this.chatData.text = '';
                });
      } else {
         this.chatData.name = "";
        router.navigate(['']);
      }

  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      if (message["type"] == 'userlist' ){
          this.user = message["text"].split(',');
          this.toast.setMessage(message["event"], 'info');
          console.log(message["event"]);
      }else {
      this.mes.name = message["text"].split(",")[0];
      this.mes.date = message["text"].split(",")[1];
      this.mes.text = message["text"].split(",")[2];
      this.chats.push(this.mes);
      }
    });
    this.chatService.sendMessage(JSON.parse(localStorage.getItem('token')).local.name+" added!!!");
  }

  ngOnDestroy() {
    this.chatService.sendMessage(JSON.parse(localStorage.getItem('token')).local.name+" left!!!");
    this.connection.unsubscribe();
  }

  createChat() {
    this.chatData.date = (new Date()).toString().split('G')[0];
      this.message = this.chatData.name+","+this.chatData.date+","+this.chatData.text;
      this.chatService.sendMessage(this.message);
      this.message = '';
      this.chatService.createChat(this.chatData)
        .subscribe((res) => {

            // Populate our `chat` array with the `response` data
            this.chats = res;
            // Reset `chat` input
            this.chatData.text = '';
        });

  }

  deleteChat(id) {

    this.chatService.deleteChat(id)
      .subscribe((res) => {

          // Populate our `chat` array with the `response` data
          this.chats = res;
      });
  }
}
