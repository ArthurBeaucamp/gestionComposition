import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionStructureComponent } from './composition-structure.component';

describe('CompositionStructureComponent', () => {
  let component: CompositionStructureComponent;
  let fixture: ComponentFixture<CompositionStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositionStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
