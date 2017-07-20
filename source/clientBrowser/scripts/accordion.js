//const accordions = document.getElementsByClassName("accordion");
//let i;
//for (i=0;i=accordions.length;i++) {

//Initialize accordions on all elements with "accordion" class name.
  $(".accordion").accordion({
    header: "> div > h3",
    collapsible: true
  })
  .sortable({
    axis: "y",
    handle: "h3",
    stop: function(event, ui) {
      ui.item.children("h3").triggerHandler("focusout");
      $(this).accordion("refresh");
    }
  });
//}

//TODO: Rebuild accordion script without jqueryui
/*
  let accordion = document.getElementsByClassName("accordion");
  accordion.forEach() */
