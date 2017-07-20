//const accordions = document.getElementsByClassName("accordion");
//let i;
//for (i=0;i=accordions.length;i++) {
  $(".accordion").accordion({
    header: "> div > h3",
    collapsible: true
  })
  .sortable({
    axis: "y",
    handle: "h3",
    stop: function(event, ui) {
      // IE doesn't register the blur when sorting
      // so trigger focusout handlers to remove .ui-state-focus
      ui.item.children("h3").triggerHandler("focusout");

      // Refresh accordion to handle new order
      $(this).accordion("refresh");
    }
  });
//}

//TODO: Rebuild accordion script without jqueryui
/*
  let accordion = document.getElementsByClassName("accordion");
  accordion.forEach() */
