import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  message = '';
  messages: string[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.messages$.subscribe(messages => {
      this.messages = messages;
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }
}
