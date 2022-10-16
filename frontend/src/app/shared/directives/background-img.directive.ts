import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundImg]',
})
export class BackgroundImgDirective implements OnInit {
  rgbs = [
    {
      left: [125, 200, 238],
      right: [37, 96, 203],
    },
    {
      left: [203, 237, 105],
      right: [105, 128, 16],
    },
    {
      left: [235, 151, 231],
      right: [224, 94, 245],
    },
    {
      left: [120, 233, 117],
      right: [57, 94, 44],
    },
    {
      left: [237, 105, 113],
      right: [198, 23, 65],
    },
  ];

  rgb = Math.floor(Math.random() * 5);

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-image',
      `
      linear-gradient(to right, rgba(${this.rgbs[this.rgb].left[0]}, ${
        this.rgbs[this.rgb].left[1]
      }, ${this.rgbs[this.rgb].left[2]}, 0.9), rgba(${
        this.rgbs[this.rgb].right[0]
      }, ${this.rgbs[this.rgb].right[1]}, ${
        this.rgbs[this.rgb].right[2]
      }, 0.9)), url("https://source.unsplash.com/nYgy58eb9aw")
    `
    );
  }
}
