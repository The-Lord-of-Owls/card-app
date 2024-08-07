import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckDisplayComponent } from './deck-display.component';

describe('DeckDisplayComponent', () => {
  let component: DeckDisplayComponent;
  let fixture: ComponentFixture<DeckDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
