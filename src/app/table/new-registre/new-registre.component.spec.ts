import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegistreComponent } from './new-registre.component';

describe('NewRegistreComponent', () => {
  let component: NewRegistreComponent;
  let fixture: ComponentFixture<NewRegistreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRegistreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRegistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
