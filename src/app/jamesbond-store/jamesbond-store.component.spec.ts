import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamesbondStoreComponent } from './jamesbond-store.component';

describe('JamesbondStoreComponent', () => {
  let component: JamesbondStoreComponent;
  let fixture: ComponentFixture<JamesbondStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JamesbondStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JamesbondStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
