!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t){var n,o=indexedDB.open("BudgetDB",21);function r(){console.log("check db invoked");var e=n.transaction(["BudgetStore"],"readwrite"),t=e.objectStore("BudgetStore").getAll();t.onsuccess=function(){t.result.length>0&&fetch("/api/transaction/bulk",{method:"POST",body:JSON.stringify(t.result),headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){0!==t.length&&((e=n.transaction(["BudgetStore"],"readwrite")).objectStore("BudgetStore").clear(),console.log("Clearing store 🧹"))}))}}o.onupgradeneeded=function(e){console.log("Upgrade needed in IndexDB");var t=e.oldVersion,o=e.newVersion||n.version;console.log("DB Updated from version ".concat(t," to ").concat(o)),0===(n=e.target.result).objectStoreNames.length&&n.createObjectStore("BudgetStore",{autoIncrement:!0})},o.onerror=function(e){console.log("Woops! ".concat(e.target.errorCode))},o.onsuccess=function(e){console.log("success"),n=e.target.result,navigator.onLine&&(console.log("Backend online! 🗄️"),r())};window.addEventListener("online",r)}]);