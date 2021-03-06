/* 
IMORTANT: Dont USE character ' - if you need it for text use  \' (slash before ') or html code &rsquo; 
*/


/* --- CONTENT --------------------------------------- 
Leave it blank if you dont need it. You can use HTML code for styling.
If subtitle and description are set, this content is displayed in portrait mode.

i.e.
var vrTitle = 'Lorem ipsum dolor sit amet'; 
var vrSubTitle = 'by Ninoslav Adzibaba'; 
var vrDescription = 'Duis et nunc velit, eu molestie lorem. Morbi vel risus urna... '; 
 */

var vrTitle = '<strong>Ruinas de Quilmes</strong>'; 
var vrSubTitle = ''; 
var vrDescription = 'Son los restos del mayor asentamiento precolombino en el país. Ocupan aproximadamente treinta hectáreas y están ubicadas cerca del cerro Alto del Rey'; 

/* --- START VIEW ------------------------------------ */
var startPan =7; 			/* left is negative, right is positive value */
var startTilt = -10; 		
var startZoom = 0.7; 		/* 0.6 - 1.4 */

/* --- PARTIAL PANORAMA ------------------------------ */
var useLimits = false;
var TopLimit =60; 	 		/* 0 - 90 */
var BottomLimit = -60;		/* 0 - -90 */
var leftLimit = -120; 		/* 0 - 180 */
var rightLimit = 120; 		/* 0 - 180*/

/* --- AUTO ROTATE ----------------------------------
Auto rotate, returns view to horizont and sets zoom to 1 */

var enableAutoButton = true; /* Auto rotate button, if clicked overrides autoRotateOnIdle */
var autoRotateOnStart = true; 
var autoRotateOnIdle = false; 
var autoRotateDelay = 1; /* seconds, works with Rotate on strat or Rotate on idle. */ 
/* -------------------------------------------------- */

	
/* --- BACKGROUND AUDIO ----------------------------- 
Background sound is available only on the iPad, if browser is online. 
Overwrite sound.mp3 in folder "vr_files/sound" 
var enableSound = true; */

var enableSound = false;


/* --- ALTERNATIVE FLASH CONTENT -------------------- 
link to Flash version, leave it blank if you don't need it. eg.: 
var flashPage = 'http://www.yoursite.com/pano_name.html' */
var flashPage = '';


/* --- LOGO ------------------------------------------
Please leave VR5 logo and link or consider donating */

var useLogo = false;
var useOfflineInfo = false; /* works with useLogo = true */
var linkLogo = false;
var linkLogoURL = 'www.vrhabitat.com';
var urlConfirm = 'Open VRhabitat.com?';


/* --- OTHER ------------------------------------- */
var bgdColor = '#FFFFFF'; 					/* Background color of the page */
var informWhenOfflineAvailable = false;		/* Notification when Safari if finished caching the files for offline use */
var showNotifications = true;				/* Notifications about pano limits, zoom limits etc. */

/* DO NOT change next lines */
var consoleLog = false;			