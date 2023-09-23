import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExplanationComponent } from './dialog-explanation.component';

describe('DialogExplanationComponent', () => {
  let component: DialogExplanationComponent;
  let fixture: ComponentFixture<DialogExplanationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogExplanationComponent]
    });
    fixture = TestBed.createComponent(DialogExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
