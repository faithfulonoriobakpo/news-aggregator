import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNewsArticlesComponent } from './all-news-articles.component';

describe('AllNewsArticlesComponent', () => {
  let component: AllNewsArticlesComponent;
  let fixture: ComponentFixture<AllNewsArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllNewsArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllNewsArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
