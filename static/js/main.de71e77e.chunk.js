(this["webpackJsonpwizard-quest"]=this["webpackJsonpwizard-quest"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/catandbook.570fbc2b.png"},28:function(e,t,a){},32:function(e,t,a){e.exports=a.p+"static/media/cat.834bc1be.png"},33:function(e,t,a){e.exports=a.p+"static/media/neutralwizard.592b3e33.png"},34:function(e,t,a){e.exports=a.p+"static/media/loader.623fde5f.svg"},37:function(e,t,a){e.exports=a.p+"static/media/book-cover.bc75b5ba.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/book-texture.6a22510b.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/book-texture2.4a80930a.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/book-texture3.54677084.png"},41:function(e,t,a){e.exports=a.p+"static/media/note.737fafeb.png"},45:function(e,t,a){e.exports=a(73)},58:function(e,t,a){e.exports=a.p+"static/media/evilwizard.f4c15ed3.png"},59:function(e,t,a){e.exports=a.p+"static/media/book-filler.9fea8c1d.png"},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},68:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),i=a.n(r),s=a(44),l=a(42),c=a(14),u=a(16),p=a.n(u),d=(a(28),a(54),a(55),a(57),a(19)),h=a(31),m=a(32),f=a.n(m),g=(a(58),a(33)),b=a.n(g),v=(a(59),a(24)),k=a.n(v),E=[[42.328207,-71.104922],[42.328152,-71.104704],[42.327905,-71.10495],[42.327894,-71.10474]],y=[42.327987,-71.104858],w={0:{type:"none"},1:{type:"go-dialog",radius:25,center:y,boundingBox:E,description:"Go to Centennial Common"},2:{type:"audio",button:"Next",img:b.a,hiddenDesc:"At this step, the user will hear the wizard talk about the last materials he needs.",audioSrc:"https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"},3:{type:"audio",button:"Next",img:f.a,hiddenDesc:"At this step, the user will hear the cat prompt the user to find the truth.",audioSrc:"https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"},4:{type:"go-dialog",radius:25,center:y,boundingBox:E,description:"Find the spellbook. Go where curious minds find books to read."},5:{type:"audio",button:"Open Book",img:k.a,hiddenDesc:"At this step, the cat will help the user locate the spellbook.",audioSrc:"https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"},6:{type:"spellbook",hiddenDesc:"At this step, the user can read the spellbook."},7:{type:"audio",img:k.a,button:"Next",hiddenDesc:"At this step, the cat explains the truth.",audioSrc:"https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"}},O="NEXT_STEP",j="ADD_STEPS";function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{steps:w,currentStep:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object.assign({},e,{currentStep:t.payload.step||e.currentStep+1,steps:e.steps});case j:return Object.assign({},e,{user:t.payload,steps:N({},e.steps,{},t.payload)});default:return e}},x=Object(d.b)(S);function B(e){return{type:O,payload:e}}var P=a(2),M=a(3),D=a(6),z=a(4),I=a(10),T=a(5),A=(a(60),a(61),function(e){function t(e){return Object(P.a)(this,t),Object(D.a)(this,Object(z.a)(t).call(this,e))}return Object(T.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{className:"quest-button ".concat(this.props.dark?"dark":null),onClick:this.props.onClick},this.props.text)}}]),t}(o.a.Component));A.defaultProps={};var J=A,W=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(D.a)(this,Object(z.a)(t).call(this,e))).onButtonClick=a.onButtonClick.bind(Object(I.a)(a)),navigator.geolocation.getCurrentPosition((function(e){return[e.coords.longitude,e.coords.latitude]})),a}return Object(T.a)(t,e),Object(M.a)(t,[{key:"onButtonClick",value:function(e){fe(this.props,e)}},{key:"render",value:function(){return o.a.createElement("div",{id:"content-wrapper",className:"content-wrapper fade-in"},o.a.createElement("div",{className:"content-container"},o.a.createElement("h1",{className:"app-title"},"WizardQuest")),o.a.createElement(J,{text:"Start",onClick:this.onButtonClick}))}}]),t}(o.a.Component),Y=(a(62),a(63),a(64),a(34)),G=a.n(Y),_=function(e){function t(e){return Object(P.a)(this,t),Object(D.a)(this,Object(z.a)(t).call(this,e))}return Object(T.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"loader-wrapper"},o.a.createElement("img",{src:G.a}))}}]),t}(o.a.Component);_.defaultProps={};var U=_,F=a(7),q=a.n(F),H=(a(65),function(e){function t(e){return Object(P.a)(this,t),Object(D.a)(this,Object(z.a)(t).call(this,e))}return Object(T.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"modal-container"},o.a.createElement("div",{id:"dialog-modal",className:"modal"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h2",null,this.props.title)),o.a.createElement("div",{className:"modal-body"},this.props.children,o.a.createElement(J,{text:"Close",onClick:this.props.onClose})))))}}]),t}(o.a.Component));H.defaultProps={title:q.a.string,onClose:q.a.func};var L=H,R=a(35),Q=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(D.a)(this,Object(z.a)(t).call(this,e))).onButtonClick=a.onButtonClick.bind(Object(I.a)(a)),a.onModalClose=a.onModalClose.bind(Object(I.a)(a)),a.state={modalOpen:!1,loaderShow:!1},a}return Object(T.a)(t,e),Object(M.a)(t,[{key:"convertCoordinates",value:function(e,t){return[t,e]}},{key:"insideBoundingBox",value:function(e,t){var a=this;t.boundingBox.map((function(e){return a.convertCoordinates(e[0],e[1])}));return Object(R.insideCircle)(e,this.convertCoordinates(t.center[0],t.center[1]),t.radius)}},{key:"onButtonClick",value:function(e){this.setState({loaderShow:!0}),navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){var a=[t.coords.longitude,t.coords.latitude];console.log(a),console.log(this.props.step),this.insideBoundingBox(a,this.props.step)?fe(this.props,e):(this.setState({loaderShow:!1}),this.setState({modalOpen:!0}))}.bind(this),function(e){this.setState({loaderShow:!1}),alert("You don't have geolocation services enabled. Enable them before continuing.")}.bind(this)):(this.setState({loaderShow:!1}),alert("You don't have geolocation services enabled. Enable them before continuing."))}},{key:"onModalClose",value:function(e){e.preventDefault(),this.setState({modalOpen:!1})}},{key:"render",value:function(){var e=null;this.state.modalOpen&&(e=o.a.createElement(L,{title:"You're not there yet!",onClose:this.onModalClose},o.a.createElement("div",null,"You haven't arrived at the right location yet. If you don't know where you're going, check out the ",o.a.createElement("a",{target:"_blank",href:"https://www.northeastern.edu/campusmap/printable/campusmap.pdf"},"campus map"))));var t=null;return this.state.loaderShow&&(t=o.a.createElement(U,null)),o.a.createElement("div",{className:"go-dialog"},o.a.createElement("div",{className:"content-container"},this.props.step.description),o.a.createElement("div",{className:"button-wrapper"},o.a.createElement(J,{text:"I've Arrived",onClick:this.onButtonClick})),e,t)}}]),t}(o.a.Component);Q.defaultProps={};var X=Q,$=(a(68),a(36)),K=a.n($),V=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(D.a)(this,Object(z.a)(t).call(this,e))).onButtonClick=a.onButtonClick.bind(Object(I.a)(a)),a}return Object(T.a)(t,e),Object(M.a)(t,[{key:"onButtonClick",value:function(e){fe(this.props,e)}},{key:"render",value:function(){return o.a.createElement("div",{className:"audio-dialog"},o.a.createElement("div",{className:"content-container audio-container"},o.a.createElement(K.a,{src:this.props.step.audioSrc,controls:!0})),o.a.createElement("div",{className:"img-wrapper"},o.a.createElement("img",{src:this.props.step.img,alt:""})),o.a.createElement("div",{className:"button-wrapper"},o.a.createElement(J,{text:this.props.step.button,onClick:this.onButtonClick})))}}]),t}(o.a.Component);V.defaultProps={};var Z=V,ee=(a(71),a(37)),te=a.n(ee),ae=a(38),ne=a.n(ae),oe=a(39),re=a.n(oe),ie=a(40),se=a.n(ie),le=a(41),ce=a.n(le),ue=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(D.a)(this,Object(z.a)(t).call(this,e))).state={page:0},a.onNextButtonClick=a.onNextButtonClick.bind(Object(I.a)(a)),a.onBackButtonClick=a.onBackButtonClick.bind(Object(I.a)(a)),a}return Object(T.a)(t,e),Object(M.a)(t,[{key:"onNextButtonClick",value:function(e){e.preventDefault(),3===this.state.page?fe(this.props,e):this.setState({page:this.state.page+1})}},{key:"onBackButtonClick",value:function(e){e.preventDefault(),this.setState({page:this.state.page-1})}},{key:"renderNextButton",value:function(){var e=3===this.state.page?"Close Book":"Next Page";return o.a.createElement(J,{dark:this.state.page>0,text:e,onClick:this.onNextButtonClick})}},{key:"renderPrevButton",value:function(){return 0===this.state.page?null:o.a.createElement(J,{dark:this.state.page>0,text:"Previous Page",onClick:this.onBackButtonClick})}},{key:"render",value:function(){var e=this.state.page>0?"gone":"",t=this.state.page>1?"gone":"",a=this.state.page>2?"gone":"";return o.a.createElement("div",{className:"spellbook"},o.a.createElement("div",{className:"button-wrapper fixed-button"},this.renderPrevButton(),this.renderNextButton()),o.a.createElement("div",{style:{backgroundImage:"url(".concat(te.a,")")},className:"cover book-image ".concat(e)}),o.a.createElement("div",{style:{backgroundImage:"url(".concat(ne.a,")")},className:"page-1 book-image ".concat(t)},o.a.createElement("div",{className:"potion"},o.a.createElement("h4",{className:"potion-name"},"Spell of Umbral Warding"),o.a.createElement("div",{className:"potion-text"},o.a.createElement("strong",null,"Ingredients: "),o.a.createElement("ul",null,o.a.createElement("li",null,"Jar of Shadows"),o.a.createElement("li",null,"Gray Chalk"),o.a.createElement("li",null,"Wolfsbane"),o.a.createElement("li",null,"Raven Feathers"),o.a.createElement("li",null,"Cricket Eyes"),o.a.createElement("li",null,"Black Cat Fur"),o.a.createElement("li",null,"Jar of Shadows"),o.a.createElement("li",null,"Gray Chalk"),o.a.createElement("li",null,"Hallowed Stone")),o.a.createElement("strong",null,"Incantation:"),o.a.createElement("p",null," \u201cI call upon the darkness to ward this hallowed place. Flow along these channels and across this stone. Guard from intrusion, taking all steps to prevent crossing of the barrier. Fade into shadows and bind the sprits of gloom to me for my defence and mine alone.\u201d"),o.a.createElement("strong",null,"Process:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Mark out the spell circle using the gray chalk on the hallowed stone you wish to ward."),o.a.createElement("li",null,"Place the wolfsbane, raven feathers, cricket eyes, and black cat fur in each respective channeling point of the spell circle."),o.a.createElement("li",null,"Recite the incantation while pouring the jar of shadows out along the edge of the circle."),o.a.createElement("li",null,"Enjoy your new shadow-guarded fortress!"))))),o.a.createElement("div",{style:{backgroundImage:"url(".concat(re.a,")")},className:"page-2 book-image ".concat(a)},o.a.createElement("div",{className:"potion"},o.a.createElement("h4",{className:"potion-name"},"Spell of Immolation"),o.a.createElement("div",{className:"potion-text"},o.a.createElement("strong",null,"Ingredients: "),o.a.createElement("ul",null,o.a.createElement("li",null,"Sulfur"),o.a.createElement("li",null,"Iron Shavings")),o.a.createElement("strong",null,"Incantation:"),o.a.createElement("p",null,"\u201cBring the flames of hell upon this soul.\u201d"),o.a.createElement("strong",null,"Process:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Blend the sulfur and iron shavings in your hand."),o.a.createElement("li",null,"Speak the incantation  while swirling your finger through the mixture in your other hand."),o.a.createElement("li",null,"Point at your target at the end of the incantation."),o.a.createElement("li",null,"Enjoy the fiery destruction of all who stand in your way!"))))),o.a.createElement("div",{style:{backgroundImage:"url(".concat(se.a,")")},className:"page-3 book-image"},o.a.createElement("div",{className:"note"},o.a.createElement("img",{alt:"",className:"note-bg",src:ce.a}),o.a.createElement("div",{className:"sr-only"},"If you\u2019re reading this, you\u2019ve found the Grand Warlock\u2019s spell book. By order of the Archmage Council we implore you forget you ever saw this. The Grand Warlock is not to be trusted. He nearly destroyed our world, leaving us no choice but to banish him to to yours. If the spell went as planned he should be powerless, his magic seperated into the form of a cat. Do not help him! Do not fall for his tricks! We can not help should power fall into his hands once more. He is not as innocent as he may seem."))))}}]),t}(o.a.Component);ue.defaultProps={};var pe=ue,de=function(e){function t(e){var a;Object(P.a)(this,t),a=Object(D.a)(this,Object(z.a)(t).call(this,e));var n=x.getState();return a.state={id:n.currentStep,step:n.steps[n.currentStep]},a}return Object(T.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.goToStep()}},{key:"goToStep",value:function(){var e=this.props.match.params.id;x.dispatch(B({step:parseInt(e)})),console.log(x.getState().currentStep);var t=x.getState();this.setState({id:parseInt(e),step:t.steps[parseInt(e)]})}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.goToStep()}},{key:"renderStepType",value:function(){return"go-dialog"===this.state.step.type?o.a.createElement(X,{history:this.props.history,step:this.state.step,stepNum:this.state.id}):"audio"===this.state.step.type?o.a.createElement(Z,{history:this.props.history,step:this.state.step,stepNum:this.state.id}):"spellbook"===this.state.step.type?o.a.createElement(pe,{history:this.props.history,step:this.state.step,stepNum:this.state.id}):void 0}},{key:"render",value:function(){return o.a.createElement("div",{id:"content-wrapper",className:"content-wrapper fade-in"},this.renderStepType())}}]),t}(o.a.Component);de.defaultProps={};var he=de;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=o.a.createElement(s.a,{store:x},o.a.createElement("div",{className:"page-wrapper"},o.a.createElement(l.a,{basename:"/"},o.a.createElement("div",null,o.a.createElement("div",{id:"starshine"},o.a.createElement("div",{className:"template shine"})),o.a.createElement(c.a,{exact:!0,path:"/",component:W}),o.a.createElement(c.a,{path:"/step/:id",component:he}))))),fe=t.default=function(e,t){t.preventDefault();var a=document.getElementById("content-wrapper");a.classList.remove("fade-in"),a.classList.add("fade-out"),x.dispatch(B({}));var n=e.history.push;setTimeout((function(){return n("/step/".concat(x.getState().currentStep))}),490)};i.a.render(me,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),p()((function(){for(var e=p()("#starshine"),t=p()(".template.shine"),a="small",n=0;n<500;n++)a=n%2===0?"small":n%3===0?"medium":"large",t.clone().removeAttr("id").css({top:100*Math.random()+"%",left:100*Math.random()+"%",webkitAnimationDelay:20*Math.random()+"s",mozAnimationDelay:20*Math.random()+"s"}).addClass(a).appendTo(e)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.de71e77e.chunk.js.map