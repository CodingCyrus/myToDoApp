(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},r=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/myToDoApp/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1f09":function(t,e,s){"use strict";s("6665")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("todo-app")],1)},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",{staticClass:"text-center mt-5"},[t._v("CodingCyrus To-Do App")]),s("div",{staticClass:"d-flex mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Task"},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}}),s("button",{staticClass:"btn btn-warning rounded-0",on:{click:t.submitTask}},[t._v("SUBMIT")])]),t._m(0),s("table",{staticClass:"table table-bordered mt-4"},[t._m(1),s("tbody",t._l(t.tasks,(function(e,n){return s("tr",{key:n},[s("td",[s("span",{class:{finished:"Complete"===e.status}},[t._v(" "+t._s(e.name)+" ")])]),s("td",{staticStyle:{width:"150px"}},[s("span",{staticClass:"pointer",class:{inProgress:"IN PROGRESS"===e.status,notinProgress:"NOT STARTED"===e.status,complete:"COMPLETED"===e.status},on:{click:function(e){return t.changeStatus(n)}}},[t._v(" "+t._s(e.status)+" ")])]),s("td",[s("div",{staticClass:"text-center",on:{click:function(e){return t.editTask(n)}}},[s("span",{staticClass:"fa fa-pen"})])]),s("td",[s("div",{staticClass:"text-center",on:{click:function(e){return t.deleteTask(n)}}},[s("span",{staticClass:"fa fa-trash"})])])])})),0)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{attrs:{id:"error"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("To Do")]),s("th",{attrs:{scope:"col"}},[t._v("Progress Status")]),s("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Edit")]),s("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("Delete")])])])}],c=(s("b0c0"),s("a434"),{name:"HelloWorld",props:{msg:String},data:function(){return{task:"",editedTask:null,availableStatus:["NOT STARTED","IN PROGRESS","COMPLETED"],tasks:[{name:"My first task",status:"IN PROGRESS"},{name:"My new second task",status:"NOT STARTED"}]}},methods:{submitTask:function(){if(0===this.task.length){var t=document.getElementById("error");return t.textContent="Please enter a task",void(t.style.color="red")}null===this.editedTask?this.tasks.push({name:this.task,status:"NOT STARTED"}):(this.tasks[this.editedTask].name=this.task,this.editedTask=null),this.task=""},deleteTask:function(t){this.tasks.splice(t,1)},editTask:function(t){this.task=this.tasks[t].name,this.editedTask=t},changeStatus:function(t){var e=this.availableStatus.indexOf(this.tasks[t].status);++e>2&&(e=0),this.tasks[t].status=this.availableStatus[e]}}}),l=c,u=(s("1f09"),s("2877")),p=Object(u["a"])(l,o,i,!1,null,"0a3d7010",null),d=p.exports,f={name:"App",components:{TodoApp:d}},h=f,v=Object(u["a"])(h,a,r,!1,null,null,null),k=v.exports;s("ab8b"),s("15f5"),s("7051");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(k)}}).$mount("#app")},6665:function(t,e,s){}});
//# sourceMappingURL=app.ae00e4d1.js.map