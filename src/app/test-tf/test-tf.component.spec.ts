import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTFComponent } from './test-tf.component';

describe('TestTFComponent', () => {
  let component: TestTFComponent;
  let fixture: ComponentFixture<TestTFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
