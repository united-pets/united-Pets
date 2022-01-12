import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemsToStoreComponent } from './add-items-to-store.component';

describe('AddItemsToStoreComponent', () => {
  let component: AddItemsToStoreComponent;
  let fixture: ComponentFixture<AddItemsToStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemsToStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemsToStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
