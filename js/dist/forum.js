module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=8)}([function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat["components/SettingsPage"]},function(t,e){t.exports=flarum.core.compat["components/LogInModal"]},function(t,e){t.exports=flarum.core.compat["components/AvatarEditor"]},function(t,e){t.exports=flarum.core.compat["components/HeaderSecondary"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},,function(t,e,o){"use strict";o.r(e);var n=o(0),r=o(1),a=o.n(r),c=o(5),u=o.n(c),i=o(2),l=o.n(i),p=o(6),f=o.n(p),s=o(3),m=o.n(s),d=o(4),g=o.n(d);a.a.initializers.add("hystar-auth-keycloak",function(){function t(t){t.add("logIn",f.a.component({className:"Button LogInButton--keycloak LogInButton",icon:"fab arrow-right",onclick:function(){var t=$(window);window.open(a.a.forum.attribute("baseUrl")+"/auth/keycloak","logInPopup","width=600,height=700,top="+(t.height()/2-350)+",left="+(t.width()/2-300)+",status=no,resizable=no")}},a.a.translator.trans("core.forum.header.log_in_link")))}Object(n.extend)(u.a.prototype,"items",function(e){e.has("logIn")&&(e.remove("logIn"),t(e)),e.has("signUp")&&e.remove("signUp")}),Object(n.extend)(l.a.prototype,"accountItems",function(t){t.remove("changeEmail"),t.remove("changePassword")}),Object(n.extend)(l.a.prototype,"settingsItems",function(t){t.has("account")&&0===t.get("account").children.length&&t.remove("account")}),Object(n.extend)(m.a.prototype,"fields",function(e){return e.remove("identification"),e.remove("password"),e.remove("remember"),e.remove("submit"),t(e),e}),Object(n.override)(m.a.prototype,"footer",function(){return[]}),Object(n.extend)(g.a.prototype,"view",function(t){return a.a.forum.attribute("hystar-auth-keycloak.delegate_avatars")&&(t.children.length=1),t}),Object(n.extend)(g.a.prototype,"controlItems",function(t){return a.a.forum.attribute("hystar-auth-keycloak.delegate_avatars")&&(t.items={}),t})})}]);
//# sourceMappingURL=forum.js.map