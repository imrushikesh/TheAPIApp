import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTaskComponent } from './random-task.component';

describe('RandomTaskComponent', () => {
  let component: RandomTaskComponent;
  let fixture: ComponentFixture<RandomTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
