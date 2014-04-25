/**********************************************************/
/*********    Kirin JavaScript Library v1.0.1     *********/
/***********          Author: Kirin           *************/
/**********       Created By:2013/11/29        ************/
/**********         Updated:2013/12/26         ************/
/*******        Lasted Updated:2014/01/03         *********/
/******    Copyright 2013, 2015 Kirin Foundation   ********/
/**********************************************************/
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexbox_legacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 * 用于浏览器是否支持html5-css3功能
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(k),g.offsetWidth,e=k.value!=l,g.removeChild(k)):e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;","<style>",a,"</style>"].join(""),k.id=h,(l?k:m).innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e});var J=function(c,d){var f=c.join(""),g=d.length;y(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)===9,e.csstransforms3d=(j.csstransforms3d&&j.csstransforms3d.offsetLeft)===9&&j.csstransforms3d.offsetHeight===3,e.generatedcontent=(j.generatedcontent&&j.generatedcontent.offsetHeight)>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",n.join("touch-enabled),("),h,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",n.join("transform-3d),("),h,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',l,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);s.flexbox=function(){return I("flexOrder")},s["flexbox-legacy"]=function(){return I("boxDirection")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){try{var d=b.createElement("canvas"),e;e=!(!a.WebGLRenderingContext||!d.getContext("experimental-webgl")&&!d.getContext("webgl")),d=c}catch(f){e=!1}return e},s.touch=function(){return e.touch},s.geolocation=function(){return!!navigator.geolocation},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){return e.fontface},s.generatedcontent=function(){return e.generatedcontent},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)B(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),C(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


var kirin={
	site:{                 //官网空间
		fx:{}              //效果
	},
	app:{}                 //移动端
};
/**
/*   获取Id
 *
 * @param str
 * @return
 *
 * @exception $('#oDiv');
 */
function $(id){
	return document.getElementById(id);
}

/**
/* 获取class元素
 * 
 * @param oParent  父级元素Id
 * @param sClass   父级元素Id下面的class元素
 *    
 * @exception      getByClass(oDiv, 'info');
 */
function getByClass  (oParent, sClass)
{
	var aEle=oParent.getElementsByTagName('*');
	var re=new RegExp('\\b'+sClass+'\\b', 'i');
	var aResult=[];
	
	for(var i=0;i<aEle.length;i++)
	{
		if(re.test(aEle[i].className))
		{
			aResult.push(aEle[i]);
		}
	}
	
	return aResult;
}

/**
/* 获取(xxx, xxx, xxx或者xxx xxx xxx 或者 xxx>xxx>xxx或者#xxx .xxx xxx)元素
 * 
 * @param sExp  
 * @param oParent   
 *    
 * @exception      getEle('.fast_nav')[0];
 * @exception      getEle('img', oDiv)[0];
 * @exception      getEle('.courseBox .courseTitle div');
 * @exception      getEle('.hr_20', oDiv)[0];
 * @exception      getEle('.userHead img', this)[0];
 * @exception      getEle('.proListFull');
 * @exception      getEle('#btn_left');
 */
function getEle (sExp, oParent)
{
	var aResult=[];
	var i=0;
	
	oParent || (oParent=document);
	
	if(oParent instanceof Array)
	{
		for(i=0;i<oParent.length;i++)aResult=aResult.concat(getEle(sExp, oParent[i]));
	}
	else if(typeof sExp=='object')
	{
		if(sExp instanceof Array)
		{
			return sExp;
		}
		else
		{
			return [sExp];
		}
	}
	else
	{
		//xxx, xxx, xxx
		if(/,/.test(sExp))
		{
			var arr=sExp.split(/,+/);
			for(i=0;i<arr.length;i++)aResult=aResult.concat(getEle(arr[i], oParent));
		}
		//xxx xxx xxx 或者 xxx>xxx>xxx
		else if(/[ >]/.test(sExp))
		{
			var aParent=[];
			var aChild=[];
			
			var arr=sExp.split(/[ >]+/);
			
			aChild=[oParent];
			
			for(i=0;i<arr.length;i++)
			{
				aParent=aChild;
				aChild=[];
				for(j=0;j<aParent.length;j++)
				{
					aChild=aChild.concat(getEle(arr[i], aParent[j]));
				}
			}
			
			aResult=aChild;
		}
		//#xxx .xxx xxx
		else
		{
			switch(sExp.charAt(0))
			{
				case '#':
					return [document.getElementById(sExp.substring(1))];
				case '.':
					return getByClass(oParent, sExp.substring(1));
				default:
					return [].append(oParent.getElementsByTagName(sExp));
			}
		}
	}

	return aResult;
}

/**
/*   获取样式
 * 
 * @param obj      对象 
 * @param attr     对象的属性
 *    
 * @exception getStyle(oDiv, 'width');
 */
function getStyle ( obj, attr ) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

/**
/*   设置样式
 * 
 * @param obj      对象 
 * @param json     对象的属性集合(json形式)
 *    
 * @exception setStyle(oDiv, {left: 20+'px', top: 15+'px', opacity: 0});
 */
function setStyle (obj, json)
{
	if(obj.length)
		for(var i=0;i<obj.length;i++) setStyle(obj[i], json);
	else
	{
		if(arguments.length==2)	//json
			for(var i in json) setStyle(obj, i, json[i]);
		else	//name, value
		{
			switch(arguments[1].toLowerCase())
			{
				case 'opacity':
					obj.style.filter='alpha(opacity:'+arguments[2]+')';
					obj.style.opacity=arguments[2]/100;
					break;
				default:
					if(typeof arguments[2]=='number')
					{
						obj.style[arguments[1]]=arguments[2]+'px';
					}
					else
					{
						obj.style[arguments[1]]=arguments[2];
					}
					break;
			}
		}
	}
}

/**
/*   设置当前样式
 * 
 * @param now   当前样式
 *    
 * @exception _setStyle(this,'active');
 */
function _setStyle (now)
{
	setStyle(this, now);
}

/**
/*   设置css3样式
 * 
 * @param obj   对象
 * @param name  样式名称
 * @param value 样式值
 *    
 * @exception setStyle3(oDiv,'transform', 'perspective(1000px) rotateY('+now.rotateY+'deg)');
 */
function setStyle3 (obj, name, value)
{
	obj.style['Webkit'+name.charAt(0).toUpperCase()+name.substring(1)]=value;
	obj.style['Moz'+name.charAt(0).toUpperCase()+name.substring(1)]=value;
	obj.style['ms'+name.charAt(0).toUpperCase()+name.substring(1)]=value;
	obj.style['O'+name.charAt(0).toUpperCase()+name.substring(1)]=value;
	obj.style[name]=value;
}

/**
/*   添加样式
 * 
 * @param obj      对象 
 * @param cls      样式
 *    
 * @exception      addClass(oDiv, 'cur');
 */
function addClass (obj,cls){
     if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}

/**
/*   移除样式
 * 
 * @param obj      对象 
 * @param cls      样式
 *    
 * @exception      removeClass(oDiv, 'cur');
 */
function removeClass (obj,cls){
    var curObj=''+obj.className+'',
        curObj=curObj.replace(/(\s+)/gi,''),
        removed=curObj.replace(''+cls+'',''),
        removed=removed.replace(/(^\s+)|(\s+$)/g,'');
        obj.className=removed;
}

/**
/*   检查被选择的元素是否包含指定的class名
 * 
 * @param obj      对象 
 * @param cls      样式
 *    
 * @exception      hasClass(oDiv, 'cur');
 */
function hasClass (obj,cls){
    var curObj=obj.className;
    curObjList=curObj.split(/\s+/);
    x=0;
    for(x in curObjList){
        if(curObjList[x]==cls){
            return true;
        }
    }
    return false;
}

/**
/* 对设置或移除被选元素的一个或多个类进行切换
 * 
 * @param obj      对象 
 * @param cls      样式
 *    
 * @exception      toggleClass(oDiv, 'cur');
 */
 function toggleClass (obj,cls){  
    if(hasClass(obj,cls)){  
        removeClass(obj, cls);  
    }else{  
        addClass(obj, cls);  
    }  
}

/**
/* 设置一个新的样式替换掉旧样式
 * 
 * @param obj      对象 
 * @param oldcls   旧样式
 * @param newcls   新样式
 *    
 * @exception      toggleClass(oDiv, 'cur','cur1');
 */
function changeClass (ele,oldcls,newcls) {
    if (!hasClass(ele,newcls)) {
        if(hasClass(ele,oldcls)){
            removeClass(ele,oldcls);
        }
        addClass(ele,newcls);
    }
}

/**
/* 获取child元素
 * 
 * @param p      参数一 
 * @param n      参数二
 * @return
 *    
 * @exception      child('oDiv','oDiv');
 */
function child (p,n) {
		var cs=p.childNodes, c=null, tn=0;
		for(var i=0;i<cs.length;++i) {
			c=cs[i];
			if(c.nodeType===1 ) {
				if(tn === n) break;
				++tn;
			}
		}
		return c;
	}


/**
/* 把指定元素转换为数组元素
 * 
 * @param elem      对象 
 *    
 * @exception      toArray(oDiv);
 */
function toArray(elem){
	var arr = [];
	for(var i=0;i<elem.length;i++){
		arr.push( elem[i] );
	}
	return arr;
}

/**
/* map 将一组元素转换成其他数组（不论是否是元素数组）
 *  
 * @param arr   集合名称   
 * @param fn     回调函数
 * @return	
 *
 * @exception      map(aBtn, function (){});
 */
function map(arr, fn)
{
	for(var i=0;i<arr.length;i++)
	{
		fn.call(arr[i], i);
	}
}

/**
/* 随机数
 *  
 * @param n     参数n   
 * @param m     参数m
 * @return	
 *
 * @exception      rnd(a,b);
 */
function rnd(n, m)
{
	return Math.random()*(m-n)+n;
}

/**
/* 格式化代码
 *  
 * @param format   要格式化的内容
 * @return	
 *
 * @exception      sprintf('position:absolute; left:0; top:0; width:%1px; height:%2px;', W, H);
 */
function sprintf(format)
{
	var _arguments=arguments;
	
	return format.replace(/%\d+/g, function (str){
		return _arguments[parseInt(str.substring(1))];
	});
}

/**
/* 添加收藏
 *  
 * @param sURL     地址 
 * @param sTitle   标题	
 *
 */
function addFavorite(sURL,sTitle) {
	try {
		window.external.addFavorite(sURL, sTitle);
	} catch (e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "");
		} catch (e) {
			alert("加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
}


/**
/* 设为首页
 *  
 * @param obj   对象
 * @param url   地址	
 *
 */
function setHome(obj,url) {
	try {
		obj.style.behavior = 'url(#default#homepage)';
		obj.setHomePage(url);
	} catch (e) {
		if (window.netscape) {
			try {
				netscape.security.PrivilegeManager
						.enablePrivilege("UniversalXPConnect");
			} catch (e) {
				alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将[signed.applets.codebase_principal_support]设置为'true'");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1']
					.getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage', url);
		}
	}
}

/**
/* 求最大值工具函数
 *  
 * @param a     参数a   
 * @param b     参数b
 * @return	
 *
 * @exception      iMax(3,6);
 */
function iMax(a,b){
    if(a<b) {return a=b;}
    else{ return a;}
}

/**
/* 求最小值工具函数
 *  
 * @param a     参数a   
 * @param b     参数b
 * @return	
 *
 * @exception      iMin(3,6);
 */
function iMin(a,b){
    if(a>b) {return b=a;} 
    else{ return b;}
}

/**
/* 倒计时-时分秒小于0补零的工具函数
 *  
 * @param h     参数h   
 * @return	
 *
 * @exception      setZero(h);
 */
function setZero(n){
	return n<10 ? '0'+n :n;
}

/**********************************************************/
/*********************  AJAX 表单处理  ********************/
/**********************************************************/

/**
/* json转换为url
 *  
 * @param json    json
 * @return	  
 * @exception      
 */
kirin.site.json2url= function(json)
{
	var a=[];
	for(var i in json)
	{
		var v=json[i]+'';
		v=v.replace(/\n/g, '<br/>');
		v=encodeURIComponent(v);
		a.push(i+'='+v);
	}
	return a.join('&');
}

/**
/* ajax请求
 *  
 * @param url     地址 
 * @param opt	  参数
 *
 * @exception      ajax('xxx/xx.php', {
					   data: {act: 'get_timestamp'},
		               fnSucc: function (str){
			              var n=parseInt(str);
		                }
	               });

 */
kirin.site.ajax= function(url, opt)
{
	opt			=opt||{};
	opt.data	=opt.data||{};
	opt.data.t	=opt.data.t||new Date().getTime();
	opt.method	=opt.method||'get';
	
	var oAjax=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
	
	if(opt.method=='post')
	{
		oAjax.open('POST', url, true);
		oAjax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		oAjax.send(opt.data?json2url(opt.data):null);
	}
	else
	{
		url+='?'+json2url(opt.data);
		oAjax.open('GET', url, true);
		oAjax.send();
	}
	
	oAjax.onreadystatechange=function ()
	{
		if(oAjax.readyState==4)
		{
			if(oAjax.status==200)
			{
				opt.fnSucc && opt.fnSucc(oAjax.responseText);
			}
			else
			{
				opt.fnFaild && opt.fnFaild(oAjax.status);
			}
		}
	};
}

/**
/* request请求
 *  
 * @param url        地址 
 * @param data	     额外的数据
 * @param fnSucc     成功回调函数 
 * @param fnFaild	 失败回调函数
 *
 * @exception      ajax('xxx/xx.php', {
					   data: data,
		               fnSucc: function (str){
			              alert('成功');
		               },
		               fnFaild: function (str){
			              alert('失败');
		               },
	               });

 */
kirin.site.request= function(url, data, fnSucc, fnFaild)
{
	ajax(url, {
		data: data,
		fnSucc: function (str){
			try{
				str=str.replace(/\n/g, '');
				var json=eval('('+str+')');
			}
			catch(e)
			{
				var oDiv=document.getElementById('test_err_ndd');
				if(!oDiv)
				{
					oDiv=document.createElement('div');
					document.body.appendChild(oDiv);
					oDiv.style.display='none';
				}
				
				oDiv.innerHTML+=str;
				return;
			}
			
			if(json.error)
				fnFaild&&fnFaild(json.desc, json.error);
			else
				fnSucc&&fnSucc(json);
		},
		fnFaild: function (str){
			fnFaild&&fnFaild(str+'|'+url);
		}
	});
}

/**********************************************************/
/*********************** js运动框架  **********************/
/**********************************************************/
/**
/*   速度运动
 * 
 * @param obj      对象 
 * @param n        要移动的对象
 * @param attr     运动方向（left,top,bottom,right）
 * @param target   目标点 
 * @param endFn    回调函数(可选参数)
 *    
 * @exception      doMove(oDiv, 20,'left',600, function(){});
 */
kirin.site.fx.doMove= function(obj,n,attr,target,enFn){           
	
	//n=当前位置<目标点 ? n:-n;

	n= parseInt(getStyle(obj,attr))< target ? n: -n;


	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
			var speed=parseInt(getStyle(obj,attr))+n;
			

			if(speed > target && n>0 || speed < target && n<0) speed=target;
	

			obj.style[attr]=speed+'px';
			
			if(speed==target){
				clearInterval(obj.timer);
				enFn &&enFn();
			}

		},30);

}
/**
/*   抖动运动
 * 
 * @param obj      对象 
 * @param attr     抖动方向(left,top,bottom,right)
 * @param fnFn     回调函数(可选参数) 
 * @exception      shake(oDiv, 'left');
 */
kirin.site.fx.shake= function (obj,attr,fnFn){
		//obj.onOff=!未定义为true
		if(!obj.onOff){               //要防止元素身上有onOff自定义属性
			var pos=parseInt(getStyle(obj,attr));
			var arr=[];
			for(var i=20; i>0; i-=2){
				arr.push(i,-i);
			}
			arr.push(0);


			clearInterval(obj.shake);


			obj.shake=setInterval(function(){
				obj.style[attr]=pos+arr[num]+'px';          //原来的位置加上数组里面的位置
				num++;
				if(num==arr.length){
					clearInterval(obj.shake);

					fnFn&&fnFn();
					obj.onOff=true;
				}
			}, 50);
		}

		
	}

/**
/*   设置透明度
 * 
 * @param obj      对象 
 * @param n        透明多少度(30%)
 * @param taregt   目标点    (100%)
 * @param endFn    回调函数(可选参数) 
 * @exception      opacity ( oDiv, 30, 100, function(){});
 */
kirin.site.fx.opacity=function ( obj, n, target, endFn) {
	
	n = getStyle( obj, 'opacity' )*100 < target ? n : -n;
	
	clearInterval( obj.opacity );
	
	obj.opacity = setInterval(function () {
	
		var speed =  Math.floor(getStyle( obj, 'opacity' )*100) + n;
		
		if ( speed > target && n > 0 || speed < target && n < 0 ) speed = target;
		

		obj.style.filter = 'alpha(opacity:'+ speed +')';
		obj.style.opacity = speed/100;
		
		if ( speed == target ) {
			clearInterval( obj.opacity );
			endFn && endFn();
		}
	
	}, 20);
};

/**
/*   摆动运动
 * 
 * @param obj      对象 
 * @param cur      当前值
 * @param taregt   目标点    
 * @param fnDo     开始运动回调函数 
 * @param fnEnd    结束运动回调函数    
 * @param acc      修正错位的基数
 * @exception      swing ( oDiv, 30, 100, function(){},function(){});
 */
kirin.site.fx.swing=function (obj, cur, target, fnDo, fnEnd, acc)
{
	if(window.navigator.userAgent.search(/MSIE 6/)!=-1)
	{
		fnDo&&fnDo.call(obj, target);
		fnEnd&&fnEnd.call(obj, target);
		return;
	}
	if(!acc)acc=0.1;
	var now={};
	var x=0;	
	
	if(!obj.__swing_v)obj.__swing_v=0;
	
	if(!obj.__last_timer)obj.__last_timer=0;
	var t=new Date().getTime();
	if(t-obj.__last_timer>20)
	{
		fnMove();
		obj.__last_timer=t;
	}
	
	clearInterval(obj.timer);
	obj.timer=setInterval(fnMove, 20);
	
	function fnMove(){
		if(x<50)
		{
			obj.__swing_v+=acc;
		}
		else
		{
			obj.__swing_v-=acc;
		}
		
		x+=obj.__swing_v;
		
		
		
		for(var i in cur)
		{
			now[i]=(target[i]-cur[i])*x/100+cur[i];
		}
		
		
		if(fnDo)fnDo.call(obj, now);
		
		if(Math.abs(100-x)<1)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd.call(obj, target);
			obj.__swing_v=0;
		}
	}
};

/**
/*   弹性运动
 * 
 * @param obj      对象 
 * @param cur      当前值
 * @param taregt   目标点    
 * @param fnDo     开始运动回调函数 
 * @param fnEnd    结束运动回调函数    
 * @param fs       修正错位的基数
 * @param ms       修正错位的基数
 * @exception      flex ( oDiv, 30, 100, function(){},function(){});
 */

kirin.site.fx.flex=function (obj, cur, target, fnDo, fnEnd, fs, ms)
{
	if(window.navigator.userAgent.search(/MSIE 6/)!=-1)
	{
		fnDo&&fnDo.call(obj, target);
		fnEnd&&fnEnd.call(obj, target);
		return;
	}
	var MAX_SPEED=16;
	
	if(!fs)fs=6;
	if(!ms)ms=0.75;
	var now={};
	var x=0;	//0-100
	
	if(!obj.__flex_v)obj.__flex_v=0;
	
	if(!obj.__last_timer)obj.__last_timer=0;
	var t=new Date().getTime();
	if(t-obj.__last_timer>20)
	{
		fnMove();
		obj.__last_timer=t;
	}
	
	clearInterval(obj.timer);
	obj.timer=setInterval(fnMove, 20);
	
	function fnMove(){
		obj.__flex_v+=(100-x)/fs;
		obj.__flex_v*=ms;

		if(Math.abs(obj.__flex_v)>MAX_SPEED)obj.__flex_v=obj.__flex_v>0?MAX_SPEED:-MAX_SPEED;
		
		x+=obj.__flex_v;
		
		for(var i in cur)
		{
			now[i]=(target[i]-cur[i])*x/100+cur[i];
		}
		
		
		if(fnDo)fnDo.call(obj, now);
		
		if(Math.abs(obj.__flex_v)<1 && Math.abs(100-x)<1)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd.call(obj, target);
			obj.__flex_v=0;
		}
	}
};

/**
/*   缓冲运动
 * 
 * @param obj      对象 
 * @param cur      当前值
 * @param taregt   目标点    
 * @param fnDo     开始运动回调函数 
 * @param fnEnd    结束运动回调函数    
 * @param fs       修正错位的基数
 * @exception      buffer ( oDiv, 30, 100, function(){},function(){});
 */
kirin.site.fx.buffer=function (obj, cur, target, fnDo, fnEnd, fs)
{
	if(window.navigator.userAgent.search(/MSIE 6/)!=-1)
	{
		fnDo&&fnDo.call(obj, target);
		fnEnd&&fnEnd.call(obj, target);
		return;
	}
	
	if(!fs)fs=6;
	var now={};
	var x=0;
	var v=0;
	
	if(!obj.__last_timer)obj.__last_timer=0;
	var t=new Date().getTime();
	if(t-obj.__last_timer>20)
	{
		fnMove();
		obj.__last_timer=t;
	}
	
	clearInterval(obj.timer);
	obj.timer=setInterval(fnMove, 20);
	function fnMove(){
		v=Math.ceil((100-x)/fs);
		
		x+=v;
		
		for(var i in cur)
		{
			now[i]=(target[i]-cur[i])*x/100+cur[i];
		}
		
		
		if(fnDo)fnDo.call(obj, now);
		
		if(Math.abs(v)<1 && Math.abs(100-x)<1)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd.call(obj, target);
		}
	}
};

/**
/*   匀速(线性)运动
 * 
 * @param obj      对象 
 * @param cur      当前值
 * @param taregt   目标点    
 * @param fnDo     开始运动回调函数 
 * @param fnEnd    结束运动回调函数    
 * @param fs       修正错位的基数
 * @exception      linear ( oDiv, 30, 100, function(){},function(){});
 */
kirin.site.fx.linear=function (obj, cur, target, fnDo, fnEnd, fs)
{
	if(window.navigator.userAgent.search(/MSIE 6/)!=-1)
	{
		fnDo&&fnDo.call(obj, target);
		fnEnd&&fnEnd.call(obj, target);
		return;
	}
	if(!fs)fs=50;
	var now={};
	var x=0;
	var v=0;
	
	if(!obj.__last_timer)obj.__last_timer=0;
	var t=new Date().getTime();
	if(t-obj.__last_timer>20)
	{
		fnMove();
		obj.__last_timer=t;
	}
	
	clearInterval(obj.timer);
	obj.timer=setInterval(fnMove, 20);
	
	v=100/fs;
	function fnMove(){
		x+=v;
		
		for(var i in cur)
		{
			now[i]=(target[i]-cur[i])*x/100+cur[i];
		}
		
		if(fnDo)fnDo.call(obj, now);
		
		if(Math.abs(100-x)<1)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd.call(obj, target);
		}
	}
};

kirin.site.fx.stop=function (obj)
{
	clearInterval(obj.timer);
};

/**
/*   css3运动
 * 
 * @param obj      对象 
 * @param json     json
 * @param fnEnd    回调函数  
 * @param fTime    运动时间   
 * @param sType    运动类型
 * @exception      move3( oDiv, {}, function(){},1000);
 */
kirin.site.fx.move3=function (obj, json, fnEnd, fTime, sType)
{
	var addEnd=zns.site.fx.addEnd;
	
	fTime||(fTime=1);
	sType||(sType='ease');
	
	setTimeout(function (){
		setStyle3(obj, 'transition', sprintf('%1s all %2', fTime, sType));
		addEnd(obj, function (){
			setStyle3(obj, 'transition', 'none');
			if(fnEnd)fnEnd.apply(obj, arguments);
		}, json);
		
		setTimeout(function (){
			if(typeof json=='function')
				json.call(obj);
			else
				setStyle(obj, json);
		}, 0);
	}, 0);
};

//监听css3运动终止
(function (){
	var aListener=[];	//{obj, fn, arg}
	if(!Modernizr.csstransitions)return;
	
	if(window.navigator.userAgent.toLowerCase().search('webkit')!=-1)
	{
		document.addEventListener('webkitTransitionEnd', endListrner, false);
	}
	else
	{
		document.addEventListener('transitionend', endListrner, false);
	}
	
	function endListrner(ev)
	{
		var oEvObj=ev.srcElement||ev.target;
		//alert(aListener.length);
		for(var i=0;i<aListener.length;i++)
		{
			if(oEvObj==aListener[i].obj)
			{
				aListener[i].fn.call(aListener[i].obj, aListener[i].arg);
				aListener.remove(aListener[i--]);
			}
		}
	}
	
	kirin.site.fx.addEnd=function (obj, fn, arg)
	{
		if(!obj || !fn)return;
		aListener.push({obj: obj, fn: fn, arg: arg});
	}
})();

/**
/*Tween 运动函数
*/
var Tween = {
    linear: function(t, b, c, d) {
        return c * t / d + b

    },
    easeIn: function(t, b, c, d) {
        return c * (t /= d) * t + b

    },
    easeOut: function(t, b, c, d) {
        return - c * (t /= d) * (t - 2) + b

    },
    easeBoth: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b

        }
        return - c / 2 * ((--t) * (t - 2) - 1) + b

    },
    easeInStrong: function(t, b, c, d) {
        return c * (t /= d) * t * t * t + b

    },
    easeOutStrong: function(t, b, c, d) {
        return - c * ((t = t / d - 1) * t * t * t - 1) + b

    },
    easeBothStrong: function(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b

        }
        return - c / 2 * ((t -= 2) * t * t * t - 2) + b

    },
    elasticIn: function(t, b, c, d, a, p) {
        if (t === 0) {
            return b

        }
        if ((t /= d) == 1) {
            return b + c

        }
        if (!p) {
            p = d * 0.3

        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4

        } else {
            var s = p / (2 * Math.PI) * Math.asin(c / a)

        }
        return - (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b

    },
    elasticOut: function(t, b, c, d, a, p) {
        if (t === 0) {
            return b

        }
        if ((t /= d) == 1) {
            return b + c

        }
        if (!p) {
            p = d * 0.3

        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4

        } else {
            var s = p / (2 * Math.PI) * Math.asin(c / a)

        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b

    },
    elasticBoth: function(t, b, c, d, a, p) {
        if (t === 0) {
            return b

        }
        if ((t /= d / 2) == 2) {
            return b + c

        }
        if (!p) {
            p = d * (0.3 * 1.5)

        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4

        } else {
            var s = p / (2 * Math.PI) * Math.asin(c / a)

        }
        if (t < 1) {
            return - 0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b

        }
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b

    },
    backIn: function(t, b, c, d, s) {
        if (typeof s == 'undefined') {
            s = 1.70158

        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b

    },
    backOut: function(t, b, c, d, s) {
        if (typeof s == 'undefined') {
            s = 3.70158

        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b

    },
    backBoth: function(t, b, c, d, s) {
        if (typeof s == 'undefined') {
            s = 1.70158

        }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b

        }
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b

    },
    bounceIn: function(t, b, c, d) {
        return c - Tween['bounceOut'](d - t, 0, c, d) + b

    },
    bounceOut: function(t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b

        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b

        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b

        }
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b

    },
    bounceBoth: function(t, b, c, d) {
        if (t < d / 2) {
            return Tween['bounceIn'](t * 2, 0, c, d) * 0.5 + b

        }
        return Tween['bounceOut'](t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b

    }

};

/**
/* tween运动
 *
 * @param obj       对象
 * @param oTarget   目标点
 * @param iTime     运动时间
 * @param iType     运动类型
 * @param fnEnd     回调函数
 * @param fnDuring  回调持续函数
 *
 * @exception       tweenMove(oDiv, 800, 30, 'linear', function(){}, fnDuring);
 */
kirin.site.fx.tweenMove=function (obj, oTarget, iTime, iType, fnEnd, fnDuring) {
    var fn = Tween[iType];
    var t = 0;
    var b = {};
    var c = {};
    var d = iTime / 24;
    var MT = {};
    var sAttr = "";
    clearInterval(obj.timer);
    for (sAttr in oTarget) {
        b[sAttr] = css(obj, sAttr);
        c[sAttr] = oTarget[sAttr] - b[sAttr];
        MT[sAttr] = 0

    }
    if (iTime < 30) {
        for (sAttr in oTarget) {
            css(obj, sAttr, oTarget[sAttr])

        }

    } else {
        obj.timer = setInterval(function() {
            if (t < d) {
                t++;
                for (sAttr in oTarget) {
                    MT[sAttr] = fn(t, b[sAttr], c[sAttr], d);
                    css(obj, sAttr, fn(t, b[sAttr], c[sAttr], d))

                }

            } else {
                for (sAttr in oTarget) {
                    css(obj, sAttr, oTarget[sAttr])

                }
                clearInterval(obj.timer);
                if (fnEnd) {
                    fnEnd.call(obj)

                }

            }
            if (fnDuring) {
                fnDuring.call(obj, b, MT, t)

            }

        },
        24)

    }

}

/**********************************************************/
/*********************** js数据操作  **********************/
/**********************************************************/
/**
/* 删除左右两端的空格
 *
 * @param str
 * @return
 *
 * @exception      str.Trim();
 */
String.prototype.Trim=function(){
	return this.replace(/(^\s*)|(\s*$)/g,"");
}

/**
/* 替换字符串里的字符
 *  
 * @param str
 * @return
 
 * @exception      str.replaceAll("要替换的字符","替换成什么");
 */
String.prototype.replaceAll  = function(s1,s2){   
	return this.replace(new RegExp(s1,"gm"),s2);   
};

/**
/* 返回某个指定的字符串值在字符串中首次出现的位置
 *  
 * @param array
 *
 * @exception   str.indexOf("a");
 */
Array.prototype.indexOf=function (w)
{
	for(var i=0;i<this.length;i++)if(this[i]==w)return i;
	return -1;
};

/**
/* 移除数组中的元素
 *  
 * @param array
 *
 * @exception      array.remove("s");
 */
Array.prototype.remove=function (w)
{
	var n=this.indexOf(w);
	if(n!=-1)this.splice(n,1);
};

/**
/* 添加数组中的元素
 *  
 * @param str
 *
 * @exception      array.append("li");
 */
Array.prototype.append=function (aAny)
{
	for(var i=0,len=aAny.length;i<len;i++)
		this.push(aAny[i]);
	
	return this;
};

/**
/* 绑定事件操作
 *
 * @param events  事件名
 * @param fn      回调函数
 *
 * @exception   obj.on('onmouseover',fnOver);
 */
function on(events,fn){
	for(var i=0;i<this.elements.length;i++){
		bindEvent(this.elements[i],events,fn);
	}
	return this;
};


/**
/* 解除绑定事件操作
 *
 * @param events  事件名
 * @param fn      回调函数
 *
 * @exception   obj.off('onmouseover',fnOver);
 */
function off(events,fn){
	for(var i=0;i<this.elements.length;i++){
		unbindEvent(this.elements[i],events,fn);
	}
	return this;
};


/**
/* 元素显示操作
 *
 * @exception   obj.show();
 */
function show(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display = 'inline';
	}
	return this;
};

/**
/* 元素隐藏操作
 *
 * @exception     obj.hide();
 */
function hide(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display = 'none';
	}
	return this;
};



/**
/* 元素移入移出绑定事件
 *  
 * @param fnOver  移入
 * @param fnOut   移出
 *
 * @exception     obj.hover(over, out);
 */
function hover (fnOver , fnOut){
	this.on('mouseover',fnOver);
	this.on('mouseout',fnOut);
	return this;
};

/**
/* 设置或获取css样式
 *  
 * @param attr    属性名
 * @param value   值
 *
 * @exception     obj.attr('left',300);
 * @exception     obj.attr('width');
 */
function css (attr,value){
	if(arguments.length==2){ //设置
		
		for(var i=0;i<this.elements.length;i++){
			
			this.elements[i].style[attr] = value;
			
		}
		
	}
	else{ //获取
	
		return getStyle(this.elements[0],attr);
	
	}
	return this;
};



/**
/* 设置或获取属性值
 *  
 * @param attr    属性名
 * @param value   值
 *
 * @exception     obj.attr('left',300);
 * @exception     obj.attr('width');
 */
function attr (attr,value){
	
	var div = document.createElement("div");
	div.setAttribute( "className", "t" );
	
	if(div.className == "t" && attr == 'class'){
		attr = 'className';
	}
	
	
	if(arguments.length==2){ //设置
		
		for(var i=0;i<this.elements.length;i++){
			
			//this.elements[i][attr] = value;
			this.elements[i].setAttribute(attr,value);
			
		}
		
	}
	else{ //获取
	
		return this.elements[0].getAttribute(attr);
	
	}
	return this;
	
};

/**
/* 查找第几个元素
 *  
 * @param index    第几个
 *
 * @exception      obj.eq(1);
 */
function eq (index){
	return $(this.elements[index]);
};


/**
/* 查找元素
 *  
 * @param sel      需要查找的元素
 *
 * @exception      obj.find('li');
 */
function find(sel){
	var arr = [];
	
	if( sel.charAt(0) == '.' ){  //class
	
		for(var i=0;i<this.elements.length;i++){
			
			arr = arr.concat(getByClass( this.elements[i] ,sel.substring(1)));
		}
	
	}
	else{  //tag
		for(var i=0;i<this.elements.length;i++){
			
			arr = arr.concat( toArray(this.elements[i].getElementsByTagName(sel)) );
		}
	}
	
	return $(arr);
};


/**********************************************************/
/*********************** js事件操作  **********************/
/**********************************************************/
/**
/* 获取键值
 *  
 * @param event     事件
 * @return
 *
 * @exception     getKeyCode(function(ev){});
 */
kirin.site.getKeyCode = function(event) {
		var x=0;
		if(window.event) // IE8 and earlier
		{
			x=event.keyCode;
		}else if(event.which) // IE9/Firefox/Chrome/Opera/Safari
		{
			x=event.which;
		}
		return x;
	}

/**
/* 绑定事件
 *  
 * @param obj     对象
 * @param ev      事件类型  
 * @param fn      回调函数
 *
 * @exception     bindEvent(window,'scroll',function(){});
 */
kirin.site.bindEvent=function (obj, ev, fn)
{
	obj.addEventListener?obj.addEventListener(ev, fn, false):obj.attachEvent('on'+ev, fn);
}

/**
/* 解除绑定事件
 *  
 * @param obj     对象
 * @param ev      事件类型  
 * @param fn      回调函数 
 *
 * @exception     unbindEvent(window,'scroll',function(){});
 */
kirin.site.unbindEvent=function (obj, ev, fn)
{
	obj.removeEventListener?obj.removeEventListener(ev, fn, false):obj.detachEvent('on'+ev, fn);
}

/**********************************************************/
/*********************** cookie操作  **********************/
/**********************************************************/

/**
/* 设置cookie
 *  
 * @param name     cookie名称
 * @param value    cookie值 
 * @param iDay     设置多长时间 
 *
 * @exception      setCookie('myCookie', nCookie,30);
 */
kirin.site.setCookie=function (name, value, iDay)
{
	if(iDay!==false)
	{
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+iDay);
		
		document.cookie=name+'='+value+';expires='+oDate+';path=/';
	}
	else
	{
		document.cookie=name+'='+value;
	}
}

/**
/* 设置cookie
 *  
 * @param name     cookie名称
 *
 * @exception      getCookie('myCookie');
 */
kirin.site.getCookie=function (name)
{
	var arr=document.cookie.split('; ');
	var i=0;
	
	for(i=0;i<arr.length;i++)
	{
		var arr2=arr[i].split('=');
		
		if(arr2[0]==name)
		{
			return arr2[1];
		}
	}
	
	return '';
}

/**
/* 删除cookie
 *  
 * @param name     cookie名称 
 *
 * @exception      removeCookie('myCookie');
 */
kirin.site.removeCookie=function (name)
{
	setCookie(name, 'a', -1);
}

/**********************************************************/
/*********************** js组件框架  **********************/
/**********************************************************/

/**
/* 预加载图片操作
 *  
 * @param arr            cookie名称
 * @param fnSucc         cookie值 
 * @param fnFaild        设置多长时间 
 * @param fnProgress     设置多长时间 
 *
 * @exception            preloadImgs('myCookie', nCookie,30);
 */
kirin.site.preloadImgs=function (arr, fnSucc, fnFaild, fnProgress)
{
	var loaded=0;
	for(var i=0;i<arr.length;i++)
	{
		var oImg=new Image();
		
		oImg.onload=function ()
		{
			loaded++;
			
			fnProgress&&fnProgress(100*loaded/arr.length);
			
			if(loaded==arr.length)fnSucc&&fnSucc();
			
			this.onload=this.onerror=null;
			this.src='';
		};
		
		oImg.onerror=function ()
		{
			fnFaild&&fnFaild(this.src);
			
			fnFaild=fnSucc=fnProgress=null;
		};
		
		oImg.src=arr[i];
	}
}


/**
/* js拖拽
 *  
 * @param objEv           事件对象
 * @param objMove         要移动的对象 
 * @param fnMoveCallBack  回调函数 
 *
 * @exception             drag(oDiv, oDiv, function(l,t){});
 */
kirin.site.drag=function (objEv, objMove, fnMoveCallBack)
{
	var disX=0,disY=0;
	
	objEv.onmousedown=function (ev)
	{
		var oEvent=ev||event;
		disX=(document.documentElement.scrollLeft||document.body.scrollLeft)+oEvent.clientX-objMove.offsetLeft;
		disY=(document.documentElement.scrollTop||document.body.scrollTop)+oEvent.clientY-objMove.offsetTop;
		
		if(objEv.setCapture)
		{
			objEv.onmousemove=fnMove;
			objEv.onmouseup=fnUp;
			
			objEv.setCapture();
		}
		else
		{
			document.onmousemove=fnMove;
			document.onmouseup=fnUp;
			
			return false;
		}
	};
	
	function fnMove(ev)
	{
		var oEvent=ev||event;
		var l=(document.documentElement.scrollLeft||document.body.scrollLeft)+oEvent.clientX-disX;
		var t=(document.documentElement.scrollTop||document.body.scrollTop)+oEvent.clientY-disY;
		
		fnMoveCallBack(l,t);
	}
	
	function fnUp()
	{
		this.onmousemove=null;
		this.onmouseup=null;
		
		if(this.releaseCapture)this.releaseCapture();
	}
}

/**
/* js自定义滚动条
 *  
 * @param obj1         对象1
 * @param obj1         对象2 
 * @param obj1         对象3 
 * @param obj1         对象4 
 *
 * @exception          fnScroll(oDiv1,oDiv2,oDiv3,oDiv4);
 */

kirin.site.fnScroll=function (obj1,obj2,obj3,obj4){
		var iMaxHeight = obj1.offsetHeight - obj2.offsetHeight;

		obj2.onmousedown = function(ev) {
			var ev = ev || event;
			
			var disY = ev.clientY - obj2.offsetTop;
			
			document.onmousemove = function(ev) {
				var ev = ev || event;
				
				var T = ev.clientY - disY;
				
				if (T < 0) {
					T = 0;
				} else if (T > iMaxHeight) {
					T = iMaxHeight;
				}
				
				var iScale = T / iMaxHeight;
				
				obj4.style.top = (obj3.offsetHeight - obj4.offsetHeight) * iScale + 'px';
				
				obj2.style.top = T + 'px';
				
			}
			
			document.onmouseup = function() {
				document.onmousemove = null;
			}
			
			return false;
			
		}
	}
/**
/* js自定义滚动条+鼠标滚轴
 *  
 * @param obj1         对象1
 * @param obj1         对象2 
 * @param obj1         对象3 
 * @param obj1         对象4 
 *
 * @exception          fnScrollWheel(oDiv1,oDiv2,oDiv3,oDiv4);
 */
kirin.site.fnScrollWheel=function (obj1,obj2,obj3,obj4){
		var iMaxHeight = obj1.offsetHeight - obj2.offsetHeight;

		obj2.onmousedown = function(ev) {
			var ev = ev || event;
			
			var disY = ev.clientY - obj2.offsetTop;
			
			document.onmousemove = function(ev) {
				var ev = ev || event;
				
				var T = ev.clientY - disY;
				
				if (T < 0) {
					T = 0;
				} else if (T > iMaxHeight) {
					T = iMaxHeight;
				}
				
				var iScale = T / iMaxHeight;
				
				obj4.style.top = (obj3.offsetHeight - obj4.offsetHeight) * iScale + 'px';
				
				obj2.style.top = T + 'px';
				
			}
			
			document.onmouseup = function() {
				document.onmousemove = null;
			}
			
			return false;
			
		}
		
		obj1.onmousewheel = fn1;
		obj3.onmousewheel = fn1;
		if (obj1.addEventListener) {
			obj1.addEventListener('DOMMouseScroll', fn1, false);
			obj3.addEventListener('DOMMouseScroll', fn1, false);
		}

		function fn1(ev) {
			var ev = ev || event;
			var iBtn = true;
			
			if (ev.wheelDelta) {
				iBtn = ev.wheelDelta > 0 ? true : false;
			} else {
				iBtn = ev.detail < 0 ? true : false;
			}
			
			var T = 0;
			
			if (iBtn) {
				T = obj2.offsetTop - 10;
			} else {
				T = obj2.offsetTop + 10;
			}
			
			if (T < 0) {
					T = 0;
				} else if (T > iMaxHeight) {
					T = iMaxHeight;
				}
				
				var iScale = T / iMaxHeight;
				
				obj4.style.top = (obj3.offsetHeight - obj4.offsetHeight) * iScale + 'px';
				
				obj2.style.top = T + 'px';
			
			if (ev.preventDefault) {
				ev.preventDefault();
			}
			
			return false;
		}
	
	}


/**
/* 鼠标滚动事件
 *  
 * @param obj           事件对象 
 * @param fnCallBack    回调函数 
 *
 * @exception           mouseScroll(oDiv, function(){});
 */
kirin.site.mouseScroll=function (obj, fnCallBack)
{
	bindEvent(obj, 'mousewheel', fnScroll);
	bindEvent(obj, 'DOMMouseScroll', fnScroll);
	
	function fnScroll(ev)
	{
		var oEvent=ev||event;
		var bDown;
		
		if(oEvent.wheelDelta)
		{
			bDown=oEvent.wheelDelta<0;
		}
		else
		{
			bDown=oEvent.detail>0;
		}
		
		fnCallBack(bDown);
		
		if(oEvent.preventDefault)oEvent.preventDefault();
		return false;
	}
}

/**********************************************************/
/****************** html5 触摸事件   **********************/
/**********************************************************/


/**
/* 添加html5 触摸支持
 *  
 * @param obj           事件对象 
 * @param json          json集合 
 *
 * @exception           addTouch(oDiv, {});
 */
kirin.app.addTouch=function (obj, json)
{
	if(!addTouch.idList)addTouch.idList=[];
	var id=0;
	var ret={};
	if(!json)json={};
	
	if(json.click)obj.onclick=json.click;
	
	//手机
	(function (){
		myAddEvent(obj, 'touchstart', fnStart);
		function fnStart(ev)
		{
			if(json.down)json.down(ev.touches[0].pageX, ev.touches[0].pageY);
			
			for(var i=0;i<ev.touches.length;i++)
			{
				if(-1==addTouch.idList.indexOf(ev.touches[i].identifier))id=ev.touches[i].identifier;
			}
			addTouch.idList.push(id);
			
			myAddEvent(document, 'touchmove', fnMove);
			function fnMove(ev)
			{
				for(var i=0;i<ev.touches.length;i++)
				{
					if(ev.touches[i].identifier==id)
					{
						var touch=ev.touches[i];
						
						if(json.move)json.move(ev.touches[0].pageX, ev.touches[0].pageY);
						return;
					}
				}
			}
			myAddEvent(document, 'touchend', fnEnd);
			function fnEnd(ev)
			{
				for(var i=0;i<ev.changedTouches.length;i++)
				{
					if(ev.changedTouches[i].identifier==id)
					{
						myDelEvent(document, 'touchmove', fnMove);
						myDelEvent(document, 'touchend', fnEnd);
						
						addTouch.idList.remove(id);
						
						if(json.up)json.up(ev.changedTouches[i].pageX, ev.changedTouches[i].pageY);
						return;
					}
				}
			}
			
			return false;
		}
		
		ret.start=fnStart;
	})();
	
	//PC
	(function (){
		myAddEvent(obj, 'mousedown', fnDown);
		function fnDown(ev)
		{
			var oEvent=ev||event;
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
			
			if(json.down)json.down(oEvent.clientX+scrollLeft, oEvent.clientY+scrollTop);
			
			myAddEvent(document, 'mousemove', fnMove);
			function fnMove(ev)
			{
				var oEvent=ev||event;
				var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
				
				if(json.move)json.move(oEvent.clientX+scrollLeft, oEvent.clientY+scrollTop);
			}
			myAddEvent(document, 'mouseup', fnUp);
			function fnUp(ev)
			{
				var oEvent=ev||event;
				var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
				
				myDelEvent(document, 'mousemove', fnMove);
				myDelEvent(document, 'mouseup', fnUp);
				document.onmouseup=null;
				
				if(json.up)json.up(oEvent.clientX+scrollLeft, oEvent.clientY+scrollTop);
				
				obj.releaseCapture&&obj.releaseCapture();
			}
			
			obj.setCapture&&obj.setCapture();
			
			if(ev.preventDefault)ev.preventDefault();
			return false;
		}
		
		ret.down=fnDown;
	})();
	
	ret.obj=obj;
	
	return ret;	//for remove Touch
}

/**
/* 移除html5 触摸支持
 *  
 * @param touchRes      事件对象 
 *
 * @exception           removeTouch(oDiv);
 */
kirin.app.removeTouch=function (touchRes)
{
	if(!touchRes || !touchRes.start || !touchRes.down || !touchRes.obj)return;
	myDelEvent(touchRes.obj, 'touchstart', touchRes.start);
	myDelEvent(touchRes.obj, 'mousedown', touchRes.down);
}
/**
/* 添加html5 触摸事件
 *  
 * @param obj         对象 
 * @param ev          事件名称 
 * @param fn          回调函数 
 *
 * @exception         myAddEvent(oDiv,'onmouseover', function(){});
 */
kirin.app.myAddEvent=function (obj, ev, fn){obj.attachEvent?obj.attachEvent('on'+ev, fn):obj.addEventListener(ev, fn, false);}
/**
/* 移除html5 触摸事件
 *  
 * @param obj         对象 
 * @param ev          事件名称 
 * @param fn          回调函数
 *
 * @exception         myDelEvent(oDiv,'onmouseover', function(){});
 */
kirin.app.myDelEvent=function (obj, ev, fn){obj.detachEvent?obj.detachEvent('on'+ev, fn):obj.removeEventListener(ev, fn, false);}

