if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"a4e2271d19eb1f6f93a15e1b7a4e74dd"},{url:"/_next/static/UkghxvX24CASvD3Vj8b7v/_buildManifest.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/UkghxvX24CASvD3Vj8b7v/_ssgManifest.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/chunks/802-a2a9c6032e2450c98f33.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/chunks/framework-0441fae7fd130f37dee1.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/chunks/main-34e8a174e830bb1732b6.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/chunks/pages/_app-165f2a439f7b321c6bd7.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/chunks/pages/authentication-044681325c1202e9aade.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/chunks/pages/categories-c4cef88595f50d998f97.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/chunks/pages/categories/%5Bcategory%5D-b41d46cb80e5ef98cb30.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/chunks/pages/index-294e4a34d6a2e1b017da.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/chunks/pages/lab-148ea406f1ae3ee2560e.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/chunks/pages/profiles/%5Busername%5D-d39962c5a35421024e88.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/chunks/pages/settings-4876d61e3e946882cf8c.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/chunks/webpack-0cb069610457c13661fc.js",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/_next/static/css/54c8a16da9e8853bd184.css",revision:"UkghxvX24CASvD3Vj8b7v"},{url:"/assets/images/bamboo_craft.jpeg",revision:"25c0e1ddb6370578561a8a117822ec90"},{url:"/assets/images/banner-placeholder.png",revision:"ab66487a4d4a51d7975487ba67c79f21"},{url:"/assets/images/freelancer.png",revision:"df82a14d8e0aea8331518f018e3d02eb"},{url:"/assets/images/graphics-design.jpg",revision:"7a3c38927689122ec56d027b080aee3a"},{url:"/assets/images/halibee_logo.png",revision:"482cb415bc1381e494ebeaa931f3f425"},{url:"/assets/images/image_1.jpg",revision:"8641253d4f0ea8a06ea21366a347b4cf"},{url:"/assets/images/image_2.jpg",revision:"59849737fd9ec7f424cc5ca13ee29d7e"},{url:"/assets/images/image_3.jpg",revision:"c62cc7901e29ad9b4e14bbfcdf066293"},{url:"/assets/images/image_4.jpg",revision:"4dd2a7f7fe7b283e053f602f82d7a7fb"},{url:"/assets/images/landscape.jpg",revision:"93fd5a165f8ea0cc5b9ef7bbd8cdb636"},{url:"/assets/images/profile_placeholder.png",revision:"8714556a52021ba3a55c8e7a3547d28c"},{url:"/assets/images/programmer.jpg",revision:"4ec5f45d1e4428f7b76d591953d094db"},{url:"/assets/images/writer.jpg",revision:"d075b73d60befe11efc0612669ecc6cd"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/manifest.json",revision:"d32a23b42db532a63a265404228a461f"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
