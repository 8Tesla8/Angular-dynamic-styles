import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicStyleComponent } from './dynamic-style.component';

describe('DynamicStyleComponent', () => {
  let component: DynamicStyleComponent;
  let fixture: ComponentFixture<DynamicStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
