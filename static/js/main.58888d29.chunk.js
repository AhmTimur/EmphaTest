(this.webpackJsonpemphasoft=this.webpackJsonpemphasoft||[]).push([[0],{107:function(e,t,s){},108:function(e,t,s){},236:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s(0),a=s.n(n),i=s(39),c=s.n(i),o=(s(107),s(108),s(13)),u=s(25),l=s(92),d=s(12),j=s(93),m=s.n(j).a.create({baseURL:"https://fathomless-ocean-00302.herokuapp.com/http://emphasoft-test-assignment.herokuapp.com"}),h="API_TOKEN_AUTH",b="LOG_OUT",O="TOGGLE_IS_FETCHING",f=function(e,t){return function(s){m.post("api-token-auth/",{username:e,password:t}).then((function(e){localStorage.setItem("Token",e.data.token),s({type:h,payload:e.data})}))}},p={token:"",isAuth:!1,isFetching:!1},g=function(e){return{type:O,isFetching:e}},x=s(55),_=s.n(x),v=s(94),F=function(e){var t=e||localStorage.getItem("Token");return m({method:"get",url:"api/v1/users/",headers:{Authorization:"Token ".concat(t),accept:"application/json"}}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},S=s(9),y="SET_USERS",N="CHANGE_USERS_ARRAY",I={users:[],usersArray:[]},T=function(e){return function(){var t=Object(v.a)(_.a.mark((function t(s){var r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:r=t.sent,s({type:y,users:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(d.a)(Object(d.a)({},e),{},{token:t.payload.token,isAuth:!0});case b:return localStorage.removeItem("Token"),Object(d.a)(Object(d.a)({},e),{},{isAuth:!1,token:""});case O:return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(d.a)(Object(d.a)({},e),{},{usersArray:t.users,users:t.users});case N:var s=e.users;return t.filter.length>0&&(t.filterType===S.filterOptions.username?s=e.users.filter((function(e){return e.username.includes(t.filter)})):t.filterType===S.filterOptions.id&&(s=e.users.filter((function(e){return e.id.toString().indexOf(t.filter.toString())>-1})))),t.sortType===S.sortOptions.increaseId?s=s.slice().sort((function(e,t){return e.id-t.id})):t.sortType===S.sortOptions.decreaseId&&(s=s.slice().sort((function(e,t){return t.id-e.id}))),Object(d.a)(Object(d.a)({},e),{},{usersArray:s});default:return e}}}),A=Object(u.d)(k,Object(u.a)(l.a)),w=(s(133),s(17)),U=Object(w.a)(),C=s(15),E=s(21),G=s(44),L=s(238),P=s(239),R=s(100),B=s(242),q=s(243),z=s(240),D=s(43),H=s.n(D),J=Object(o.b)((function(e){return{token:e.auth.token,isAuth:e.auth.isAuth,isFetching:e.auth.isFetching,users:e.usersPage.users}}),(function(e){return Object(u.b)({toggleIsFetching:g,authToken:f,usersRequest:T},e)}))((function(e){var t=G.a({username:G.b().required(S.requiredField).min(5,"This field must include at least 5 character"),password:G.b().required(S.requiredField).min(5,"This field must include at least 5 character")});return Object(n.useEffect)((function(){e.isAuth&&e.usersRequest(e.token)}),[e]),Object(n.useEffect)((function(){e.users.length>0&&e.isAuth&&U.push("/users")}),[e.users,e.isAuth]),Object(r.jsx)(L.a,{children:Object(r.jsx)(P.a,{style:{height:"100vh"},className:["justify-content-center","align-items-center"],children:Object(r.jsx)("div",{className:"shadow p-3 mb-5 bg-white rounded",children:Object(r.jsx)(R.a,{lg:"auto",style:{textAlign:"center"},children:Object(r.jsx)(E.b,{enableReinitialize:!0,initialValues:{username:"",password:""},validationSchema:t,onSubmit:function(t,s){var r=s.setSubmitting;e.authToken(t.username,t.password),e.toggleIsFetching(!0),r(!1)},children:function(t){var s=t.values,n=t.errors,a=t.touched,i=t.handleChange,c=t.handleBlur,o=t.handleSubmit,u=t.isSubmitting;return Object(r.jsxs)(B.a,{onSubmit:o,children:[Object(r.jsxs)(B.a.Group,{children:[Object(r.jsx)(B.a.Label,{children:"Username"}),Object(r.jsx)(E.a,{type:"username",name:"username",className:"form-control",onChange:i,onBlur:c,value:s.username})]}),Object(r.jsx)("p",{className:H.a.errorText,children:n.username&&a.username&&n.username}),Object(r.jsxs)(B.a.Group,{children:[Object(r.jsx)(B.a.Label,{children:"Password"}),Object(r.jsx)(E.a,{type:"password",name:"password",className:"form-control",onChange:i,onBlur:c,value:s.password})]}),Object(r.jsx)("p",{className:H.a.errorText,children:n.password&&a.password&&n.password}),Object(r.jsx)("div",{children:Object(r.jsxs)(q.a,{type:"submit",disabled:u,children:[e.isFetching&&Object(r.jsx)(z.a,{className:H.a.toggleSpinner,as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),"Log In"]})})]})}})})})})})})),K=s(7),V=s.n(K),X=s(241),Y=function(e){return e.usersPage.usersArray},M=function(e){return e.auth.token?e.auth.token:localStorage.getItem("Token")},W=function(){var e=Object(o.d)(M),t=Object(o.d)(Y),s=Object(o.c)();Object(n.useEffect)((function(){0===t.length&&e&&s(T(e))}),[e,s,t]),Object(n.useEffect)((function(){s(g(!1))}),[s]),Object(n.useEffect)((function(){U.listen((function(e,t){"POP"===t&&s({type:b})}))}),[s]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(P.a,{className:V.a.usersFilterForm,children:Object(r.jsx)(R.a,{sm:"auto",md:"auto",lg:"auto",className:V.a.usersFilterFormColumn,children:Object(r.jsx)(E.b,{enableReinitialize:!0,initialValues:{filter:""},onSubmit:function(e,t){var r,n,a,i=t.setSubmitting;s((r=e.filter,n=e.filterOption,a=e.sortOption,{type:N,filter:r,filterType:n,sortType:a})),i(!1)},children:function(e){var t=e.values,s=e.handleChange,n=e.handleBlur,a=e.handleSubmit,i=e.isSubmitting;return Object(r.jsxs)(B.a,{onSubmit:a,className:V.a.usersFilterGroup,children:[Object(r.jsxs)(E.a,{as:"select",className:"form-control",name:"filterOption",children:[Object(r.jsx)("option",{hidden:!0,children:"Filter by:"}),Object(r.jsx)("option",{value:S.filterOptions.username,children:"Username"}),Object(r.jsx)("option",{value:S.filterOptions.id,children:"Id"})]}),Object(r.jsx)(E.a,{type:"text",name:"filter",placeholder:"Enter filter text",className:"form-control",onChange:s,onBlur:n,value:t.filter}),Object(r.jsxs)(E.a,{as:"select",className:"form-control",name:"sortOption",children:[Object(r.jsx)("option",{hidden:!0,children:"Sort by:"}),Object(r.jsx)("option",{value:"none",children:"None"}),Object(r.jsx)("option",{value:S.sortOptions.increaseId,children:"Increasing Id"}),Object(r.jsx)("option",{value:S.sortOptions.decreaseId,children:"Decreasing Id"})]}),Object(r.jsx)(q.a,{type:"submit",disabled:i,children:"Apply"})]})}})})}),!!t&&t.map((function(e){return Object(r.jsx)(L.a,{className:V.a.usersContainer,children:Object(r.jsx)("div",{className:V.a.usersFilterFormColumn,children:Object(r.jsx)(P.a,{className:V.a.customer,sm:"auto",md:"auto",lg:"auto",children:Object(r.jsxs)(R.a,{className:"shadow p-3 mb-2 bg-light rounded ".concat(V.a.usersFilterGroup),children:[Object(r.jsxs)(R.a,{xs:"4",md:"auto",lg:"auto",children:[Object(r.jsx)("img",{src:S.defaultAvatarSrc,className:V.a.images,alt:""}),Object(r.jsx)("div",{className:V.a.customerImageName,children:e.username?e.username:"No user name"}),Object(r.jsxs)("div",{className:V.a.customerImageName,children:["id: ",e.id]})]}),Object(r.jsxs)(R.a,{xs:"auto",md:"auto",lg:"auto",className:V.a.customerInfo,children:[e.first_name?e.first_name:"No first name"," ",e.last_name?e.last_name:"No last name",Object(r.jsxs)("div",{className:e.is_active?V.a.active:V.a.notActive,children:[Object(r.jsx)(X.a,{size:20,style:{padding:"5px"}}),e.is_active?"Online":"Offline"]}),Object(r.jsx)("div",{children:!!e.is_superuser&&Object(r.jsx)("div",{className:V.a.superUser,children:"Super user"})})]})]})})})},e.id)}))]})},Q=Object(o.b)((function(e){return{token:e.auth.token}}))((function(e){var t=!!localStorage.getItem("Token")||e.token;return Object(r.jsxs)(C.d,{children:[Object(r.jsx)(C.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(C.a,{to:"/login"})}}),Object(r.jsx)(C.b,{path:"/login",render:function(){return Object(r.jsx)(J,{})}}),Object(r.jsx)(C.b,{path:"/users",render:function(){return t?Object(r.jsx)(W,{}):Object(r.jsx)(C.a,{to:"/login"})}}),Object(r.jsx)(C.b,{path:"*",render:function(){return Object(r.jsx)("div",{children:"404 PAGE IS NOT FOUND"})}})]})})),Z=function(){return Object(r.jsx)(o.a,{store:A,children:Object(r.jsx)(C.c,{history:U,children:Object(r.jsx)(Q,{})})})},$=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,244)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),r(e),n(e),a(e),i(e)}))};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Z,{})}),document.getElementById("root")),$()},43:function(e,t,s){e.exports={errorText:"LoginPage_errorText__3CDW7",toggleSpinner:"LoginPage_toggleSpinner__3F_Ho"}},7:function(e,t,s){e.exports={images:"Users_images__GtCty",customer:"Users_customer__334XO",customerImageName:"Users_customerImageName__1J5z0",active:"Users_active__2o_Xt",notActive:"Users_notActive__1S2P5",activeStatus:"Users_activeStatus__3DLyd",customerInfo:"Users_customerInfo__1Gfgg",superUser:"Users_superUser__ve9ns",usersFilterForm:"Users_usersFilterForm__BPEKr",usersFilterFormColumn:"Users_usersFilterFormColumn__3cSbF",usersFilterFormLabel:"Users_usersFilterFormLabel__1G7sB",usersFilterGroup:"Users_usersFilterGroup__25IRT",filtersLabel:"Users_filtersLabel__lFY_m"}},9:function(e,t){e.exports={sortOptions:{increaseId:"increase",decreaseId:"increase"},filterOptions:{username:"username",id:"ID"},requiredField:"Field is required",defaultAvatarSrc:"https://www.w3schools.com/howto/img_avatar.png"}}},[[236,1,2]]]);
//# sourceMappingURL=main.58888d29.chunk.js.map