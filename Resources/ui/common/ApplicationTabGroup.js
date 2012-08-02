function ApplicationTabGroup() {
	//create module instance
	var self = Ti.UI.createTabGroup({
		backgroundColor: '#96c120',
		/*NO CAMBIAN NADA QUE NOTE
		backgroundDisabledColor:'red',
		backgroundFocusedColor:'red',
		backgroundSelectedColor:'red' 
		
		activeTabBackgroundColor:'red',
		activeTabBackgroundDisabledColor:'red',
		activeTabBackgroundFocusedColor: 'red',
		activeTabBackgroundSelectedColor: 'red' 
		
		tabsBackgroundColor:'red',
		tabsBackgroundDisabledColor:'red',
		tabsBackgroundFocusedColor:'red',
		tabsBackgroundSelectedColor:'red' 
		*/
	});			

	var GuideWindows = require('ui/common/GuideWindows');
	var NewsWindows = require('ui/common/NewsWindows');
	var MapWindows = require('ui/common/MapWindows');
	var AboutWindows = require('ui/common/AboutWindows');
	
	//create app tabs
	var win1 = new GuideWindows(L('tabName1'),0),
		win2 = new MapWindows(L('tabName2')),
		win3 = new NewsWindows(L('tabName3')),
		win4 = new AboutWindows(L('tabName4'));
	
	var tab1 = Ti.UI.createTab({
		title: L('tabName1'),
		icon: '/images/tab-guia.png',
		window: win1
		/* NO HACEN NADA
		backgroundColor:'red',
		backgroundDisabledColor:'red',
		backgroundFocusedColor:'red',
		backgroundSelectedColor:'red'
		*/
		
		
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('tabName2'),
		icon: '/images/tab-mapa.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	var tab3 = Ti.UI.createTab({
		title: L('tabName3'),
		icon: '/images/tab-news.png',
		window: win3
	});
	win3.containingTab = tab3;
	
	var tab4 = Ti.UI.createTab({
		title: L('tabName4'),
		icon: '/images/tab-acerca.png',
		window: win4
	});
	win4.containingTab = tab4;
	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	self.addTab(tab4);
	return self;
};

module.exports = ApplicationTabGroup;
