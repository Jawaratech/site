$(document).ready(function () {
  // Scrollspy custom
  $(window).bind("scroll", function () {
      var currentTop = $(window).scrollTop();
      var elems = $(".scrollspy-content");
      elems.each(function (index) {
          var elemTop = $(this).offset().top;
          var elemBottom = elemTop + $(this).height();
          if (currentTop >= elemTop && currentTop <= elemBottom) {
              var id = $(this).attr("id");
              var navElem = $('a[href="#' + id + '"]');
              navElem.parent().addClass("is-active").siblings().removeClass("is-active");
          }
      });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#scrollToTop').fadeIn();
    } else {
        $('#scrollToTop').fadeOut();
    }
    });

    // Scroll to top when the button is clicked
    $('#scrollToTop').click(function() {
        $('html, body').scrollTop(0);
    });

  // learn from https://stackoverflow.com/questions/70942808/json-is-returning-object-object-and-then-result-instead-of-only-the-result
  $.getJSON("../works.json", function (data) {
    // Function to process and append data by ID
    function processDataByID(jsonArray, containerId, ids = null, useWorksPath = false) {
        // Filter the array based on the provided IDs (if any), otherwise process all
        var itemsToProcess = ids ? jsonArray.filter((item) => ids.includes(item.id)) : jsonArray;

        // Sort the items by ID in descending order
        itemsToProcess.sort((a, b) => b.id - a.id);

        $.each(itemsToProcess, function (_, val) {
            var outputHTML = [];
            var detail = val["detail"];
            var category = val["category"];
            var title = val["title"];
            var id = val["id"]; // Unique ID for dynamic detail page
            var imgCover = val["imgCover"];
            var tags = val["tags"];

            // Handle tags (string or array)
            var tagsHTML = Array.isArray(tags)
                ? tags.map((tag) => `<span class="tag">${tag}</span>`).join(" ")
                : String(tags)
                      .split(" ")
                      .map((tag) => `<span class="tag">${tag}</span>`)
                      .join(" ");

            $.each(detail, function () {
                // Determine URL path based on the container
                var linkPath = useWorksPath ? "works/detail.html?id=" + id : "detail.html?id=" + id;

                outputHTML.push(
                    '<a class="card" title="'+ title +'" href="' +
                        linkPath +
                        '">' +
                        '<div class="card-cover"><img loading="lazy" src="' +
                        imgCover +
                        '" alt=""></div><div><h5 class="card-title mt-2 mb-2">' +
                        title +
                        "</h5><div><div>" +
                        tagsHTML +
                        "</div></div></a>"
                );
            });

            // Append the card to the specified container
            $("<div/>", {
                class: "col-lg-4 mt-4 mb-4 card-wrapper show " + category,
                html: outputHTML.join(""),
            }).appendTo(containerId);
        });
    }

    // Process curated items in #worksCuratedContainer (use works/detail.html)
    processDataByID(data, "#worksCuratedContainer", [22, 27, 29, 24, 37, 38, 39, 40, 42], true);

    // Process all items in #worksContainer (use detail.html)
    processDataByID(data, "#worksContainer", null, false);
});

function displayWorksCount() {
    $.getJSON("../works.json", function (data) {
        // Calculate the number of works
        var worksCount = data.length;

        // Display the count in a specified container or console log
        console.log("Total number of works:", worksCount);

        // Example: Update an element with ID 'worksCountDisplay'
        $("#worksCountDisplay").text(`(${worksCount})`);
    });
}
displayWorksCount();


  // END DOCUMENTS.READY
});
