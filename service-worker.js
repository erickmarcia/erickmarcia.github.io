!function(){"use strict";const o=1625783626356,t="cache"+o,e=["client/index.66b0d38c.js","client/contact.f6a33c39.js","client/logros.26eca4d3.js","client/about.49745664.js","client/skill.1455eac3.js","client/index.1bcc6854.js","client/work-experience.1a26f6c8.js","client/client.576fe932.js","client/[slug].a263ca45.js"].concat(["service-worker-index.html","contact/css/main.css","contact/css/util.css","contact/fonts/font-awesome-4.7.0/css/font-awesome.css","contact/fonts/font-awesome-4.7.0/css/font-awesome.min.css","contact/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.eot","contact/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg","contact/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","contact/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.woff","contact/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2","contact/fonts/font-awesome-4.7.0/fonts/FontAwesome.otf","contact/fonts/font-awesome-4.7.0/HELP-US-OUT.txt","contact/fonts/font-awesome-4.7.0/less/animated.less","contact/fonts/font-awesome-4.7.0/less/bordered-pulled.less","contact/fonts/font-awesome-4.7.0/less/core.less","contact/fonts/font-awesome-4.7.0/less/fixed-width.less","contact/fonts/font-awesome-4.7.0/less/font-awesome.less","contact/fonts/font-awesome-4.7.0/less/icons.less","contact/fonts/font-awesome-4.7.0/less/larger.less","contact/fonts/font-awesome-4.7.0/less/list.less","contact/fonts/font-awesome-4.7.0/less/mixins.less","contact/fonts/font-awesome-4.7.0/less/path.less","contact/fonts/font-awesome-4.7.0/less/rotated-flipped.less","contact/fonts/font-awesome-4.7.0/less/screen-reader.less","contact/fonts/font-awesome-4.7.0/less/stacked.less","contact/fonts/font-awesome-4.7.0/less/variables.less","contact/fonts/font-awesome-4.7.0/scss/font-awesome.scss","contact/fonts/font-awesome-4.7.0/scss/_animated.scss","contact/fonts/font-awesome-4.7.0/scss/_bordered-pulled.scss","contact/fonts/font-awesome-4.7.0/scss/_core.scss","contact/fonts/font-awesome-4.7.0/scss/_fixed-width.scss","contact/fonts/font-awesome-4.7.0/scss/_icons.scss","contact/fonts/font-awesome-4.7.0/scss/_larger.scss","contact/fonts/font-awesome-4.7.0/scss/_list.scss","contact/fonts/font-awesome-4.7.0/scss/_mixins.scss","contact/fonts/font-awesome-4.7.0/scss/_path.scss","contact/fonts/font-awesome-4.7.0/scss/_rotated-flipped.scss","contact/fonts/font-awesome-4.7.0/scss/_screen-reader.scss","contact/fonts/font-awesome-4.7.0/scss/_stacked.scss","contact/fonts/font-awesome-4.7.0/scss/_variables.scss","contact/fonts/Linearicons-Free-v1.0.0/icon-font.min.css","contact/fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.eot","contact/fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.svg","contact/fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.ttf","contact/fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.woff","contact/fonts/Linearicons-Free-v1.0.0/WebFont/Linearicons-Free.woff2","contact/fonts/poppins/Poppins-Black.ttf","contact/fonts/poppins/Poppins-BlackItalic.ttf","contact/fonts/poppins/Poppins-Bold.ttf","contact/fonts/poppins/Poppins-BoldItalic.ttf","contact/fonts/poppins/Poppins-ExtraBold.ttf","contact/fonts/poppins/Poppins-ExtraBoldItalic.ttf","contact/fonts/poppins/Poppins-ExtraLight.ttf","contact/fonts/poppins/Poppins-ExtraLightItalic.ttf","contact/fonts/poppins/Poppins-Italic.ttf","contact/fonts/poppins/Poppins-Light.ttf","contact/fonts/poppins/Poppins-LightItalic.ttf","contact/fonts/poppins/Poppins-Medium.ttf","contact/fonts/poppins/Poppins-MediumItalic.ttf","contact/fonts/poppins/Poppins-Regular.ttf","contact/fonts/poppins/Poppins-SemiBold.ttf","contact/fonts/poppins/Poppins-SemiBoldItalic.ttf","contact/fonts/poppins/Poppins-Thin.ttf","contact/fonts/poppins/Poppins-ThinItalic.ttf","contact/images/bg-01.jpg","contact/images/icons/favicon.ico","contact/images/icons/map-marker.png","contact/js/main.js","contact/js/map-custom.js","contact/vendor/animate/animate.css","contact/vendor/animsition/css/animsition.css","contact/vendor/animsition/css/animsition.min.css","contact/vendor/animsition/js/animsition.js","contact/vendor/animsition/js/animsition.min.js","contact/vendor/bootstrap/css/bootstrap-grid.css","contact/vendor/bootstrap/css/bootstrap-grid.css.map","contact/vendor/bootstrap/css/bootstrap-grid.min.css","contact/vendor/bootstrap/css/bootstrap-grid.min.css.map","contact/vendor/bootstrap/css/bootstrap-reboot.css","contact/vendor/bootstrap/css/bootstrap-reboot.css.map","contact/vendor/bootstrap/css/bootstrap-reboot.min.css","contact/vendor/bootstrap/css/bootstrap-reboot.min.css.map","contact/vendor/bootstrap/css/bootstrap.css","contact/vendor/bootstrap/css/bootstrap.css.map","contact/vendor/bootstrap/css/bootstrap.min.css","contact/vendor/bootstrap/css/bootstrap.min.css.map","contact/vendor/bootstrap/js/bootstrap.js","contact/vendor/bootstrap/js/bootstrap.min.js","contact/vendor/bootstrap/js/popper.js","contact/vendor/bootstrap/js/popper.min.js","contact/vendor/bootstrap/js/tooltip.js","contact/vendor/countdowntime/countdowntime.js","contact/vendor/css-hamburgers/hamburgers.css","contact/vendor/css-hamburgers/hamburgers.min.css","contact/vendor/daterangepicker/daterangepicker.css","contact/vendor/daterangepicker/daterangepicker.js","contact/vendor/daterangepicker/moment.js","contact/vendor/daterangepicker/moment.min.js","contact/vendor/jquery/jquery-3.2.1.min.js","contact/vendor/perfect-scrollbar/perfect-scrollbar.css","contact/vendor/perfect-scrollbar/perfect-scrollbar.min.js","contact/vendor/select2/select2.css","contact/vendor/select2/select2.js","contact/vendor/select2/select2.min.css","contact/vendor/select2/select2.min.js","css/highlight-code.css","favicon.png","fonts/merriweather-latin-300.woff","fonts/merriweather-latin-300.woff2","fonts/merriweather-latin-300italic.woff","fonts/merriweather-latin-300italic.woff2","fonts/merriweather-latin-400.woff","fonts/merriweather-latin-400.woff2","fonts/merriweather-latin-400italic.woff","fonts/merriweather-latin-400italic.woff2","fonts/merriweather-latin-700.woff","fonts/merriweather-latin-700.woff2","fonts/merriweather-latin-700italic.woff","fonts/merriweather-latin-700italic.woff2","fonts/merriweather-latin-900.woff","fonts/merriweather-latin-900.woff2","fonts/merriweather-latin-900italic.woff","fonts/merriweather-latin-900italic.woff2","fonts/rubik-latin-300.woff","fonts/rubik-latin-300.woff2","fonts/rubik-latin-300italic.woff","fonts/rubik-latin-300italic.woff2","fonts/rubik-latin-400.woff","fonts/rubik-latin-400.woff2","fonts/rubik-latin-400italic.woff","fonts/rubik-latin-400italic.woff2","fonts/rubik-latin-500.woff","fonts/rubik-latin-500.woff2","fonts/rubik-latin-500italic.woff","fonts/rubik-latin-500italic.woff2","fonts/rubik-latin-700.woff","fonts/rubik-latin-700.woff2","fonts/rubik-latin-700italic.woff","fonts/rubik-latin-700italic.woff2","fonts/rubik-latin-900.woff","fonts/rubik-latin-900.woff2","fonts/rubik-latin-900italic.woff","fonts/rubik-latin-900italic.woff2","fonts.css","global.css","highlight.css","logo-192.png","logo-512.png","manifest.json","media/about-me/Fondo.jpg","media/about-me/profile.png","media/blog/CSharp/ASP-NET/RESTAPI/1-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/10-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/11-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/12-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/13-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/14-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/15-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/16-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/17-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/18-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/19-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/2-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/20-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/21-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/22-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/23-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/24-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/25-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/26-1-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/26-2-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/26-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/27-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/28-1-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/28-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/29-1-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/29-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/3-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/30-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/31-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/32-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/33-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/34-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/35-1-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/35-2-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/35-3-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/35-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/36-1-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/36-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/37-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/38-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/39-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/4-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/5-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/6-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/7-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/8-1-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/8-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/9-RestApi.png","media/blog/CSharp/ASP-NET/RESTAPI/apiDelete.png","media/blog/CSharp/ASP-NET/RESTAPI/apiGet.png","media/blog/CSharp/ASP-NET/RESTAPI/apiGetid.png","media/blog/CSharp/ASP-NET/RESTAPI/apiPost.png","media/blog/CSharp/ASP-NET/RESTAPI/apiPut.png","media/blog/CSharp/ASP-NET/RESTAPI/Banner.jpg","media/blog/CSharp/ASP-NET/RESTAPI/formatJson.png","media/blog/CSharp/c.jpg","media/blog/CSharp/csharp.png","media/blog/CSharp/TextEdit/1-TxtEdit.png","media/blog/CSharp/TextEdit/carbon.png","media/blog/CSharp/TextEdit/carbon.svg","media/blog/DevExpress/Acordeon/acordeon.png","media/blog/DevExpress/Acordeon/banner.png","media/blog/DevExpress/Acordeon/elements.png","media/blog/DevExpress/Acordeon/images.jpg","media/blog/DevExpress/Acordeon/ma1.png","media/blog/DevExpress/Acordeon/Menu.png","media/blog/DevExpress/Acordeon/resize.gif","media/blog/DevExpress/Acordeon/transparencia.gif","media/blog/DevExpress/Acordeon/winforms-fluent-form.png","media/blog/Laragon/error-1115/antes.png","media/blog/Laragon/error-1115/Banner.jpg","media/blog/Laragon/error-1115/Banner.png","media/blog/Laragon/error-1115/buscar y remplazar.png","media/blog/Laragon/error-1115/buscaryremplazar.png","media/blog/Laragon/error-1115/despues.png","media/blog/Laragon/error-1115/error-1115.png","media/blog/Laragon/error-1115/heidisql.png","media/blog/Laragon/error-1115/visual-studio-code.png","media/blog/Php/xdebug/1-localhostxdebug.png","media/blog/Php/xdebug/1-PhpDebug.png","media/blog/Php/xdebug/1-xdebug.png","media/blog/Php/xdebug/10-PhpDebug.png","media/blog/Php/xdebug/10-xdebug.png","media/blog/Php/xdebug/11-xdebug.png","media/blog/Php/xdebug/2-PhpDebug.png","media/blog/Php/xdebug/2-xdebug.png","media/blog/Php/xdebug/3-PhpDebug.png","media/blog/Php/xdebug/3-xdebug.png","media/blog/Php/xdebug/4-PhpDebug.png","media/blog/Php/xdebug/4-xdebug.png","media/blog/Php/xdebug/5-PhpDebug.png","media/blog/Php/xdebug/5-xdebug.png","media/blog/Php/xdebug/6-PhpDebug.png","media/blog/Php/xdebug/6-xdebug.png","media/blog/Php/xdebug/7-PhpDebug.png","media/blog/Php/xdebug/7-xdebug.png","media/blog/Php/xdebug/8-xdebug.png","media/blog/Php/xdebug/9-PhpDebug.png","media/blog/Php/xdebug/9-xdebug.png","media/blog/Php/xdebug/bannerPhpXdebug.png","media/blog/Php/xdebug/codigo.png","media/blog/Php/xdebug/configPHP.png","media/blog/Xamarin/Debug/dev-1.png","media/blog/Xamarin/Debug/dev-2.gif","media/blog/Xamarin/Debug/dev-3.png","media/blog/Xamarin/Debug/dev-4.png","media/blog/Xamarin/Debug/dev-5.jpg","media/blog/Xamarin/Debug/dev-5.png","media/blog/Xamarin/Debug/dev-6.png","media/blog/Xamarin/Debug/How-to-Debug-Xamarin-Application-on-Visual-Studio-660x420.png","media/blog/Xamarin/Debug/xamarin-visualStudio.png","media/blog/Xamarin/MAUI/maui-01-overview.png","media/blog/Xamarin/MAUI/Que-es-Xamarin.png","media/blog/Xamarin/MAUI/xamarin-architecture.png","media/blog/Xamarin/MAUI/xamarin-compare.png","media/blog/Xamarin/MAUI/xamarin-forms-architecture.png","media/blog/Xamarin/MAUI/xamarin-forms-xaml.png","media/blog/Xamarin/MAUI/Xamarin-MAUI.png","media/blog/Xamarin/MAUI/XAMARIN.png","media/bug.svg","media/bug1.svg","media/home/Banner.jpg","media/home/home-banner.jpg","media/ko-fi.png","media/ko-fi1.png","rsz_florian-klauer-489-unsplash.jpg","undraw-illustration.svg"]),n=new Set(e);self.addEventListener("install",o=>{o.waitUntil(caches.open(t).then(o=>o.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",o=>{o.waitUntil(caches.keys().then(async o=>{for(const e of o)e!==t&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const e=new URL(t.request.url);e.protocol.startsWith("http")&&(e.hostname===self.location.hostname&&e.port!==self.location.port||(e.host===self.location.host&&n.has(e.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+o).then(async o=>{try{const e=await fetch(t.request);return o.put(t.request,e.clone()),e}catch(e){const n=await o.match(t.request);if(n)return n;throw e}}))))})}();
