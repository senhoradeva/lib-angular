import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDevaTooltipComponent } from './ngx-deva-tooltip.component';

describe('NgxDevaTooltipComponent', () => {
  let component: NgxDevaTooltipComponent;
  let fixture: ComponentFixture<NgxDevaTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDevaTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDevaTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
