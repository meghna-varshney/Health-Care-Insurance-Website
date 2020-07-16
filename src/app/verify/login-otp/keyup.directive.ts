import {
  Directive,
  HostBinding,
  Input,
  ElementRef,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[krKeyup]"
})
export class KeyupDirective {}
