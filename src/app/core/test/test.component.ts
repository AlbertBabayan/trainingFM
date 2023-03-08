import { Component, OnInit } from '@angular/core';
import { IChangeDirectory } from 'src/app/infrastructure/interfaces';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  users: IChangeDirectory[] = [
    {
      name: 'Alex',
      email: "asad@asd",
      age: 23,
      id: 1
    },
    {
      name: 'Marti',
      email: "asad@asd",
      age: 24,
      id: 2
    },
    {
      name: 'Malman',
      email: "asad@asd",
      age: 25,
      id: 3
    },
    {
      name: 'Gloria',
      email: "asad@asd",
      age: 26,
      id: 4
    },
  ]

  ngOnInit(): void {
  }

}
