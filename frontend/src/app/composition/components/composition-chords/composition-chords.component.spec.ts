import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionChordsComponent } from './composition-chords.component';

describe('CompositionChordsComponent', () => {
  let component: CompositionChordsComponent;
  let fixture: ComponentFixture<CompositionChordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositionChordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionChordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
