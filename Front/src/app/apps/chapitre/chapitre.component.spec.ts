import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapitreComponent } from './chapitre.component';

describe('ChapitreComponent', () => {
  let component: ChapitreComponent;
  let fixture: ComponentFixture<ChapitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapitreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
