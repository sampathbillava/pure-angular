import { Directive, OnInit } from '@angular/core';
//import * as $ from 'jquery';

interface formType {
  attribute: string;
  isVisible: boolean;
  isMandatory: boolean;
  isReadOnly: boolean;
  caption: string;
}

@Directive({
  selector: '[validator],[validator-continer],[validator-label]'
  //selector: '[appFormInput]'
})
export class FormInputDirective implements OnInit {

  public inputList: formType[] = [
    { attribute: 'ATT1', isVisible: true ,isMandatory: true, isReadOnly:true, caption: 'cap1' },
    { attribute: 'ATT2', isVisible: true ,isMandatory: false, isReadOnly:true, caption: 'cap2' },
    { attribute: 'ATT3', isVisible: true ,isMandatory: true, isReadOnly:false, caption: 'cap3' },
    { attribute: 'ATT4', isVisible: false ,isMandatory: false, isReadOnly:false, caption: 'cap4' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.UpdateElement();
  }

  UpdateElement() {
    // debugger;
    // if (this.inputList != undefined 
    //   && this.inputList.length > 0) {
    //     this.inputList.forEach(element => {
    //       let name = element.attribute;
    //       var label = $("[validator-label='" + name + "']");
    //       var container = $("[validator-continer='" + name + "']" )[0];
    //       var ele = $("[validator='" + name + "']")[0];

    //       if (!element.isVisible) {
    //         $(container).hide();
    //       }
    //       if (element.isMandatory) {
    //         $(label).html(element.caption + " <span class='errorMsg'></span>")
    //       }
    //       if (element.isReadOnly && ele != undefined) {
    //         $(ele).attr("disabled");
    //         $(ele).prop("disabled", true);
    //         //$(ele).prop("disabled", true);
    //         // if ($(ele)[0] != undefined && $(ele)[0].attributes['ng-reflect-disable-input'] != undefined) {
    //         //   $(ele)[0].attributes['ng-reflect-disable-input'].nodeValues = true;
    //         // }
    //       }
    //     })
    // }
  }

}
