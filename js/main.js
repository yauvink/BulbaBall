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
const previewUrl = 'https://img.youtube.com/vi/${videoId}/0.jpg';
var reviewsWrap = document.getElementById("reviewsWrap");

fetch(url).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data)
  // const items = data.items;
  for(var i = 0; i < data.items.length; i++){

    var a = document.createElement("a");
    a.href = "https://www.google.com/";
    a.href = "https://www.youtube.com/watch?v=" + data.items[i].id.videoId;
    a.className = "review";
    a.target = "_blank";

    var divReview = document.createElement("div");
    divReview.className = "review"; 
    
    var divReviewPreview = document.createElement("div");
    divReviewPreview.className = "review-preview";
    divReviewPreview.style.backgroundImage = "url('//img.youtube.com/vi/"+ data.items[i].id.videoId +"/mqdefault.jpg')";

    var snippet = document.createElement("h5");
    snippet.innerHTML = data.items[i].snippet.title;

    divReview.appendChild(divReviewPreview);
    divReview.appendChild(snippet);
    a.appendChild(divReview);
    reviewsWrap.appendChild(a);
    
  }
  
  // const previews = items.map(item => {
  //   return {
  //     description: '',
  //     imageSrc: previewUrl.replace('${videoId}', item.id.videoId),
  //   };
  // });
  // console.log(previews);
});


