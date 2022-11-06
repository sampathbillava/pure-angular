import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

interface formType {
  attribute: string;
  isVisible: boolean;
  isMandatory: boolean;
  isReadOnly: boolean;
  caption: string;
}

@Directive({
  selector: '[appHide],[appText]'
})
export class FormInputDirective {

  public inputList: formType[] = [
    { attribute: 'ATT1', isVisible: true, isMandatory: true, isReadOnly: true, caption: 'cap1' },
    { attribute: 'ATT2', isVisible: true, isMandatory: false, isReadOnly: true, caption: 'cap2' },
    { attribute: 'ATT3', isVisible: true, isMandatory: true, isReadOnly: false, caption: 'cap3' },
    { attribute: 'ATT4', isVisible: false, isMandatory: false, isReadOnly: false, caption: 'cap4' },
  ];

  @Input() set appHide(attCode: string) {
    (this.inputList.find(fi => fi.attribute == attCode)?.isVisible)
      ? this.renderer2.removeStyle(this.elRef.nativeElement, 'visibility')
      : this.renderer2.setStyle(this.elRef.nativeElement, 'visibility', 'hidden');
  }

  constructor(private elRef: ElementRef, private renderer2: Renderer2) { }

}


// try to re-use from old project
//import * as $ from 'jquery';
// interface formType {
//   attribute: string;
//   isVisible: boolean;
//   isMandatory: boolean;
//   isReadOnly: boolean;
//   caption: string;
// }

// @Directive({
//   selector: '[validator],[validator-continer],[validator-label]'
//   //selector: '[appFormInput]'
// })
// export class FormInputDirective implements OnInit {

//   public inputList: formType[] = [
//     { attribute: 'ATT1', isVisible: true ,isMandatory: true, isReadOnly:true, caption: 'cap1' },
//     { attribute: 'ATT2', isVisible: true ,isMandatory: false, isReadOnly:true, caption: 'cap2' },
//     { attribute: 'ATT3', isVisible: true ,isMandatory: true, isReadOnly:false, caption: 'cap3' },
//     { attribute: 'ATT4', isVisible: false ,isMandatory: false, isReadOnly:false, caption: 'cap4' },
//   ];

//   constructor() { }

//   ngOnInit(): void {
//     this.UpdateElement();
//   }

//   UpdateElement() {
//     if (this.inputList != undefined 
//       && this.inputList.length > 0) {
//         this.inputList.forEach(element => {
//           let name = element.attribute;
//           var label = $("[validator-label='" + name + "']");
//           var container = $("[validator-continer='" + name + "']" )[0];
//           var ele = $("[validator='" + name + "']")[0];

//           if (!element.isVisible) {
//             $(container).hide();
//           }
//           if (element.isMandatory) {
//             $(label).html(element.caption + " <span class='errorMsg'></span>")
//           }
//           if (element.isReadOnly && ele != undefined) {
//             $(ele).attr("disabled",true);
//             $(ele).prop("disabled", true);
//             $(ele).prop("disabled", true);
//             if ($(ele)[0] != undefined && $(ele)[0].attributes['ng-reflect-disable-input'] != undefined) {
//               $(ele)[0].attributes['ng-reflect-disable-input'].nodeValues = true;
//             }
//           }
//         })
//     }
//   }

//}
