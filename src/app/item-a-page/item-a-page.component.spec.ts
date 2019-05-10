import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAPageComponent } from './item-a-page.component';

describe('ItemAPageComponent', () => {
  let component: ItemAPageComponent;
  let fixture: ComponentFixture<ItemAPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
