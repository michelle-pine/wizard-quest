(this["webpackJsonpwizard-quest"]=this["webpackJsonpwizard-quest"]||[]).push([[0],{28:function(t,e,a){t.exports=a.p+"static/media/loader.623fde5f.svg"},34:function(t,e,a){t.exports=a(56)},43:function(t,e,a){},44:function(t,e,a){},45:function(t,e,a){},46:function(t,e,a){},47:function(t,e,a){},48:function(t,e,a){},49:function(t,e,a){},52:function(t,e,a){},56:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(16),i=a.n(r),s=a(33),c=a(31),l=a(14),u=(a(43),a(18));var p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1?arguments[1]:void 0).type,t},d=Object(u.b)(p),m=a(3),h=a(4),v=a(7),f=a(5),b=a(12),O=a(6),j=(a(44),a(45),function(t){function e(t){return Object(m.a)(this,e),Object(v.a)(this,Object(f.a)(e).call(this,t))}return Object(O.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return o.a.createElement("button",{className:"quest-button",onClick:this.props.onClick},this.props.text)}}]),e}(o.a.Component));j.defaultProps={};var E=j,k=function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(v.a)(this,Object(f.a)(e).call(this,t))).onButtonClick=a.onButtonClick.bind(Object(b.a)(a)),navigator.geolocation.getCurrentPosition((function(t){return[t.coords.longitude,t.coords.latitude]})),a}return Object(O.a)(e,t),Object(h.a)(e,[{key:"onButtonClick",value:function(t){U(this.props,t,"step/1")}},{key:"render",value:function(){return o.a.createElement("div",{id:"content-wrapper",className:"content-wrapper fade-in"},o.a.createElement("div",{className:"content-container"},o.a.createElement("h1",{className:"app-title"},"WizardQuest")),o.a.createElement(E,{text:"Start",onClick:this.onButtonClick}))}}]),e}(o.a.Component),g=(a(46),a(47),a(48),a(28)),C=a.n(g),y=function(t){function e(t){return Object(m.a)(this,e),Object(v.a)(this,Object(f.a)(e).call(this,t))}return Object(O.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"loader-wrapper"},o.a.createElement("img",{src:C.a}))}}]),e}(o.a.Component);y.defaultProps={};var w=y,N=a(2),B=a.n(N),S=(a(49),function(t){function e(t){return Object(m.a)(this,e),Object(v.a)(this,Object(f.a)(e).call(this,t))}return Object(O.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"modal-container"},o.a.createElement("div",{id:"dialog-modal",className:"modal"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h2",null,this.props.title)),o.a.createElement("div",{className:"modal-body"},this.props.children,o.a.createElement(E,{text:"Close",onClick:this.props.onClose})))))}}]),e}(o.a.Component));S.defaultProps={title:B.a.string,onClose:B.a.func};var x=S,P=a(29),M=function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(v.a)(this,Object(f.a)(e).call(this,t))).onButtonClick=a.onButtonClick.bind(Object(b.a)(a)),a.onModalClose=a.onModalClose.bind(Object(b.a)(a)),a.state={modalOpen:!1,loaderShow:!1},a}return Object(O.a)(e,t),Object(h.a)(e,[{key:"onButtonClick",value:function(t){var e={longitude:this.props.step.longitude,latitude:this.props.step.latitude};this.setState({loaderShow:!0}),navigator.geolocation.getCurrentPosition(function(a){var n=[a.coords.longitude,a.coords.latitude];Object(P.isEqual)(e,n,this.props.step.epsilon)?(console.log(a),U(this.props,t,"/step/".concat(this.props.stepNum+1))):(this.setState({loaderShow:!1}),this.setState({modalOpen:!0}))}.bind(this))}},{key:"onModalClose",value:function(t){t.preventDefault(),this.setState({modalOpen:!1})}},{key:"render",value:function(){var t=null;this.state.modalOpen&&(t=o.a.createElement(x,{title:"You're not there yet!",onClose:this.onModalClose},o.a.createElement("div",null,"You haven't arrived at the right location yet. If you don't know where you're going, check out the ",o.a.createElement("a",{target:"_blank",href:"https://www.northeastern.edu/campusmap/printable/campusmap.pdf"},"campus map"))));var e=null;return this.state.loaderShow&&(e=o.a.createElement(w,null)),o.a.createElement("div",{className:"go-dialog"},o.a.createElement("div",{className:"content-container"},this.props.step.description),o.a.createElement("div",{className:"button-wrapper"},o.a.createElement(E,{text:"I've Arrived",onClick:this.onButtonClick})),t,e)}}]),e}(o.a.Component);M.defaultProps={};var z=M,I=(a(52),a(30)),D=a.n(I),q=function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(v.a)(this,Object(f.a)(e).call(this,t))).onButtonClick=a.onButtonClick.bind(Object(b.a)(a)),a}return Object(O.a)(e,t),Object(h.a)(e,[{key:"onButtonClick",value:function(t){U(this.props,t,"/step/".concat(this.props.stepNum+1))}},{key:"render",value:function(){return o.a.createElement("div",{className:"audio-dialog"},o.a.createElement("div",{className:"content-container audio-container"},o.a.createElement(D.a,{src:this.props.step.audioSrc,autoPlay:!0,controls:!0})),o.a.createElement("div",{className:"button-wrapper"},o.a.createElement(E,{text:this.props.step.button,onClick:this.onButtonClick})))}}]),e}(o.a.Component);q.defaultProps={};var T=q,J={0:{type:"none"},1:{type:"go-dialog",latitude:42.3371,longitude:-71.0905,epsilon:4e-4,description:"Go to Centennial Common"},2:{type:"audio",button:"Next",audioSrc:"https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"},3:{type:""}},W=function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(v.a)(this,Object(f.a)(e).call(this,t))).state={id:parseInt(t.match.params.id),step:J[t.match.params.id]},a}return Object(O.a)(e,t),Object(h.a)(e,[{key:"componentDidUpdate",value:function(t){this.props.match.params.id!==t.match.params.id&&this.setState({id:parseInt(this.props.match.params.id),step:J[this.props.match.params.id]})}},{key:"renderStepType",value:function(){return"go-dialog"===this.state.step.type?o.a.createElement(z,{history:this.props.history,step:this.state.step,stepNum:this.state.id}):"audio"===this.state.step.type?o.a.createElement(T,{history:this.props.history,step:this.state.step,stepNum:this.state.id}):void 0}},{key:"render",value:function(){return o.a.createElement("div",{id:"content-wrapper",className:"content-wrapper fade-in"},this.renderStepType())}}]),e}(o.a.Component);W.defaultProps={};var Y=W;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=o.a.createElement(s.a,{store:d},o.a.createElement("div",{className:"page-wrapper"},o.a.createElement(c.a,{basename:"/"},o.a.createElement("div",null,o.a.createElement(l.a,{exact:!0,path:"/",component:k}),o.a.createElement(l.a,{path:"/step/:id",component:Y}))))),U=e.default=function(t,e,a){e.preventDefault();var n=document.getElementById("content-wrapper");n.classList.remove("fade-in"),n.classList.add("fade-out");var o=t.history.push;setTimeout((function(){return o(a)}),490)};i.a.render(L,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.a4fe140f.chunk.js.map