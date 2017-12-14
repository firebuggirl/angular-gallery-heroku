/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './gallery.component';
const styles_GalleryComponent:any[] = ['.modal-body[_ngcontent-%COMP%]{\n    position:relative;\n   }\n    .caption[_ngcontent-%COMP%]{\n    	position:absolute;\n      height:90px;\n    	width:100%;\n    	top:410;\n    	left:0;\n    	opacity:0.9;\n    	background-color:black;\n    	color:white;\n    	padding:5px;\n    	font-family:verdana;\n    	font-size:12px;\n    }\n    p[_ngcontent-%COMP%] {\n       -webkit-margin-before: 5px !important;\n       -webkit-margin-after: 5px !important;\n    }\n   .arrows[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    font-size:40px;\n   }'];
export const RenderType_GalleryComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_GalleryComponent,data:{}});
function View_GalleryComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),22,'div',[['class',
      'selectedImage']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵeld(2,0,(null as any),
          (null as any),0,'img',([] as any[]),[[8,'src',4]],(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n\n        '])),
      (_l()(),i0.ɵeld(4,0,(null as any),(null as any),7,'div',[['class','arrows']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵeld(6,0,(null as any),
          (null as any),1,'div',[['class','arrow-back']],(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.navigate(false)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n            <\n         '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n         '])),(_l()(),i0.ɵeld(9,0,(null as any),
          (null as any),1,'div',[['class','arrow-forward']],(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.navigate(true)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n            >\n         '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i0.ɵeld(13,0,(null as any),(null as any),8,'div',
          [['class','caption']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n           '])),(_l()(),
          i0.ɵeld(15,0,(null as any),(null as any),2,'p',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵeld(16,
          0,(null as any),(null as any),1,'strong',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(17,(null as any),
          ['',''])),(_l()(),i0.ɵted(-1,(null as any),['\n           '])),(_l()(),i0.ɵeld(19,
          0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(20,(null as any),
          ['',''])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵted(-1,
          (null as any),['\n      ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = i0.ɵinlineInterpolate(1,'',_co.selectedImage.url,'');
    _ck(_v,2,0,currVal_0);
    const currVal_1:any = _co.selectedImage.title;
    _ck(_v,17,0,currVal_1);
    const currVal_2:any = _co.selectedImage.caption;
    _ck(_v,20,0,currVal_2);
  });
}
function View_GalleryComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),3,'li',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵeld(2,0,(null as any),
      (null as any),0,'img',[['class','tn'],['data-target','#selectedImageModal'],
          ['data-toggle','modal'],['height','146'],['width','191']],[[8,'src',4]],
      [[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.setSelectedImage(_v.context.$implicit)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n     ']))],
      (null as any),(_ck,_v) => {
        const currVal_0:any = i0.ɵinlineInterpolate(1,'',_v.context.$implicit.url,
            '');
        _ck(_v,2,0,currVal_0);
      });
}
export function View_GalleryComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted(-1,(null as any),['\n'])),(_l()(),i0.ɵeld(1,0,
      (null as any),(null as any),13,'div',[['class','modal fade'],['id','selectedImageModal']],
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted(-1,(null as any),['\n  '])),(_l()(),i0.ɵeld(3,0,(null as any),(null as any),
      10,'div',[['class','modal-dialog'],['role','document']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
      ['\n    '])),(_l()(),i0.ɵeld(5,0,(null as any),(null as any),7,'div',[['class',
      'modal-content']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n      '])),(_l()(),i0.ɵeld(7,0,(null as any),
          (null as any),4,'div',[['class','modal-body']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['\n\n      '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,
          (null as any),View_GalleryComponent_1)),i0.ɵdid(10,16384,(null as any),0,
          i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i0.ɵted(-1,(null as any),['\n\n      '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i0.ɵted(-1,(null as any),['\n  '])),(_l()(),i0.ɵted(-1,
          (null as any),['\n'])),(_l()(),i0.ɵted(-1,(null as any),['\n  '])),(_l()(),
          i0.ɵeld(16,0,(null as any),(null as any),4,'ul',[['id','thumbnailsList']],
              (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n     '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_GalleryComponent_2)),i0.ɵdid(19,802816,
          (null as any),0,i1.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),
          ['\n  '])),(_l()(),i0.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:i2.GalleryComponent = _v.component;
    const currVal_0:any = _co.selectedImage;
    _ck(_v,10,0,currVal_0);
    const currVal_1:any = _co.datasource;
    _ck(_v,19,0,currVal_1);
  },(null as any));
}
export function View_GalleryComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'gallery',([] as any[]),
      (null as any),(null as any),(null as any),View_GalleryComponent_0,RenderType_GalleryComponent)),
      i0.ɵdid(1,49152,(null as any),0,i2.GalleryComponent,([] as any[]),(null as any),
          (null as any))],(null as any),(null as any));
}
export const GalleryComponentNgFactory:i0.ComponentFactory<i2.GalleryComponent> = i0.ɵccf('gallery',
    i2.GalleryComponent,View_GalleryComponent_Host_0,{datasource:'datasource'},{},
    ([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2p1bGlldHRldHdvcnNleS9EZXNrdG9wL2FuZ3VsYXItZ2FsbGVyeS1oZXJva3Uvc3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2p1bGlldHRldHdvcnNleS9EZXNrdG9wL2FuZ3VsYXItZ2FsbGVyeS1oZXJva3Uvc3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvanVsaWV0dGV0d29yc2V5L0Rlc2t0b3AvYW5ndWxhci1nYWxsZXJ5LWhlcm9rdS9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2p1bGlldHRldHdvcnNleS9EZXNrdG9wL2FuZ3VsYXItZ2FsbGVyeS1oZXJva3Uvc3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnRzLkdhbGxlcnlDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbjxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJzZWxlY3RlZEltYWdlTW9kYWxcIiA+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdGVkSW1hZ2VcIiAqbmdJZj1cInNlbGVjdGVkSW1hZ2VcIj5cbiAgICAgICAgPGltZyBzcmM9XCJ7e3NlbGVjdGVkSW1hZ2UudXJsfX1cIiA+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFycm93c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXJyb3ctYmFja1wiIChjbGljayk9bmF2aWdhdGUoZmFsc2UpPlxuICAgICAgICAgICAgJmx0O1xuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiYXJyb3ctZm9yd2FyZFwiIChjbGljayk9bmF2aWdhdGUodHJ1ZSk+XG4gICAgICAgICAgICAmZ3Q7XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgIDxwPjxzdHJvbmc+e3tzZWxlY3RlZEltYWdlLnRpdGxlfX08L3N0cm9uZz48L3A+XG4gICAgICAgICAgIDxwPnt7c2VsZWN0ZWRJbWFnZS5jYXB0aW9ufX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuICA8dWwgaWQ9XCJ0aHVtYm5haWxzTGlzdFwiPlxuICAgICA8bGkgKm5nRm9yPVwibGV0IGltYWdlIG9mIGRhdGFzb3VyY2VcIiA+XG4gICAgICAgIDxpbWcgc3JjPVwie3tpbWFnZS51cmx9fVwiIGNsYXNzPVwidG5cIlxuICAgICAgICAgICB3aWR0aD1cIjE5MVwiIGhlaWdodD1cIjE0NlwiXG4gICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzZWxlY3RlZEltYWdlTW9kYWxcIlxuICAgICAgICAgICAoY2xpY2spPXNldFNlbGVjdGVkSW1hZ2UoaW1hZ2UpPlxuICAgICA8L2xpPlxuICA8L3VsPlxuIiwiPGdhbGxlcnk+PC9nYWxsZXJ5PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztvQkNNTTtNQUFBO01BQWlELGtEQUMvQztVQUFBO1VBQUEsOEJBQWtDO01BRWxDO1VBQUE7TUFBb0Isa0RBQ3BCO1VBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBd0I7Y0FBQTtjQUFBO1lBQUE7WUFBeEI7VUFBQSxnQ0FBZ0Q7TUFFekMsbURBQ047VUFBQTtjQUFBO1lBQUE7WUFBQTtZQUEyQjtjQUFBO2NBQUE7WUFBQTtZQUEzQjtVQUFBLGdDQUFrRDtNQUU1QyxrREFDRDtVQUFBLGlCQUNOO1VBQUE7VUFBQSxnQkFBcUIscURBQ2xCO2lCQUFBO2NBQUEsMERBQUc7VUFBQTtVQUFBLDRDQUFRO1VBQUEsVUFBb0MscURBQy9DO1VBQUE7VUFBQSw0Q0FBRztVQUFBLFVBQTZCLGtEQUM3QjtVQUFBOztJQWJEO0lBQUwsV0FBSyxTQUFMO0lBV2M7SUFBQTtJQUNSO0lBQUE7Ozs7b0JBU1Q7TUFBQSx3RUFBc0M7YUFBQSxtQ0FDbkM7TUFBQTtVQUFBO01BQUE7UUFBQTtRQUFBO1FBR0c7VUFBQTtVQUFBO1FBQUE7UUFISDtNQUFBLGdDQUdtQzs7UUFIOUI7WUFBQTtRQUFMLFdBQUssU0FBTDs7OztvQkE3QlIsMENBQ0E7TUFBQTtNQUFBLHdFQUFpRDthQUFBLDZCQUMvQztNQUFBO01BQUEsNENBQTBDO01BQUEsYUFDeEM7TUFBQTtNQUEyQixnREFDekI7VUFBQTtVQUFBLDRDQUF3QjtVQUFBLGlCQUV4QjtVQUFBLCtDQUFBO2tCQUFBO01BZU0sa0RBRUE7VUFBQSxhQUNGLDRDQUNGO1VBQUEsdUJBQ0YsNENBQ0o7aUJBQUE7Y0FBQTtNQUF3QiwrQ0FDckI7VUFBQSwrREFBQTtVQUFBO1VBQUEsdUNBS0s7VUFBQSxXQUNIOztJQTVCMEI7SUFBM0IsWUFBMkIsU0FBM0I7SUFzQkc7SUFBSixZQUFJLFNBQUo7Ozs7b0JDNUJMO01BQUE7YUFBQTtVQUFBOzs7OyJ9