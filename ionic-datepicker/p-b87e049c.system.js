System.register([],(function(e){"use strict";return{execute:function(){const n=e("M",["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]);const t=e("b",["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]);const r=e("c",["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]);const o=e("d",["So","Mo","Di","Mi","Do","Fr","Sa"]);const s=e("e","Okay");const u=e("f","Abbrechen");const f=e("g","Jahr");const a=e("D",()=>new Date((new Date).setFullYear((new Date).getFullYear()+100)).toISOString());const d=e("a",()=>new Date((new Date).setFullYear((new Date).getFullYear()-100)).toISOString());const i=e("r",(e,n,t)=>{if(n===undefined){return undefined}const r=M(n);const o=[];let s=false;E.forEach((n,u)=>{if(e.indexOf(n.f)>-1){const f="{"+u+"}";const a=c(n.f,r[n.k],r,t);if(!s&&a!==undefined&&r[n.k]!=null){s=true}o.push(f,a||"");e=e.replace(n.f,f)}});if(!s){return undefined}for(let u=0;u<o.length;u+=2){e=e.replace(o[u],o[u+1])}return e});const c=(e,s,u,f)=>{if(e===N||e===w){try{s=new Date(u.year,u.month-1,u.day).getDay();if(e===N){return(f.dayNames?f.dayNames:r)[s]}return(f.dayShortNames?f.dayShortNames:o)[s]}catch(a){}return undefined}if(e===Z){return u!==undefined&&u.hour!==undefined?u.hour<12?"AM":"PM":s?s.toUpperCase():""}if(e===C){return u!==undefined&&u.hour!==undefined?u.hour<12?"am":"pm":s||""}if(s==null){return""}if(e===y||e===b||e===F||e===J||e===x||e===H){return m(s)}if(e===g){return D(s)}if(e===S){return(f.monthNames?f.monthNames:n)[s-1]}if(e===p){return(f.monthShortNames?f.monthShortNames:t)[s-1]}if(e===$||e===I){if(s===0){return"12"}if(s>12){s-=12}if(e===$&&s<10){return"0"+s}}return s.toString()};const h=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;const l=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;const m=e=>("0"+(e!==undefined?Math.abs(e):"0")).slice(-2);const D=e=>("000"+(e!==undefined?Math.abs(e):"0")).slice(-4);const M=e=>{let n=null;if(e!=null&&e!==""){n=l.exec(e);if(n){n.unshift(undefined,undefined);n[2]=n[3]=undefined}else{n=h.exec(e)}}if(n===null){return undefined}for(let r=1;r<8;r++){n[r]=n[r]!==undefined?parseInt(n[r],10):undefined}let t=0;if(n[9]&&n[10]){t=parseInt(n[10],10)*60;if(n[11]){t+=parseInt(n[11],10)}if(n[9]==="-"){t*=-1}}return{year:n[1],month:n[2],day:n[3],hour:n[4],minute:n[5],second:n[6],millisecond:n[7],tzOffset:t}};const k=e("t",e=>{const n=new Date(e);return`${n.getFullYear()}-${n.getMonth()+1<10?`0${n.getMonth()+1}`:n.getMonth()+1}-${n.getDate()<10?`0${n.getDate()}`:n.getDate()}`});const g="YYYY";const y="YY";const S="MMMM";const p="MMM";const b="MM";const Y="M";const N="DDDD";const w="DDD";const F="DD";const A="D";const J="HH";const O="H";const $="hh";const I="h";const x="mm";const z="m";const H="ss";const v="s";const Z="A";const C="a";const E=[{f:g,k:"year"},{f:S,k:"month"},{f:N,k:"day"},{f:p,k:"month"},{f:w,k:"day"},{f:y,k:"year"},{f:b,k:"month"},{f:F,k:"day"},{f:J,k:"hour"},{f:$,k:"hour"},{f:x,k:"minute"},{f:H,k:"second"},{f:Y,k:"month"},{f:A,k:"day"},{f:O,k:"hour"},{f:I,k:"hour"},{f:z,k:"minute"},{f:v,k:"second"},{f:Z,k:"ampm"},{f:C,k:"ampm"}]}}}));