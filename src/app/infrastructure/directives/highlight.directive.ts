import { AfterViewInit, Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit, OnChanges {
  @Input() public appHighlight: any = '';
  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    debugger;
    if (this.appHighlight) {
      this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML
        .replaceAll(this.appHighlight, this.replaceWithYellowText(this.appHighlight));
    }
  }


  ngAfterViewInit() {
  }

  private replaceWithYellowText(text: string): string {
    return `<span style="background: yellow">${text}</span>`
  }
}
