import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptinFormComponent } from './subscriptin-form.component';

describe('SubscriptinFormComponent', () => {
  let component: SubscriptinFormComponent;
  let fixture: ComponentFixture<SubscriptinFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptinFormComponent]
    });
    fixture = TestBed.createComponent(SubscriptinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
