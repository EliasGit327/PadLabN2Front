import {Component, OnInit} from '@angular/core';
import {RaftNode} from './models/RaftNode';

@Component({
  selector: 'app-raft',
  templateUrl: './raft.component.html',
  styleUrls: ['./raft.component.css']
})
export class RaftComponent implements OnInit {

  constructor() {}

  nodes: RaftNode[] = [];
  displayedColumns = ['message'];

  ngOnInit() {
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
}
