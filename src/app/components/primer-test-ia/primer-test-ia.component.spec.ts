import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerTestIaComponent } from './primer-test-ia.component';

describe('PrimerTestIaComponent', () => {
  let component: PrimerTestIaComponent;
  let fixture: ComponentFixture<PrimerTestIaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimerTestIaComponent]
    });
    fixture = TestBed.createComponent(PrimerTestIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
