import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsDemoComponent } from './modals-demo.component';

describe('ModalsDemoComponent', () => {
  let component: ModalsDemoComponent;
  let fixture: ComponentFixture<ModalsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
