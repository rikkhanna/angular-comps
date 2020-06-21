import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimesDirective]'
})
export class TimesDirectiveDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
    ) { }

  @Input('appTimesDirective') set render(times: number){
    for(let i=0; i<times; i++){
      this.viewContainer.createEmbeddedView(this.templateRef,{
        index: i
      })
    }
  }

}
