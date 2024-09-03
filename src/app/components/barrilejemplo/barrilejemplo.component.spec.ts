import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrilejemploComponent } from './barrilejemplo.component';

describe('BarrilejemploComponent', () => {
  let component: BarrilejemploComponent;
  let fixture: ComponentFixture<BarrilejemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarrilejemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrilejemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
