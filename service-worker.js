/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3c3722a4c56f00dc1ce0574c5a97769f"
  },
  {
    "url": "assets/css/0.styles.213b1bb4.css",
    "revision": "ebf3830d3d7dd5b68c72ef846a679b80"
  },
  {
    "url": "assets/img/create.f01c4812.jpg",
    "revision": "f01c481220a9b13a6d47a58522575a76"
  },
  {
    "url": "assets/img/preload-travel-fetch.124639cd.png",
    "revision": "124639cd9ac27fecedb5035aab987f9f"
  },
  {
    "url": "assets/img/preload-travel.f4233a6c.png",
    "revision": "f4233a6ce3c1252600c7d41d2c68af72"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.923e9838.js",
    "revision": "1fc4d10729ea6c8f9c0af426b69ca8ef"
  },
  {
    "url": "assets/js/11.d9405745.js",
    "revision": "4d57a87f5c57d9f7eb42a8c7131f9832"
  },
  {
    "url": "assets/js/12.a3cb5f3f.js",
    "revision": "b6bbbe1cbb2eefa62652c760d431d907"
  },
  {
    "url": "assets/js/13.f8341a9e.js",
    "revision": "2a6040e01f698b2306b2c6de20a39689"
  },
  {
    "url": "assets/js/14.6d665894.js",
    "revision": "467a87b090dd637c4c98bcc1acd06c97"
  },
  {
    "url": "assets/js/15.5282b281.js",
    "revision": "52eb9c7108e60ef02e40611f55d5a9fe"
  },
  {
    "url": "assets/js/16.ff0257dc.js",
    "revision": "b481e345a1af1be6f538e7320ca7d083"
  },
  {
    "url": "assets/js/17.a31f035b.js",
    "revision": "b472649e7b91e11c207b7898e7f6d2b4"
  },
  {
    "url": "assets/js/18.5c2a1df8.js",
    "revision": "19bbfe74c932246264e122b83584d48e"
  },
  {
    "url": "assets/js/19.dbb1a657.js",
    "revision": "35718caa7edca21220c7a07df9aaf370"
  },
  {
    "url": "assets/js/20.619e3e89.js",
    "revision": "3ba7d9a47d041357619b4bda590f2229"
  },
  {
    "url": "assets/js/21.0ec63422.js",
    "revision": "4c0c181982bf6eb2b6deccd3dae7e81e"
  },
  {
    "url": "assets/js/22.477e03ca.js",
    "revision": "e7b1fcd78894c3726052426eec5a0583"
  },
  {
    "url": "assets/js/23.cf784165.js",
    "revision": "a951b1d9ca97b2529102bbdc50365e2a"
  },
  {
    "url": "assets/js/24.f2f661b7.js",
    "revision": "6ec9001b8957810dde5d62893d354d75"
  },
  {
    "url": "assets/js/25.04599b09.js",
    "revision": "9c27eb59be9def5e5537def269ecc30e"
  },
  {
    "url": "assets/js/26.61d8f2e9.js",
    "revision": "87f4f14d68b48083565019f277ed69ef"
  },
  {
    "url": "assets/js/27.7ac33e6d.js",
    "revision": "9021f7af3e794dcb3819f027c4363490"
  },
  {
    "url": "assets/js/28.153c8fd5.js",
    "revision": "0dd15d010539560140b1aaea3fdbefb8"
  },
  {
    "url": "assets/js/29.24ad941b.js",
    "revision": "15213328c12207747d26b46681a86089"
  },
  {
    "url": "assets/js/30.5a98d7df.js",
    "revision": "1451419ca87ecf9c066a48793cb2911f"
  },
  {
    "url": "assets/js/31.4cd03f6c.js",
    "revision": "5bb45b7936a5f2b1cdb8c3a07cef2c5b"
  },
  {
    "url": "assets/js/32.9f0abf3d.js",
    "revision": "13877f3ca2a36d83e309e08659566976"
  },
  {
    "url": "assets/js/33.88d38379.js",
    "revision": "548dd1741013053edfafa327ba6cb4ca"
  },
  {
    "url": "assets/js/34.daaa7ef9.js",
    "revision": "c783831461e7d60c041a9cdab7ebccf5"
  },
  {
    "url": "assets/js/35.1aff8eb8.js",
    "revision": "77e8478152d0c300c3fd7d8d8275ea7f"
  },
  {
    "url": "assets/js/36.4ec0f753.js",
    "revision": "aae1949815b63dedad9c96e5566b6466"
  },
  {
    "url": "assets/js/37.eb55aba9.js",
    "revision": "f6ac12fc9bc446fdc9c5365772dea4ff"
  },
  {
    "url": "assets/js/38.dae6df89.js",
    "revision": "af7d02fa0c06af4835a0b07940e8e12c"
  },
  {
    "url": "assets/js/39.f88d8561.js",
    "revision": "20c42956782f68217bc446a0c2c88755"
  },
  {
    "url": "assets/js/4.15599987.js",
    "revision": "f1087d8bd3b3fc8ac3897538aedc0ddb"
  },
  {
    "url": "assets/js/40.e19a2197.js",
    "revision": "a3c051510f0eaeeddd10a855baed6f94"
  },
  {
    "url": "assets/js/41.f1910d1b.js",
    "revision": "84e06b5adff76ebfb51706b45e0fb031"
  },
  {
    "url": "assets/js/42.af967b06.js",
    "revision": "9ea56363353c67f1ac60bca99851ab4d"
  },
  {
    "url": "assets/js/43.2bc01e71.js",
    "revision": "9137f7409a5ac0b5f6f71ee84b9ecb84"
  },
  {
    "url": "assets/js/44.5b420f87.js",
    "revision": "43a7756b80a352437b6298bb5b710e5d"
  },
  {
    "url": "assets/js/45.6260b3f1.js",
    "revision": "33c0b5dfe391ae6acc0c244cd5eab935"
  },
  {
    "url": "assets/js/46.b5565727.js",
    "revision": "5246ef811965cb0e6f6a65de56a1d104"
  },
  {
    "url": "assets/js/47.02229a2d.js",
    "revision": "f4ab191d2a0379a53aaefa54028158dd"
  },
  {
    "url": "assets/js/48.b06e8df2.js",
    "revision": "0cfaada60deb9e56d0e8c62c85635af2"
  },
  {
    "url": "assets/js/5.1e0667b9.js",
    "revision": "46dd058006ff03fe59dec2bbef3476f8"
  },
  {
    "url": "assets/js/6.687b6066.js",
    "revision": "67921dc17b46eb769dd593ab00748527"
  },
  {
    "url": "assets/js/7.d62ff838.js",
    "revision": "791feda7cb4f1bb325f1df36479aa356"
  },
  {
    "url": "assets/js/8.48ead2bb.js",
    "revision": "815e81ab72737774b4a2e1de8a370fd3"
  },
  {
    "url": "assets/js/9.fd005e72.js",
    "revision": "4a2bdc7422204fc88f6fda9489f198b0"
  },
  {
    "url": "assets/js/app.a6ca37eb.js",
    "revision": "1229f90d439206f642df53616c833cd2"
  },
  {
    "url": "assets/js/vendors~docsearch.38357634.js",
    "revision": "744f60ebd1418e691daa49081a4f8c01"
  },
  {
    "url": "assets/js/vendors~notification.e660f266.js",
    "revision": "612ad3a5eee7ba341ac9514e5dd55cbb"
  },
  {
    "url": "cli/build.html",
    "revision": "48a031592887b981c2d8c0ecb99c192b"
  },
  {
    "url": "cli/configuration.html",
    "revision": "99c8d6b2de50585ccbf71a9b0ad84d74"
  },
  {
    "url": "cli/create.html",
    "revision": "f53098ac8b2c3e9fd6e69d3a520fdd59"
  },
  {
    "url": "cli/index.html",
    "revision": "62af4127dca90325d7c0d76294d9485f"
  },
  {
    "url": "cli/tool.html",
    "revision": "f7260ed74b29bcb8d1fec5f8e234469c"
  },
  {
    "url": "core/decorators/class.html",
    "revision": "be1a80915c2b64d179940c3342f3a202"
  },
  {
    "url": "core/decorators/methods.html",
    "revision": "fc7985bdf4d71ed9da35efce856fa459"
  },
  {
    "url": "core/feature.html",
    "revision": "7860f487e6c80cf81b41dec305ca0fc3"
  },
  {
    "url": "core/global.html",
    "revision": "b8f13834ffdf441a845a286b4761964f"
  },
  {
    "url": "core/hook.html",
    "revision": "fd86992de232f3d6d16c82260587b76e"
  },
  {
    "url": "core/index.html",
    "revision": "a3b3ba421163a43aa7b149f18cfec5e2"
  },
  {
    "url": "core/other.html",
    "revision": "5a61c9eed66797ebaac70b5c1221a80b"
  },
  {
    "url": "googled00a917fedc8f3e4.html",
    "revision": "a6e4cb349c0ccad77455d54df723947e"
  },
  {
    "url": "index.html",
    "revision": "9e14987687c5308d130c5cb49c7a9ca2"
  },
  {
    "url": "lang/english/cli.html",
    "revision": "130b9c787162d8337466153e3e9429d7"
  },
  {
    "url": "lang/english/core.html",
    "revision": "3cb3895f906ac4f61e33ee697a54fc8d"
  },
  {
    "url": "lang/english/guide.html",
    "revision": "9a0d93599278e698040b8bae68c5f4b7"
  },
  {
    "url": "lang/english/index.html",
    "revision": "dcbb316f1b71821ea811acee2faad7e3"
  },
  {
    "url": "learn/advance/index.html",
    "revision": "9a44a745533a7ad71af429f8c8c6551f"
  },
  {
    "url": "learn/advance/preload.html",
    "revision": "d27829bc5f0498f78d45e74616c55f8b"
  },
  {
    "url": "learn/advance/third-party-wxa.html",
    "revision": "44e4cf1a182fcc083b16d2a99485d5f8"
  },
  {
    "url": "learn/guide/component.html",
    "revision": "dadf2b6fc00d196d63068359faf91d73"
  },
  {
    "url": "learn/guide/configuration.html",
    "revision": "83a11311b318a471ae58e0ca27ac5f4a"
  },
  {
    "url": "learn/guide/construction.html",
    "revision": "a3e0261ebb02ad37d08e644274349070"
  },
  {
    "url": "learn/guide/develop.html",
    "revision": "95a1a51f0501fc94dc8030ad110acf3e"
  },
  {
    "url": "learn/guide/editor.html",
    "revision": "b72c3be18b099d54ba92c0f62ab5fea9"
  },
  {
    "url": "learn/guide/index.html",
    "revision": "2780407842d1aba4f7e02041e995dde9"
  },
  {
    "url": "learn/guide/mixin.html",
    "revision": "85b058c5dce1e16174f0174291608ea0"
  },
  {
    "url": "learn/guide/plugin.html",
    "revision": "ea2af12b132746935f7a6cc804de56c1"
  },
  {
    "url": "learn/index.html",
    "revision": "cf47d6d88b473081f60f04b7e10f1603"
  },
  {
    "url": "learn/other/migrade1.x.html",
    "revision": "13f6604fc32191fd73963db4fa3d4359"
  },
  {
    "url": "learn/other/migradeNative.html",
    "revision": "f6a6df6720f06f37a13c7318b9ec7994"
  },
  {
    "url": "learn/quickStarted/index.html",
    "revision": "1234f1e99a2387023a4b33b6b50b5d85"
  },
  {
    "url": "logo-mini.png",
    "revision": "3a7e9954fe49f74554a54f6c1c3558fb"
  },
  {
    "url": "plugin/cli/copy.html",
    "revision": "c642aec9efa1f0367f90927569eab36e"
  },
  {
    "url": "plugin/cli/da.html",
    "revision": "934f9c565d9db421a5a7788d21b309fc"
  },
  {
    "url": "plugin/cli/postcss.html",
    "revision": "1045e5e496f662277b6708c821cea8a5"
  },
  {
    "url": "plugin/cli/replace.html",
    "revision": "bcc507cbec9a62a73a97a08b4f71c2d8"
  },
  {
    "url": "plugin/cli/uglifyjs.html",
    "revision": "7d2ae86d10eb719f2389fbe2f292a65f"
  },
  {
    "url": "plugin/core/form.html",
    "revision": "3ec574ee99a4b0f5c8eadcf082457ccc"
  },
  {
    "url": "plugin/core/redux.html",
    "revision": "632d7b498ab00af5f6fc3cef52c10eb9"
  },
  {
    "url": "plugin/core/watch.html",
    "revision": "680a8a93c6d4f4a3cddd35403c63b5d9"
  },
  {
    "url": "wxa-logo.png",
    "revision": "846c5bc097e185602b2ea64c0aa34061"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
