import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumirTextoIaComponent } from './resumir-texto-ia.component';

describe('ResumirTextoIaComponent', () => {
  let component: ResumirTextoIaComponent;
  let fixture: ComponentFixture<ResumirTextoIaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumirTextoIaComponent]
    });
    fixture = TestBed.createComponent(ResumirTextoIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
