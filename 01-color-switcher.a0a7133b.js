const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o=null;t.addEventListener("click",(()=>{t.disabled=!0,o=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.a0a7133b.js.map
