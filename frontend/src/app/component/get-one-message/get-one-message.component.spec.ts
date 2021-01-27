import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneMessageComponent } from './get-one-message.component';

describe('GetOneMessageComponent', () => {
  let component: GetOneMessageComponent;
  let fixture: ComponentFixture<GetOneMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
