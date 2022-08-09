import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDevaTooltipComponent } from './ngx-deva-tooltip.component';

describe(NgxDevaTooltipComponent.name, () => {
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
  it(`#${NgxDevaTooltipComponent.prototype.typesEffects.name} Shoud return direction top description tooltip `, () => {

		component.top = true;
		fixture.detectChanges();
		component.typesEffects(ClassesEffect);
		expect(component.classes).toEqual(ClassesEffect.TOP);
	});
  it(`#${NgxDevaTooltipComponent.prototype.typesEffects.name} Shoud return direction left description tooltip `, () => {

		component.left = true;
		fixture.detectChanges();
		component.typesEffects(ClassesEffect);
		expect(component.classes).toEqual(ClassesEffect.LEFT);
	});
  it(`#${NgxDevaTooltipComponent.prototype.typesEffects.name} Shoud return direction bottom description tooltip `, () => {

		component.bottom = true;
		fixture.detectChanges();
		component.typesEffects(ClassesEffect);
		expect(component.classes).toEqual(ClassesEffect.BOTTOM);
	});

  it(`#${NgxDevaTooltipComponent.prototype.typesEffects.name} Shoud return direction right description tooltip `, () => {

		component.right = true;
		fixture.detectChanges();
		component.typesEffects(ClassesEffect);
		expect(component.classes).toEqual(ClassesEffect.RIGHT);
	});

  it(`#${NgxDevaTooltipComponent.prototype.typesEffects.name} Shoud return direction top default description tooltip `, () => {
		fixture.detectChanges();
		component.typesEffects(ClassesEffect);
		expect(component.classes).toBe(ClassesEffect.TOP);
	});
});
enum ClassesEffect {
	TOP = 't-top',
	LEFT = 't-left',
	BOTTOM = 't-bottom',
	RIGHT = 't-right'
}
