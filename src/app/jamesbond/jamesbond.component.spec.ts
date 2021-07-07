import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamesbondComponent } from './jamesbond.component';

describe('JamesbondComponent', () => {
  let component: JamesbondComponent;
  let fixture: ComponentFixture<JamesbondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JamesbondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JamesbondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
