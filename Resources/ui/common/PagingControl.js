// I was unhappy about there was close to no control over the "pageControl" 
// in scrollableViews, so I hacked my own
// -----

// Configuration
var pageColor = "white",
	pageBorderRadius=7,
	pageWidth=pageBorderRadius*2,
	pageHeigth=pageWidth,
	pageLeft=20;
PagingControl = function(scrollableView){
	// Keep a global reference of the available pages
	var numberOfPages = scrollableView.getViews().length;
	
	var container = Titanium.UI.createView({
		height: pageHeigth,
		bottom : 14,
		width:(numberOfPages - 1) * pageLeft + pageWidth,
	});

	var pages = []; // without this, the current page won't work on future references of the module

	// Go through each of the current pages available in the scrollableView
	for (var i = 0; i < numberOfPages; i++) {
		var page = Titanium.UI.createView({
			borderRadius: pageBorderRadius,
			width: pageWidth,
			height: pageHeigth,
			left: pageLeft * i,
			backgroundColor: pageColor,
			opacity: 0.5
		});
		// Store a reference to this view
		pages.push(page);
		// Add it to the container
		container.add(page);
	}

	// Mark the initial selected page
	pages[scrollableView.getCurrentPage()].setOpacity(1);

	// Callbacks
	onScroll = function(event){
		// Go through each and reset it's opacity
		for (var i = 0; i < numberOfPages; i++) {
			pages[i].setOpacity(0.5);
		}
		// Bump the opacity of the new current page
		pages[event.currentPage].setOpacity(1);

	};

	// Attach the scroll event to this scrollableView, so we know when to update things
	scrollableView.addEventListener("scroll", onScroll);

	return container;
};

module.exports = PagingControl;