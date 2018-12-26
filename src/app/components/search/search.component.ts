import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { GithubUser } from '../../models/github-user.model';
import { GithubService } from '../../services/github.service';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  form = this.formBuilder.group({
    username: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private githubService: GithubService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  searchGithubProfile() {
    this.githubService.searchUser(this.form.value.username)
      .subscribe(
        (user: GithubUser) => this.searchUserRepostories(user),
        (error) => this.showErrorPage()
      )
  }

  searchUserRepostories(user: GithubUser) {
    this.storage.set("github_user", user);
    this.githubService.searchRepositories(this.form.value.username)
    .subscribe(
      (user: GithubUser) => this.showProfilePage(user),
      (error) => this.showErrorPage()
    )
  }

  showProfilePage(repositories) {
    this.storage.set("github_repositories", repositories);
    this.router.navigate(['/result']);
  }

  showErrorPage() {
    this.router.navigate(['/404']);
  }

}
