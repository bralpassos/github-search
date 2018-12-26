import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { LoadingComponent } from '../loading/loading.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        LoadingComponent,
        SearchComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should redirect to "/404" page when call showErrorPage method', () => {
    let component = fixture.componentInstance;
    let navigateSpy = spyOn((<any>component).router, 'navigate');

    component.showErrorPage();
    expect(navigateSpy).toHaveBeenCalledWith(['/404']);
  })

  describe('when call showProfilePage method', () => {
    let repositoriesMock, component, navigateSpy;

    beforeEach(() => {
      repositoriesMock = { test: true };
      component = fixture.componentInstance;
      navigateSpy = spyOn((<any>component).router, 'navigate');
      component.showProfilePage(repositoriesMock);
    });

    it('should set property "loading" to false', () => {
      expect(component.loading).toBe(false);
    })
    
    it('should redirect to "/result/" page', () => {
      component.showProfilePage(repositoriesMock);
      expect(navigateSpy).toHaveBeenCalledWith(['/result/']);
    })
  });

});
