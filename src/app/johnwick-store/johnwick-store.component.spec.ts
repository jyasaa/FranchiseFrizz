import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnwickStoreComponent } from './johnwick-store.component';

describe('JohnwickStoreComponent', () => {
  let component: JohnwickStoreComponent;
  let fixture: ComponentFixture<JohnwickStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JohnwickStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JohnwickStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
