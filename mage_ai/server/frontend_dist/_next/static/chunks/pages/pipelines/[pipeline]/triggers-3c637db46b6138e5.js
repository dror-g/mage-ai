(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4249],{58122:function(e,n,t){"use strict";t.d(n,{CL:function(){return f},FS:function(){return h},JZ:function(){return v},e7:function(){return m},v0:function(){return p},wx:function(){return g}});var r=t(75582),i=t(82394),c=t(43313),u=t(93348),o=t(1286),l=t(90211),a=t(84779);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e){var n=e.statistics,t=Object.keys(n),r=Array(c.Dy.length).fill(0);return 0===t.length?null:(t.forEach((function(e){if(c.Dy.includes(e)){var t=c.CC[e],i=n[e],u=i,o=!1,l=[2,3],s=c.Ub[e],d=c.oH[e],p=c.OD[e];if(c.y_.includes(e))o=!0,l=[2,1,2];else if(e in c.Sq){i=(0,a.Jw)(i,0);var f=c.Sq[e];u=n[f]}var h={columnFlexNumbers:l,name:t,progress:o,rate:u,successDirection:d,warning:p};c.y_.includes(e)||(h.value=i),r[s]=h}})),r)}function f(e){var n=e.columnTypes,t=void 0===n?{}:n,r=e.statistics,i=Object.keys(r);if(0===i.length)return null;var u=Object.values(t),a=u.length,s=[];s.push({name:"Column count",successDirection:c.oH.column_count,value:(0,l.x6)(a)}),i.forEach((function(e){if(c.Zu.includes(e)){var n=c.CC[e],t=r[e],i=c.OD[e];s.push({name:n,successDirection:c.oH[e],value:(0,l.x6)(t),warning:i})}}));var d=(0,o.QO)(u),p=d.countCategory,f=d.countDatetime,h=d.countNumerical;return s.push({name:"Categorical Features",rate:p/a,value:(0,l.x6)(p)},{name:"Numerical Features",rate:h/a,value:(0,l.x6)(h)},{name:"Datetime Features",rate:f/a,value:(0,l.x6)(f)}),s}function h(e){return"string"===typeof e?e:JSON.stringify(e)}function g(e,n){var t,r;return null===e||void 0===e||null===(t=e.find((function(e){var t=e.block;return n(t)})))||void 0===t||null===(r=t.variables)||void 0===r?void 0:r.map((function(e){var n=e.value;return d(d({},e),{},{value:h(n)})}))}function v(e,n){return n===u.Xm.TIME?e.push({uuid:"execution_date",value:"<run datetime>"}):n===u.Xm.EVENT&&e.push({uuid:"event",value:"<trigger event>"}),e}function m(e){return e?Object.entries(e).reduce((function(e,n){var t=(0,r.Z)(n,2),c=t[0],u=t[1],o=u;try{o=JSON.parse(u)}catch(l){}return d(d({},e),{},(0,i.Z)({},c,o))}),{}):e}},97225:function(e,n,t){"use strict";var r=t(75582),i=t(12691),c=t.n(i),u=t(82684),o=t(83455),l=t(34376),a=t(60328),s=t(47999),d=t(67971),p=t(10919),f=t(93348),h=t(62609),g=t(86673),v=t(58180),m=t(19711),b=t(82531),x=t(10503),j=t(49125),Z=t(45838),y=t(9736),_=t(96510),P=t(66653),O=t(28598);n.Z=function(e){var n=e.fetchPipelineSchedules,t=e.highlightRowOnHover,i=e.includeCreatedAtColumn,k=e.includePipelineColumn,w=e.pipeline,C=e.pipelineSchedules,S=e.selectedSchedule,I=e.setErrors,E=e.setSelectedSchedule,T=e.stickyHeader,D=null===w||void 0===w?void 0:w.uuid,A=(0,l.useRouter)(),N=(0,u.useRef)({}),H=(0,u.useState)(null),V=H[0],M=H[1],R=(0,u.useState)(0),Y=R[0],F=R[1],B=(0,u.useState)(0),L=B[0],W=B[1],q=(0,o.Db)((function(e){return b.ZP.pipeline_schedules.useUpdate(e.id)({pipeline_schedule:e})}),{onSuccess:function(e){return(0,_.wD)(e,{callback:function(){n()},onErrorCallback:function(e,n){return I({errors:n,response:e})}})}}),z=(0,r.Z)(q,1)[0],J=(0,o.Db)((function(e){return b.ZP.pipeline_schedules.useDelete(e)()}),{onSuccess:function(e){return(0,_.wD)(e,{callback:function(){n(),D?A.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(D,"/triggers")):n()},onErrorCallback:function(e,n){return I({errors:n,response:e})}})}}),U=(0,r.Z)(J,1)[0],Q=[{label:function(){return""},uuid:"action"},{uuid:"Status"},{uuid:"Type"},{uuid:"Name"},{uuid:"Frequency"},{uuid:"Runs"},{uuid:"Latest run status"},{uuid:"Logs"}];(0,y.Ct)()||Q.push({label:function(){return""},uuid:"edit/delete"});var X=[null,1,1,3,1,null,null,null,null];return k&&(Q.splice(2,0,{uuid:"Pipeline"}),X.splice(2,0,2)),i&&(Q.splice(3,0,{uuid:"Created at"}),X.splice(3,0,null)),(0,O.jsx)(Z.cl,{overflowVisible:!0,children:0===C.length?(0,O.jsx)(g.Z,{px:3,py:1,children:(0,O.jsx)(m.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No triggers available"})}):(0,O.jsx)(v.Z,{columnFlex:X,columns:Q,highlightRowOnHover:t,isSelectedRow:function(e){return C[e].id===(null===S||void 0===S?void 0:S.id)},onClickRow:E?function(e){return null===E||void 0===E?void 0:E(C[e])}:null,rowVerticalPadding:6,rows:C.map((function(e,n){var t,r=e.id,o=e.created_at,l=e.pipeline_runs_count,v=e.pipeline_uuid,b=e.last_pipeline_run_status,Z=e.name,_=e.schedule_interval,w=e.status,C=D||v;N.current[r]=(0,u.createRef)();var S=[(0,O.jsx)(a.Z,{iconOnly:!0,noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(n){(0,P.j)(n),z({id:e.id,status:f.fq.ACTIVE===w?f.fq.INACTIVE:f.fq.ACTIVE})},children:f.fq.ACTIVE===w?(0,O.jsx)(x.dz,{muted:!0,size:2*j.iI}):(0,O.jsx)(x.Py,{default:!0,size:2*j.iI})},"toggle_trigger_".concat(n)),(0,O.jsx)(m.ZP,{default:f.fq.INACTIVE===w,monospace:!0,success:f.fq.ACTIVE===w,children:w},"trigger_status_".concat(n)),(0,O.jsx)(m.ZP,{default:!0,monospace:!0,children:null===(t=f.Z4[e.schedule_type])||void 0===t?void 0:t.call(f.Z4)},"trigger_type_".concat(n)),(0,O.jsx)(c(),{as:"/pipelines/".concat(C,"/triggers/").concat(r),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,O.jsx)(p.Z,{bold:!0,onClick:function(e){(0,P.j)(e),A.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(C,"/triggers/").concat(r))},sameColorAsText:!0,children:Z})},"trigger_name_".concat(n)),(0,O.jsx)(m.ZP,{default:!0,monospace:!0,children:_},"trigger_frequency_".concat(n)),(0,O.jsx)(m.ZP,{default:!0,monospace:!0,children:l},"trigger_run_count_".concat(n)),(0,O.jsx)(m.ZP,{default:!0,monospace:!0,children:b||"N/A"},"latest_run_status_".concat(n)),(0,O.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return A.push("/pipelines/".concat(C,"/logs?pipeline_schedule_id[]=").concat(r))},children:(0,O.jsx)(x.B4,{default:!0,size:2*j.iI})},"logs_button_".concat(n))];return(0,y.Ct)()||S.push((0,O.jsxs)(d.Z,{children:[(0,O.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return A.push("/pipelines/".concat(C,"/triggers/").concat(r,"/edit"))},title:"Edit",children:(0,O.jsx)(x.I8,{default:!0,size:2*j.iI})}),(0,O.jsx)(g.Z,{mr:1}),(0,O.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){var e,n,t,i;M(r),F((null===(e=N.current[r])||void 0===e||null===(n=e.current)||void 0===n?void 0:n.offsetTop)||0),W((null===(t=N.current[r])||void 0===t||null===(i=t.current)||void 0===i?void 0:i.offsetLeft)||0)},ref:N.current[r],title:"Delete",children:(0,O.jsx)(x.rF,{default:!0,size:2*j.iI})}),(0,O.jsx)(s.Z,{onClickOutside:function(){return M(null)},open:V===r,children:(0,O.jsx)(h.Z,{danger:!0,left:(L||0)-286,onCancel:function(){return M(null)},onClick:function(){M(null),U(r)},title:"Are you sure you want to delete the trigger ".concat(Z,"?"),top:(Y||0)-(n<=1?40:96),width:40*j.iI})})]},"edit_delete_buttons_".concat(n))),k&&S.splice(2,0,(0,O.jsx)(m.ZP,{default:!0,monospace:!0,children:C},"pipeline_name_".concat(n))),i&&S.splice(3,0,(0,O.jsx)(m.ZP,{default:!0,monospace:!0,children:o},"created_at_".concat(n))),S})),stickyHeader:T,uuid:"pipeline-triggers"})})}},51099:function(e,n,t){"use strict";t.d(n,{Q:function(){return s}});t(82684);var r=t(60328),i=t(67971),c=t(86673),u=t(10503),o=t(73899),l=t(49125),a=t(28598),s=22;n.Z=function(e){var n=e.page,t=e.maxPages,s=e.onUpdate,d=e.totalPages,p=[],f=t;if(f>d)p=Array.from({length:d},(function(e,n){return n}));else{var h=Math.floor(f/2),g=n-h;n+h>=d?(g=d-f+2,f-=2):n-h<=0?(g=0,f-=2):(f-=4,g=n-Math.floor(f/2)),p=Array.from({length:f},(function(e,n){return n+g}))}return(0,a.jsx)(a.Fragment,{children:d>0&&(0,a.jsxs)(i.Z,{alignItems:"center",children:[(0,a.jsx)(r.Z,{disabled:0===n,onClick:function(){return s(n-1)},children:(0,a.jsx)(u.Hd,{size:1.5*l.iI,stroke:"#AEAEAE"})}),!p.includes(0)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{ml:1,children:(0,a.jsx)(r.Z,{onClick:function(){return s(0)},borderLess:!0,noBackground:!0,children:1})},0),!p.includes(1)&&(0,a.jsx)(c.Z,{ml:1,children:(0,a.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0)]}),p.map((function(e){return(0,a.jsx)(c.Z,{ml:1,children:(0,a.jsx)(r.Z,{onClick:function(){e!==n&&s(e)},notClickable:e===n,backgroundColor:e===n&&o.a$,borderLess:!0,noBackground:!0,children:e+1})},e)})),!p.includes(d-1)&&(0,a.jsxs)(a.Fragment,{children:[!p.includes(d-2)&&(0,a.jsx)(c.Z,{ml:1,children:(0,a.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0),(0,a.jsx)(c.Z,{ml:1,children:(0,a.jsx)(r.Z,{onClick:function(){return s(d-1)},borderLess:!0,noBackground:!0,children:d})},d-1)]}),(0,a.jsx)(c.Z,{ml:1}),(0,a.jsx)(r.Z,{disabled:n===d-1,onClick:function(){return s(n+1)},children:(0,a.jsx)(u.Kw,{size:1.5*l.iI,stroke:"#AEAEAE"})})]})})}},93348:function(e,n,t){"use strict";t.d(n,{TR:function(){return d},U5:function(){return l},Xm:function(){return c},Z4:function(){return s},fq:function(){return o},kJ:function(){return a}});var r,i,c,u=t(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(c||(c={}));var o,l,a,s=(r={},(0,u.Z)(r,c.API,(function(){return"API"})),(0,u.Z)(r,c.EVENT,(function(){return"event"})),(0,u.Z)(r,c.TIME,(function(){return"schedule"})),r);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(o||(o={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly"}(l||(l={})),function(e){e.CREATED_AT="created_at",e.NAME="name",e.PIPELINE="pipeline_uuid",e.STATUS="status",e.TYPE="schedule_type"}(a||(a={}));var d=(i={},(0,u.Z)(i,a.CREATED_AT,"Created at"),(0,u.Z)(i,a.NAME,"Name"),(0,u.Z)(i,a.PIPELINE,"Pipeline"),(0,u.Z)(i,a.STATUS,"Status"),(0,u.Z)(i,a.TYPE,"Type"),i)},29237:function(e,n,t){"use strict";var r=t(9518),i=t(67971),c=t(86673),u=t(19711),o=t(23831),l=t(73942),a=t(37391),s=t(49125),d=t(28598),p=(0,r.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*s.iI,1.5*s.iI,1.5*s.iI),f=r.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],l.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||o.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||o.Z.background).success,";\n  ")}),(function(e){return!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||o.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||o.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),h=r.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],l.n_,l.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),p,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),g=r.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*s.iI,a.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*s.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),v=r.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],l.M8,l.YF,1.75*s.iI);n.Z=function(e){var n=e.borderless,t=e.children,r=e.containerRef,o=e.contentContainerRef,l=e.dark,a=e.footer,s=e.fullHeight,p=void 0===s||s,m=e.fullWidth,b=void 0===m||m,x=e.header,j=e.headerHeight,Z=e.headerIcon,y=e.headerPaddingVertical,_=e.headerTitle,P=e.maxHeight,O=e.maxWidth,k=e.minWidth,w=e.noPadding,C=e.overflowVisible,S=e.subtitle,I=e.success;return(0,d.jsxs)(f,{borderless:n,dark:l,fullHeight:p,fullWidth:b,maxHeight:P,maxWidth:O,minWidth:k,overflowVisible:C,ref:r,success:I,children:[(x||_)&&(0,d.jsxs)(h,{headerPaddingVertical:y,height:j,children:[x&&x,_&&(0,d.jsx)(i.Z,{alignItems:"center",justifyContent:"space-between",children:(0,d.jsxs)(i.Z,{alignItems:"center",children:[Z&&Z,(0,d.jsx)(c.Z,{ml:Z?1:0,children:(0,d.jsx)(u.ZP,{bold:!0,default:!0,children:_})})]})})]}),(0,d.jsxs)(g,{maxHeight:P,noPadding:w,overflowVisible:C,ref:o,children:[S&&(0,d.jsx)(c.Z,{mb:2,children:(0,d.jsx)(u.ZP,{default:!0,children:S})}),t]}),a&&(0,d.jsx)(v,{children:a})]})}},6087:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return se}});var r=t(77837),i=t(82394),c=t(75582),u=t(38860),o=t.n(u),l=t(12691),a=t.n(l),s=t(82684),d=t(83455),p=t(34376),f=t(60328),h=t(86532),g=t(34744),v=t(67971),m=t(87372),b=t(11135),x=t(10919),j=t(51099),Z=t(60547),y=t(93348),_=t(41788),P=t(29237),O=t(86673),k=t(58180),w=t(19711),C=t(38435),S=t(82944),I=t(70902),E=t(23831),T=t(9518),D=t(73942),A=t(49125),N=T.default.div.withConfig({displayName:"indexstyle__ToggleStyle",componentId:"sc-f9kt7n-0"})(["padding:","px ","px;border-radius:","px;",""],1.5*A.iI,2*A.iI,D.n_,(function(e){return"\n    border: 1px solid ".concat((e.theme||E.Z).borders.light,";\n    background-color: ").concat((e.theme||E.Z).background.popup,";\n  ")})),H=t(90211),V=t(58122),M=t(28598);function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var F="".concat(A.iI,"px ").concat(3*A.iI,"px");var B=function(e){var n=e.initialPipelineSchedulePayload,t=e.onCancel,r=e.onSuccess,u=e.variables,o=(0,s.useState)(!1),l=o[0],a=o[1],d=(0,s.useState)({}),p=d[0],h=d[1],g=(0,s.useState)(u||{}),b=g[0],x=g[1],j=(0,s.useMemo)((function(){return Y(Y({},n),{},{name:(0,H.Y6)(),variables:l?(0,V.e7)(b):null})}),[n,l,b]),Z=function(e,n){var t={borderless:!0,key:"variable_uuid_input_".concat(e),monospace:!0,onChange:function(n){n.preventDefault(),x((function(t){return Y(Y({},t),{},(0,i.Z)({},e,n.target.value))}))},paddingHorizontal:0,placeholder:"Variable value",value:n};return p[e]?(0,M.jsx)(C.Z,Y(Y({},t),{},{rows:1,value:n})):(0,M.jsx)(S.Z,Y({},t))};return(0,s.useEffect)((function(){var e=Object.entries(b).reduce((function(e,n){var t=(0,c.Z)(n,2),r=t[0],u=t[1],o=(0,H.Pb)(u)&&"object"===typeof JSON.parse(u)&&!Array.isArray(JSON.parse(u))&&null!==JSON.parse(u);return Y(Y({},e),{},(0,i.Z)({},r,o))}),{});h(e)}),[]),(0,M.jsxs)(P.Z,{footer:(0,M.jsxs)(v.Z,{alignItems:"center",fullWidth:!0,justifyContent:"flex-end",children:[(0,M.jsx)(f.Z,{onClick:function(){r({pipeline_schedule:j}),t()},padding:F,primaryAlternate:!0,children:"Run now"}),(0,M.jsx)(O.Z,{mr:1}),(0,M.jsx)(f.Z,{borderColor:E.Z.background.page,onClick:t,padding:F,secondary:!0,children:"Cancel"})]}),header:(0,M.jsx)(m.Z,{level:5,children:"Run pipeline now"}),maxHeight:"90vh",minWidth:85*A.iI,subtitle:"Creates a new trigger and immediately runs the current pipeline once.",children:[(0,M.jsx)(N,{children:(0,M.jsxs)(v.Z,{alignItems:"center",children:[(0,M.jsx)(O.Z,{mr:2,children:(0,M.jsx)(I.Z,{checked:l,onCheck:a})}),(0,M.jsx)(w.ZP,{bold:!0,large:!0,children:"Overwrite runtime variables"})]})}),l&&b&&Object.entries(b).length>0&&(0,M.jsx)(O.Z,{mt:2,children:(0,M.jsx)(k.Z,{columnFlex:[null,1],columns:[{uuid:"Variable"},{uuid:"Value"}],rows:Object.entries(b).map((function(e){var n=(0,c.Z)(e,2),t=n[0],r=n[1];return[(0,M.jsx)(w.ZP,{default:!0,monospace:!0,children:t},"variable_".concat(t)),Z(t,r)]}))})})]})},L=t(37391),W=T.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1xgfh62-0"})(["border-bottom:1px solid ",";padding:","px;"],E.Z.borders.medium,A.tr),q=T.default.div.withConfig({displayName:"indexstyle__CardsStyle",componentId:"sc-1xgfh62-1"})([""," height:80px;display:flex;overflow-x:scroll;"],L.w5),z=T.default.div.withConfig({displayName:"indexstyle__VariableCardStyle",componentId:"sc-1xgfh62-2"})(["background-color:",";border-radius:","px;flex-shrink:0;margin-right:","px;padding:","px;"],E.Z.background.output,D.n_,A.iI,A.tr),J=t(73899);var U=function(e){var n=e.hasOverride,t=e.scheduleType,r=e.variables,i=e.variablesOverride,u=[];return Object.entries(r).forEach((function(e){var n=(0,c.Z)(e,2),t=n[0],r=n[1],o=null===i||void 0===i?void 0:i[t];u.push({uuid:t,value:(0,V.FS)(o||r)})})),(0,V.JZ)(u,t),(0,M.jsxs)(W,{children:[(0,M.jsx)(O.Z,{mb:2,children:(0,M.jsxs)(w.ZP,{bold:!0,large:!0,monospace:!0,muted:!0,children:["Runtime variables",n&&" (override)"]})}),(0,M.jsx)(q,{noScrollbarTrackBackground:!0,children:r&&u.map((function(e){var n=e.uuid,t=e.value;return(0,M.jsxs)(z,{children:[(0,M.jsx)(w.ZP,{monospace:!0,small:!0,children:n}),(0,M.jsx)(w.ZP,{color:J.Or,monospace:!0,small:!0,children:(0,V.FS)(t)})]})}))})]})},Q=t(54283),X=t(46261),G=t(97225),$=t(82531),K=t(10503),ee=t(59920),ne=t(42305),te=t(7715),re=t(9736),ie=t(96510),ce=t(59e3),ue=t(99497);function oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function le(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?oe(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ae(e){var n=e.pipeline,t=(0,p.useRouter)(),r=(0,re.Ct)(),u=n.uuid,o=(0,s.useState)(null),l=o[0],_=o[1],P=$.ZP.variables.pipelines.list(u).data,k=null===P||void 0===P?void 0:P.variables,C=(0,ce.iV)(),S=null!==C&&void 0!==C&&C.page?C.page:0,I=$.ZP.pipeline_schedules.pipelines.list(u,{_limit:j.Q,_offset:(null!==C&&void 0!==C&&C.page?C.page:0)*j.Q},{refreshInterval:7500}),E=I.data,T=I.mutate,D=(0,s.useMemo)((function(){return(null===E||void 0===E?void 0:E.pipeline_schedules)||[]}),[E]),N=function(e){return(0,d.Db)($.ZP.pipeline_schedules.pipelines.useCreate(u),{onSuccess:function(n){return(0,ie.wD)(n,{callback:function(n){var t=n.pipeline_schedule.id;null===e||void 0===e||e(t)},onErrorCallback:function(e,n){return _({errors:n,response:e})}})}})},R=N((function(e){return t.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(null===n||void 0===n?void 0:n.uuid,"/triggers/").concat(e,"/edit"))})),Y=(0,c.Z)(R,2),F=Y[0],L=Y[1].isLoading,W=N(T),q=(0,c.Z)(W,2),z=q[0],J=q[1].isLoading,oe=(0,s.useMemo)((function(){var e;return null===(e=(0,V.wx)(k,(function(e){return"global"===e.uuid})))||void 0===e?void 0:e.reduce((function(e,n){var t=n.uuid,r=n.value;return le(le({},e),{},(0,i.Z)({},t,r))}),{})}),[k]),ae={name:(0,H.Y6)(),schedule_interval:y.U5.ONCE,schedule_type:y.Xm.TIME,start_time:(0,ne.d$)((new Date).toISOString(),{dayAgo:!0,utcFormat:!0}),status:y.fq.ACTIVE},se=(0,ue.dd)((function(){return(0,M.jsx)(B,{initialPipelineSchedulePayload:ae,onCancel:fe,onSuccess:z,variables:oe})}),{},[k,oe],{background:!0,uuid:"run_pipeline_now_popup"}),de=(0,c.Z)(se,2),pe=de[0],fe=de[1],he=(0,s.useState)(),ge=he[0],ve=he[1],me=(0,s.useMemo)((function(){var e=null===ge||void 0===ge?void 0:ge.variables,n=!(0,te.Qr)(e),t=n?null===ge||void 0===ge?void 0:ge.variables:(0,te.Qr)(oe)?null:oe;return function(i){var c=i.height-(t?151:80);return(0,M.jsxs)(M.Fragment,{children:[t&&(0,M.jsx)(U,{hasOverride:n,scheduleType:null===ge||void 0===ge?void 0:ge.schedule_type,variables:oe,variablesOverride:e}),!t&&(0,M.jsxs)(O.Z,{p:A.cd,children:[(0,M.jsx)(w.ZP,{children:"This pipeline has no runtime variables."}),!r&&(0,M.jsxs)(O.Z,{mt:1,children:[(0,M.jsx)(a(),{as:"/pipelines/".concat(u,"/edit?sideview=variables"),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,M.jsx)(x.Z,{primary:!0,children:"Click here"})})," ",(0,M.jsx)(w.ZP,{inline:!0,children:"to add variables to this pipeline."})]})]}),(0,M.jsx)(h.Z,le(le({},i),{},{height:c,noStatus:!0}))]})}}),[r,u,null===ge||void 0===ge?void 0:ge.schedule_type,null===ge||void 0===ge?void 0:ge.variables,oe]),be=(0,s.useMemo)((function(){var e;return(null===E||void 0===E||null===(e=E.metadata)||void 0===e?void 0:e.count)||[]}),[E]);return(0,M.jsxs)(Z.Z,{breadcrumbs:[{label:function(){return"Triggers"}}],buildSidekick:me,errors:l,pageName:ee.M.TRIGGERS,pipeline:n,setErrors:_,subheaderBackgroundImage:"/images/banner-shape-purple-peach.jpg",subheaderButton:(0,M.jsx)(b.ZP,{beforeElement:(0,M.jsx)(K.mm,{size:2.5*A.iI}),blackBorder:!0,inline:!0,loading:L,noHoverUnderline:!0,onClick:function(){return F({pipeline_schedule:{name:(0,H.Y6)()}})},sameColorAsText:!0,uuid:"PipelineDetailPage/add_new_schedule",children:"Create new trigger"}),subheaderText:(0,M.jsx)(w.ZP,{bold:!0,large:!0,children:"Run this pipeline using a schedule, event, or API."}),title:function(e){var n=e.name;return"".concat(n," triggers")},uuid:"".concat(ee.M.TRIGGERS,"_").concat(u),children:[(0,M.jsx)(O.Z,{mt:A.cd,px:A.cd,children:(0,M.jsxs)(v.Z,{justifyContent:"space-between",children:[(0,M.jsx)(m.Z,{level:5,children:"Pipeline triggers"}),(0,M.jsx)(X.Z,{appearBefore:!0,default:!0,fullSize:!0,label:"Creates an @once trigger and runs pipeline immediately",widthFitContent:!0,children:(0,M.jsx)(f.Z,{beforeIcon:(0,M.jsx)(K.JM,{inverted:!0,size:2*A.iI}),disabled:r,loading:J,onClick:(0,te.Qr)(oe)?function(){return z({pipeline_schedule:ae})}:pe,outline:!0,success:!r,children:"Run pipeline now"})})]})}),(0,M.jsx)(g.Z,{light:!0,mt:A.cd,short:!0}),E?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(G.Z,{fetchPipelineSchedules:T,pipeline:n,pipelineSchedules:D,selectedSchedule:ge,setErrors:_,setSelectedSchedule:ve}),(0,M.jsx)(O.Z,{p:2,children:(0,M.jsx)(j.Z,{maxPages:9,onUpdate:function(e){var n=Number(e),r=le(le({},C),{},{page:n>=0?n:0});t.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(u,"/triggers?").concat((0,ce.uM)(r)))},page:Number(S),totalPages:Math.ceil(be/j.Q)})})]}):(0,M.jsx)(O.Z,{m:2,children:(0,M.jsx)(Q.Z,{inverted:!0})})]})}ae.getInitialProps=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var se=(0,_.Z)(ae)},42305:function(e,n,t){"use strict";t.d(n,{A5:function(){return p},AY:function(){return f},BP:function(){return d},JX:function(){return s},OC:function(){return c},Pc:function(){return h},Tz:function(){return a},d$:function(){return l},lJ:function(){return g},n1:function(){return o}});var r=t(92083),i=t.n(r),c="YYYY-MM-DD HH:mm:ss",u="YYYY-MM-DD HH:mm",o="YYYY-MM-DD";function l(e,n){var t=n.dayAgo,r=n.includeSeconds,o=n.utcFormat,l=i()(e),a=u;return o&&(l=l.utc()),t&&(l=l.subtract(1,"days")),r&&(a=c),l.format(a)}function a(e){var n=l((new Date).toISOString(),{includeSeconds:!0,utcFormat:!0});return null!==e&&void 0!==e&&e.dateObj?new Date(n):n}function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i().unix(e).format(null!==n&&void 0!==n&&n.withSeconds?c:u)}function d(e,n,t){return i()(e).utc().hours(+n).minutes(+t).format()}function p(e){return i()(e).unix()}function f(e,n,t,r){var i="".concat(e.toISOString().split("T")[0]," ").concat(n,":").concat(t);return r?"".concat(i,":").concat(r):i}function h(e){var n=i().unix(+e).utc();return{date:n.toDate(),hour:String(n.hour()),minute:String(n.minute())}}function g(e){return e.padStart(2,"0")}},40183:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/triggers",function(){return t(6087)}])}},function(e){e.O(0,[844,7607,5896,4804,1774,5872,881,1005,8180,547,6532,1286,9774,2888,179],(function(){return n=40183,e(e.s=n);var n}));var n=e.O();_N_E=n}]);