function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequire25c0;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire25c0=r),r.register("g28y4",(function(t,n){var i,r;e(t.exports,"register",(()=>i),(e=>i=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var o={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},r=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("g28y4").register(JSON.parse('{"1bd3D":"index.6940a62b.js","4mt9C":"lovelin_happy.02bdd8f8.jpg","dBRoZ":"lovelin_angry.d834d9f2.jpg","3be20":"lovelin_rip.411e0bef.jpg"}'));let o=new class{#e=5;#t=5;#n=!1;#i;#r;constructor(){}isRunning(){return this.#n}start(){this.#e=5,this.#t=5,this.#n=!0}stop(){clearInterval(this.#r),clearInterval(this.#i),this.#n=!1}#o(){this.#e++,document.getElementById("feedBar").innerText="Hunger: "+this.#e,this.#s()}#a(){this.#t--,document.getElementById("happinessBar").innerText="Happiness: "+this.#t,this.#s()}#s(){10!=this.#e&&0!=this.#t||(window.alert("game over"),this.stop())}adjustTimeUp(){this.#e=0}adjustTimeDown(){this.#t=10}setTimeDown(){return this.#t++}setTimeUp(){return this.#e--}getTimeDown(){return this.#t}getTimeUp(){return this.#e}getUpdateHappiness(){return this.#a}getState(){return this.#a(),this.#o(),this.#t<=3||this.#e>=7?"ANGRY":this.#t>3&&this.#e<7?"HAPPY":void 0}};const s=document.querySelector("img");var a;a=new URL(r("g28y4").resolve("4mt9C"),import.meta.url).toString();const d=new URL(a);var u;u=new URL(r("g28y4").resolve("dBRoZ"),import.meta.url).toString();const l=new URL(u);var p;p=new URL(r("g28y4").resolve("3be20"),import.meta.url).toString();const m=new URL(p);let c=0;s.src=d.href;document.getElementById("enterName").addEventListener("click",(function(){const e=document.querySelector("input").value;document.getElementById("name").innerText="Tamagotchi Name: "+e,c=setInterval(g,2200)}));document.getElementById("feed").addEventListener("click",(()=>{document.getElementById("feedBar").innerText="Hunger: "+o.setTimeUp(),o.getTimeUp()<=0&&(console.log("gettimeup = 0"),o.adjustTimeUp())}));function g(){let e=o.getState();"ANGRY"===e&&(s.src=l.href),"HAPPY"===e&&(s.src=d.href),0!=o.getTimeDown()&&10!=o.getTimeUp()||(clearInterval(c),s.src=m.href)}document.getElementById("play").addEventListener("click",(()=>{document.getElementById("happinessBar").innerText="Happiness: "+o.setTimeDown(),o.getTimeDown()>=10&&(console.log("gettimedown = 10"),o.adjustTimeDown())}));
//# sourceMappingURL=index.6940a62b.js.map