'use strict';

//  function autorun()
//  {
//    var ytData;
//     $.getJSON("https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCnRisinlQ3FiupZH8B_TJiw&maxResults=6&key=AIzaSyD40HdMjRci08Vh41DBfniJAsQomaY7PLQ", getData);
//     function getData(data){
//         ytData = data;
//         // console.log(ytData);
//         console.log(ytData.items[0].snippet.title)
//         console.log("id = " + ytData.items[0].id.videoId)
//         // console.log("hello world")
//         // document.getElementById("test-v-id").innerHTML = ytData.items[0].snippet.title;
//     }
//  }
//  if (window.addEventListener) window.addEventListener("load", autorun, false);
//  else if (window.attachEvent) window.attachEvent("onload", autorun);
//  else window.onload = autorun;

const url = "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCnRisinlQ3FiupZH8B_TJiw&maxResults=6&key=AIzaSyD40HdMjRci08Vh41DBfniJAsQomaY7PLQ";


fetch(url).then(function (response) {
  return response.json();
}).then(function (data) {
  for (let i = 0; i < data.items.length; i++) {

    // создаем ссылку-обертку
    let link = $("<a>").toggleClass("review").attr({
      href: "https://www.youtube.com/watch?v=" + data.items[i].id.videoId,
      target: "_blank"
    });

    // создаем див-обертку
    let review = $("<div>").toggleClass("review");

    // создаем див с превью
    let reviewPreview = $("<div>").toggleClass("review-preview").css({
      backgroundImage: "url('//img.youtube.com/vi/" + data.items[i].id.videoId + "/mqdefault.jpg')"
    });
    
    // создаем тайтл
    let reviewTitle = $("<h5>").html(data.items[i].snippet.title);

    // добавляем все в блок
    $(review).append(reviewPreview).append(reviewTitle);

    $(link).append(review);

    $(".reviews-inner").append(link);

  }

  // const previews = items.map(item => {
  //   return {
  //     description: '',
  //     imageSrc: previewUrl.replace('${videoId}', item.id.videoId),
  //   };
  // });
  // console.log(previews);
});

// $(document).append($("div").toggleClass("testdiv"))


