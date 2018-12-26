import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';
import { IconComponent } from '../icon/icon.component';
import { GithubUser } from 'src/app/models/github-user.model';
import { GithubUserRepositories } from 'src/app/models/github-user-repositories.model';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;
  let mockUser = new GithubUser();
  let mockRepo = new GithubUserRepositories();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IconComponent,
        UserInfoComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockUser.name = "Test";
    mockUser.location = "São Paulo";
    mockUser.company = "";

    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    component.user = mockUser;
    component.repositories = mockRepo;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should should return true when object property is defined', () => {
    expect(component.showProperty(component.user, "name")).toBe(false);
  });
});
