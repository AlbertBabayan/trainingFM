import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import { IFilterUser } from 'src/app/infrastructure/interfaces';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  constructor() { }

  userName = new FormControl('');

  users: IFilterUser[] = [
    {
      name: 'Alex'
    },
    {
      name: 'Marti'
    },
    {
      name: 'Malman'
    },
    {
      name: 'Gloria'
    }
  ]

  forFilter = (item: IFilterUser, search: string) => item.name.includes(search);

  ngOnInit(): void {
  }

}
