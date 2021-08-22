import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividaPorPessoaTableComponent } from './divida-por-pessoa-table.component';

describe('DividaPorPessoaTableComponent', () => {
  let component: DividaPorPessoaTableComponent;
  let fixture: ComponentFixture<DividaPorPessoaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividaPorPessoaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividaPorPessoaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
