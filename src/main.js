$(() => {
  $("p:has(img)").each(function () {
    $(this).css({
      margin: "0",
      padding: "0",
      border: "none",
    });

    $(this).find("img").css({
      margin: "0",
      padding: "0",
      border: "none",
      display: "block",
    });
  });
});
