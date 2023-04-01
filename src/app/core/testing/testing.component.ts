import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserModule } from 'src/app/features/user/user.module';
import { IFilterUser } from 'src/app/infrastructure/interfaces/filterUser.interface';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  public mouse = 'mouse';
  private cat = 'cat';
  @ContentChild('temp2') temp2: TemplateRef<any>;

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

  private foo() {
    console.log(this.mouse, this.cat);
  }

  public foo_1() {
    console.log(this.mouse, this.cat);
  }

}
