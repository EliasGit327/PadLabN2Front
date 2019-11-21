import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import {MatSnackBar} from '@angular/material';
import {LogLevel} from '@aspnet/signalr';
import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-kafka',
  templateUrl: './kafka.component.html',
  styleUrls: ['./kafka.component.css']
})
export class KafkaComponent implements OnInit {

  constructor(
    private matSnackBar: MatSnackBar,
    private http: HttpClient
  ) {

    const connection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/hub', {})
      .configureLogging(LogLevel.Information)
      .build();

    connection.on('notify', obj => {
      this.callSnackBar(obj.message);
    });

    connection.on('message', obj => {
      this.messages.push(obj.body);
    });

    connection.start();

  }

  messages: string[] = [];
  messageToPost = '';

  ngOnInit() {}

  callSnackBar(text: string) {
    this.matSnackBar.open(text, null, {duration: 1000});
  }

  onSendBtnClick() {
    if (this.messageToPost.length > 0) {
      this.produceMessage(this.messageToPost);
      // this.messages.push(this.messageToPost);
      this.messageToPost = '';
    }
  }

  produceMessage(bodyIn: string) {
    this.http.post(`https://localhost:5001/api`, {body: bodyIn})
      .subscribe(() => {
        },
        (error: HttpErrorResponse) => {
          this.callSnackBar(error.message);
        });
  }
}

