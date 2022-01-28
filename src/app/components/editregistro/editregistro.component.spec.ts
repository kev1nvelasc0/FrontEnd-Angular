import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditregistroComponent } from './editregistro.component';

describe('EditregistroComponent', () => {
  let component: EditregistroComponent;
  let fixture: ComponentFixture<EditregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
