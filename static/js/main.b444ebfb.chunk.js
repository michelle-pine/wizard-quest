(this["webpackJsonpwizard-quest"]=this["webpackJsonpwizard-quest"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/catandbook.570fbc2b.png"},,,,,,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/cat.834bc1be.png"},function(e,t,a){e.exports=a.p+"static/media/neutralwizard.592b3e33.png"},function(e,t,a){e.exports=a.p+"static/media/catandbookandexam.327ce180.png"},function(e,t,a){e.exports=a.p+"static/media/loader.623fde5f.svg"},,,function(e,t,a){e.exports=a.p+"static/media/book-cover.bc75b5ba.jpg"},function(e,t,a){e.exports=a.p+"static/media/book-texture.6a22510b.jpg"},function(e,t,a){e.exports=a.p+"static/media/book-texture2.4a80930a.jpg"},function(e,t,a){e.exports=a.p+"static/media/book-texture3.54677084.png"},function(e,t,a){e.exports=a.p+"static/media/note.737fafeb.png"},,,,function(e,t,a){e.exports=a(75)},,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/evilwizard.f4c15ed3.png"},function(e,t,a){e.exports=a.p+"static/media/book-filler.9fea8c1d.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),i=a.n(r),s=a(45),c=a(43),l=a(14),u=a(15),d=a.n(u),p=(a(28),a(55),a(56),a(58),a(20)),h=a(31),m=a(32),f=a.n(m),b=(a(59),a(33)),g=a.n(b),v=(a(60),a(17)),y=a.n(v),k=a(34),E=a.n(k),w="NEXT_STEP",O="ADD_STEPS";function j(e){return{type:w,payload:e}}function C(e){return{type:O,payload:e}}var N={0:{type:"none"},1:{type:"go-dialog",center:[42.337147,-71.090267],radius:57.3024,description:"Go to Centennial Common"},2:{type:"audio",button:"Next",img:g.a,hiddenDesc:"At this step, the user will hear the wizard talk about the last materials he needs.",audioSrc:"https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"},3:{type:"audio",button:"Next",img:f.a,hiddenDesc:"At this step, the user will hear the cat prompt the user to find the truth.",audioSrc:"https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"},4:{type:"go-dialog",center:[42.3384,-71.087921],radius:42.672,description:"Find the spellbook. Go where curious minds find books to read."},5:{type:"audio",button:"Open Book",img:y.a,hiddenDesc:"At this step, the cat will help the user locate the spellbook.",audioSrc:"https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"},6:{type:"spellbook",hiddenDesc:"At this step, the user can read the spellbook."},7:{type:"audio",img:y.a,button:"Next",hiddenDesc:"At this step, the cat explains the truth.",audioSrc:"https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"},8:{type:"choice",hiddenDesc:"At this step, the user chooses a major outcome of the game.",choices:[{id:1,buttonText:"Betray the Wizard",buttonFunc:function(e,t){e.preventDefault(),B.dispatch(C(x)),ke(t,e)}},{id:2,buttonText:"Betray the Cat",buttonFunc:function(e,t){e.preventDefault(),B.dispatch(C(S)),ke(t,e)}}]}},x={9:{type:"audio",img:y.a,button:"Next",hiddenDesc:"At this step, the cat explains how to defeat the wizard.",audioSrc:"https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"},10:{type:"go-dialog",center:[42.337599,-71.090301],radius:28.53,description:"Go to Shillman Hall"},11:{type:"audio",img:E.a,button:"Next",hiddenDesc:"At this step, the user will find the exam.",audioSrc:"https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"},12:{type:"go-dialog",center:[42.337147,-71.090267],radius:57.3024,description:"Go to Centennial Common to reconvene with the Wizard."}},S={9:{type:"audio",img:y.a,button:"Next",hiddenDesc:"At this step, the user betrays the cat and catnaps them!",audioSrc:"https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"},10:{type:"go-dialog",center:[42.337147,-71.090267],radius:57.3024,description:"Go to Centennial Common to reconvene with the Wizard."}};function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{steps:N,currentStep:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object.assign({},e,{currentStep:t.payload.step||e.currentStep+1,steps:e.steps});case O:return Object.assign({},e,{user:t.payload,steps:M({},e.steps,{},t.payload)});default:return e}},B=Object(p.b)(D),P=a(2),I=a(3),T=a(6),A=a(4),J=a(8),W=a(5),Y=(a(61),a(62),function(e){function t(e){return Object(P.a)(this,t),Object(T.a)(this,Object(A.a)(t).call(this,e))}return Object(W.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{className:"quest-button ".concat(this.props.dark?"dark":null),onClick:this.props.onClick},this.props.text)}}]),t}(o.a.Component));Y.defaultProps={};var G=Y,_=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(T.a)(this,Object(A.a)(t).call(this,e))).onButtonClick=a.onButtonClick.bind(Object(J.a)(a)),navigator.geolocation.getCurrentPosition((function(e){return[e.coords.longitude,e.coords.latitude]})),a}return Object(W.a)(t,e),Object(I.a)(t,[{key:"onButtonClick",value:function(e){ke(this.props,e)}},{key:"render",value:function(){return o.a.createElement("div",{id:"content-wrapper",className:"content-wrapper fade-in"},o.a.createElement("div",{className:"content-container"},o.a.createElement("h1",{className:"app-title"},"WizardQuest")),o.a.createElement(G,{text:"Start",onClick:this.onButtonClick}))}}]),t}(o.a.Component),U=(a(63),a(64),a(65),a(35)),F=a.n(U),H=function(e){function t(e){return Object(P.a)(this,t),Object(T.a)(this,Object(A.a)(t).call(this,e))}return Object(W.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"loader-wrapper"},o.a.createElement("img",{src:F.a}))}}]),t}(o.a.Component);H.defaultProps={};var R=H,q=a(7),Q=a.n(q),X=(a(66),function(e){function t(e){return Object(P.a)(this,t),Object(T.a)(this,Object(A.a)(t).call(this,e))}return Object(W.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"modal-container"},o.a.createElement("div",{id:"dialog-modal",className:"modal"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h2",null,this.props.title)),o.a.createElement("div",{className:"modal-body"},this.props.children,o.a.createElement(G,{text:"Close",onClick:this.props.onClose})))))}}]),t}(o.a.Component));X.defaultProps={title:Q.a.string,onClose:Q.a.func};var $=X,K=a(36),L=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(T.a)(this,Object(A.a)(t).call(this,e))).onButtonClick=a.onButtonClick.bind(Object(J.a)(a)),a.onModalClose=a.onModalClose.bind(Object(J.a)(a)),a.state={modalOpen:!1,loaderShow:!1},a}return Object(W.a)(t,e),Object(I.a)(t,[{key:"convertCoordinates",value:function(e,t){return[t,e]}},{key:"insideRadius",value:function(e,t){return Object(K.insideCircle)(e,this.convertCoordinates(t.center[0],t.center[1]),t.radius)}},{key:"onButtonClick",value:function(e){this.setState({loaderShow:!0}),navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){var a=[t.coords.longitude,t.coords.latitude];console.log(a),console.log(this.props.step),this.insideRadius(a,this.props.step)?ke(this.props,e):(this.setState({loaderShow:!1}),this.setState({modalOpen:!0}))}.bind(this),function(e){this.setState({loaderShow:!1}),alert("You don't have geolocation services enabled. Enable them before continuing.")}.bind(this)):(this.setState({loaderShow:!1}),alert("You don't have geolocation services enabled. Enable them before continuing."))}},{key:"onModalClose",value:function(e){e.preventDefault(),this.setState({modalOpen:!1})}},{key:"render",value:function(){var e=null;this.state.modalOpen&&(e=o.a.createElement($,{title:"You're not there yet!",onClose:this.onModalClose},o.a.createElement("div",null,"You haven't arrived at the right location yet. If you don't know where you're going, check out the ",o.a.createElement("a",{target:"_blank",href:"https://www.northeastern.edu/campusmap/printable/campusmap.pdf"},"campus map"))));var t=null;return this.state.loaderShow&&(t=o.a.createElement(R,null)),o.a.createElement("div",{className:"go-dialog fade-in"},o.a.createElement("div",{className:"content-container"},this.props.step.description),o.a.createElement("div",{className:"button-wrapper"},o.a.createElement(G,{text:"I've Arrived",onClick:this.onButtonClick})),e,t)}}]),t}(o.a.Component);L.defaultProps={};var V=L,Z=(a(69),a(37)),ee=a.n(Z),te=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(T.a)(this,Object(A.a)(t).call(this,e))).onButtonClick=a.onButtonClick.bind(Object(J.a)(a)),a}return Object(W.a)(t,e),Object(I.a)(t,[{key:"onButtonClick",value:function(e){ke(this.props,e)}},{key:"render",value:function(){return o.a.createElement("div",{className:"audio-dialog fade-in"},o.a.createElement("div",{className:"content-container audio-container"},o.a.createElement(ee.a,{src:this.props.step.audioSrc,controls:!0})),o.a.createElement("div",{className:"img-wrapper"},o.a.createElement("img",{className:"fade-in",src:this.props.step.img,alt:""})),o.a.createElement("div",{className:"button-wrapper"},o.a.createElement(G,{text:this.props.step.button,onClick:this.onButtonClick})))}}]),t}(o.a.Component);te.defaultProps={};var ae=te,ne=(a(72),function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(T.a)(this,Object(A.a)(t).call(this,e))).renderChoice=a.renderChoice.bind(Object(J.a)(a)),a.createOnClick=a.createOnClick.bind(Object(J.a)(a)),a}return Object(W.a)(t,e),Object(I.a)(t,[{key:"createOnClick",value:function(e){return function(t){e.buttonFunc(t,this.props)}}},{key:"renderChoice",value:function(e){var t=this.createOnClick(e).bind(this);return o.a.createElement(G,{key:e.id,text:e.buttonText,onClick:t})}},{key:"render",value:function(){var e=this.props.step.choices.map(this.renderChoice);return o.a.createElement("div",{className:"choice-dialog fade-in"},e)}}]),t}(o.a.Component));ne.defaultProps={};var oe=ne,re=(a(73),a(38)),ie=a.n(re),se=a(39),ce=a.n(se),le=a(40),ue=a.n(le),de=a(41),pe=a.n(de),he=a(42),me=a.n(he),fe=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(T.a)(this,Object(A.a)(t).call(this,e))).state={page:0},a.onNextButtonClick=a.onNextButtonClick.bind(Object(J.a)(a)),a.onBackButtonClick=a.onBackButtonClick.bind(Object(J.a)(a)),a}return Object(W.a)(t,e),Object(I.a)(t,[{key:"onNextButtonClick",value:function(e){e.preventDefault(),3===this.state.page?ke(this.props,e):this.setState({page:this.state.page+1})}},{key:"onBackButtonClick",value:function(e){e.preventDefault(),this.setState({page:this.state.page-1})}},{key:"renderNextButton",value:function(){var e=3===this.state.page?"Close Book":"Next Page";return o.a.createElement(G,{dark:this.state.page>0,text:e,onClick:this.onNextButtonClick})}},{key:"renderPrevButton",value:function(){return 0===this.state.page?null:o.a.createElement(G,{dark:this.state.page>0,text:"Previous Page",onClick:this.onBackButtonClick})}},{key:"render",value:function(){var e=this.state.page>0?"gone":"",t=this.state.page>1?"gone":"",a=this.state.page>2?"gone":"";return o.a.createElement("div",{className:"spellbook fade-in"},o.a.createElement("div",{className:"button-wrapper fixed-button"},this.renderPrevButton(),this.renderNextButton()),o.a.createElement("div",{style:{backgroundImage:"url(".concat(ie.a,")")},className:"cover book-image ".concat(e)}),o.a.createElement("div",{style:{backgroundImage:"url(".concat(ce.a,")")},className:"page-1 book-image ".concat(t)},o.a.createElement("div",{className:"potion"},o.a.createElement("h4",{className:"potion-name"},"Spell of Umbral Warding"),o.a.createElement("div",{className:"potion-text"},o.a.createElement("strong",null,"Ingredients: "),o.a.createElement("ul",null,o.a.createElement("li",null,"Jar of Shadows"),o.a.createElement("li",null,"Gray Chalk"),o.a.createElement("li",null,"Wolfsbane"),o.a.createElement("li",null,"Raven Feathers"),o.a.createElement("li",null,"Cricket Eyes"),o.a.createElement("li",null,"Black Cat Fur"),o.a.createElement("li",null,"Jar of Shadows"),o.a.createElement("li",null,"Gray Chalk"),o.a.createElement("li",null,"Hallowed Stone")),o.a.createElement("strong",null,"Incantation:"),o.a.createElement("p",null," \u201cI call upon the darkness to ward this hallowed place. Flow along these channels and across this stone. Guard from intrusion, taking all steps to prevent crossing of the barrier. Fade into shadows and bind the sprits of gloom to me for my defence and mine alone.\u201d"),o.a.createElement("strong",null,"Process:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Mark out the spell circle using the gray chalk on the hallowed stone you wish to ward."),o.a.createElement("li",null,"Place the wolfsbane, raven feathers, cricket eyes, and black cat fur in each respective channeling point of the spell circle."),o.a.createElement("li",null,"Recite the incantation while pouring the jar of shadows out along the edge of the circle."),o.a.createElement("li",null,"Enjoy your new shadow-guarded fortress!"))))),o.a.createElement("div",{style:{backgroundImage:"url(".concat(ue.a,")")},className:"page-2 book-image ".concat(a)},o.a.createElement("div",{className:"potion"},o.a.createElement("h4",{className:"potion-name"},"Spell of Immolation"),o.a.createElement("div",{className:"potion-text"},o.a.createElement("strong",null,"Ingredients: "),o.a.createElement("ul",null,o.a.createElement("li",null,"Sulfur"),o.a.createElement("li",null,"Iron Shavings")),o.a.createElement("strong",null,"Incantation:"),o.a.createElement("p",null,"\u201cBring the flames of hell upon this soul.\u201d"),o.a.createElement("strong",null,"Process:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Blend the sulfur and iron shavings in your hand."),o.a.createElement("li",null,"Speak the incantation  while swirling your finger through the mixture in your other hand."),o.a.createElement("li",null,"Point at your target at the end of the incantation."),o.a.createElement("li",null,"Enjoy the fiery destruction of all who stand in your way!"))))),o.a.createElement("div",{style:{backgroundImage:"url(".concat(pe.a,")")},className:"page-3 book-image"},o.a.createElement("div",{className:"note"},o.a.createElement("img",{alt:"",className:"note-bg",src:me.a}),o.a.createElement("div",{className:"sr-only"},"If you\u2019re reading this, you\u2019ve found the Grand Warlock\u2019s spell book. By order of the Archmage Council we implore you forget you ever saw this. The Grand Warlock is not to be trusted. He nearly destroyed our world, leaving us no choice but to banish him to to yours. If the spell went as planned he should be powerless, his magic seperated into the form of a cat. Do not help him! Do not fall for his tricks! We can not help should power fall into his hands once more. He is not as innocent as he may seem."))))}}]),t}(o.a.Component);fe.defaultProps={};var be=fe,ge=function(e){function t(e){var a;Object(P.a)(this,t),a=Object(T.a)(this,Object(A.a)(t).call(this,e));var n=B.getState();return a.state={id:n.currentStep,step:n.steps[n.currentStep]},a}return Object(W.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.goToStep()}},{key:"goToStep",value:function(){var e=this.props.match.params.id;B.dispatch(j({step:parseInt(e)})),console.log(B.getState().currentStep);var t=B.getState();this.setState({id:parseInt(e),step:t.steps[parseInt(e)]})}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.goToStep()}},{key:"renderStepType",value:function(){return"go-dialog"===this.state.step.type?o.a.createElement(V,{history:this.props.history,step:this.state.step,stepNum:this.state.id}):"audio"===this.state.step.type?o.a.createElement(ae,{history:this.props.history,step:this.state.step,stepNum:this.state.id}):"spellbook"===this.state.step.type?o.a.createElement(be,{history:this.props.history,step:this.state.step,stepNum:this.state.id}):"choice"===this.state.step.type?o.a.createElement(oe,{history:this.props.history,step:this.state.step,stepNum:this.state.id}):void 0}},{key:"render",value:function(){return o.a.createElement("div",{id:"content-wrapper",className:"content-wrapper fade-in"},this.renderStepType())}}]),t}(o.a.Component);ge.defaultProps={};var ve=ge;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=o.a.createElement(s.a,{store:B},o.a.createElement("div",{className:"page-wrapper"},o.a.createElement(c.a,{basename:"/"},o.a.createElement("div",null,o.a.createElement("div",{id:"starshine"},o.a.createElement("div",{className:"template shine"})),o.a.createElement(l.a,{exact:!0,path:"/",component:_}),o.a.createElement(l.a,{path:"/step/:id",component:ve}))))),ke=t.default=function(e,t){t.preventDefault(),d()("#content-wrapper").css("opacity","0"),B.dispatch(j({}));var a=e.history.push;setTimeout((function(){return a("/step/".concat(B.getState().currentStep))}),490),d()("#content-wrapper").css("opacity","1")};i.a.render(ye,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),d()((function(){for(var e=d()("#starshine"),t=d()(".template.shine"),a="small",n=0;n<500;n++)a=n%2===0?"small":n%3===0?"medium":"large",t.clone().removeAttr("id").css({top:100*Math.random()+"%",left:100*Math.random()+"%",webkitAnimationDelay:20*Math.random()+"s",mozAnimationDelay:20*Math.random()+"s"}).addClass(a).appendTo(e)}))}],[[46,1,2]]]);
//# sourceMappingURL=main.b444ebfb.chunk.js.map