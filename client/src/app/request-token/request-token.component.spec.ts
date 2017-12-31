import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTokenComponent } from './request-token.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "../auth.service";

describe('RequestTokenComponent', () => {
  let component: RequestTokenComponent;
  let fixture: ComponentFixture<RequestTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTokenComponent ],
      imports: [HttpClientModule],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
