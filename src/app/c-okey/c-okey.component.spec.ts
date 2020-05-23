import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COkeyComponent } from './c-okey.component';

describe('COkeyComponent', () => {
  let component: COkeyComponent;
  let fixture: ComponentFixture<COkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
