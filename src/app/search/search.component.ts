import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { GithubUser } from '../models/github-user.model';
import { GithubService } from '../services/github.service';

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
    private githubService: GithubService
  ) { }

  searchGithubProfile() {
    const username = this.form.value.username;
    this.githubService.searchByUsername(username)
      .subscribe(
        (user: GithubUser) => this.router.navigate(['/result']),
        (error) => this.router.navigate(['/404'])
      )
  }

}
