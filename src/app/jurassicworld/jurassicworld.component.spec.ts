import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurassicworldComponent } from './jurassicworld.component';

describe('JurassicworldComponent', () => {
  let component: JurassicworldComponent;
  let fixture: ComponentFixture<JurassicworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JurassicworldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JurassicworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
