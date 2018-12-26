import { Component, Input } from '@angular/core';
import { GithubUserRepositories } from 'src/app/models/github-user-repositories.model';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.scss']
})
export class UserRepositoriesComponent  {

  @Input() repositories: GithubUserRepositories;

  constructor() { }
    
  goToExternalURL(url: string) {
    window.location.href = url;
  }

}
