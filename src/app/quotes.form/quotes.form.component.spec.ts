import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quotes.FormComponent } from './quotes.form.component';

describe('Quotes.FormComponent', () => {
  let component: Quotes.FormComponent;
  let fixture: ComponentFixture<Quotes.FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quotes.FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quotes.FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
