import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChapitreComponent } from './detail-chapitre.component';

describe('DetailChapitreComponent', () => {
  let component: DetailChapitreComponent;
  let fixture: ComponentFixture<DetailChapitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChapitreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailChapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
