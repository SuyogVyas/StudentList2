import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[tDirective]'
})

export class TeacherDirective{

    @Input()
    textcolor:string = '';
    
    @HostBinding('style.color') color:string = '';

    ngOnInit()
    {
        this.color = this.textcolor;
    }
}