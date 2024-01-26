import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteShufflerComponent } from './quote-shuffler.component';

describe('QuoteShufflerComponent', () => {
  let component: QuoteShufflerComponent;
  let fixture: ComponentFixture<QuoteShufflerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteShufflerComponent]
    });
    fixture = TestBed.createComponent(QuoteShufflerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
