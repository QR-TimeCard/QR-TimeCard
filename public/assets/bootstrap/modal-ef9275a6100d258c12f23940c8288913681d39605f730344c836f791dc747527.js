function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}var Modal=function(D){var O="modal",C="4.0.0",T="bs.modal",y="."+T,t=".data-api",e=D.fn[O],N=300,w=150,k=27,A={backdrop:!0,keyboard:!0,focus:!0,show:!0},R={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},W={HIDE:"hide"+y,HIDDEN:"hidden"+y,SHOW:"show"+y,SHOWN:"shown"+y,FOCUSIN:"focusin"+y,RESIZE:"resize"+y,CLICK_DISMISS:"click.dismiss"+y,KEYDOWN_DISMISS:"keydown.dismiss"+y,MOUSEUP_DISMISS:"mouseup.dismiss"+y,MOUSEDOWN_DISMISS:"mousedown.dismiss"+y,CLICK_DATA_API:"click"+y+t},U={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},B={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},a=function(){function s(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=D(t).find(B.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var t=s.prototype;return t.toggle=function e(t){return this._isShown?this.hide():this.show(t)},t.show=function i(t){var e=this;if(!this._isTransitioning&&!this._isShown){Util.supportsTransitionEnd()&&D(this._element).hasClass(U.FADE)&&(this._isTransitioning=!0);var i=D.Event(W.SHOW,{relatedTarget:t});D(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),D(document.body).addClass(U.OPEN),this._setEscapeEvent(),this._setResizeEvent(),D(this._element).on(W.CLICK_DISMISS,B.DATA_DISMISS,function(t){return e.hide(t)}),D(this._dialog).on(W.MOUSEDOWN_DISMISS,function(){D(e._element).one(W.MOUSEUP_DISMISS,function(t){D(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function n(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var i=D.Event(W.HIDE);if(D(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var n=Util.supportsTransitionEnd()&&D(this._element).hasClass(U.FADE);n&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),D(document).off(W.FOCUSIN),D(this._element).removeClass(U.SHOW),D(this._element).off(W.CLICK_DISMISS),D(this._dialog).off(W.MOUSEDOWN_DISMISS),n?D(this._element).one(Util.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(N):this._hideModal()}}},t.dispose=function o(){D.removeData(this._element,T),D(window,document,this._element,this._backdrop).off(y),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function a(){this._adjustDialog()},t._getConfig=function r(t){return t=_extends({},A,t),Util.typeCheckConfig(O,t,R),t},t._showElement=function d(t){var e=this,i=Util.supportsTransitionEnd()&&D(this._element).hasClass(U.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&Util.reflow(this._element),D(this._element).addClass(U.SHOW),this._config.focus&&this._enforceFocus();var n=D.Event(W.SHOWN,{relatedTarget:t}),s=function s(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,D(e._element).trigger(n)};i?D(this._dialog).one(Util.TRANSITION_END,s).emulateTransitionEnd(N):s()},t._enforceFocus=function l(){var e=this;D(document).off(W.FOCUSIN).on(W.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===D(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function h(){var e=this;this._isShown&&this._config.keyboard?D(this._element).on(W.KEYDOWN_DISMISS,function(t){t.which===k&&(t.preventDefault(),e.hide())}):this._isShown||D(this._element).off(W.KEYDOWN_DISMISS)},t._setResizeEvent=function c(){var e=this;this._isShown?D(window).on(W.RESIZE,function(t){return e.handleUpdate(t)}):D(window).off(W.RESIZE)},t._hideModal=function _(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){D(document.body).removeClass(U.OPEN),t._resetAdjustments(),t._resetScrollbar(),D(t._element).trigger(W.HIDDEN)})},t._removeBackdrop=function u(){this._backdrop&&(D(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function f(t){var e=this,i=D(this._element).hasClass(U.FADE)?U.FADE:"";if(this._isShown&&this._config.backdrop){var n=Util.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=U.BACKDROP,i&&D(this._backdrop).addClass(i),D(this._backdrop).appendTo(document.body),D(this._element).on(W.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&Util.reflow(this._backdrop),D(this._backdrop).addClass(U.SHOW),!t)return;if(!n)return void t();D(this._backdrop).one(Util.TRANSITION_END,t).emulateTransitionEnd(w)}else if(!this._isShown&&this._backdrop){D(this._backdrop).removeClass(U.SHOW);var s=function s(){e._removeBackdrop(),t&&t()};Util.supportsTransitionEnd()&&D(this._element).hasClass(U.FADE)?D(this._backdrop).one(Util.TRANSITION_END,s).emulateTransitionEnd(w):s()}else t&&t()},t._adjustDialog=function g(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function m(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function p(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function S(){var s=this;if(this._isBodyOverflowing){D(B.FIXED_CONTENT).each(function(t,e){var i=D(e)[0].style.paddingRight,n=D(e).css("padding-right");D(e).data("padding-right",i).css("padding-right",parseFloat(n)+s._scrollbarWidth+"px")}),D(B.STICKY_CONTENT).each(function(t,e){var i=D(e)[0].style.marginRight,n=D(e).css("margin-right");D(e).data("margin-right",i).css("margin-right",parseFloat(n)-s._scrollbarWidth+"px")}),D(B.NAVBAR_TOGGLER).each(function(t,e){var i=D(e)[0].style.marginRight,n=D(e).css("margin-right");D(e).data("margin-right",i).css("margin-right",parseFloat(n)+s._scrollbarWidth+"px")});var t=document.body.style.paddingRight,e=D("body").css("padding-right");D("body").data("padding-right",t).css("padding-right",parseFloat(e)+this._scrollbarWidth+"px")}},t._resetScrollbar=function E(){D(B.FIXED_CONTENT).each(function(t,e){var i=D(e).data("padding-right");void 0!==i&&D(e).css("padding-right",i).removeData("padding-right")}),D(B.STICKY_CONTENT+", "+B.NAVBAR_TOGGLER).each(function(t,e){var i=D(e).data("margin-right");void 0!==i&&D(e).css("margin-right",i).removeData("margin-right")});var t=D("body").data("padding-right");void 0!==t&&D("body").css("padding-right",t).removeData("padding-right")},t._getScrollbarWidth=function v(){var t=document.createElement("div");t.className=U.SCROLLBAR_MEASURER,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},s._jQueryInterface=function b(i,n){return this.each(function(){var t=D(this).data(T),e=_extends({},s.Default,D(this).data(),"object"==typeof i&&i);if(t||(t=new s(this,e),D(this).data(T,t)),"string"==typeof i){if("undefined"==typeof t[i])throw new TypeError('No method named "'+i+'"');t[i](n)}else e.show&&t.show(n)})},_createClass(s,null,[{key:"VERSION",get:function I(){return C}},{key:"Default",get:function I(){return A}}]),s}();return D(document).on(W.CLICK_DATA_API,B.DATA_TOGGLE,function(t){var e,i=this,n=Util.getSelectorFromElement(this);n&&(e=D(n)[0]);var s=D(e).data(T)?"toggle":_extends({},D(e).data(),D(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var o=D(e).one(W.SHOW,function(t){t.isDefaultPrevented()||o.one(W.HIDDEN,function(){D(i).is(":visible")&&i.focus()})});a._jQueryInterface.call(D(e),s,this)}),D.fn[O]=a._jQueryInterface,D.fn[O].Constructor=a,D.fn[O].noConflict=function(){return D.fn[O]=e,a._jQueryInterface},a}($);