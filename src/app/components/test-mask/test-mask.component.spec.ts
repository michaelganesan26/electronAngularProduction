import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMaskComponent } from './test-mask.component';

describe('TestMaskComponent', () => {
  let component: TestMaskComponent;
  let fixture: ComponentFixture<TestMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
