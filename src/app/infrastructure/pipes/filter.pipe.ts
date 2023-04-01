import { Pipe, PipeTransform } from '@angular/core';
import { IFilterUser } from '../interfaces/filterUser.interface';


@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(users: IFilterUser[], callBack: (i: IFilterUser, s: string) => boolean, searchValue: string): IFilterUser[] {
    if (!searchValue.trim()) {
      return users;
    }
    return users.filter(i => callBack(i, searchValue));
  }
}
