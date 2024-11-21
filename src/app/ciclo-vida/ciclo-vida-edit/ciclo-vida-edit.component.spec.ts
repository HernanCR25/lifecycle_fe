import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloVidaEditComponent } from './ciclo-vida-edit.component';

describe('CicloVidaEditComponent', () => {
  let component: CicloVidaEditComponent;
  let fixture: ComponentFixture<CicloVidaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CicloVidaEditComponent],
    });
    fixture = TestBed.createComponent(CicloVidaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
