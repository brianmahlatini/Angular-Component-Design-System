import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcdsComponent } from './acds.component';

describe('AcdsComponent', () => {
  let component: AcdsComponent;
  let fixture: ComponentFixture<AcdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcdsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
