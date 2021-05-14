import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCasesChartComponent } from './country-cases-chart.component';

describe('CountryCasesChartComponent', () => {
  let component: CountryCasesChartComponent;
  let fixture: ComponentFixture<CountryCasesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCasesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCasesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
