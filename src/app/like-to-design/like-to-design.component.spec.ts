import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeToDesignComponent } from './like-to-design.component';

describe('LikeToDesignComponent', () => {
  let component: LikeToDesignComponent;
  let fixture: ComponentFixture<LikeToDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeToDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeToDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
