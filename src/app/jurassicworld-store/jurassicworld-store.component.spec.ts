import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurassicworldStoreComponent } from './jurassicworld-store.component';

describe('JurassicworldStoreComponent', () => {
  let component: JurassicworldStoreComponent;
  let fixture: ComponentFixture<JurassicworldStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JurassicworldStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JurassicworldStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
