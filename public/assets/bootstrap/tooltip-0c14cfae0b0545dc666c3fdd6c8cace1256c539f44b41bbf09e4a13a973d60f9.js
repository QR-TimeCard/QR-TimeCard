function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}var Tooltip=function(w){var U="tooltip",I="4.0.0",H="bs.tooltip",P="."+H,t=w.fn[U],R=150,W="bs-tooltip",k=new RegExp("(^|\\s)"+W+"\\S+","g"),F={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},L={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},j={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},x={SHOW:"show",OUT:"out"},K={HIDE:"hide"+P,HIDDEN:"hidden"+P,SHOW:"show"+P,SHOWN:"shown"+P,INSERTED:"inserted"+P,CLICK:"click"+P,FOCUSIN:"focusin"+P,FOCUSOUT:"focusout"+P,MOUSEENTER:"mouseenter"+P,MOUSELEAVE:"mouseleave"+P},V={FADE:"fade",SHOW:"show"},M={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},Y={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},e=function(){function u(t,e){if("undefined"==typeof Popper)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=u.prototype;return t.enable=function e(){this._isEnabled=!0},t.disable=function n(){this._isEnabled=!1},t.toggleEnabled=function i(){this._isEnabled=!this._isEnabled},t.toggle=function o(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=w(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),w(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(w(this.getTipElement()).hasClass(V.SHOW))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function r(){clearTimeout(this._timeout),w.removeData(this.element,this.constructor.DATA_KEY),w(this.element).off(this.constructor.EVENT_KEY),w(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&w(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function s(){var e=this;if("none"===w(this.element).css("display"))throw new Error("Please use show on visible elements");var t=w.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){w(this.element).trigger(t);var n=w.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),o=Util.getUID(this.constructor.NAME);i.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&w(i).addClass(V.FADE);var r="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(r);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:w(this.config.container);w(i).data(this.constructor.DATA_KEY,this),w.contains(this.element.ownerDocument.documentElement,this.tip)||w(i).appendTo(a),w(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Popper(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:M.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function l(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function c(t){e._handlePopperPlacementChange(t)}}),w(i).addClass(V.SHOW),"ontouchstart"in document.documentElement&&w("body").children().on("mouseover",null,w.noop);var h=function h(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,w(e.element).trigger(e.constructor.Event.SHOWN),t===x.OUT&&e._leave(null,e)};Util.supportsTransitionEnd()&&w(this.tip).hasClass(V.FADE)?w(this.tip).one(Util.TRANSITION_END,h).emulateTransitionEnd(u._TRANSITION_DURATION):h()}},t.hide=function a(t){var e=this,n=this.getTipElement(),i=w.Event(this.constructor.Event.HIDE),o=function o(){e._hoverState!==x.SHOW&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),w(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};w(this.element).trigger(i),i.isDefaultPrevented()||(w(n).removeClass(V.SHOW),"ontouchstart"in document.documentElement&&w("body").children().off("mouseover",null,w.noop),this._activeTrigger[Y.CLICK]=!1,this._activeTrigger[Y.FOCUS]=!1,this._activeTrigger[Y.HOVER]=!1,Util.supportsTransitionEnd()&&w(this.tip).hasClass(V.FADE)?w(n).one(Util.TRANSITION_END,o).emulateTransitionEnd(R):o(),this._hoverState="")},t.update=function l(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function c(){return Boolean(this.getTitle())},t.addAttachmentClass=function h(t){w(this.getTipElement()).addClass(W+"-"+t)},t.getTipElement=function f(){return this.tip=this.tip||w(this.config.template)[0],this.tip},t.setContent=function g(){var t=w(this.getTipElement());this.setElementContent(t.find(M.TOOLTIP_INNER),this.getTitle()),t.removeClass(V.FADE+" "+V.SHOW)},t.setElementContent=function p(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?w(e).parent().is(t)||t.empty().append(e):t.text(w(e).text()):t[n?"html":"text"](e)},t.getTitle=function m(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function d(t){return L[t.toUpperCase()]},t._setListeners=function _(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)w(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Y.MANUAL){var e=t===Y.HOVER?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Y.HOVER?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;w(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}w(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=_extends({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function v(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function E(t,e){var n=this.constructor.DATA_KEY;(e=e||w(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),w(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Y.FOCUS:Y.HOVER]=!0),w(e.getTipElement()).hasClass(V.SHOW)||e._hoverState===x.SHOW?e._hoverState=x.SHOW:(clearTimeout(e._timeout),e._hoverState=x.SHOW,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===x.SHOW&&e.show()},e.config.delay.show):e.show())},t._leave=function T(t,e){var n=this.constructor.DATA_KEY;(e=e||w(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),w(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Y.FOCUS:Y.HOVER]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=x.OUT,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===x.OUT&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function y(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function O(t){return"number"==typeof(t=_extends({},this.constructor.Default,w(this.element).data(),t)).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),Util.typeCheckConfig(U,t,this.constructor.DefaultType),t},t._getDelegateConfig=function b(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function C(){var t=w(this.getTipElement()),e=t.attr("class").match(k);null!==e&&0<e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function A(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function S(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(w(t).removeClass(V.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},u._jQueryInterface=function D(n){return this.each(function(){var t=w(this).data(H),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new u(this,e),w(this).data(H,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},_createClass(u,null,[{key:"VERSION",get:function N(){return I}},{key:"Default",get:function N(){return j}},{key:"NAME",get:function N(){return U}},{key:"DATA_KEY",get:function N(){return H}},{key:"Event",get:function N(){return K}},{key:"EVENT_KEY",get:function N(){return P}},{key:"DefaultType",get:function N(){return F}}]),u}();return w.fn[U]=e._jQueryInterface,w.fn[U].Constructor=e,w.fn[U].noConflict=function(){return w.fn[U]=t,e._jQueryInterface},e}($,Popper);