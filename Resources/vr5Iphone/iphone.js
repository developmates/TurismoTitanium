/*

VR5 pano viewer 1.0.0
Copyright (c) 2009-2010 Ninoslav Adzibaba http://www.vrhabitat.com/


Parts of code for setting panorama and rotating by touch are based on 
iphone script by wayne a. lee http://www.bunnyhero.org/ and (c) 2008-2010 wayne a. lee (The MIT License)

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/
var _1 = "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";
var _2 = "iVBORw0KGgoAAAANSUhEUgAAAFAAAABBCAYAAABGmyOTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAEeRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDQuMi4yLWMwNjMgNTMuMzUyNjI0LCAyMDA4LzA3LzMwLTE4OjEyOjE4ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3MiCiAgIHhtcDpDcmVhdGVEYXRlPSIyMDEwLTA1LTE5VDE1OjI0OjQ0KzAyOjAwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDEwLTA1LTE5VDE1OjMwOjQ3KzAyOjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAxMC0wNS0xOVQxNTozMDo0NyswMjowMCIKICAgZGM6Zm9ybWF0PSJhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVFN0U0NjUxOUQ2MkRGMTE4QzNCQzQ4RjAwQTI3QTNBIgogICB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVEN0U0NjUxOUQ2MkRGMTE4QzNCQzQ4RjAwQTI3QTNBIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6RUQ3RTQ2NTE5RDYyREYxMThDM0JDNDhGMDBBMjdBM0EiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOk5hdGl2ZURpZ2VzdD0iMjU2LDI1NywyNTgsMjU5LDI2MiwyNzQsMjc3LDI4NCw1MzAsNTMxLDI4MiwyODMsMjk2LDMwMSwzMTgsMzE5LDUyOSw1MzIsMzA2LDI3MCwyNzEsMjcyLDMwNSwzMTUsMzM0MzI7OTY4NTc1NDFDNzgxMzBFQUE5NTgwRUIxRDNFRUVCNjkiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxMjgwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAyNCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICBleGlmOk5hdGl2ZURpZ2VzdD0iMzY4NjQsNDA5NjAsNDA5NjEsMzcxMjEsMzcxMjIsNDA5NjIsNDA5NjMsMzc1MTAsNDA5NjQsMzY4NjcsMzY4NjgsMzM0MzQsMzM0MzcsMzQ4NTAsMzQ4NTIsMzQ4NTUsMzQ4NTYsMzczNzcsMzczNzgsMzczNzksMzczODAsMzczODEsMzczODIsMzczODMsMzczODQsMzczODUsMzczODYsMzczOTYsNDE0ODMsNDE0ODQsNDE0ODYsNDE0ODcsNDE0ODgsNDE0OTIsNDE0OTMsNDE0OTUsNDE3MjgsNDE3MjksNDE3MzAsNDE5ODUsNDE5ODYsNDE5ODcsNDE5ODgsNDE5ODksNDE5OTAsNDE5OTEsNDE5OTIsNDE5OTMsNDE5OTQsNDE5OTUsNDE5OTYsNDIwMTYsMCwyLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDIwLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDMwO0E0NjM4RjQ3Q0JBN0VEOTE0M0JCREQ0QTY4RTk3QUEzIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkVEN0U0NjUxOUQ2MkRGMTE4QzNCQzQ4RjAwQTI3QTNBIgogICAgICBzdEV2dDp3aGVuPSIyMDEwLTA1LTE5VDE1OjI0OjQ0KzAyOjAwIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3MiLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6RUU3RTQ2NTE5RDYyREYxMThDM0JDNDhGMDBBMjdBM0EiCiAgICAgIHN0RXZ0OndoZW49IjIwMTAtMDUtMTlUMTU6MzA6NDcrMDI6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzQgV2luZG93cyIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3Jp";
var rotY = 0;
var rotX = 0;
var activeTouchId = 0;
var lastX;
var lastY;
var scalesum = 220;
var escalelast = 1;
var firstTouch = false;
var firstRotate = false;
var firstSlide = true;
var gorotate;
var goLeft = true;
var limit1y;
var limit2y;
var limit3y;
var startx;
var starty;
var doLog;
var limit1x;
var limit2x;
var limit3x;
var hasContent;
var hasDescription;
var visDescription;
var infoTx;
var infoTy;
var infoT;
var verticalArea;
var toolBarWidth;
var autoOn;
var appMode;
var esconderDescripcion;
var autoDeley = autoRotateDelay * 1000;
var rotateTimerId = 0;
var timer_is_on = false;
enableSound = false;
window.onload = function initialLoad() {
    document.bgColor = bgdColor;
    if (vrTitle == null) {
        vrTitle = "";
    }
    if (vrSubTitle == null) {
        vrSubTitle = "";
    }
    if (vrDescription == null) {
        vrDescription = "";
    }
    if (startZoom == null) {
        startZoom = 0;
    }
    if (startTilt == null) {
        startTilt = 0;
    }
    if (startPan == null) {
        startPan = 0;
    }
    if (startPan == null) {
        startPan = 0;
    }
    checkAppMode();
    updateOrientation();
    if (!appMode) {
        document.body.setAttribute("class", "appMode");
    } else {
        document.body.setAttribute("class", "");
    }
    window.scrollTo(0, 1);
    document.title = vrTitle;
    setView(startZoom, startTilt, -startPan);
    if (vrSubTitle.length > 0 || vrDescription.length > 0) {
        setContent(vrTitle, vrSubTitle, vrDescription);
        document.getElementById("info").removeAttribute("class");
        hasContent = true;
    } else {
        hasContent = false;
    }
    if (vrDescription.length > 0) {
        hasDescription = true;
        visDescription = true;
    } else {
        hasDescription = false;
        visDescription = false;
    }
    if (navigator.onLine) {
        addStats();
    } else {
        enableSound = false;
    }
    if (enableAutoButton && enableSound) {
        toolBarWidth = 120;
    } else if (enableAutoButton || enableSound) {
        toolBarWidth = 65;
    } else {
        toolBarWidth = 0;
    }
    if (!enableAutoButton) {
        var hideauto = document.getElementById("auto_holder");
        hideauto.parentNode.removeChild(hideauto);
        autoOn = true;
    } else {
        autoOn = false;
    }
    if (!enableSound) {
        var hidesnd = document.getElementById("sound_holder");
        hidesnd.parentNode.removeChild(hidesnd);
    }
    if (autoRotateOnStart) {
        rotateTimerId = setTimeout("autoRot()", autoDeley);
    }
    document.getElementById("controls_holder").removeAttribute("class");
    showVR();
    setTouchArea();
    updateIcon();
    //esconde la descripcion despues de 30 segundos, 1000 = 1 segundo
    esconderDescripcion = setInterval("esconderInfo()", 0);
};

function updateOrientation() {
    var contentType = "show_";
    contentType += getOrientation();
    document.getElementById("page_wrapper").setAttribute("class", contentType);
    window.scrollTo(0, 1);
    setTouchArea();
    updateIcon();
    clearOfllineInfo();
    postaviPoruku();
}
function getOrientation() {
    if (appMode) {
        if (getWindowWidth() < getWindowHeight()) {
            return "vert";
        } else {
            return "hor";
        }
    } else {
        switch (window.orientation) {
        case 0:
            return "vert";
            break;
        case -90:
            return "hor";
            break;
        case 90:
            return "hor";
            break;
        case 180:
            return "vert";
            break;
        default:
            ;
        }
    }
}
function showVR() {
    var ctrlarea = document.getElementById("toucharea");
   /* if (!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i))) {
        ctrlarea.parentNode.removeChild(ctrlarea);
        var infoarea = document.getElementById("info");
        infoarea.parentNode.removeChild(infoarea);
        var controlsarea = document.getElementById("controls_holder");
        controlsarea.parentNode.removeChild(controlsarea);
        return;
    }*/
    ctrlarea.addEventListener("touchstart", startTouch, false);
    ctrlarea.addEventListener("touchmove", moveTouch, false);
    ctrlarea.addEventListener("touchend", endTouch, false);
    ctrlarea.addEventListener("touchcancel", cancelTouch, false);
    ctrlarea.addEventListener("gesturestart", onGestureStart, false);
    ctrlarea.addEventListener("gesturechange", onGestureChange, true);
    ctrlarea.addEventListener("gestureend", onGestureEnd, true);
    document.addEventListener("touchstart", startTouch, false);
    document.addEventListener("touchmove", moveTouch, false);
    document.addEventListener("touchend", endTouch, false);
    document.addEventListener("touchcancel", cancelTouch, false);
    document.addEventListener("gesturestart", onGestureStart, false);
    document.addEventListener("gesturechange", onGestureChange, true);
    document.addEventListener("gestureend", onGestureEnd, true);
    if (appMode) {
        window.addEventListener("resize", updateOrientation, false);
        document.addEventListener("resize", updateOrientation, false);
    }
    var loadingE = document.getElementById("loading");
    loadingE.parentNode.removeChild(loadingE);
    document.getElementById("cubes").setAttribute("class", "visible");
}
function setView(startZoom, startPan, startTilt) {
    scalesum = startZoom * 220;
    rotateByTouch(0, 0, 5 * startTilt, 5 * startPan);
    var esa = document.getElementById("cubeholder");
    esa.style.webkitPerspective = scalesum;
}
function setContent(vrTitle, vrSubTitle, vrDescription) {
    document.getElementById("title").innerHTML = vrTitle;
    document.getElementById("subtitle").innerHTML = vrSubTitle;
    if (vrDescription.length > 0) {
        document.getElementById("description").innerHTML = vrDescription;
    } else {
        var descTxt = document.getElementById("description");
        descTxt.parentNode.removeChild(descTxt);
    }
    var infoElement = document.getElementById("info");
    var infoHeight = infoElement.offsetHeight;
    var windowHeight = getWindowHeight();
    if (appMode) {
        verticalArea = 460 - infoHeight + 5;
        infoElement.style.top = verticalArea + "px";
    } else {
        if (getOrientation() == "hor") {
            verticalArea = 460 - (300 - windowHeight) - infoHeight + 5;
            infoElement.style.top = verticalArea + "px";
        } else {
            verticalArea = windowHeight - infoHeight + 5;
            infoElement.style.top = verticalArea + "px";
        }
    }
    
}
function getWindowHeight() {
    var windowHeight = 0;
    if (typeof window.innerHeight == "number") {
        windowHeight = window.innerHeight;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) {
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body && document.body.clientHeight) {
                windowHeight = document.body.clientHeight;
            }
        }
    }
    return windowHeight;
}
function getWindowWidth() {
    var windowWidth = 0;
    if (typeof window.innerWidth == "number") {
        windowWidth = window.innerWidth;
    } else {
        if (document.documentElement && document.documentElement.clientWidth) {
            windowWidth = document.documentElement.clientWidth;
        } else {
            if (document.body && document.body.clientWidth) {
                windowWidth = document.body.clientWidth;
            }
        }
    }
    return windowWidth;
}
function setTouchArea() {
    limit1y = 65;
    if (getOrientation() == "hor") {
        limit1x = 480 - toolBarWidth;
    } else {
        limit1x = 320 - toolBarWidth;
    }
    if (enableAutoButton && enableSound) {
        limit1xS = limit1x + 55;
        limit1xM = limit1x;
    } else if (enableAutoButton && !enableSound) {
        limit1xS = limit1x + 55;
        limit1xM = limit1x;
    } else if (!enableAutoButton && enableSound) {
        limit1xS = limit1x;
        limit1xM = limit1x + 55;
    } else {
        limit1xS = limit1x;
        limit1xM = limit1x;
    }
    limit2x = 0;
    if (getOrientation() == "hor") {
        var windowHeight = getWindowHeight();
        if (appMode) {
            limit2y = 300;
        } else {
            limit2y = windowHeight;
        }
        limit3x = 396;
    } else {
        if (hasContent == true) {
            limit2y = verticalArea + 20;
        } else {
            limit2y = getWindowHeight() - 10;
        }
        limit3x = 236;
    }
    limit3y = limit2y - 58;
    if (hasDescription && !visDescription && getOrientation() == "vert") {
        var slideTop = getWindowHeight() - 80;
        limit2y = slideTop + 20;
        limit3y = limit2y - 58;
    }
    return;
}
function checkTouchArea(TouchX, TouchY) {
    infoT = false;
    if (enableSound && TouchX > limit1xS && TouchY < limit1y) {
        playPause();
        return false;
    } else if (enableAutoButton && TouchX > limit1xM && TouchX < limit1xS && TouchY < limit1y) {
        if (!firstRotate) {
            firstRotate = true;
        }
        toggleAuto();
        return false;
    } else if (TouchX > limit3x && TouchY > limit3y && TouchY < limit2y && useLogo) {
        if (enableAutoButton) {
            if (!autoOn) {
                toggleAutoSet();
                autoOn = true;
            }
        }
        if (getOrientation() == "hor" || !hasDescription || hasDescription && !visDescription) {
            openIVRpage();
        }
        return false;
    } else if (TouchY > limit2y) {
        infoTx = TouchX;
        infoTy = TouchY;
        infoT = true;
        return false;
    } else {
        return true;
    }
}
function startTouch(e) {
    if (!firstTouch) {
        firstTouch = true;
        if (enableAutoButton) {
            document.getElementById("auto_btn").removeAttribute("class");
            document.getElementById("auto_btn").setAttribute("class", "on");
        }
        if (enableSound) {
            document.getElementById("sound_btn").removeAttribute("class");
            document.getElementById("sound_btn").setAttribute("class", "on");
        }
    }
    startx = e.targetTouches[0].clientX;
    starty = e.targetTouches[0].clientY;
    clearOfllineInfo();
    if (timer_is_on) {
        timer_is_on = false;
        clearTimeout(rotateTimerId);
        clearInterval(gorotate);
    }
    if (autoRotateOnIdle) {
        clearTimeout(rotateTimerId);
        clearInterval(gorotate);
        timer_is_on = true;
        rotateTimerId = setTimeout("autoRot()", autoDeley);
    }
    if (checkTouchArea(startx, starty)) {
        e.preventDefault();
        activeTouchId = e.changedTouches[0].identifier;
        lastX = e.changedTouches[0].pageX;
        lastY = e.changedTouches[0].pageY;
        if (enableAutoButton) {
            if (!autoOn) {
                toggleAutoSet();
                autoOn = true;
            }
        }
    } else {
        e.preventDefault();
        return;
    }
}
function moveTouch(e) {
    e.preventDefault();
    if (activeTouchId) {
        for (var i = 0; i < e.changedTouches.length; i++) {
            if (e.changedTouches[i].identifier == activeTouchId) {
                var t = e.changedTouches[i];
                if (t.pageY < limit2y - 10) {
                    rotateByTouch(lastX, lastY, t.pageX, t.pageY);
                    lastX = t.pageX;
                    lastY = t.pageY;
                }
                break;
            }
        }
    }
}

function esconderInfo(){
    var infoElement = document.getElementById("info");
    var slideTop = getWindowHeight() - 61;
    infoElement.style.top = slideTop + "px";
    limit2y = slideTop + 20;
    visDescription = false;
    limit3y = limit2y - 58;
    firstSlide = false;
    setTimeout("updateIcon()", 300);
    clearInterval(esconderDescripcion);
}

function endTouch(e) {
    e.preventDefault();
    var lastInfoX = e.changedTouches[0].pageX;
    var lastInfoY = e.changedTouches[0].pageY;
    var infoElement = document.getElementById("info");
    if (infoT && hasDescription) {
        var razX = Math.abs(infoTx - lastInfoX);
        var razY = infoTy - lastInfoY;
        if (razX < 50 && razY < 0 && visDescription) {
            if (appMode) {
                var slideTop = 380;
            } else {
                //ALTURA SLIDE DESCRIPTION AL ESCONDERSE:x defecto -80
                var slideTop = getWindowHeight() - 61;
            }
            infoElement.style.top = slideTop + "px";
            limit2y = slideTop + 20;
            visDescription = false;
            limit3y = limit2y - 58;
            firstSlide = false;
            setTimeout("updateIcon()", 300);
//JLRM            var instructionElement = document.getElementById("instruction");
//JLRM            instructionElement.innerHTML = "Deslice hacia <strong>ARRIBA</strong>";
        } else if (razX < 50 && razY > 0 && !visDescription) {
            infoElement.style.top = verticalArea + "px";
            limit2y = verticalArea + 20;
            visDescription = true;
            limit3y = limit2y - 58;
            firstSlide = false;
            updateIcon();
//JLRM            var instructionElement = document.getElementById("instruction");
//JLRM            instructionElement.innerHTML = "Deslice hacia <strong>ABAJO</strong>";
        } else if (visDescription && firstSlide) {
            prikaziPoruku("Deslice hacia ABAJO para ocultar el texto");
//JLRM            var instructionElement = document.getElementById("instruction");
//JLRM            instructionElement.innerHTML = "";
            firstSlide = true;
        } else if (!visDescription && firstSlide) {
            prikaziPoruku("Deslice hacia ARRIBA para mostrar el texto");
//JLRM            var instructionElement = document.getElementById("instruction");
//JLRM            instructionElement.innerHTML = "";
            firstSlide = true;
        }
    }
    if (e.targetTouches.length > 0) {
        return false;
    }
}
function cancelTouch(e) {
    activeTouchId = 0;
}
function rotateByTouch(lastX, lastY, curX, curY) {
    var e = document.getElementById("cubes");
    if (!e) {
        return;
    }
    rotY -= (curX - lastX) * 0.2;
    rotX += (curY - lastY) * 0.2;
    if (useLimits) {
        if (rotY <= leftLimit || rotY >= rightLimit || rotX <= BottomLimit || rotX >= TopLimit) {
            prikaziPoruku("PANO Limit");
        }
        rotY = Math.max(leftLimit, Math.min(rightLimit, rotY));
        rotX = Math.max(BottomLimit, Math.min(TopLimit, rotX));
    }
    rotX = Math.max(-90, Math.min(90, rotX));
    
    e.style.webkitTransform = "translateZ(" + scalesum + "px) rotateX(" + rotX + "deg) rotateY(" + rotY + "deg)";
}
function onGestureStart(e) {
    if (timer_is_on) {
        timer_is_on = false;
        clearTimeout(rotateTimerId);
        clearInterval(gorotate);
    }
    if (autoRotateOnIdle) {
        clearTimeout(rotateTimerId);
        clearInterval(gorotate);
        timer_is_on = true;
        rotateTimerId = setTimeout("autoRot()", autoDeley);
    }
    if (checkTouchArea(lastX, lastY)) {
        e.preventDefault();
        if (enableAutoButton) {
            if (!autoOn) {
                toggleAutoSet();
                autoOn = true;
            }
        }
    } else {
        e.preventDefault();
        return;
    }
}
function onGestureChange(e) {
    e.preventDefault();
    var esa = document.getElementById("cubeholder");
    if (scalesum > 149 && scalesum < 301) {
        scalesum = (1 - (1 - e.scale) / 20) * scalesum;
        if (scalesum < 150 || scalesum > 300) {
            prikaziPoruku("Limite de ZOOM");
        }
        scalesum = Math.round(Math.max(150, Math.min(300, scalesum)));
        esa.style.webkitPerspective = scalesum;
    }
}
function onGestureEnd(e) {
    escalelast = e.scale;
    e.preventDefault();
}
function stubOut(e) {
    e.preventDefault();
}
function playPause() {
    var myAudio = document.getElementsByTagName("audio")[0];
    var playBtn = document.getElementById("sound_btn");
    if (myAudio.paused || myAudio.stopped) {
        playBtn.removeAttribute("class");
        playBtn.setAttribute("class", "off");
    } else {
        playBtn.removeAttribute("class");
        playBtn.setAttribute("class", "on");
    }
    doSound();
}
function doSound() {
    var myAudio = document.getElementsByTagName("audio")[0];
    if (myAudio.paused || myAudio.stopped) {
        myAudio.play();
        prikaziPoruku("Sonido ENCENDIDO");
    } else {
        myAudio.pause();
        prikaziPoruku("Sonido PAUSADO");
    }
}
function toggleAuto() {
    autoRotateOnIdle = false;
    if (autoOn) {
        clearTimeout(rotateTimerId);
        clearInterval(gorotate);
        autoRot();
    } else {
        clearTimeout(rotateTimerId);
        clearInterval(gorotate);
        toggleAutoSet();
        autoOn = true;
    }
}
function toggleAutoSet() {
    var autoBtn = document.getElementById("auto_btn");
    if (firstTouch) {
        if (autoOn) {
            if (firstTouch) {
                prikaziPoruku("Autorotacion ENCENDIDA");
            }
            autoBtn.removeAttribute("class");
            autoBtn.setAttribute("class", "off");
        } else if (autoBtn != null) {
            if (firstTouch) {
                if (!firstRotate) {
                    prikaziPoruku("Autorotacion PAUSADA");
                } else {
                    prikaziPoruku("Autorotacion APAGADA");
                }
            }
            autoBtn.removeAttribute("class");
            autoBtn.setAttribute("class", "on");
        }
    }
    return;
}
function openIVRpage() {
    if (navigator.onLine && !appMode && linkLogo) {
        var r = confirm(urlConfirm);
        if (r == true) {
            window.location = "http://" + linkLogoURL + "/";
        }
    } else if (useOfflineInfo) {
        showOfllineInfo();
    }
}
function checkAppMode() {
    if (window.navigator.standalone) {
        appMode = true;
    } else {
        appMode = false;
    }
    return;
}
function clearOfllineInfo() {
    document.getElementById("aaa").innerHTML = "";
}
function showOfllineInfo() {
    var nowWidth = getWindowWidth();
    var nowHeight = getWindowHeight();
    var winwidth = nowWidth + 2;
    var winheight = nowHeight + 2;
    var imgX = Math.round(nowWidth / 2) - 104;
    var imgY = Math.round(nowHeight / 2) - 120;
    document.getElementById("aaa").innerHTML = "<div style='top:0px;left:0px;width:" + winwidth + "px;height:" + winheight + "px;background-color: rgba(0,0,0,0.7);'><img style='top:" + imgY + "px;left:" + imgX + "px;'  src='offline.png'></div>";
}
function prikaziIcon(topPos, leftPos) {
    return "<img style='top:" + topPos + "px;left:" + leftPos + "px;'  src='logo-iphone.png'>";
}
function updateIcon() {
    if (useLogo) {
        if (getOrientation() == "hor") {
            var leftPos = limit3x + 13;
            var topPos = limit3y + 8;
            document.getElementById("bbb").innerHTML = prikaziIcon(topPos, leftPos);
        } else if (!hasDescription || hasDescription && !visDescription) {
            var leftPos = limit3x + 12;
            var topPos = limit3y + 15;
            document.getElementById("bbb").innerHTML = prikaziIcon(topPos, leftPos);
        } else {
            document.getElementById("bbb").innerHTML = "";
        }
    }
}
function addStats() {
    var currentTime = new Date;
    var month = currentTime.getMonth() + 1;
    var date = currentTime.getDate();
    var year = currentTime.getFullYear();
    var minutes = currentTime.getMinutes();
    var hours = currentTime.getHours();
    month = month + "";
    date = date + "";
    minutes = minutes + "";
    hours = hours + "";
    if (month.length == 1) {
        month = "0" + month;
    }
    if (date.length == 1) {
        date = "0" + date;
    }
    if (minutes.length == 1) {
        minutes = "0" + minutes;
    }
    if (hours.length == 1) {
        hours = "0" + hours;
    }
    var javi = "vr5";
    var hostUrl = window.location.host + window.location.pathname;
    var statUrl = unescape("%68%74%74%70%3A%2F%2F%77%77%77%2E%76%72%68%61%62%69%74%61%74%2E%63%6F%6D%2F%73%74%61%74%73%2E%70%68%70%3F%77%73%3D") + encodeURIComponent(hostUrl) + "&d=" + month + "-" + date + "-" + year + "&t=" + hours + "-" + minutes + "&s=" + javi + "&dev=1";
    var el = document.createElement("iframe");
    el.setAttribute("id", "statifrm");
    document.getElementById("ccc").appendChild(el);
    el.style.visibility = "hidden";
    el.setAttribute("src", statUrl);
    return;
}
function autoRot() {
    timer_is_on = true;
    clearInterval(gorotate);
    if (enableAutoButton) {
        toggleAutoSet();
        autoOn = false;
    }
    //VELOCIDAD DE ROTACION: x defecto era 10!!!
    gorotate = setInterval("playRot()", 0);
    return;
}
function playRot() {
    if (timer_is_on) {
        var k = document.getElementById("cubes");
        scalesum = Math.round(scalesum * 100) / 100;
        rotX = Math.round(rotX * 100) / 100;
        rotY = Math.round(rotY * 100) / 100;
        if (useLimits) {
            if (rotY <= leftLimit + 2) {
                goLeft = false;
            } else if (rotY >= rightLimit - 2) {
                goLeft = true;
            }
        }
        //VELOCIDAD DE ROTACION
        if (!goLeft) {
            rotY += 0.2;//0.05;
        } else {
            rotY -= 0.2;//0.05;
        }
        if (rotX > 0.1) {
            rotX -= 0.1;
        } else if (rotX < -0.1) {
            rotX += 0.1;
        } else {
            rotX = 0;
        }
        if (scalesum > 221) {
            scalesum -= 1;
        } else if (scalesum < 219) {
            scalesum += 1;
        } else {
            scalesum = 220;
        }
        
        k.style.webkitTransform = "translateZ(" + scalesum + "px) rotateX(" + rotX + "deg) rotateY(" + rotY + "deg)";
        var esa = document.getElementById("cubeholder");
        esa.style.webkitPerspective = scalesum;
    } else {
        return;
    }
}
function prikaziPoruku(Tekst) {
    if (showNotifications) {
        var esa = document.getElementById("ddd");
        esa.innerHTML = Tekst;
        esa.style.opacity = "0.8";
        setTimeout("sakrijPoruku()", 1200);
    }
}
function prikaziPorukuDuze(Tekst) {
    var esa = document.getElementById("ddd");
    esa.innerHTML = Tekst;
    esa.style.opacity = "0.8";
    setTimeout("sakrijPoruku()", 3000);
}
function sakrijPoruku() {
    var esa = document.getElementById("ddd");
    esa.style.opacity = "0";
}
function postaviPoruku() {
    var esa = document.getElementById("ddd");
    var porX = Math.round(getWindowWidth() / 2) - 76;
    var porY = Math.round(getWindowHeight() / 2) - 36;
    esa.style.left = porX + "px";
    esa.style.top = porY + "px";
}
var cacheStatusValues = [];
cacheStatusValues[0] = "uncached";
cacheStatusValues[1] = "idle";
cacheStatusValues[2] = "checking";
cacheStatusValues[3] = "downloading";
cacheStatusValues[4] = "updateready";
cacheStatusValues[5] = "obsolete";
var cache = window.applicationCache;
cache.addEventListener("cached", logEvent, false);
cache.addEventListener("checking", logEvent, false);
cache.addEventListener("downloading", logEvent, false);
cache.addEventListener("error", logEvent, false);
cache.addEventListener("noupdate", logEvent, false);
cache.addEventListener("obsolete", logEvent, false);
cache.addEventListener("progress", logEvent, false);
cache.addEventListener("updateready", logEvent, false);

function logEvent(e) {
    var online, status, type, message;
    online = navigator.onLine ? "yes" : "no";
    status = cacheStatusValues[cache.status];
    type = e.type;
    message = "online: " + online;
    message += ", event: " + type;
    message += ", status: " + status;
    if (type == "error" && navigator.onLine) {
        message += " (prolly a syntax error in manifest)";
        stopLog();
    }
    if (consoleLog) {
        console.log(message);
    }
    if (status == "idle") {
        stopLog();
        if (informWhenOfflineAvailable && (type == "cached" || type == "noupdate") && !appMode) {
            prikaziPorukuDuze("Panorama is available offline. <br/>Add Bookmark <br/>(+ sign)<br/>Add to Home Screen");
        }
    }
}
window.applicationCache.addEventListener("updateready", function () {
    window.applicationCache.swapCache();
    console.log("swap cache has been called");
}, false);
/* JLRM LE DOY VIAJE
doLog = setInterval(function () {
    cache.update();
}, 10000);
*/
if (!navigator.onLine) {
    stopLog();
}
function stopLog() {
    clearInterval(doLog);
    var cache = window.applicationCache;
    cache.removeEventListener("cached", logEvent, false);
    cache.removeEventListener("checking", logEvent, false);
    cache.removeEventListener("downloading", logEvent, false);
    cache.removeEventListener("error", logEvent, false);
    cache.removeEventListener("noupdate", logEvent, false);
    cache.removeEventListener("obsolete", logEvent, false);
    cache.removeEventListener("progress", logEvent, false);
    cache.removeEventListener("updateready", logEvent, false);
}
window.addEventListener("message", stacemo, false);

function stacemo(e) {
    var provera = e.data;
    if (provera == "opaopa") {
        var skidaj = document.getElementById("cubes");
        skidaj.parentNode.removeChild(skidaj);
        alert("Licence for this domain is missing. Please visit vrhabitat.com");
        window.location = unescape("%68%74%74%70%3A%2F%2F%77%77%77%2E%76%72%68%61%62%69%74%61%74%2E%63%6F%6D%2F%0A%09%09%09");
        var metas = document.getElementsByTagName("head")[0];
        metas.parentNode.removeChild(metas);
    }
}