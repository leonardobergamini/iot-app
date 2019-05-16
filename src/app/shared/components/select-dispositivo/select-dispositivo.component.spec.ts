import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDispositivoComponent } from './select-dispositivo.component';

describe('SelectDispositivoComponent', () => {
  let component: SelectDispositivoComponent;
  let fixture: ComponentFixture<SelectDispositivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDispositivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
