import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiratesofthecaribbeanComponent } from './piratesofthecaribbean.component';

describe('PiratesofthecaribbeanComponent', () => {
  let component: PiratesofthecaribbeanComponent;
  let fixture: ComponentFixture<PiratesofthecaribbeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiratesofthecaribbeanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiratesofthecaribbeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
