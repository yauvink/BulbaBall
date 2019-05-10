'use strict';

function addVideoContent() {
  const url = "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCnRisinlQ3FiupZH8B_TJiw&maxResults=6&key=AIzaSyD40HdMjRci08Vh41DBfniJAsQomaY7PLQ";
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    for (let i = 0; i < data.items.length; i++) {
      //  создаем div обертку
      let mdlCell = $('<div>').addClass('review-wrap mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp');
      // cоздаем ссылку обертку
      let review = $('<a>').addClass('review').attr({
        // not supporting in IE
        // href: `https://www.youtube.com/watch?v=${data.items[i].id.videoId}`,
        href: "https://www.youtube.com/watch?v=" + data.items[i].id.videoId,
        target: "_blank"
      });
      // создаем превью
      let reviewPreview = $("<img>").addClass("review-preview").attr({
        src: "//img.youtube.com/vi/" + data.items[i].id.videoId + "/mqdefault.jpg"
      });
      // создаем тайтл
      let reviewTitle = $("<h6>").addClass('review-title').html(data.items[i].snippet.title);
      //  собираем вместе 
      review.append(reviewPreview).append(reviewTitle);
      mdlCell.append(review);
      $('.reviews-inner').append(mdlCell);
    }
  });
}
function addAlertMessage() {
  let mdlCell = $('<div>').addClass(' mdl-cell mdl-cell--8-col mdl-shadow--2dp alertMessage');
  let messageWrap = $("<div>").addClass("alertMessage");
  let message1 = $("<h4>").text("[ Oops! It seems we have some problems... ]");
  let message2 = $("<h4>").text("[ To watch video please use actual browser (not IE) ]");
  messageWrap.append(message1);
  messageWrap.append(message2);
  $(mdlCell).append(messageWrap);
  $('.reviews-inner').append(mdlCell);
}
function detectIE() {
  let ua = window.navigator.userAgent;
  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    return false;
  }
  else {
    return true;
  }
};
function addContent() {
  if (detectIE() === true) {
    addVideoContent();
  }
  else {
    addAlertMessage();
  }
}

$(document).ready(function () {
  console.log("document ready");
  addContent();
});


