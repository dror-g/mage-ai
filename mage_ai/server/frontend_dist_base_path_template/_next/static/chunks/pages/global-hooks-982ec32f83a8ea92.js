(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3009],{92656:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return G}});var i=o(77837),t=o(38860),l=o.n(t),u=o(82684),r=o(71180),d=o(94629),s=o(8569),c=o(82394),a=o(12691),p=o.n(a),v=o(38626),h=o(34376),f=o(55485),b=o(48670),m=o(75499),k=o(30160),j=o(35686),_=o(72473),g=o(8193),y={default:!0,monospace:!0},w=o(81728),x=o(3917),P=o(55283),O=o(86735),Z=o(70320),E=o(28598);function C(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,i)}return o}function N(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?C(Object(o),!0).forEach((function(n){(0,c.Z)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):C(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var T=function(){var e=(0,Z.qB)(),n=(0,u.useContext)(v.ThemeContext),o=(0,h.useRouter)(),i=(0,u.useState)(null),t=i[0],l=(i[1],j.ZP.global_hooks.list({_format:"with_pipeline_details",include_snapshot_validation:1}).data),r=(0,u.useMemo)((function(){return(null===l||void 0===l?void 0:l.global_hooks)||[]}),[l]);return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(m.Z,{columnFlex:[null,null,null,null,1,null,null],columns:[{uuid:"UUID"},{uuid:"Resource"},{uuid:"Operation"},{uuid:"Pipeline"},{uuid:"Outputs"},{center:!0,uuid:"Valid"},{rightAligned:!0,uuid:"Snapshotted at"}],onClickRow:function(e,n){var i=null===r||void 0===r?void 0:r[e],t=i.operation_type,l=i.resource_type,u=i.uuid;o.push("/global-hooks/".concat(u,"?operation_type=").concat(t,"&resource_type=").concat(l))},getObjectAtRowIndex:function(e){return null===r||void 0===r?void 0:r[e]},rows:null===r||void 0===r?void 0:r.map((function(o){var i,t=o.metadata,l=o.operation_type,r=o.outputs,d=o.pipeline,s=o.pipeline_details,c=o.resource_type,a=o.uuid,v=null===d||void 0===d?void 0:d.uuid,h=v?(0,E.jsx)(p(),{as:"/pipelines/".concat(v,"/edit"),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,E.jsx)(b.Z,N(N({},y),{},{openNewWindow:!0,children:v}))},"pipeline"):(0,u.createElement)(k.ZP,N(N({},y),{},{key:"pipeline",muted:!0}),"-"),m=[];if((null===r||void 0===r?void 0:r.length)>=1&&(null===s||void 0===s||null===(i=s.blocks)||void 0===i?void 0:i.length)>=1){var j=(0,O.HK)((null===s||void 0===s?void 0:s.blocks)||[],(function(e){return e.uuid}));null===r||void 0===r||r.forEach((function(e,o){var i;if(null!==e&&void 0!==e&&null!==(i=e.block)&&void 0!==i&&i.uuid){var t,l=null===j||void 0===j?void 0:j[null===e||void 0===e||null===(t=e.block)||void 0===t?void 0:t.uuid];l&&(o>=1&&m.push((0,u.createElement)(k.ZP,N(N({},y),{},{inline:!0,key:"".concat(null===l||void 0===l?void 0:l.uuid,"-").concat(o,"-comma"),muted:!0}),",\xa0")),m.push((0,E.jsx)(p(),{as:"/pipelines/".concat(v,"/edit?block_uuid=").concat(null===l||void 0===l?void 0:l.uuid),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,E.jsx)(b.Z,N(N({},y),{},{inline:!0,openNewWindow:!0,sameColorAsText:!0,children:(0,E.jsx)(k.ZP,N(N({},y),{},{color:(0,P.qn)(null===l||void 0===l?void 0:l.type,{blockColor:null===l||void 0===l?void 0:l.color,theme:n}).accent,inline:!0,children:null===l||void 0===l?void 0:l.uuid}))}))},"".concat(null===l||void 0===l?void 0:l.uuid,"-").concat(o,"-link"))))}}))}return[(0,u.createElement)(k.ZP,N(N({},y),{},{key:"uuid"}),a),(0,u.createElement)(k.ZP,N(N({},y),{},{key:"resourceType",monospace:!1}),c?(0,w.j3)(c):"-"),(0,u.createElement)(k.ZP,N(N({},y),{},{key:"operationType",monospace:!1}),l?(0,w.vg)(l):"-"),h,(0,E.jsxs)("div",{children:[(null===m||void 0===m?void 0:m.length)>=1&&m,!(null!==m&&void 0!==m&&m.length)&&(0,E.jsx)(k.ZP,N(N({},y),{},{muted:!0,children:"-"}))]},"outputs"),(0,E.jsx)(f.ZP,{justifyContent:"center",children:null!==t&&void 0!==t&&t.snapshot_valid?(0,E.jsx)(_.Jr,{size:g.Z,success:!0}):(0,E.jsx)(_.uy,{danger:!0,size:g.Z})},"valid"),(0,u.createElement)(k.ZP,N(N({},y),{},{key:"snapshottedAt",rightAligned:!0}),null!==t&&void 0!==t&&t.snapshotted_at?(0,x.XG)(null===t||void 0===t?void 0:t.snapshotted_at,e):"-")]})),selectedRowIndexInternal:t,uuid:"GlobalHooks/Table"})})},A=o(93808),I=o(70515),H=o(69419);function D(){var e=(0,u.useState)(!1),n=e[0],o=e[1],i=(0,H.iV)();return(0,u.useEffect)((function(){var e=i.new;o(!!e)}),[i]),(0,E.jsxs)(d.Z,{addProjectBreadcrumbToCustomBreadcrumbs:n,breadcrumbs:n?[{label:function(){return"Global hooks"},linkProps:{href:"/global-hooks"}},{bold:!0,label:function(){return"New"}}]:null,subheaderChildren:!n&&(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(r.ZP,{beforeIcon:(0,E.jsx)(_.mm,{size:2.5*I.iI}),inline:!0,linkProps:{as:"/global-hooks?new=1",href:"/global-hooks"},noHoverUnderline:!0,primary:!0,sameColorAsText:!0,children:"Add new global hook"})}),title:"Global hooks",uuid:"GlobalHooks/index",children:[n&&(0,E.jsx)(s.Z,{isNew:n}),!n&&(0,E.jsx)(T,{})]})}D.getInitialProps=(0,i.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var G=(0,A.Z)(D)},95140:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/global-hooks",function(){return o(92656)}])}},function(e){e.O(0,[2678,1154,844,4267,9266,9626,8264,7858,5499,5283,3437,9774,2888,179],(function(){return n=95140,e(e.s=n);var n}));var n=e.O();_N_E=n}]);