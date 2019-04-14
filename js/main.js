'use strict';

   function autorun()
   {
     var ytData;
      $.getJSON("https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCnRisinlQ3FiupZH8B_TJiw&maxResults=6&key=AIzaSyD40HdMjRci08Vh41DBfniJAsQomaY7PLQ", getData);
      function getData(data){
          ytData = data;
          console.log(ytData);
          console.log(ytData.items[0].snippet.title)
          console.log("id = " + ytData.items[0].id.videoId)
          console.log("id = " + ytData.items[0].id.videoId)
          document.getElementById("test-v-id").innerHTML = ytData.items[0].snippet.title;
      }
   }
   if (window.addEventListener) window.addEventListener("load", autorun, false);
   else if (window.attachEvent) window.attachEvent("onload", autorun);
   else window.onload = autorun;








