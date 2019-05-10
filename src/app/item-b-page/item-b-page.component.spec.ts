import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBPageComponent } from './item-b-page.component';

describe('ItemBPageComponent', () => {
  let component: ItemBPageComponent;
  let fixture: ComponentFixture<ItemBPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
