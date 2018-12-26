import { Component, Inject, OnInit } from '@angular/core';
import { GithubUser } from '../../models/github-user.model';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {

  private user: GithubUser;
  private repositories;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {  }

  ngOnInit() {
    this.user = this.storage.get("github_user");
    this.repositories = this.storage.get("github_repositories");
  }

}
