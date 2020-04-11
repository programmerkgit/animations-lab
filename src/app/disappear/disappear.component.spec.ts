import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisappearComponent } from './disappear.component';

describe('DisappearComponent', () => {
  let component: DisappearComponent;
  let fixture: ComponentFixture<DisappearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisappearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisappearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
