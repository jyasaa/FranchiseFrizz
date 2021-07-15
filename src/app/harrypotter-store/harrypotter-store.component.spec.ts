import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarrypotterStoreComponent } from './harrypotter-store.component';

describe('HarrypotterStoreComponent', () => {
  let component: HarrypotterStoreComponent;
  let fixture: ComponentFixture<HarrypotterStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarrypotterStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarrypotterStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
