import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneComponent } from './clone.component';

describe('CloneComponent', () => {
  let component: CloneComponent;
  let fixture: ComponentFixture<CloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloneComponent]
    });
    fixture = TestBed.createComponent(CloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
