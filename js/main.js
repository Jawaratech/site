const blogAPIURL = 'https://useful-friendship-b52c022f70.strapiapp.com/api/';
const token = '6d5afb2c9d06296a14a27e0b40ef7a899a11e990700389fba32be5f72ddd0f0a8061721bec3b6ec8b6768fff6a8bb850a9eb7fd7d0ade25ff1d53d934b936c4d48a8f52e1aaca418d76c4241805cc6869951fe8085fb8ba9e652f1382dd3e317093f8e1c71ca726bc8bdcf5de7121b44f4923668e4ac4e58e5025e4cdc5db2dc'

$(document).ready(function () {
// Scrollspy custom
//   $(window).bind("scroll", function () {
//       var currentTop = $(window).scrollTop();
//       var elems = $(".scrollspy-content");
//       elems.each(function (index) {
//           var elemTop = $(this).offset().top;
//           var elemBottom = elemTop + $(this).height();
//           if (currentTop >= elemTop && currentTop <= elemBottom) {
//               var id = $(this).attr("id");
//               var navElem = $('a[href="#' + id + '"]');
//               navElem.parent().addClass("is-active").siblings().removeClass("is-active");
//           }
//       });
//   });

//   $(window).scroll(function() {
    // if ($(this).scrollTop() > 100) {
    //     $('#scrollToTop').fadeIn();
    // } else {
    //     $('#scrollToTop').fadeOut();
    // }
    // });

    // // Scroll to top when the button is clicked
    // $('#scrollToTop').click(function() {
    //     $('html, body').scrollTop(0);
    // });

  // learn from https://stackoverflow.com/questions/70942808/json-is-returning-object-object-and-then-result-instead-of-only-the-result
//   $.getJSON("../works.json", function (data) {
//     // Function to process and append data by ID
//     function processDataByID(jsonArray, containerId, ids = null, useWorksPath = false) {
//         // Filter the array based on the provided IDs (if any), otherwise process all
//         var itemsToProcess = ids ? jsonArray.filter((item) => ids.includes(item.id)) : jsonArray;

//         // Sort the items by ID in descending order
//         itemsToProcess.sort((a, b) => b.id - a.id);

//         $.each(itemsToProcess, function (_, val) {
//             var outputHTML = [];
//             var detail = val["detail"];
//             var category = val["category"];
//             var title = val["title"];
//             var id = val["id"]; // Unique ID for dynamic detail page
//             var imgCover = val["imgCover"];
//             var tags = val["tags"];

//             // Handle tags (string or array)
//             var tagsHTML = Array.isArray(tags)
//                 ? tags.map((tag) => `<span class="tag">${tag}</span>`).join(" ")
//                 : String(tags)
//                       .split(" ")
//                       .map((tag) => `<span class="tag">${tag}</span>`)
//                       .join(" ");

//             $.each(detail, function () {
//                 // Determine URL path based on the container
//                 var linkPath = useWorksPath ? "works/detail.html?id=" + id : "detail.html?id=" + id;

//                 outputHTML.push(
//                     '<a class="card" title="'+ title +'" href="' +
//                         linkPath +
//                         '">' +
//                         '<div class="card-cover"><img loading="lazy" src="' +
//                         imgCover +
//                         '" alt=""></div><div><h5 class="card-title mt-2 mb-2">' +
//                         title +
//                         "</h5><div><div>" +
//                         tagsHTML +
//                         "</div></div></a>"
//                 );
//             });

//             // Append the card to the specified container
//             $("<div/>", {
//                 class: "col-lg-4 mt-4 mb-4 card-wrapper show " + category,
//                 html: outputHTML.join(""),
//             }).appendTo(containerId);
//         });
//     }

//     // Process curated items in #worksCuratedContainer (use works/detail.html)
//     processDataByID(data, "#worksCuratedContainer", [22, 27, 29, 24, 37, 38, 39, 40, 42], true);

//     // Process all items in #worksContainer (use detail.html)
//     processDataByID(data, "#worksContainer", null, false);
// });

// function displayWorksCount() {
//     $.getJSON("../works.json", function (data) {
//         // Calculate the number of works
//         var worksCount = data.length;

//         // Display the count in a specified container or console log
//         console.log("Total number of works:", worksCount);

//         // Example: Update an element with ID 'worksCountDisplay'
//         $("#worksCountDisplay").text(`(${worksCount})`);
//     });
// }
// displayWorksCount();

	const articleListContainer = document.getElementById('article-list');
	const articleListCategory = document.getElementById('article-category');
	const articleDetail = document.getElementById('article-detail');

	if (articleListContainer) {
		var getFilter = document.location.search;
		getArticleList(getFilter).then(articles => {
			articleListContainer.innerHTML = '';
			articles.data.forEach(article => {
				const articleElement = document.createElement('div');
				articleElement.classList.add('single-list');
				articleElement.innerHTML = `
					<div class="post-thumbnils">
						<img src="${article.cover.formats.medium.url}" alt="${article.title}" class="img-fluid object-fit-cover img-thumbs">
					</div>
					<div class="post-details">
						<div class="detail-inner">
							<h2 class="post-title">
								<a href="detail.html?title=${article.title.replace(/ /g, '-')}&id=${article.documentId}">${article.title}</a>
							</h2>
							<ul class="custom-flex post-meta">
								<li>
									<a href="#">
										<i class="lni lni-user"></i> by ${article.author.name}
									</a>
								</li>
								<li>
									<a href="#">
										<i class="lni lni-calendar"></i> ${new Date(article.publishedAt).toLocaleDateString()}
									</a>
								</li>
							</ul>
							<p class="text">${article.description}</p>
							<div class="button">
								<a class="btn mouse-dir white-bg" href="detail.html?title=${article.title.replace(/ /g, '-')}&id=${article.documentId}">Read More 
									<span class="dir-part"></span>
								</a>
							</div>
						</div>
					</div>
				`;
				articleListContainer.appendChild(articleElement);
			});
		});
	}

	if (articleDetail) {
		// get id from url
		const urlParams = new URLSearchParams(window.location.search);
		const articleId = urlParams.get('id');
		getArticleDetail(articleId).then(data => {
			var converter = new showdown.Converter();
			const article = data.data;
			articleDetail.innerHTML = `
				<div class="hero-text">
					<div class="post-thumbnils">
                        <img src="${article.cover.formats.large.url}" alt="${article.title}" class="img-fluid object-fit-cover img-thumbs">
                    </div>
					<div class="post-details">
						<div class="detail-inner">
							<h2 class="post-title"><a href=#>${article.title}>${article.title}</a></h2>
							<ul class="custom-flex post-meta">
								<li>
									<a href="#">
										<i class="lni lni-user"></i> by ${article.author.name}
									</a>
								</li>
								<li>
									<a href="#">
										<i class="lni lni-calendar"></i> ${new Date(article.publishedAt).toLocaleDateString()}
									</a>
								</li>
							</ul>
							<div class="post-content">
								${converter.makeHtml(article.blocks[0].body)}
							</div>
						</div>
					</div>
				</div>
			`;
		});
	}

	if (articleListCategory) {
		getCategoryList().then(categories => {
			articleListCategory.innerHTML = '';
			categories.data.forEach(category => {
				const catList = document.createElement('li');
				catList.classList.add('single')
				catList.innerHTML = `
					<a href="/article?category=${category.name}" class="text-capitalize">
						${category.name}
						<span>
							${category.articles.length}
						</span>
					</a>
				`;
				articleListCategory.appendChild(catList);
			})
		})
	}

	//===== Prealoder
	window.onload = function () {
		window.setTimeout(fadeout, 200);
	}

	function fadeout() {
		document.querySelector('.preloader').style.opacity = '0';
		document.querySelector('.preloader').style.display = 'none';
	}


	/*=====================================
	Sticky
	======================================= */
	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;

		if (window.pageYOffset > sticky) {
			header_navbar.classList.add("sticky");
		} else {
			header_navbar.classList.remove("sticky");
		}
	};

	//===== navbar-toggler
	let navbarToggler = document.querySelector(".navbar-toggler");
	navbarToggler.addEventListener('click', function () {
		navbarToggler.classList.toggle("active");
	})


	//======== tiny slider
    tns({
		container: '.client-logo-carousel',
		autoplay: true,
		autoplayButtonOutput: false,
		mouseDrag: true,
		gutter: 15,
		nav: false,
		controls: false,
		responsive: {
			0: {
				items: 1,
			},
			540: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			},
			1170: {
				items: 5,
			}
		}
	});
	
	//WOW Scroll Spy
	var wow = new WOW({
		//disabled for mobile
		mobile: false
	});
	wow.init();

	 //====== counter up 
     var cu = new counterUp({
        start: 0,
        duration: 2000,
        intvalues: true,
        interval: 100,
        append: " ",
    });
    cu.start();
    
	//======= portfolio-btn active
	var elements = document.getElementsByClassName("portfolio-btn");
	for (var i = 0; i < elements.length; i++) {
		elements[i].onclick = function () {

			// remove class from sibling

			var el = elements[0];
			while (el) {
				if (el.tagName === "BUTTON") {
					//remove class
					el.classList.remove("active");

				}
				// pass to the new sibling
				el = el.nextSibling;
			}

			this.classList.add("active");
		};
	}

    var slider = new tns({
        container: '.home-slider',
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        gutter: 0,
        items: 1,
        nav: true,
        controls: false,
        controlsText: [
            '<i class="lni lni-arrow-left prev"></i>',
            '<i class="lni lni-arrow-right next"></i>'
        ],
        responsive: {
            1200: {
                items: 1,
            },
            992: {
                items: 1,
            },
            0: {
                items: 1,
            }

        }
    });

	// ====== scroll top js
	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;
		if (window.pageYOffset > sticky) {
			header_navbar.classList.add("sticky");
		} else {
			header_navbar.classList.remove("sticky");
		}
		var backToTo = document.querySelector(".scroll-top");
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			backToTo.style.display = "block";
		} else {
			backToTo.style.display = "none";
		}
	};

	Math.easeInOutQuad = function (t, b, c, d) {

		t /= d/2;
		if (t < 1) return c/2*t*t + b;
		t--;
		return -c/2 * (t*(t-2) - 1) + b;
	};

	document.querySelector('.scroll-top').onclick = function () {
		scrollTo(document.documentElement); 
	}


});

function getArticleList (filter) {
	return fetch(`${blogAPIURL}articles?populate[1]=cover&populate[2]=author`, {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then(data => {
		return data;
	})
	.catch(error => {
		console.error('Error fetching articles:', error);
	});
}

// get all categories first and loop for all the categories count make it async
function getCategoryList () {
	return fetch(`${blogAPIURL}categories?populate=*`, {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then(data => {
		return data;
	})
	.catch(error => {
		console.error('Error fetching categories:', error);
	});
}

function getArticleDetail (id) {
	return fetch(`${blogAPIURL}articles/${id}?populate=*`, {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	})
	.then(response => response.json())
	.then(data => {
		return data;
	})
	.catch(error => {
		console.error('Error fetching article detail:', error);
	});
}

(function () {

	"use strict";

	
})();
