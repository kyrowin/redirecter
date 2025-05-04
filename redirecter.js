// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 19 August 2024 03:38:25 PM (UTC+3)

// yes i know this is not the best way to create redirects, but what's
// the point in complicating when there is enough of this?=)

// huh, yeah, i know about apache and php but is not need for me
// and... whatever my site is completely static lol

// please don't cyberbully me, i'm just a silly cute boy >.<

const unavailablePage = "google.com";

const platform = window.location.search.split("?r=")[1] || window.location.hash.split("#")[1];
const urls = {
  github: "github.com/kyrowin"
};

if (platform && urls[platform]) window.location.href = "https://" + urls[platform];

if (!urls[platform]) console.log("[*] There doesn't seem to be such a redirect...");

if (!urls[platform] && window.location.host === "r.kyrowinomg.ru") {
  window.location.href = "https://kyrowinomg.ru";
};
