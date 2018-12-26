import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { GithubUser } from '../../models/github-user.model';
import { GithubService } from '../../services/github.service';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { GithubUserRepositories } from 'src/app/models/github-user-repositories.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  private loading: boolean;

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
    this.loading = true;
    this.removeLocalData();
    this.githubService.searchUser(this.form.value.username)
      .subscribe(
        (user: GithubUser) => {
          this.searchUserRepostories(user)
        },
        (error) => this.showErrorPage()
      )
  }

  searchUserRepostories(user: GithubUser) {
    this.storage.set("github_user", user);
    this.githubService.searchRepositories(this.form.value.username)
    .subscribe(
      (repositories) => this.showProfilePage(repositories),
      (error) => this.showErrorPage()
    )
  }

  showProfilePage(repositories) {
    this.loading = false;
    this.storage.set("github_repositories", repositories);
    this.router.navigate(['/result', { user: this.form.value.username }]);
  }

  showErrorPage() {
    this.router.navigate(['/404']);
  }

  removeLocalData() {
    this.storage.remove("github_user");
    this.storage.remove("github_repositories");
  }

}
