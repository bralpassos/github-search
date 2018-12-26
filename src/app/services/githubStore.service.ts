import { Injectable } from '@angular/core';
import { GithubUser } from '../models/github-user.model';
import { GithubUserRepositories } from '../models/github-user-repositories.model';

@Injectable({
  providedIn: 'root'
})

export class GithubStoreService {

  private storageUser: GithubUser;
  private storageUserRepo: GithubUserRepositories;

  constructor () {}

  saveUser(user: GithubUser) {
    this.storageUser = user;
  }

  getUser(): GithubUser {
    return this.storageUser;
  }

  saveRepo(repo: GithubUserRepositories) {
    this.storageUserRepo = repo;
  }

  getUserRepo(): GithubUserRepositories {
    return this.storageUserRepo;
  }
}