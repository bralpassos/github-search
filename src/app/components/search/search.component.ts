import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { GithubUser } from '../../models/github-user.model';
import { GithubService } from '../../services/github.service';
import { GithubStoreService } from 'src/app/services/githubStore.service';

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
    private githubStoreService: GithubStoreService
  ) { }

  searchGithubProfile() {
    this.loading = true;
    this.githubService.searchUser(this.form.value.username)
      .subscribe(
        (user: GithubUser) => {
          this.searchUserRepostories(user)
        },
        (error) => this.showErrorPage()
      )
  }

  searchUserRepostories(user: GithubUser) {
    this.githubStoreService.saveUser(user);
    this.githubService.searchRepositories(this.form.value.username)
    .subscribe(
      (repositories) => this.showProfilePage(repositories),
      (error) => this.showErrorPage()
    )
  }

  showProfilePage(repositories) {
    this.githubStoreService.saveRepository(repositories);
    this.router.navigate([`/result/${this.form.value.username}`]);
    this.loading = false;
  }

  showErrorPage() {
    this.router.navigate(['/404']);
  }

}
