if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return t;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"a4e2271d19eb1f6f93a15e1b7a4e74dd"},{url:"/_next/static/chunks/802-a2a9c6032e2450c98f33.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/833-766dd7deb1fde590e102.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/944-8c4c34a811cc3df17f70.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/9f542e2b.3ba2761b92616a1d00d6.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/framework-c93ed74a065331c4bd75.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/main-34e8a174e830bb1732b6.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/pages/_app-dc3fa7eadc77d654a6cc.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/pages/authentication-f3d31fd2ec663835fa9c.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/pages/categories-c4cef88595f50d998f97.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/pages/categories/%5Bcategory%5D-afb6206cff223080308b.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/pages/dashboards/%5Bdashboard%5D-50e97b88987792a51af0.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/pages/index-7e0fefd1627ee2fffe32.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/pages/lab-148ea406f1ae3ee2560e.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/pages/profiles/%5Busername%5D-7e7cac4b06333331aa02.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/pages/settings-f90ad4ca19cf53c6ea1d.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/chunks/webpack-57f0605d1cbf603cf102.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/css/a4ec3693b6b3aed7cb20.css",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/isIYU9pgIHpTi0hLUYJvA/_buildManifest.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/_next/static/isIYU9pgIHpTi0hLUYJvA/_ssgManifest.js",revision:"isIYU9pgIHpTi0hLUYJvA"},{url:"/assets/images/bamboo_craft.jpeg",revision:"25c0e1ddb6370578561a8a117822ec90"},{url:"/assets/images/banner-placeholder.png",revision:"ab66487a4d4a51d7975487ba67c79f21"},{url:"/assets/images/freelancer.png",revision:"df82a14d8e0aea8331518f018e3d02eb"},{url:"/assets/images/graphics-design.jpg",revision:"7a3c38927689122ec56d027b080aee3a"},{url:"/assets/images/halibee_logo.png",revision:"482cb415bc1381e494ebeaa931f3f425"},{url:"/assets/images/image_1.jpg",revision:"8641253d4f0ea8a06ea21366a347b4cf"},{url:"/assets/images/image_2.jpg",revision:"59849737fd9ec7f424cc5ca13ee29d7e"},{url:"/assets/images/image_3.jpg",revision:"c62cc7901e29ad9b4e14bbfcdf066293"},{url:"/assets/images/image_4.jpg",revision:"4dd2a7f7fe7b283e053f602f82d7a7fb"},{url:"/assets/images/landscape.jpg",revision:"93fd5a165f8ea0cc5b9ef7bbd8cdb636"},{url:"/assets/images/profile_placeholder.png",revision:"8714556a52021ba3a55c8e7a3547d28c"},{url:"/assets/images/programmer.jpg",revision:"4ec5f45d1e4428f7b76d591953d094db"},{url:"/assets/images/writer.jpg",revision:"d075b73d60befe11efc0612669ecc6cd"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/manifest.json",revision:"d32a23b42db532a63a265404228a461f"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
