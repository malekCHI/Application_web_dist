import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiteComponent } from './specialite.component';

describe('SpecialiteComponent', () => {
  let component: SpecialiteComponent;
  let fixture: ComponentFixture<SpecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
