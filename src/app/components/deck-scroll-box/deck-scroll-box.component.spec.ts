import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckScrollBoxComponent } from './deck-scroll-box.component';

describe('DeckScrollBoxComponent', () => {
  let component: DeckScrollBoxComponent;
  let fixture: ComponentFixture<DeckScrollBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckScrollBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckScrollBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
