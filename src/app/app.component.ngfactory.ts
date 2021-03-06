/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './app.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/router';
import * as i3 from '@angular/common';
import * as i4 from './app.component';
const styles_AppComponent:any[] = [i0.styles];
export const RenderType_AppComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,styles:styles_AppComponent,
    data:{'animation':[{type:7,name:'listAnimation',definitions:[{type:1,expr:'* => *',
        animation:[{type:11,selector:'.links',animation:{type:6,styles:{opacity:0},
            offset:(null as any)},options:{optional:true}},{type:11,selector:'.links',
            animation:{type:12,timings:'300ms',animation:[{type:4,styles:{type:5,steps:[{type:6,
                styles:{opacity:0,transform:'translateY(-75%)',offset:0},offset:(null as any)},
                {type:6,styles:{opacity:0.5,transform:'translateY(35px)',offset:0.3},
                    offset:(null as any)},{type:6,styles:{opacity:1,transform:'translateY(0)',
                    offset:1},offset:(null as any)}]},timings:'1s ease-in'}]},options:{optional:true}}],
        options:(null as any)}],options:{}}]}});
export function View_AppComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(1,
      0,(null as any),(null as any),17,'div',[['id','container']],[[24,'@listAnimation',
          0]],(null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
      (null as any),['\n'])),(_l()(),i1.ɵeld(3,0,(null as any),(null as any),14,'nav',
      ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n'])),(_l()(),i1.ɵeld(5,0,(null as any),
          (null as any),11,'ul',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n\n  '])),
      (_l()(),i1.ɵeld(7,0,(null as any),(null as any),3,'li',[['class','links']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵeld(8,
          0,(null as any),(null as any),2,'a',[['class','butn brown dark'],['routerLink',
              '/']],[[1,'target',0],[8,'href',4]],[[(null as any),'click']],(_v,en,
              $event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,9).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(9,671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['Home'])),(_l()(),i1.ɵted(-1,
          (null as any),['\n  '])),(_l()(),i1.ɵeld(12,0,(null as any),(null as any),
          3,'li',[['class','links']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵeld(13,0,(null as any),(null as any),2,'a',[['class',
          'butn brown dark'],['routerLink','about']],[[1,'target',0],[8,'href',4]],
          [[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,14).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(14,671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['About'])),(_l()(),i1.ɵted(-1,
          (null as any),['\n'])),(_l()(),i1.ɵted(-1,(null as any),['\n'])),(_l()(),
          i1.ɵted(-1,(null as any),['\n'])),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),
      (_l()(),i1.ɵeld(20,16777216,(null as any),(null as any),1,'router-outlet',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(21,212992,(null as any),0,i2.RouterOutlet,[i2.ChildrenOutletContexts,
          i1.ViewContainerRef,i1.ComponentFactoryResolver,[8,(null as any)],i1.ChangeDetectorRef],
          (null as any),(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n']))],
      (_ck,_v) => {
        const currVal_3:any = '/';
        _ck(_v,9,0,currVal_3);
        const currVal_6:any = 'about';
        _ck(_v,14,0,currVal_6);
        _ck(_v,21,0);
      },(_ck,_v) => {
        const currVal_0:any = (undefined as any);
        _ck(_v,1,0,currVal_0);
        const currVal_1:any = i1.ɵnov(_v,9).target;
        const currVal_2:any = i1.ɵnov(_v,9).href;
        _ck(_v,8,0,currVal_1,currVal_2);
        const currVal_4:any = i1.ɵnov(_v,14).target;
        const currVal_5:any = i1.ɵnov(_v,14).href;
        _ck(_v,13,0,currVal_4,currVal_5);
      });
}
export function View_AppComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'my-app',([] as any[]),
      (null as any),(null as any),(null as any),View_AppComponent_0,RenderType_AppComponent)),
      i1.ɵdid(1,114688,(null as any),0,i4.AppComponent,([] as any[]),(null as any),
          (null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const AppComponentNgFactory:i1.ComponentFactory<i4.AppComponent> = i1.ɵccf('my-app',
    i4.AppComponent,View_AppComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2p1bGlldHRldHdvcnNleS9EZXNrdG9wL2FuZ3VsYXItZ2FsbGVyeS1oZXJva3Uvc3JjL2FwcC9hcHAuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2p1bGlldHRldHdvcnNleS9EZXNrdG9wL2FuZ3VsYXItZ2FsbGVyeS1oZXJva3Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvanVsaWV0dGV0d29yc2V5L0Rlc2t0b3AvYW5ndWxhci1nYWxsZXJ5LWhlcm9rdS9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2p1bGlldHRldHdvcnNleS9EZXNrdG9wL2FuZ3VsYXItZ2FsbGVyeS1oZXJva3Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzLkFwcENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgQGxpc3RBbmltYXRpb24+XG48bmF2PlxuPHVsPlxuXG4gIDxsaSBjbGFzcz1cImxpbmtzXCI+PGEgY2xhc3M9XCJidXRuIGJyb3duIGRhcmtcIiByb3V0ZXJMaW5rPVwiL1wiPkhvbWU8L2E+PC9saT5cbiAgPGxpIGNsYXNzPVwibGlua3NcIj48YSBjbGFzcz1cImJ1dG4gYnJvd24gZGFya1wiIHJvdXRlckxpbms9XCJhYm91dFwiPkFib3V0PC9hPjwvbGk+XG48L3VsPlxuPC9uYXY+XG48L2Rpdj5cbiAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuIiwiPG15LWFwcD48L215LWFwcD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBLDRDQUNFO01BQUE7VUFBQSw4REFBbUM7TUFBQSx1QkFDckM7TUFBQTtNQUFLLDBDQUNMO1VBQUE7VUFBQSw4QkFBSTtNQUVGO1VBQUEsMERBQWtCO1VBQUE7Y0FBQTtvQkFBQTtZQUFBO1lBQUE7Y0FBQTtrQkFBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUE7VUFBQSxlQUEwQyw0Q0FBYTtVQUFBLHlCQUN6RTtVQUFBO1VBQUEsZ0JBQWtCO1VBQUE7VUFBQTtZQUFBO1lBQUE7Y0FBQTtrQkFBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUE7VUFBQSxlQUE4Qyw2Q0FBYztVQUFBLHVCQUMzRSwwQ0FDQztpQkFBQSwyQkFDQTtNQUNKO1VBQUE7YUFBQTswREFBQTtVQUFBLDZCQUErQjs7UUFMYztRQUEzQixXQUEyQixTQUEzQjtRQUMyQjtRQUEzQixZQUEyQixTQUEzQjtRQUlsQjs7UUFUb0I7UUFBcEIsV0FBb0IsU0FBcEI7UUFJa0I7UUFBQTtRQUFBLFdBQUEsbUJBQUE7UUFDQTtRQUFBO1FBQUEsWUFBQSxtQkFBQTs7OztvQkNOcEI7TUFBQTthQUFBO1VBQUE7SUFBQTs7OzsifQ==
