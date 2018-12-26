import { Component, Input } from '@angular/core';
import { GithubUser } from 'src/app/models/github-user.model';
import { GithubUserRepositories } from 'src/app/models/github-user-repositories.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent {

  @Input() user: GithubUser;
  @Input() repositories: GithubUserRepositories;

  constructor() { }

  showProperty(element: object, prop: string) {
    return element.hasOwnProperty(name);
  }

}
