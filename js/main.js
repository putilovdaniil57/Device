$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    speed: 1000,
  });

  (function ($) {
    $(function () {
      $("ul.tabs__caption").on("click", "li:not(.active)", function () {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.tabs__content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });
    });
  })(jQuery);
});
$(document).ready(function () {
  $("#user-menu_link-pop").click(function () {
    $("#pop").toggleClass("popover-active");
  });
  $(document).on("mouseup", function (e) {
    // При нажатии на документ
    let s = $("#pop.popover-active"); // берём .block.-active
    if (!s.is(e.target) && s.has(e.target).length === 0) {
      // Если нажат не он и не его дочернии И сам он существует
      s.removeClass("popover-active"); // То удаляем у него класс .active
    }
  });
});
$(document).ready(function () {
  $(".delivery_modal-btn").click(function () {
    $("#modal_window").removeClass("modal-container_close");
  });
  $(".modal-close-button").click(function () {
    $("#modal_window").addClass("modal-container_close");
  });
});
