import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionLyricsComponent } from './composition-lyrics.component';

describe('CompositionLyricsComponent', () => {
  let component: CompositionLyricsComponent;
  let fixture: ComponentFixture<CompositionLyricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositionLyricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
