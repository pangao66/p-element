(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{558:function(e,t,a){"use strict";a.r(t);a(29),a(30);var r=a(33),o=a(171),n=(a(156),a(71)),s=a(447),l=a.n(s),p={designer:"设计",programmer:"程序员",testers:"测试",product:"产品"},i={name:"search-list-demo-01",data:function(){return{formData:{id:"",name:"",birth:"",sex:"",job:""}}},methods:{getTableData:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function a(){var n,s,p,i;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.currentPage,s=e.pageSize,p=Object(o.a)(e,["currentPage","pageSize"]),console.log(p),a.next=4,l.a.post("/page-table",Object(r.a)({currentPage:n,pageSize:s},p));case 4:200===(i=a.sent).status&&(i=i.data,t({data:i.list,total:i.total}));case 6:case"end":return a.stop()}}),a)})))()}},computed:{columns:function(){return[{prop:"index",label:"序号",type:"index"},{prop:"id",label:"id",formType:"input"},{prop:"name",label:"姓名",attrs:{width:60},formType:"input"},{prop:"address",label:"地址",attrs:{minWidth:140}},{prop:"birth",label:"生日",formatter:"date",formType:"date"},{prop:"job",label:"职位",formatter:{type:"dict",dict:p},formType:"select",options:p},{prop:"sex",label:"性别",formType:"select",options:{1:"男",0:"女"}},{slot:"handle",label:"操作",attrs:{width:170}}]},formItems:function(){var e=[];return this.columns.forEach((function(t){if(t.formType||t.formSlotName){var a=t.formType,r=t.label,o=t.prop,n=t.formSlotName,s=t.options,l=t.formAttrs;e.push({label:r,prop:o,slotName:n,options:s,attrs:l,comp:a})}})),e}}},c=a(1),m=Object(c.a)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("pl-search-list",{attrs:{columns:e.columns,"form-items":e.formItems},on:{"get-table-data":e.getTableData},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}})}),[],!1,null,"1d4c8334",null);t.default=m.exports}}]);