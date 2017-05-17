import { Directive, ElementRef, Input } from '@angular/core';
import * as $ from "jquery";

@Directive({ selector: '[chat-body]' })

export class ChatDirective {
    constructor(el: ElementRef) {
                 setTimeout(() => {
               console.log($( window ).height());
               console.log($( '#chatlist').height());

               $( '#chatlist').outerHeight( $( window ).outerHeight()-$( '#todo-form').outerHeight()-$( '#chat-header').outerHeight()-10);
               console.log($( '#chatlist').height());
            }, 0);
      $(window).resize(function(){
           setTimeout(() => {
               console.log($( window ).height());
               console.log($( '#chatlist').height());
                $( '#chatlist').outerHeight( $( window ).outerHeight() -$( '#todo-form').outerHeight()-$( '#chat-header').outerHeight()-10);
              console.log($( '#chatlist').height());
            }, 0);
      });

       //el.nativeElement.style.backgroundColor = 'yellow';
    }
}
