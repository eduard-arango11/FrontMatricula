import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasListComponent } from './matriculas-list.component';

describe('MatriculasListComponent', () => {
  let component: MatriculasListComponent;
  let fixture: ComponentFixture<MatriculasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
