import { Component, OnInit } from '@angular/core';
import { GithubUser } from '../../models/github-user.model';
import { GithubUserRepositories } from 'src/app/models/github-user-repositories.model';
import { GithubStoreService } from 'src/app/services/githubStore.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {

  private user: GithubUser;
  private repositories: GithubUserRepositories;

  constructor(private githubStoreService: GithubStoreService) {  }

  ngOnInit() {
    this.user = this.githubStoreService.getUser();
    this.repositories = this.githubStoreService.getUserRepo();
  }

}
