import {Component, OnInit} from '@angular/core';
import {RaftNode} from './models/RaftNode';
import {MatSnackBar} from '@angular/material';
import * as signalR from '@aspnet/signalr';
import {LogLevel} from '@aspnet/signalr';

@Component({
  selector: 'app-raft',
  templateUrl: './raft.component.html',
  styleUrls: ['./raft.component.css']
})
export class RaftComponent implements OnInit {

  constructor(
    private matSnackBarService: MatSnackBar
  ) {}

  nodes: RaftNode[] = [];
  displayedColumns = ['message'];


  ngOnInit() {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/hub', {})
      .configureLogging(LogLevel.Information)
      .build();

    connection.on('notify', obj => {
      this.callSnackBar(obj.message);
    });

    connection.on('message', obj => {
      console.log(`${obj.id}-${obj.message}`);
      console.log(this.nodes);
      this.nodes.find( n => n.id === obj.id).messages.push(obj.message);

    });

    connection.start();

    const first = new RaftNode();
    first.id = 1;
    first.name = 'first';
    first.messages.push('AAA', 'BBB', 'CCC', '1', '23', '2321', '2132312', '42141');

    const second = new RaftNode();
    second.id = 2;
    second.name = 'second';
    second.messages.push('ZZZ', 'CCC');

    const third = new RaftNode();
    third.id = 3;
    third.name = 'third';

    this.nodes.push(first, second, third);
  }

  convertToTableFormat(array: string[]): { message: string }[] {
    return array.map( s => ({message: s}));
  }

  callSnackBar(message: string) {
    this.matSnackBarService.open(message, null, { duration: 2000 });
  }
}
