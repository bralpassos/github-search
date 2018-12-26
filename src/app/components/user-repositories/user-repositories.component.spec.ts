import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRepositoriesComponent } from './user-repositories.component';
import { IconComponent } from '../icon/icon.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserRepositoriesComponent', () => {
  let component: UserRepositoriesComponent;
  let fixture: ComponentFixture<UserRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IconComponent,
        UserRepositoriesComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
