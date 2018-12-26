import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubUser } from '../models/github-user.model';

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  private profile: GithubUser;

  constructor (private http: HttpClient) {}

  searchUser(username: string): Observable<GithubUser> {
    const url = `https://api.github.com/users/${username}`;
    return this.http.get<GithubUser>(url);
  }

  searchRepositories(username: string): Observable<GithubUser> {
    const url = `https://api.github.com/users/${username}/repos`;
    return this.http.get<GithubUser>(url);
  }
}