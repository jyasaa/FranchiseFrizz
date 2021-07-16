import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionimpossibleStoreComponent } from './missionimpossible-store.component';

describe('MissionimpossibleStoreComponent', () => {
  let component: MissionimpossibleStoreComponent;
  let fixture: ComponentFixture<MissionimpossibleStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionimpossibleStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionimpossibleStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
