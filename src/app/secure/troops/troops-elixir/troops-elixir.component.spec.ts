import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElixirComponent } from './elixir.component';

describe('ElixirComponent', () => {
  let component: ElixirComponent;
  let fixture: ComponentFixture<ElixirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElixirComponent]
    });
    fixture = TestBed.createComponent(ElixirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
