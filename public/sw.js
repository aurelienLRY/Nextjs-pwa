if(!self.define){let e,o={};const s=(s,n)=>(s=new URL(s+".js",n).href,o[s]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=o,document.head.appendChild(e)}else e=s,importScripts(s),o()})).then((()=>{let e=o[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(o[i])return;let c={};const f=e=>s(e,i),t={module:{uri:i},exports:c,require:f};o[i]=Promise.all(n.map((e=>t[e]||f(e)))).then((e=>(a(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"02e3fad162d2ce1a234a1dd2cf1e9e89"},{url:"/_next/static/cgwcpBmRsUJ7sSDCbyNZ_/_buildManifest.js",revision:"2f90171cc6fab94556615fdfac0bf018"},{url:"/_next/static/cgwcpBmRsUJ7sSDCbyNZ_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/35-3198cbaecff15f1d.js",revision:"cgwcpBmRsUJ7sSDCbyNZ_"},{url:"/_next/static/chunks/4bd1b696-f4ced117b13bcb8b.js",revision:"cgwcpBmRsUJ7sSDCbyNZ_"},{url:"/_next/static/chunks/517-93486e0fdcd134a3.js",revision:"cgwcpBmRsUJ7sSDCbyNZ_"},{url:"/_next/static/chunks/631.8c5845beb0ecc49a.js",revision:"8c5845beb0ecc49a"},{url:"/_next/static/chunks/941-e522e86c2d4383ec.js",revision:"cgwcpBmRsUJ7sSDCbyNZ_"},{url:"/_next/static/chunks/app/_not-found/page-ade3d13546df2d11.js",revision:"cgwcpBmRsUJ7sSDCbyNZ_"},{url:"/_next/static/chunks/app/layout-313d60d9b686ad8b.js",revision:"cgwcpBmRsUJ7sSDCbyNZ_"},{url:"/_next/static/chunks/app/page-688bad07598fc089.js",revision:"cgwcpBmRsUJ7sSDCbyNZ_"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"cgwcpBmRsUJ7sSDCbyNZ_"},{url:"/_next/static/chunks/main-3330834e81596ead.js",revision:"cgwcpBmRsUJ7sSDCbyNZ_"},{url:"/_next/static/chunks/main-app-bb58df6fa6ca5db7.js",revision:"cgwcpBmRsUJ7sSDCbyNZ_"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"cgwcpBmRsUJ7sSDCbyNZ_"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"cgwcpBmRsUJ7sSDCbyNZ_"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-421d641143c19765.js",revision:"cgwcpBmRsUJ7sSDCbyNZ_"},{url:"/_next/static/css/babbd0a156ff3db1.css",revision:"babbd0a156ff3db1"},{url:"/app-icon.png",revision:"5a352cc3acbc81e35cf9508c8562997b"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/fonts/TTCommons-Black.eot",revision:"3f588438f6402e83c10aa1e436e13770"},{url:"/fonts/TTCommons-Black.ttf",revision:"f49377fb97356fcc9e0bef70c3bd888d"},{url:"/fonts/TTCommons-Black.woff",revision:"1fc00c09423d03d8b934972667107c64"},{url:"/fonts/TTCommons-Black.woff2",revision:"89e870f7bc0a158c45e851cc21ad48d1"},{url:"/fonts/TTCommons-BlackItalic.eot",revision:"c4e2387366b488befdde17c846bbe7a9"},{url:"/fonts/TTCommons-BlackItalic.ttf",revision:"0562eb1c94c9ab63b94d359e110cac0d"},{url:"/fonts/TTCommons-BlackItalic.woff",revision:"474e1e461911e4c0f9a0eb515d98c380"},{url:"/fonts/TTCommons-BlackItalic.woff2",revision:"d1c06306cfe94bc0f34658af1f96ed4f"},{url:"/fonts/TTCommons-Bold.eot",revision:"b4fb8cef1fea1b6c557379957f2b60ad"},{url:"/fonts/TTCommons-Bold.ttf",revision:"c22d4a7d29cd8876a3fba13508d92817"},{url:"/fonts/TTCommons-Bold.woff",revision:"5e913f161d0b868c7b5323f8e7e159f8"},{url:"/fonts/TTCommons-Bold.woff2",revision:"71568d48f4133b3d607def52901736c6"},{url:"/fonts/TTCommons-BoldItalic.eot",revision:"2c063e9e3f3935940c49bd9f24541dc9"},{url:"/fonts/TTCommons-BoldItalic.ttf",revision:"4fd2dc5100c2b9051cb30e013ebc07a9"},{url:"/fonts/TTCommons-BoldItalic.woff",revision:"086e2f06815d4eb7a0d7535e5861e06a"},{url:"/fonts/TTCommons-BoldItalic.woff2",revision:"676006993501b735ef3592288d76c331"},{url:"/fonts/TTCommons-DemiBold.eot",revision:"04ab1b7525a3d3db4eb372159a44711c"},{url:"/fonts/TTCommons-DemiBold.ttf",revision:"8e457ba289e41966f2904e7ecad81094"},{url:"/fonts/TTCommons-DemiBold.woff",revision:"5740eef93594bb7af9e4dfa6a988c1c3"},{url:"/fonts/TTCommons-DemiBold.woff2",revision:"76f97352ac7ca3b1e877ac0120b3eecf"},{url:"/fonts/TTCommons-DemiBoldItalic.eot",revision:"bb0a6d8d2f9431c60d100824de9c51bc"},{url:"/fonts/TTCommons-DemiBoldItalic.ttf",revision:"c212455024dd6680e0d087780ff3e5a1"},{url:"/fonts/TTCommons-DemiBoldItalic.woff",revision:"a7576608412a827b117fe3a2b9b9b1ff"},{url:"/fonts/TTCommons-DemiBoldItalic.woff2",revision:"25c7ca5d4101afb66ea8c981b57c020e"},{url:"/fonts/TTCommons-ExtraBold.eot",revision:"c359004fc8e7b20f1f4ef129a5f08b4a"},{url:"/fonts/TTCommons-ExtraBold.ttf",revision:"8962ee7178356d73b0e34ab3e877a767"},{url:"/fonts/TTCommons-ExtraBold.woff",revision:"baf5e1dd9aea2a3f00037872965c2b23"},{url:"/fonts/TTCommons-ExtraBold.woff2",revision:"2db978b10206b7f1144a4b0450fd0f74"},{url:"/fonts/TTCommons-ExtraBoldItalic.eot",revision:"b0d21bbb051870799f2c69781955abf7"},{url:"/fonts/TTCommons-ExtraBoldItalic.ttf",revision:"e283e17849f5143abcb307cdfaa2b6df"},{url:"/fonts/TTCommons-ExtraBoldItalic.woff",revision:"cde323a82ecd19a39f4af823aa873292"},{url:"/fonts/TTCommons-ExtraBoldItalic.woff2",revision:"edab84222d4f0cc144f5f43288c99197"},{url:"/fonts/TTCommons-ExtraLight.eot",revision:"5808ce4ea6dc06d5a4120b165edd3960"},{url:"/fonts/TTCommons-ExtraLight.ttf",revision:"dabce80713911c88605b741b9276df8d"},{url:"/fonts/TTCommons-ExtraLight.woff",revision:"84f01af6221317b20ad645704608daf2"},{url:"/fonts/TTCommons-ExtraLight.woff2",revision:"c9a587ecef6e7ca7e40dfddb737dbb8e"},{url:"/fonts/TTCommons-ExtraLightItalic.eot",revision:"7515913fdd4acc82ebbc7fb63a405863"},{url:"/fonts/TTCommons-ExtraLightItalic.ttf",revision:"d091d5cf55e8fe16346e49fe9a525560"},{url:"/fonts/TTCommons-ExtraLightItalic.woff",revision:"3f9b01a103132ba521990e6f85cce8bf"},{url:"/fonts/TTCommons-ExtraLightItalic.woff2",revision:"b66f52c6c402a929aba408ed9b321389"},{url:"/fonts/TTCommons-Italic.eot",revision:"16bc3c36233ede241968f2420b90d0c7"},{url:"/fonts/TTCommons-Italic.ttf",revision:"34a89772d6fc9560ca1e8e61c77a23f7"},{url:"/fonts/TTCommons-Italic.woff",revision:"7d1378f7d06112573287e31a16e3a389"},{url:"/fonts/TTCommons-Italic.woff2",revision:"d4791c32b3ca7b7a472deb7aed9f802a"},{url:"/fonts/TTCommons-Light.eot",revision:"106ad461af59136f9bdafefba29a9aaf"},{url:"/fonts/TTCommons-Light.ttf",revision:"773357e5b76a8e7d52615b4aae62a170"},{url:"/fonts/TTCommons-Light.woff",revision:"7a60fd0ab8bd7749e7b7281050e49661"},{url:"/fonts/TTCommons-Light.woff2",revision:"11cae857e75e1adff80c63a00d2a1292"},{url:"/fonts/TTCommons-LightItalic.eot",revision:"7bbcfda083a28707a7f9f5ff2b880129"},{url:"/fonts/TTCommons-LightItalic.ttf",revision:"501c825c1905564b7fbdc951c6968eb2"},{url:"/fonts/TTCommons-LightItalic.woff",revision:"b1a27f2ce6ca9c81e0554036ec690e75"},{url:"/fonts/TTCommons-LightItalic.woff2",revision:"42fa7afa5f67a8a6e36229f3b8337c71"},{url:"/fonts/TTCommons-Medium.eot",revision:"c37ab1446dfa7e8dddc04000a5fbd316"},{url:"/fonts/TTCommons-Medium.ttf",revision:"845a2536b68724a90b8a0aaaf2a8091a"},{url:"/fonts/TTCommons-Medium.woff",revision:"ab8b7452f25ba5da90f76264a2807fb3"},{url:"/fonts/TTCommons-Medium.woff2",revision:"664d3ea10d9026d003e87ae417b10671"},{url:"/fonts/TTCommons-MediumItalic.eot",revision:"99a0ecc12c6c45a458817e2e8c5e1d75"},{url:"/fonts/TTCommons-MediumItalic.ttf",revision:"25714981b86a7f92966cc64a67c332f5"},{url:"/fonts/TTCommons-MediumItalic.woff",revision:"c650d61bc868caaf61f96f9d9c65ab36"},{url:"/fonts/TTCommons-MediumItalic.woff2",revision:"bccdab802d183efa4658fb1e112734e6"},{url:"/fonts/TTCommons-Regular.eot",revision:"e026266e4d31bdb9921fad7ff7588656"},{url:"/fonts/TTCommons-Regular.ttf",revision:"fc6fbc1addf37a7f957715e41b20291d"},{url:"/fonts/TTCommons-Regular.woff",revision:"0ee53eef15363cd18b45ce6c3d22a73a"},{url:"/fonts/TTCommons-Regular.woff2",revision:"be476b7a71cd0a9888af01582f93a495"},{url:"/fonts/TTCommons-Thin.eot",revision:"99ecd2eab5a0251a2d10d354091c6c0a"},{url:"/fonts/TTCommons-Thin.ttf",revision:"b4bb13e45a82020f521a48377a4616dc"},{url:"/fonts/TTCommons-Thin.woff",revision:"ada05c492ffe89fd74f3187297345d2f"},{url:"/fonts/TTCommons-Thin.woff2",revision:"19c15045ef92fa492dae7a8e65883cd1"},{url:"/fonts/TTCommons-ThinItalic.eot",revision:"07b855123a420f5f16e7253504cd9273"},{url:"/fonts/TTCommons-ThinItalic.ttf",revision:"80346ab067b5c0aa1462e76836017769"},{url:"/fonts/TTCommons-ThinItalic.woff",revision:"d8a140bc0f374f2f8dbf71c4ce373e31"},{url:"/fonts/TTCommons-ThinItalic.woff2",revision:"4434e077390535521f6b094fdd57c163"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icons/icon-128x128.png",revision:"a18e02b2e7b54f08c24cfa0028447edb"},{url:"/icons/icon-144x144.png",revision:"e09506bc3e69ea112fd4da0e8ddd7233"},{url:"/icons/icon-152x152.png",revision:"b5c91f66c9f8fd3568b8ed485ac793bf"},{url:"/icons/icon-192x192.png",revision:"78559f4ec9c984c88ba0a69e2d549aad"},{url:"/icons/icon-384x384.png",revision:"5613a6c60faa569a3c5e45813fa4f9b9"},{url:"/icons/icon-512x512.png",revision:"17869fdb385fe011e87f6793228e2406"},{url:"/icons/icon-72x72.png",revision:"4528d67555c688f58d2dabcf4089c5cb"},{url:"/icons/icon-96x96.png",revision:"f399e1f6c67da54e57b683a2221f3047"},{url:"/images/img-type.jpg",revision:"8abf13523b02086d8986c375c6c2d71c"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:o,event:s,state:n})=>o&&"opaqueredirect"===o.type?new Response(o.body,{status:200,statusText:"OK",headers:o.headers}):o}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const o=e.pathname;return!o.startsWith("/api/auth/")&&!!o.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));