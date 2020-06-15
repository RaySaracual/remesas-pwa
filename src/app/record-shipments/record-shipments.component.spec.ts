import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordShipmentsComponent } from './record-shipments.component';

describe('RecordShipmentsComponent', () => {
  let component: RecordShipmentsComponent;
  let fixture: ComponentFixture<RecordShipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordShipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
