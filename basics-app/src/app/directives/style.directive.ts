import {Directive, ElementRef, Renderer2, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appStyle]'
})

export class StyleDirective {

    @Input('appStyle') color: string = 'blue';
    @Input() fontWeight = 'normal'

    constructor(private el: ElementRef, private r: Renderer2 ) {
        // this.r.setStyle(this.el.nativeElement, 'color', 'blue');
    }

    @HostListener('click', ['$event.target']) onClick(event: Event) {
        console.log(event);
    }

    @HostListener('mouseenter') onEnter() {
        this.r.setStyle(this.el.nativeElement, 'color', this.color);
        this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);

    }

    @HostListener('mouseleave') onLeave() {
        this.r.setStyle(this.el.nativeElement, 'color', null);
        this.r.setStyle(this.el.nativeElement, 'fontWeight', null);

    }
}
