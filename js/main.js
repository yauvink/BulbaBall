'use strict';


const url = "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCnRisinlQ3FiupZH8B_TJiw&maxResults=6&key=AIzaSyD40HdMjRci08Vh41DBfniJAsQomaY7PLQ";


// fetch(url).then(function (response) {
//   return response.json();
// }).then(function (data) {
//   for (let i = 0; i < data.items.length; i++) {

//     // создаем ссылку-обертку
//     let link = $("<a>").addClass("review").attr({
//       href: `https://www.youtube.com/watch?v=${data.items[i].id.videoId}`,
//       target: "_blank"
//     });

//     // создаем див-обертку
//     let review = $("<div>").addClass("reviewWrap");

//     // создаем превью
//     let reviewPreview = $("<img>").addClass("review-preview").attr({
//       src: `//img.youtube.com/vi/${data.items[i].id.videoId}/mqdefault.jpg`
//     });
    
//     // создаем тайтл
//     let reviewTitle = $("<h5>").html(data.items[i].snippet.title);

//     // собираем в ссылку
//     review.append(reviewPreview).append(reviewTitle);
//     link.append(review);
//     // добавляем на страницу
//     $(".reviews-inner").append(link);

//   }
// });

fetch(url).then(function (response) {
  return response.json();
}).then(function (data) {
  for (let i = 0; i < data.items.length; i++) {

  //  создаем div обертку
  let mdlCell = $('<div>').addClass('review-wrap mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp');


  // cоздаем ссылку??? обертку
  let review = $('<a>').addClass('review').attr({
          href: `https://www.youtube.com/watch?v=${data.items[i].id.videoId}`,
          target: "_blank"
        });

  // создаем превью
  let reviewPreview = $("<img>").addClass("review-preview").attr({
    src: `//img.youtube.com/vi/${data.items[i].id.videoId}/mqdefault.jpg`
  });
  
 // создаем тайтл
 let reviewTitle = $("<h6>").addClass('review-title').html(data.items[i].snippet.title);


//  собираем вместе 

review.append(reviewPreview).append(reviewTitle);
mdlCell.append(review);
$('.reviews-inner').append(mdlCell);


  }
});


