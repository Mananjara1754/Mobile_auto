"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2659],{2659:(ve,z,r)=>{r.d(z,{VK:()=>he,OP:()=>T,Tx:()=>Me,p6:()=>_e});var n=r(2223),p=r(8752),B=r(1692),u=r(2840),x=r(7579),P=r(6451),k=r(727),S=r(9646),A=r(3101),D=r(8675),O=r(3900),g=r(5698),w=r(2722),y=r(9300),G=r(4986),U=r(7272),X=r(4482),Z=r(5403),V=r(5032),Q=r(9718),$=r(5577),J=r(8421);function F(s,a){return a?e=>(0,U.z)(a.pipe((0,g.q)(1),function K(){return(0,X.e)((s,a)=>{s.subscribe((0,Z.x)(a,V.Z))})}()),e.pipe(F(s))):(0,$.z)((e,t)=>(0,J.Xf)(s(e,t)).pipe((0,g.q)(1),(0,Q.h)(e)))}var W=r(5963);function Y(s,a=G.z){const e=(0,W.H)(s,a);return F(()=>e)}var d=r(1217),C=r(4755),q=r(8023),c=r(1591),ee=r(8930),I=r(9002),te=r(2966),ne=r(4709);const ie=["mat-menu-item",""];function se(s,a){1&s&&(n.O4$(),n.TgZ(0,"svg",3),n._UZ(1,"polygon",4),n.qZA())}const oe=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],ae=["mat-icon, [matMenuItemIcon]","*"];function re(s,a){if(1&s){const e=n.EpF();n.TgZ(0,"div",0),n.NdJ("keydown",function(i){n.CHM(e);const o=n.oxw();return n.KtG(o._handleKeydown(i))})("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.closed.emit("click"))})("@transformMenu.start",function(i){n.CHM(e);const o=n.oxw();return n.KtG(o._onAnimationStart(i))})("@transformMenu.done",function(i){n.CHM(e);const o=n.oxw();return n.KtG(o._onAnimationDone(i))}),n.TgZ(1,"div",1),n.Hsn(2),n.qZA()()}if(2&s){const e=n.oxw();n.Q6J("id",e.panelId)("ngClass",e._classList)("@transformMenu",e._panelAnimationState),n.uIk("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}const le=["*"],E=new n.OlP("MAT_MENU_PANEL"),ce=(0,d.Kr)((0,d.Id)(class{}));let T=(()=>{class s extends ce{constructor(e,t,i,o,l){super(),this._elementRef=e,this._document=t,this._focusMonitor=i,this._parentMenu=o,this._changeDetectorRef=l,this.role="menuitem",this._hovered=new x.x,this._focused=new x.x,this._highlighted=!1,this._triggersSubmenu=!1,o?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){const e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}}return s.\u0275fac=function(e){return new(e||s)(n.Y36(n.SBq),n.Y36(C.K0),n.Y36(p.tE),n.Y36(E,8),n.Y36(n.sBO))},s.\u0275cmp=n.Xpm({type:s,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(e,t){1&e&&n.NdJ("click",function(o){return t._checkDisabled(o)})("mouseenter",function(){return t._handleMouseEnter()}),2&e&&(n.uIk("role",t.role)("tabindex",t._getTabIndex())("aria-disabled",t.disabled)("disabled",t.disabled||null),n.ekj("mat-mdc-menu-item-highlighted",t._highlighted)("mat-mdc-menu-item-submenu-trigger",t._triggersSubmenu))},inputs:{disabled:"disabled",disableRipple:"disableRipple",role:"role"},exportAs:["matMenuItem"],features:[n.qOj],attrs:ie,ngContentSelectors:ae,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-mdc-menu-submenu-icon","viewBox","0 0 5 10","focusable","false","aria-hidden","true",4,"ngIf"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,t){1&e&&(n.F$t(oe),n.Hsn(0),n.TgZ(1,"span",0),n.Hsn(2,1),n.qZA(),n._UZ(3,"div",1),n.YNc(4,se,2,0,"svg",2)),2&e&&(n.xp6(3),n.Q6J("matRippleDisabled",t.disableRipple||t.disabled)("matRippleTrigger",t._getHostElement()),n.xp6(1),n.Q6J("ngIf",t._triggersSubmenu))},dependencies:[C.O5,d.wG],encapsulation:2,changeDetection:0}),s})();const ue=new n.OlP("MatMenuContent"),R={transformMenu:(0,c.X$)("transformMenu",[(0,c.SB)("void",(0,c.oB)({opacity:0,transform:"scale(0.8)"})),(0,c.eR)("void => enter",(0,c.jt)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,c.oB)({opacity:1,transform:"scale(1)"}))),(0,c.eR)("* => void",(0,c.jt)("100ms 25ms linear",(0,c.oB)({opacity:0})))]),fadeInItems:(0,c.X$)("fadeInItems",[(0,c.SB)("showing",(0,c.oB)({opacity:1})),(0,c.eR)("void => *",[(0,c.oB)({opacity:0}),(0,c.jt)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])};let me=0;const H=new n.OlP("mat-menu-default-options",{providedIn:"root",factory:function de(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}});let f=(()=>{class s{get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}get overlapTrigger(){return this._overlapTrigger}set overlapTrigger(e){this._overlapTrigger=(0,B.Ig)(e)}get hasBackdrop(){return this._hasBackdrop}set hasBackdrop(e){this._hasBackdrop=(0,B.Ig)(e)}set panelClass(e){const t=this._previousPanelClass;t&&t.length&&t.split(" ").forEach(i=>{this._classList[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(i=>{this._classList[i]=!0}),this._elementRef.nativeElement.className="")}get classList(){return this.panelClass}set classList(e){this.panelClass=e}constructor(e,t,i,o){this._elementRef=e,this._ngZone=t,this._changeDetectorRef=o,this._directDescendantItems=new n.n_E,this._classList={},this._panelAnimationState="void",this._animationDone=new x.x,this.closed=new n.vpe,this.close=this.closed,this.panelId="mat-menu-panel-"+me++,this.overlayPanelClass=i.overlayPanelClass||"",this._xPosition=i.xPosition,this._yPosition=i.yPosition,this.backdropClass=i.backdropClass,this._overlapTrigger=i.overlapTrigger,this._hasBackdrop=i.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new p.Em(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe((0,D.O)(this._directDescendantItems),(0,O.w)(e=>(0,P.T)(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{const t=this._keyManager;if("enter"===this._panelAnimationState&&t.activeItem?._hasFocus()){const i=e.toArray(),o=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[o]&&!i[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe()}_hovered(){return this._directDescendantItems.changes.pipe((0,D.O)(this._directDescendantItems),(0,O.w)(t=>(0,P.T)(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){const t=e.keyCode,i=this._keyManager;switch(t){case u.hY:(0,u.Vb)(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case u.oh:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case u.SV:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:return(t===u.LH||t===u.JH)&&i.setFocusOrigin("keyboard"),void i.onKeydown(e)}e.stopPropagation()}focusFirstItem(e="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe((0,g.q)(1)).subscribe(()=>{let t=null;if(this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!t||!t.contains(document.activeElement)){const i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){const t=Math.min(this._baseElevation+e,24),i=`${this._elevationPrefix}${t}`,o=Object.keys(this._classList).find(l=>l.startsWith(this._elevationPrefix));(!o||o===this._previousElevation)&&(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[i]=!0,this._previousElevation=i)}setPositionClasses(e=this.xPosition,t=this.yPosition){const i=this._classList;i["mat-menu-before"]="before"===e,i["mat-menu-after"]="after"===e,i["mat-menu-above"]="above"===t,i["mat-menu-below"]="below"===t,this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,"enter"===e.toState&&0===this._keyManager.activeItemIndex&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe((0,D.O)(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}}return s.\u0275fac=function(e){return new(e||s)(n.Y36(n.SBq),n.Y36(n.R0b),n.Y36(H),n.Y36(n.sBO))},s.\u0275dir=n.lG2({type:s,contentQueries:function(e,t,i){if(1&e&&(n.Suo(i,ue,5),n.Suo(i,T,5),n.Suo(i,T,4)),2&e){let o;n.iGM(o=n.CRH())&&(t.lazyContent=o.first),n.iGM(o=n.CRH())&&(t._allItems=o),n.iGM(o=n.CRH())&&(t.items=o)}},viewQuery:function(e,t){if(1&e&&n.Gf(n.Rgc,5),2&e){let i;n.iGM(i=n.CRH())&&(t.templateRef=i.first)}},inputs:{backdropClass:"backdropClass",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:"overlapTrigger",hasBackdrop:"hasBackdrop",panelClass:["class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"}}),s})(),he=(()=>{class s extends f{constructor(e,t,i,o){super(e,t,i,o),this._elevationPrefix="mat-elevation-z",this._baseElevation=8}}return s.\u0275fac=function(e){return new(e||s)(n.Y36(n.SBq),n.Y36(n.R0b),n.Y36(H),n.Y36(n.sBO))},s.\u0275cmp=n.Xpm({type:s,selectors:[["mat-menu"]],hostAttrs:["ngSkipHydration",""],hostVars:3,hostBindings:function(e,t){2&e&&n.uIk("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},exportAs:["matMenu"],features:[n._Bn([{provide:E,useExisting:s}]),n.qOj],ngContentSelectors:le,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"id","ngClass","keydown","click"],[1,"mat-mdc-menu-content"]],template:function(e,t){1&e&&(n.F$t(),n.YNc(0,re,3,6,"ng-template"))},dependencies:[C.mk],styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{--mat-menu-container-shape:4px;min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}.mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[R.transformMenu,R.fadeInItems]},changeDetection:0}),s})();const L=new n.OlP("mat-menu-scroll-strategy"),ge={provide:L,deps:[I.aV],useFactory:function pe(s){return()=>s.scrollStrategies.reposition()}},N=(0,te.i$)({passive:!0});let fe=(()=>{class s{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),("click"===t||"tab"===t)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(e,t,i,o,l,m,h,_,M){this._overlay=e,this._element=t,this._viewContainerRef=i,this._menuItemInstance=m,this._dir=h,this._focusMonitor=_,this._ngZone=M,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=k.w0.EMPTY,this._hoverSubscription=k.w0.EMPTY,this._menuCloseSubscription=k.w0.EMPTY,this._changeDetectorRef=(0,n.f3M)(n.sBO),this._handleTouchStart=v=>{(0,p.yG)(v)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new n.vpe,this.onMenuOpen=this.menuOpened,this.menuClosed=new n.vpe,this.onMenuClose=this.menuClosed,this._scrollStrategy=o,this._parentMaterialMenu=l instanceof f?l:void 0,t.nativeElement.addEventListener("touchstart",this._handleTouchStart,N)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,N),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){const e=this.menu;if(this._menuOpen||!e)return;const t=this._createOverlay(e),i=t.getConfig(),o=i.positionStrategy;this._setPosition(e,o),i.hasBackdrop=null==e.hasBackdrop?!this.triggersSubmenu():e.hasBackdrop,t.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof f&&(e._startAnimation(),e._directDescendantItems.changes.pipe((0,w.R)(e.close)).subscribe(()=>{o.withLockedPosition(!1).reapplyLastPosition(),o.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;const t=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&("keydown"===e||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,t instanceof f?(t._resetAnimation(),t.lazyContent?t._animationDone.pipe((0,y.h)(i=>"void"===i.toState),(0,g.q)(1),(0,w.R)(t.lazyContent._attached)).subscribe({next:()=>t.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),t?.lazyContent?.detach())}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,this._setMenuElevation(e),e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(e){if(e.setElevation){let t=0,i=e.parentMenu;for(;i;)t++,i=i.parentMenu;e.setElevation(t)}}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){const t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=this._overlay.create(t),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(e){return new I.X_({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{const o="start"===i.connectionPair.overlayX?"after":"before",l="top"===i.connectionPair.overlayY?"below":"above";this._ngZone?this._ngZone.run(()=>e.setPositionClasses(o,l)):e.setPositionClasses(o,l)})}_setPosition(e,t){let[i,o]="before"===e.xPosition?["end","start"]:["start","end"],[l,m]="above"===e.yPosition?["bottom","top"]:["top","bottom"],[h,_]=[l,m],[M,v]=[i,o],b=0;if(this.triggersSubmenu()){if(v=i="before"===e.xPosition?"start":"end",o=M="end"===i?"start":"end",this._parentMaterialMenu){if(null==this._parentInnerPadding){const j=this._parentMaterialMenu.items.first;this._parentInnerPadding=j?j._getHostElement().offsetTop:0}b="bottom"===l?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(h="top"===l?"bottom":"top",_="top"===m?"bottom":"top");t.withPositions([{originX:i,originY:h,overlayX:M,overlayY:l,offsetY:b},{originX:o,originY:h,overlayX:v,overlayY:l,offsetY:b},{originX:i,originY:_,overlayX:M,overlayY:m,offsetY:-b},{originX:o,originY:_,overlayX:v,overlayY:m,offsetY:-b}])}_menuClosingActions(){const e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:(0,S.of)(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe((0,y.h)(l=>l!==this._menuItemInstance),(0,y.h)(()=>this._menuOpen)):(0,S.of)();return(0,P.T)(e,i,o,t)}_handleMousedown(e){(0,p.X6)(e)||(this._openedBy=0===e.button?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){const t=e.keyCode;(t===u.K5||t===u.L_)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===u.SV&&"ltr"===this.dir||t===u.oh&&"rtl"===this.dir)&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe((0,y.h)(e=>e===this._menuItemInstance&&!e.disabled),Y(0,A.E)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof f&&this.menu._isAnimating?this.menu._animationDone.pipe((0,g.q)(1),Y(0,A.E),(0,w.R)(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new q.UE(e.templateRef,this._viewContainerRef)),this._portal}}return s.\u0275fac=function(e){return new(e||s)(n.Y36(I.aV),n.Y36(n.SBq),n.Y36(n.s_b),n.Y36(L),n.Y36(E,8),n.Y36(T,10),n.Y36(ee.Is,8),n.Y36(p.tE),n.Y36(n.R0b))},s.\u0275dir=n.lG2({type:s,hostVars:3,hostBindings:function(e,t){1&e&&n.NdJ("click",function(o){return t._handleClick(o)})("mousedown",function(o){return t._handleMousedown(o)})("keydown",function(o){return t._handleKeydown(o)}),2&e&&n.uIk("aria-haspopup",t.menu?"menu":null)("aria-expanded",t.menuOpen)("aria-controls",t.menuOpen?t.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:["mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:["matMenuTriggerFor","menu"],menuData:["matMenuTriggerData","menuData"],restoreFocus:["matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"}}),s})(),_e=(()=>{class s extends fe{}return s.\u0275fac=function(){let a;return function(t){return(a||(a=n.n5z(s)))(t||s)}}(),s.\u0275dir=n.lG2({type:s,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],exportAs:["matMenuTrigger"],features:[n.qOj]}),s})(),Me=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({providers:[ge],imports:[C.ez,d.si,d.BQ,I.U8,ne.ZD,d.BQ]}),s})()}}]);