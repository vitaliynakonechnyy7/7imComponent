import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderLightComponent } from './slider-light.component';

describe('SliderLightComponent', () => {
  let component: SliderLightComponent;
  let fixture: ComponentFixture<SliderLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
