import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeComponent } from './freeze.component';

describe('FreezeComponent', () => {
  let component: FreezeComponent;
  let fixture: ComponentFixture<FreezeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreezeComponent]
    });
    fixture = TestBed.createComponent(FreezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
