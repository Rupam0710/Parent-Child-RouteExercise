import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneReserachComponent } from './one-reserach.component';

describe('OneReserachComponent', () => {
  let component: OneReserachComponent;
  let fixture: ComponentFixture<OneReserachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneReserachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneReserachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
