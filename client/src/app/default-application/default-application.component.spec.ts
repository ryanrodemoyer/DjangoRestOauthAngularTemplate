import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultApplicationComponent } from './default-application.component';

describe('DefaultApplicationComponent', () => {
  let component: DefaultApplicationComponent;
  let fixture: ComponentFixture<DefaultApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
