"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[53],{"7615":function(t,n,i){i.r(n),i.d(n,{"taro_form_core":function(){return o}});var r=i(9529),o=function(){function e(t){(0,r.r)(this,t),this.onSubmit=(0,r.c)(this,"submit",7),this.value={}}return e.prototype.watchSlotParent=function(t){if(this.orginalAppendChild||(this.orginalAppendChild=this.el.appendChild,this.orginalInsertBefore=this.el.insertBefore,this.orginalReplaceChild=this.el.replaceChild,this.orginalRemoveChild=this.el.removeChild),!t)return this.el.appendChild=this.orginalAppendChild,this.el.insertBefore=this.orginalInsertBefore,this.el.replaceChild=this.orginalReplaceChild,void(this.el.removeChild=this.orginalRemoveChild);this.el.appendChild=function(n){return t.appendChild(n)},this.el.insertBefore=function(n,i){return t.insertBefore(n,i)},this.el.replaceChild=function(n,i){return t.replaceChild(n,i)},this.el.removeChild=function(n){return t.removeChild(n)}},e.prototype.onButtonSubmit=function(t){t.stopPropagation(),this.value=this.getFormValue(),this.onSubmit.emit({"value":this.value})},e.prototype.onButtonReset=function(t){t.stopPropagation(),this.form.reset()},e.prototype.componentDidLoad=function(){var t=this;this.value=this.getFormValue(),Object.defineProperty(this.el,"value",{"get":function(){return t.value},"configurable":!0})},e.prototype.componentDidRender=function(){this.setSlotParent(this.form)},e.prototype.getFormValue=function(){for(var t=this.el,n=[],i=t.getElementsByTagName("input"),r=0;r<i.length;r++)n.push(i[r]);var o={},a={};n.forEach((function(t){-1===t.className.indexOf("weui-switch")?"radio"!==t.type?"checkbox"!==t.type?o[t.name]=t.value:t.checked?a[t.name]?o[t.name].push(t.value):(a[t.name]=!0,o[t.name]=[t.value]):a[t.name]||(o[t.name]=[]):t.checked?(a[t.name]=!0,o[t.name]=t.value):a[t.name]||(o[t.name]=""):o[t.name]=t.checked}));for(var l=t.getElementsByTagName("textarea"),h=[],s=0;s<l.length;s++)h.push(l[s]);return h.forEach((function(t){o[t.name]=t.value})),o},e.prototype.setSlotParent=function(t){this.slotParent=t},e.prototype.render=function(){var t=this;return(0,r.h)("form",{"ref":function(n){n&&(t.form=n)}},(0,r.h)("slot",null))},Object.defineProperty(e.prototype,"el",{"get":function(){return(0,r.g)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function(){return{"slotParent":["watchSlotParent"]}},"enumerable":!1,"configurable":!0}),e}()}}]);