import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCPageComponent } from './item-c-page.component';

describe('ItemCPageComponent', () => {
  let component: ItemCPageComponent;
  let fixture: ComponentFixture<ItemCPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
