import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiratesofthecaribbeanStoreComponent } from './piratesofthecaribbean-store.component';

describe('PiratesofthecaribbeanStoreComponent', () => {
  let component: PiratesofthecaribbeanStoreComponent;
  let fixture: ComponentFixture<PiratesofthecaribbeanStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiratesofthecaribbeanStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiratesofthecaribbeanStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
