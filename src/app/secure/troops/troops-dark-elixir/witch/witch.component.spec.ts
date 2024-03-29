import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitchComponent } from './witch.component';

describe('WitchComponent', () => {
  let component: WitchComponent;
  let fixture: ComponentFixture<WitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WitchComponent]
    });
    fixture = TestBed.createComponent(WitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
