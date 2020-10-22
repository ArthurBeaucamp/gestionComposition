import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionLyricsChorusComponent } from './composition-lyrics-chorus.component';

describe('CompositionLyricsChorusComponent', () => {
  let component: CompositionLyricsChorusComponent;
  let fixture: ComponentFixture<CompositionLyricsChorusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositionLyricsChorusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionLyricsChorusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
