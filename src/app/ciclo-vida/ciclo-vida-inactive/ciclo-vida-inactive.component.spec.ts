import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloVidaInactiveComponent } from './ciclo-vida-inactive.component';

describe('CicloVidaInactiveComponent', () => {
  let component: CicloVidaInactiveComponent;
  let fixture: ComponentFixture<CicloVidaInactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CicloVidaInactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CicloVidaInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
