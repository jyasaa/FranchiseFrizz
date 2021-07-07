import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionimpossibleComponent } from './missionimpossible.component';

describe('MissionimpossibleComponent', () => {
  let component: MissionimpossibleComponent;
  let fixture: ComponentFixture<MissionimpossibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionimpossibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionimpossibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
