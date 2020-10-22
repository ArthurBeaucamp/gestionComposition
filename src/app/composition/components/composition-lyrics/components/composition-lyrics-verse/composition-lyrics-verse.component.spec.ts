import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionLyricsVerseComponent } from './composition-lyrics-verse.component';

describe('CompositionLyricsVerseComponent', () => {
  let component: CompositionLyricsVerseComponent;
  let fixture: ComponentFixture<CompositionLyricsVerseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositionLyricsVerseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionLyricsVerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
