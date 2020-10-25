import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiltHoverEffect3dComponent } from './tilt-hover-effect3d.component';

describe('TiltHoverEffect3dComponent', () => {
  let component: TiltHoverEffect3dComponent;
  let fixture: ComponentFixture<TiltHoverEffect3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiltHoverEffect3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiltHoverEffect3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
