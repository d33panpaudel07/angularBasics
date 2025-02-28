import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingComponentComponent } from './receiving-component.component';

describe('ReceivingComponentComponent', () => {
  let component: ReceivingComponentComponent;
  let fixture: ComponentFixture<ReceivingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivingComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
