import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-deva-tooltip',
  template: `
   <section
	class="tooltip-wrapper tooltip"
  role="tooltip"
	[tabIndex]="tabIndex"
	[attr.data-tooltip-text]="description"
	[ngClass]="classes"
>
	<ng-content></ng-content>
</section>
  `,
  styles: [
    `
			:host {
				background-color: var(--bg-color);
				color: var(--color);
			}

			.tooltip-wrapper + .tooltip-wrapper {
				margin-top: 0.625rem;
			}

			.tooltip-wrapper {
				width: fit-content;
			}

			.tooltip {
				position: relative;
			}

			.tooltip::before {
				position: absolute;
				content: ' ';
				background-color: var(--bg-color);
				width: 0.625rem;
				height: 0.625rem;
				z-index: 500;
				opacity: 0;
				transition: all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms;
				pointer-events: none;
			}

			.tooltip::after {
				content: attr(data-tooltip-text);
				white-space: nowrap;
				background-color: var(--bg-color);
				border-radius: 0.313rem;
				color: var(--color);
				position: absolute;
				text-align: center;
				z-index: 555;
				opacity: 0;
				transition: all cubic-bezier(0.17, 0.67, 0.5, 0.71) 100ms;
				pointer-events: none;
				height: 1.875rem;
				display: flex;
				align-items: center;
				padding: 0 0.555555555555556rem;
			}

			.tooltip:hover::before,
			.tooltip:hover::after {
				opacity: 1;
			}

			.tooltip.t-top::before {
				top: 0;
				left: 50%;
				transform: translate(-50%, 0) rotate(45deg);
			}

			.tooltip.t-top::after {
				top: 0;
				left: 50%;
				transform: translate(-50%, 0);
			}

			.tooltip.t-top:hover::before {
				transform: translate(-50%, calc(-100% - 0.313rem)) rotate(45deg);
			}

			.tooltip.t-top:hover::after {
				transform: translate(-50%, calc(-100% - 0.625rem));
			}

			.tooltip.t-left::before {
				top: 25%;
				left: 0;
				transform: translate(0, 0%) rotate(45deg);
			}

			.tooltip.t-left::after {
				top: 0;
				left: 0;
			}

			.tooltip.t-left:hover::before {
				transform: translate(calc(-100% - 0.313rem)) rotate(45deg);
			}

			.tooltip.t-left:hover::after {
				transform: translate(calc(-100% - 0.625rem));
			}

			.tooltip.t-right::before {
				top: 25%;
				right: 0;
				transform: translate(0, 0%) rotate(45deg);
			}

			.tooltip.t-right::after {
				top: 0;
				right: 0;
			}

			.tooltip.t-right:hover::before {
				transform: translate(calc(100% + 0.313rem)) rotate(45deg);
			}

			.tooltip.t-right:hover::after {
				transform: translate(calc(100% + 0.625rem));
			}

			.tooltip.t-bottom::before {
				bottom: 0;
				left: 50%;
				transform: translate(-50%, 0) rotate(45deg);
			}

			.tooltip.t-bottom::after {
				bottom: 0;
				left: 50%;
				transform: translate(-50%, 0);
			}

			.tooltip.t-bottom:hover::before {
				transform: translate(-50%, calc(100% + 0.313rem)) rotate(45deg);
			}

			.tooltip.t-bottom:hover::after {
				transform: translate(-50%, calc(100% + 0.625rem));
			}
		`
  ]
})
export class NgxDevaTooltipComponent implements OnInit {

  @HostBinding('style.--bg-color') bgColor: string = '';
	@HostBinding('style.--color') color: string = '';

	@Input() top = false;
	@Input() left = false;
	@Input() bottom = false;
	@Input() right = false;
	@Input() description!: string;
	@Input() bgColorTooltip = '#000';
	@Input() colorTolltip = '#fff';
  @Input()  tabIndex!: number;

	public classes!: string;

	ngOnInit(): void {
		const styles = ClassesEffect;
		this.typesEffects(styles);
		this.bgColor = this.bgColorTooltip;
		this.color = this.colorTolltip;
	}

	typesEffects(styles = ClassesEffect):string {
			if (this.top) {
				return (this.classes = styles.TOP);
			}
			else if (this.left) {
				return (this.classes = styles.LEFT);
			}

			else if (this.bottom) {
				return (this.classes = styles.BOTTOM);
			}

		 else	if (this.right) {
				return (this.classes = styles.RIGHT);
			}
      else{
        return (this.classes = ClassesEffect.TOP);
      }
		}

}

enum ClassesEffect {
	TOP = 't-top',
	LEFT = 't-left',
	BOTTOM = 't-bottom',
	RIGHT = 't-right'
}
