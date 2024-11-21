import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloVidaAddComponent } from './ciclo-vida-add.component';

describe('CicloVidaAddComponent', () => {
  let component: CicloVidaAddComponent;
  let fixture: ComponentFixture<CicloVidaAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CicloVidaAddComponent],
    });
    fixture = TestBed.createComponent(CicloVidaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
