import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDeErrorComponent } from './pagina-de-error.component';

describe('PaginaDeErrorComponent', () => {
  let component: PaginaDeErrorComponent;
  let fixture: ComponentFixture<PaginaDeErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaDeErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
