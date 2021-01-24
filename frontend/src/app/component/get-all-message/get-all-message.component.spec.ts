import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllMessageComponent } from './get-all-message.component';

describe('GetAllMessageComponent', () => {
  let component: GetAllMessageComponent;
  let fixture: ComponentFixture<GetAllMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
