import { Component, OnInit } from '@angular/core';
import { GithubUser } from '../../models/github-user.model';
import { GithubUserRepositories } from 'src/app/models/github-user-repositories.model';
import { GithubStoreService } from 'src/app/services/githubStore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {

  private user: GithubUser;
  private repositories: GithubUserRepositories;

  constructor(
    private githubStoreService: GithubStoreService,
    private router: Router
  ) {
    router.events.subscribe(() => this.loadUserData());
  }
  
  ngOnInit() {
    this.loadUserData();
    
    if (this.user === undefined) {
      this.router.navigate(['/']);
    }
  }

  loadUserData() {
    this.user = this.githubStoreService.getUser();
    this.repositories = this.githubStoreService.getUserRepository();
  }

}
