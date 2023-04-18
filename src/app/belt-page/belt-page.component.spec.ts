import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeltPageComponent } from './belt-page.component';

describe('BeltPageComponent', () => {
  let component: BeltPageComponent;
  let fixture: ComponentFixture<BeltPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeltPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeltPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
