import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindsizeComponent } from './findsize.component';

describe('FindsizeComponent', () => {
  let component: FindsizeComponent;
  let fixture: ComponentFixture<FindsizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindsizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
