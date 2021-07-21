import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanGalleryComponent } from './fan-gallery.component';

describe('FanGalleryComponent', () => {
  let component: FanGalleryComponent;
  let fixture: ComponentFixture<FanGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
