import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrmsConComponent } from './trms-con.component';

describe('TrmsConComponent', () => {
  let component: TrmsConComponent;
  let fixture: ComponentFixture<TrmsConComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrmsConComponent]
    });
    fixture = TestBed.createComponent(TrmsConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
