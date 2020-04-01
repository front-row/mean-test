import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { ProductListingComponent } from './product/product-listing/product-listing.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
		imports: [
			RouterTestingModule
		],
      declarations: [
        AppComponent,
        MainMenuComponent,
        EmployeeDetailComponent,
        ProductListingComponent,
        ProductDetailComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mean-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mean-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('mean-test app is running!');
  });
});
