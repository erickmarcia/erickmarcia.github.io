!function(){"use strict";const e=1622155810348,a="cache"+e,i=["client/logros.dd8897e0.js","client/index.c069dbe9.js","client/index.2b856957.js","client/about.5e7c7320.js","client/client.1a94b4b3.js","client/[slug].12c660d3.js"].concat(["service-worker-index.html","css/highlight-code.css","favicon.png","fonts/merriweather-latin-300.woff","fonts/merriweather-latin-300.woff2","fonts/merriweather-latin-300italic.woff","fonts/merriweather-latin-300italic.woff2","fonts/merriweather-latin-400.woff","fonts/merriweather-latin-400.woff2","fonts/merriweather-latin-400italic.woff","fonts/merriweather-latin-400italic.woff2","fonts/merriweather-latin-700.woff","fonts/merriweather-latin-700.woff2","fonts/merriweather-latin-700italic.woff","fonts/merriweather-latin-700italic.woff2","fonts/merriweather-latin-900.woff","fonts/merriweather-latin-900.woff2","fonts/merriweather-latin-900italic.woff","fonts/merriweather-latin-900italic.woff2","fonts/rubik-latin-300.woff","fonts/rubik-latin-300.woff2","fonts/rubik-latin-300italic.woff","fonts/rubik-latin-300italic.woff2","fonts/rubik-latin-400.woff","fonts/rubik-latin-400.woff2","fonts/rubik-latin-400italic.woff","fonts/rubik-latin-400italic.woff2","fonts/rubik-latin-500.woff","fonts/rubik-latin-500.woff2","fonts/rubik-latin-500italic.woff","fonts/rubik-latin-500italic.woff2","fonts/rubik-latin-700.woff","fonts/rubik-latin-700.woff2","fonts/rubik-latin-700italic.woff","fonts/rubik-latin-700italic.woff2","fonts/rubik-latin-900.woff","fonts/rubik-latin-900.woff2","fonts/rubik-latin-900italic.woff","fonts/rubik-latin-900italic.woff2","fonts.css","global.css","highlight.css","logo-192.png","logo-512.png","manifest.json","media/about-me/Fondo.jpg","media/about-me/profile.png","media/blog/CSharp/c.jpg","media/blog/CSharp/csharp.png","media/blog/CSharp/TextEdit/1-TxtEdit.png","media/blog/CSharp/TextEdit/carbon.png","media/blog/CSharp/TextEdit/carbon.svg","media/blog/DevExpress/Acordeon/acordeon.png","media/blog/DevExpress/Acordeon/banner.png","media/blog/DevExpress/Acordeon/elements.png","media/blog/DevExpress/Acordeon/images.jpg","media/blog/DevExpress/Acordeon/ma1.png","media/blog/DevExpress/Acordeon/Menu.png","media/blog/DevExpress/Acordeon/resize.gif","media/blog/DevExpress/Acordeon/transparencia.gif","media/blog/DevExpress/Acordeon/winforms-fluent-form.png","media/blog/Laragon/error-1115/antes.png","media/blog/Laragon/error-1115/Banner.jpg","media/blog/Laragon/error-1115/Banner.png","media/blog/Laragon/error-1115/buscar y remplazar.png","media/blog/Laragon/error-1115/buscaryremplazar.png","media/blog/Laragon/error-1115/despues.png","media/blog/Laragon/error-1115/error-1115.png","media/blog/Laragon/error-1115/heidisql.png","media/blog/Laragon/error-1115/visual-studio-code.png","media/blog/Php/xdebug/1-localhostxdebug.png","media/blog/Php/xdebug/1-PhpDebug.png","media/blog/Php/xdebug/1-xdebug.png","media/blog/Php/xdebug/10-PhpDebug.png","media/blog/Php/xdebug/10-xdebug.png","media/blog/Php/xdebug/11-xdebug.png","media/blog/Php/xdebug/2-PhpDebug.png","media/blog/Php/xdebug/2-xdebug.png","media/blog/Php/xdebug/3-PhpDebug.png","media/blog/Php/xdebug/3-xdebug.png","media/blog/Php/xdebug/4-PhpDebug.png","media/blog/Php/xdebug/4-xdebug.png","media/blog/Php/xdebug/5-PhpDebug.png","media/blog/Php/xdebug/5-xdebug.png","media/blog/Php/xdebug/6-PhpDebug.png","media/blog/Php/xdebug/6-xdebug.png","media/blog/Php/xdebug/7-PhpDebug.png","media/blog/Php/xdebug/7-xdebug.png","media/blog/Php/xdebug/8-xdebug.png","media/blog/Php/xdebug/9-PhpDebug.png","media/blog/Php/xdebug/9-xdebug.png","media/blog/Php/xdebug/bannerPhpXdebug.png","media/blog/Php/xdebug/codigo.png","media/blog/Php/xdebug/configPHP.png","media/blog/Xamarin/Debug/dev-1.png","media/blog/Xamarin/Debug/dev-2.gif","media/blog/Xamarin/Debug/dev-3.png","media/blog/Xamarin/Debug/dev-4.png","media/blog/Xamarin/Debug/dev-5.jpg","media/blog/Xamarin/Debug/dev-5.png","media/blog/Xamarin/Debug/dev-6.png","media/blog/Xamarin/Debug/How-to-Debug-Xamarin-Application-on-Visual-Studio-660x420.png","media/blog/Xamarin/Debug/xamarin-visualStudio.png","media/blog/Xamarin/MAUI/maui-01-overview.png","media/blog/Xamarin/MAUI/Que-es-Xamarin.png","media/blog/Xamarin/MAUI/xamarin-architecture.png","media/blog/Xamarin/MAUI/xamarin-compare.png","media/blog/Xamarin/MAUI/xamarin-forms-architecture.png","media/blog/Xamarin/MAUI/xamarin-forms-xaml.png","media/blog/Xamarin/MAUI/Xamarin-MAUI.png","media/blog/Xamarin/MAUI/XAMARIN.png","media/bug.svg","media/bug1.svg","media/home/Banner.jpg","media/home/home-banner.jpg","rsz_florian-klauer-489-unsplash.jpg","undraw-illustration.svg"]),n=new Set(i);self.addEventListener("install",e=>{e.waitUntil(caches.open(a).then(e=>e.addAll(i)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const i of e)i!==a&&await caches.delete(i);self.clients.claim()}))}),self.addEventListener("fetch",a=>{if("GET"!==a.request.method||a.request.headers.has("range"))return;const i=new URL(a.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&n.has(i.pathname)?a.respondWith(caches.match(a.request)):"only-if-cached"!==a.request.cache&&a.respondWith(caches.open("offline"+e).then(async e=>{try{const i=await fetch(a.request);return e.put(a.request,i.clone()),i}catch(i){const n=await e.match(a.request);if(n)return n;throw i}}))))})}();
