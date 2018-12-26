import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SESSION_STORAGE } from 'angular-webstorage-service';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: SESSION_STORAGE, useValue: {} },
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        LoadingComponent,
        LogoComponent,
        SearchComponent,
        NotFoundComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
