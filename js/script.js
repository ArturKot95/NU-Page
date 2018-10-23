(function () {

  /* * * * * COLLAPSES * * * * * */
  $(".accordion-close-btn").click(function () {
    $(this).parents(".collapse").collapse('hide');
    $.scrollTo("#apply");
  });

  $("#collapseMoreReviews").on('show.bs.collapse', function () {
    $("#reviews-btn").text('Less Reviews');
  });

  $("#collapseMoreReviews").on('hide.bs.collapse', function () {
    $("#reviews-btn").text('More Reviews');
  });

  $("#reviews-close-btn").click(function () {
    $.scrollTo("#reviews");
  });
  /* * * * * * * * * * * * * * * * */

  $("#question-list").find(".list-group-item").click(function () {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");

    var questionId = $(this).data('question');
    var responseText = $("#faq-responses").find(".faq-response[data-response='" + questionId + "']").text();

    $("#response").text(responseText);
  });
})();