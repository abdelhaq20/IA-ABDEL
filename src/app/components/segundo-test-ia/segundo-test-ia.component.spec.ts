import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoTestIaComponent } from './segundo-test-ia.component';

describe('SegundoTestIaComponent', () => {
  let component: SegundoTestIaComponent;
  let fixture: ComponentFixture<SegundoTestIaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegundoTestIaComponent]
    });
    fixture = TestBed.createComponent(SegundoTestIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
