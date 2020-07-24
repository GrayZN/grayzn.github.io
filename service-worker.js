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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4e7f1ddda78d0c9a2d1090441bcbe5e5"
  },
  {
    "url": "assets/css/0.styles.56e6cf2b.css",
    "revision": "7794aaf2e48d5ec71d5735be63e83829"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/Lovely.2a830763.jpg",
    "revision": "2a8307633d1596fd3d015f4e4bd4beec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.162e584e.js",
    "revision": "6a9d7ba3c20d32c508cc1a3d7e9310f0"
  },
  {
    "url": "assets/js/11.7326b584.js",
    "revision": "d54569188efac4e4ba706c3d72630bec"
  },
  {
    "url": "assets/js/12.135aac1c.js",
    "revision": "7935a6cd7933a6e01638758d6805bd89"
  },
  {
    "url": "assets/js/13.36a6c504.js",
    "revision": "2698f29efe3677e232c99fd07f01de17"
  },
  {
    "url": "assets/js/14.a00e0ebc.js",
    "revision": "4995f3b7b09e73747c4fc7642862cbdc"
  },
  {
    "url": "assets/js/15.495d4f41.js",
    "revision": "1a7e7e6fb5cb74354486bf3024ccfa26"
  },
  {
    "url": "assets/js/16.aaac7e89.js",
    "revision": "b11ccf6c5da9d4a63dc48cbf68d28355"
  },
  {
    "url": "assets/js/17.d6198196.js",
    "revision": "722214092b790a2893298e46521b228c"
  },
  {
    "url": "assets/js/18.d2930a0c.js",
    "revision": "f914f1d4ddf38815d150cda0b8a8999c"
  },
  {
    "url": "assets/js/19.9a189835.js",
    "revision": "993aa7b67e5d0d4dfc6e140b8ec487d3"
  },
  {
    "url": "assets/js/2.02c59d05.js",
    "revision": "111968da4bdbecca02a310fdc63458fc"
  },
  {
    "url": "assets/js/20.9266d5b2.js",
    "revision": "86b5fa5d1f9d6018a2bedf593d5b1c78"
  },
  {
    "url": "assets/js/21.38d733de.js",
    "revision": "a24daa6186c8cfbd51053d15abf13ff6"
  },
  {
    "url": "assets/js/22.0babde83.js",
    "revision": "ab3cdecebffde1cfd85c271653194b98"
  },
  {
    "url": "assets/js/23.7375b70d.js",
    "revision": "c5b6177a8d0929bb8c364423276e4d8b"
  },
  {
    "url": "assets/js/24.a62def38.js",
    "revision": "b507c6a70ac314add31765340e266229"
  },
  {
    "url": "assets/js/25.afab5274.js",
    "revision": "2404420394112f9ab7a3e55816829188"
  },
  {
    "url": "assets/js/3.898395dd.js",
    "revision": "c9ecb2059e9d4a8b01df2494e974b653"
  },
  {
    "url": "assets/js/4.6ee60548.js",
    "revision": "3b7f4d4f23a7e32714673e6fa845372e"
  },
  {
    "url": "assets/js/5.5f2633e4.js",
    "revision": "7e72edfdbe5011e05c24039a6586dd94"
  },
  {
    "url": "assets/js/6.0091caa4.js",
    "revision": "f6dc8aa747a03d3bbda6cd56b28f89bd"
  },
  {
    "url": "assets/js/7.508210b5.js",
    "revision": "c997bbf9d73245d53af5124b3dcd6325"
  },
  {
    "url": "assets/js/8.03635ba5.js",
    "revision": "e0073bddf1d384b415f65ca38fa8112a"
  },
  {
    "url": "assets/js/9.be137a7f.js",
    "revision": "a02eb63fb6a087f835399bcadc386921"
  },
  {
    "url": "assets/js/app.780112d3.js",
    "revision": "b8fe805c26c39eca634d30eaf92eac7f"
  },
  {
    "url": "dev/index.html",
    "revision": "d6a8969dacd6e029891ec4dc423797f2"
  },
  {
    "url": "dev/ShadowAbout.html",
    "revision": "1f1fe0d66ee48adc279e1e285278d580"
  },
  {
    "url": "dev/VueRouter-KeepAlive.html",
    "revision": "cf6d0ee464e565e2b368a4ef96095a64"
  },
  {
    "url": "dev/WebDesignSkills.html",
    "revision": "ab5ced9f1000dd1737a34bfe4b95d40e"
  },
  {
    "url": "img/Movie/CMBYN.jpg",
    "revision": "0da7ffae67afeb5c63bd2d73efbe664c"
  },
  {
    "url": "img/Movie/God'sOwnCountry.jpg",
    "revision": "81a76d4dca23f674e4e89b0b90022025"
  },
  {
    "url": "img/Movie/HAWAII.jpg",
    "revision": "d05a773181811e30f9fe482f2464c1dc"
  },
  {
    "url": "img/Movie/Patrik1,5.jpg",
    "revision": "0975a5aa4ad7215328b623ace7b8d558"
  },
  {
    "url": "img/Movie/Shelter.jpg",
    "revision": "d9e7ac18d15613b47db5a2b1f743c866"
  },
  {
    "url": "img/Movie/Taekwondo.jpg",
    "revision": "4faefa382d52c254080cb848589852f8"
  },
  {
    "url": "img/Music/StVincent_MASSEDUCTION_2.png",
    "revision": "38a478c560b773014e56e4aebc2f8964"
  },
  {
    "url": "img/Music/StVincent_MASSEDUCTION_3.jpg",
    "revision": "1fecc4a1f1e3c3469501b88cbefd059b"
  },
  {
    "url": "img/Music/StVincent_MASSEDUCTION_4.jpg",
    "revision": "cb27731c8ce5e110a170dc92915fceb2"
  },
  {
    "url": "img/Music/StVincent_MASSEDUCTION.jpg",
    "revision": "c259111c86b0987c14e8c57a05c9ed08"
  },
  {
    "url": "img/Music/SufjanStevens_Carrie&Lowell.jpg",
    "revision": "7942c171090b2eec8d3520fc71fc7e0e"
  },
  {
    "url": "img/Music/SufjanStevens_Carrie&LowellLive.jpg",
    "revision": "1bd6f7a73e9a22543424dc0d2b8e1eee"
  },
  {
    "url": "img/Music/SufjanStevens_TheGreatestGift.jpg",
    "revision": "3222a8000dca674dba90cbc1d0b8d37f"
  },
  {
    "url": "img/Music/TaylorSwift_1989.jpg",
    "revision": "8c838b1324274a328a4f15bde3774738"
  },
  {
    "url": "img/Sufjan/Angel.png",
    "revision": "675b0d4eb216934d256890726e84c46d"
  },
  {
    "url": "img/Sufjan/Boat2019.jpg",
    "revision": "b2853c87be31211b217af0b1b2900bf9"
  },
  {
    "url": "img/Sufjan/CivicDuty.jpg",
    "revision": "8aac8380cc340a6bec405c23f83bce01"
  },
  {
    "url": "img/Sufjan/FriendlyReminder.BeHumble_1.gif",
    "revision": "fcd6246acace157cb9e003efa7e68c84"
  },
  {
    "url": "img/Sufjan/FriendlyReminder.BeHumble_2.png",
    "revision": "32b2dfd73c240147bb555d3260366931"
  },
  {
    "url": "img/Sufjan/Guccigang.jpg",
    "revision": "224986dda2ac02d101aa3751e1a86b0a"
  },
  {
    "url": "img/Sufjan/HAPPY-LOVING-DAY.jpg",
    "revision": "383c0849aea24b550a979c4abdd5d915"
  },
  {
    "url": "img/Sufjan/HappyHolidays.jpg",
    "revision": "fda10eab9663cbdca5c4680440036aa1"
  },
  {
    "url": "img/Sufjan/HappyNewYear2019.jpg",
    "revision": "720d710f7419d90aba818d47853e158e"
  },
  {
    "url": "img/Sufjan/Juror.jpg",
    "revision": "cacc317f57d15adfb3117c3ccefff54b"
  },
  {
    "url": "img/Sufjan/LanderWY-Office.jpg",
    "revision": "b00f5955e42ff19997a6537171beb36e"
  },
  {
    "url": "img/Sufjan/Landscape/1.jpg",
    "revision": "692ec897f9f5595f4ee60513ae964423"
  },
  {
    "url": "img/Sufjan/Landscape/2.jpg",
    "revision": "f518ab315420703bdd4c2ccbd1fbb09e"
  },
  {
    "url": "img/Sufjan/Landscape/3.jpg",
    "revision": "57bb8ec202a41b00aabb08694370dd4a"
  },
  {
    "url": "img/Sufjan/Landscape/4.png",
    "revision": "b59412c31ac84ce078b1ce9689467c30"
  },
  {
    "url": "img/Sufjan/LonelyManOfWinter.jpg",
    "revision": "4845486465ff9da875d516cb95914db0"
  },
  {
    "url": "img/Sufjan/Lovely.jpg",
    "revision": "2a8307633d1596fd3d015f4e4bd4beec"
  },
  {
    "url": "img/Sufjan/MerryChristmas2018.jpg",
    "revision": "46be6a101fb298297b1a1fa70bb14ce4"
  },
  {
    "url": "img/Sufjan/MoreIsMoreAndLessIsMore.jpg",
    "revision": "808066894ba3d18c9de69bc2c9832e0f"
  },
  {
    "url": "img/Sufjan/OriginalDrawingforSufjanStevens-ChristmasUnicornCover.jpg",
    "revision": "bdd723739ad79327aaa966de18cacd7c"
  },
  {
    "url": "img/Sufjan/OSCARS.jpg",
    "revision": "3a38ab0728d6746b0758427835bb7ded"
  },
  {
    "url": "img/Sufjan/PeaceToYou.jpg",
    "revision": "4f9ce55195a5f332603427305e77149a"
  },
  {
    "url": "img/Sufjan/SongsForChristmas.jpg",
    "revision": "5fedf6f1ca903e348a0ea453f4d178dd"
  },
  {
    "url": "img/Sufjan/SUFJAN.jpg",
    "revision": "6e25edc9df6f605cd5ed5cddc8987c6f"
  },
  {
    "url": "img/Sufjan/TheAscension/CP1.jpg",
    "revision": "34dcd804d5a7f199be94636f03046421"
  },
  {
    "url": "img/Sufjan/TheAvalancheVinyl.jpg",
    "revision": "75d6b9608ca88d6c666e48c3e2072fd4"
  },
  {
    "url": "img/Sufjan/TheSunOnAWinterMorn.jpg",
    "revision": "cc646b9df95f79027bbb171a73d4cced"
  },
  {
    "url": "img/Sufjan/TheWorldIsAbundant.jpg",
    "revision": "17b03043f3abaf75e5c88e713c44e95a"
  },
  {
    "url": "img/Sufjan/TonyaHardingVinyl.jpg",
    "revision": "0960f5cb51caac0d71e3adcd16c31cd6"
  },
  {
    "url": "img/Sufjan/Truth.jpg",
    "revision": "57655dd80eeb2ebad87bb79c1e64af2a"
  },
  {
    "url": "img/Sufjan/Uncle1.jpg",
    "revision": "44fef06ba81457f67f8039f30dee2e0c"
  },
  {
    "url": "img/Sufjan/Vote!.gif",
    "revision": "760465766a22cbd094073ce905da5fd1"
  },
  {
    "url": "img/Sufjan/WhyAreYouFat.jpg",
    "revision": "56c09a2894d4737b6fb393016db951d4"
  },
  {
    "url": "img/Sufjan/YelloBalloon.jpg",
    "revision": "9d53e6b0c2a0062eae8fee99ceacc075"
  },
  {
    "url": "img/Sufjan/YellowVinyl.jpg",
    "revision": "dd7a9adb93a6b011c292e830c2d1e3f3"
  },
  {
    "url": "index.html",
    "revision": "39d8e1d276d6149a6525deacf870cfe5"
  },
  {
    "url": "movie/HAWAII.html",
    "revision": "36630459e6403cb0e5fdbe5bef4d7445"
  },
  {
    "url": "movie/index.html",
    "revision": "434c619bad3a6fe07da9dfd29bdfd181"
  },
  {
    "url": "music/index.html",
    "revision": "e22f67620ecac1e6d0563d84c0603ce8"
  },
  {
    "url": "music/St.Vincent/MASSEDUCTION.html",
    "revision": "ef6cdb0b04211a621169ef591977125d"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowell.html",
    "revision": "c94d44b58429dd65fc3749472b82f879"
  },
  {
    "url": "music/SufjanStevens/CarrieAndLowellLive.html",
    "revision": "9b6b9df4852465e660e9c6197d714ba7"
  },
  {
    "url": "music/SufjanStevens/TheGreatestGift.html",
    "revision": "4c8a462801053e3d7e2977fa3222f6d3"
  },
  {
    "url": "music/TaylorSwift/1989.html",
    "revision": "f902d6e65f40ab719604c720f8f85c20"
  },
  {
    "url": "sufjan/index.html",
    "revision": "57ab613658309203dc89abf384aadfd5"
  },
  {
    "url": "website/index.html",
    "revision": "732b1a32fdc0b75e96718800f4b9002c"
  }
].concat(self.__precacheManifest || []);
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
