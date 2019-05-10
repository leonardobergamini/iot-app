import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEPageComponent } from './item-e-page.component';

describe('ItemEPageComponent', () => {
  let component: ItemEPageComponent;
  let fixture: ComponentFixture<ItemEPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
