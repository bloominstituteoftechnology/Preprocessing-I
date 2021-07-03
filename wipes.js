/* 
Document Wipes effect- By Dynamic Web Coding (www.dyn-web.com)
Copyright 2002 by Sharon Paine
Visit http://www.dynamicdrive.com for this script
Idea and math for time-based animation from:
Aaron Boodman at www.youngpup.net 
and Mike Foster at www.cross-browser.com
*/

dom = (document.getElementById) ? true : false;
ns5 = ((navigator.userAgent.indexOf("Gecko")>-1) && dom) ? true: false;
ie5 = ((navigator.userAgent.indexOf("MSIE")>-1) && dom) ? true : false;
ns4 = (document.layers && !dom) ? true : false;
ie4 = (document.all && !dom) ? true : false;
nodyn = (!ns5 && !ns4 && !ie4 && !ie5) ? true : false;

var origWidth, origHeight;
if (ns4) {
  origWidth = window.innerWidth;
  origHeight = window.innerHeight;
}
// reload or reposition on resize
function reDo() {
	if (ns4) {
	 if (window.innerWidth != origWidth || window.innerHeight != origHeight) 
	    window.location.reload();
	} else setTimeout("rePosition()",200);
}
window.onresize = reDo;

function rePosition() {
	positionBotmRt('skipDiv');
	if (typeof wipeLyr1!="undefined") wipeLyr1.centerIn(window);
	//if (typeof wipeLyr2!="undefined") wipeLyr2.centerIn(window);
}

// for positioning "skip intro" link-layer
function positionBotmRt(lyr) {
	var lyrcss = (ns4)? document.layers[lyr]: (ie4)? document.all[lyr].style: (ie5|ns5)? document.getElementById(lyr).style: null;
	var winWd=(ie4||ie5)? document.body.clientWidth: window.innerWidth;
	var winHt=(ie4||ie5)? document.body.clientHeight: window.innerHeight;
	var x=winWd-getWidth(lyrcss,'skipLnk')-16;
	var y=winHt-getHeight(lyrcss,'skipLnk')-16;
	lyrcss.left=(ns4)? x: x+"px";
	lyrcss.top=(ns4)? y: y+"px";
	lyrcss.visibility = "visible";
}

var wipe_count=0;	// to keep track
function doWipes() {
	if (wipe_count<wipe_array.length) {
/////////////////////////////////////////////////////////////////////
// This is set up for text on 1 line.
// It wraps wipe layer content in table 
// so you can get rendered width/height.
// NOTE: uses nowrap minimized attribute. 

// If you want to be xhtml valid, you could remove that 
// and use non-breaking spaces between words instead.

		var cntnt = '<table id="w1" border="0" cellpadding="0" cellspacing="0"><tr><td class="wipe" nowrap>'+  wipe_array[wipe_count] +'</td></tr></table>';

		with (wipeLyr1) {
			hide();
			// restore, for ns4, or new content is visible...
			clipTo(0,wipeLyr1.width,wipeLyr1.height,0);	
			writeLyr(cntnt);
			width=getWidth(wipeLyr1.el,'w1');
			height=getHeight(wipeLyr1.el,'w1');
			centerIn(window);
		}
		// args: which wipe, delay, wipeTime, what next
		wipeLyr1.wipe("in right", wipe_in_delay,wipe_array[wipe_count+1],"wipeOuts()");
  } else {
		// wipes in image, then sends to destination url
		//wipeLyr2.wipe("in center", wipe_in_logo_delay,wipe_in_logo,"setTimeout('setDest()',dest_delay)");
                setTimeout('setDest()',dest_delay);
	}
}

function wipeOuts() {
	wipeLyr1.wipe("out middle", wipe_out_delay,wipe_array[wipe_count+1]/wipe_out_dv,"doWipes()");
	wipe_count+=2;
}
// end of wipe-splash code
/////////////////////////////////////////////////////////////////////
// beginning of wipes.js proper
// constructor
function dynObj(obj) {
	this.el = (ns4)? getLyrRef(obj,document): (ie4)? document.all[obj]: (ie5||ns5)? document.getElementById(obj): null;
	this.css = (ns4)? this.el: (ie4||ie5||ns5)? this.el.style: null;
	this.doc = (ns4)? this.el.document: this.el;
	this.x = (ns4)? this.css.left: parseInt(this.css.left);
	this.y = (ns4)? this.css.top: parseInt(this.css.top);
	this.width = (ns4)? this.el.clip.width: (this.css.width)? parseInt(this.css.width): this.el.offsetWidth;
	this.height = (ns4)? this.el.clip.height: (this.css.height)? parseInt(this.css.height): this.el.offsetHeight;
	this.obj = obj + "dynObj"; 	eval(this.obj + "=this");
}

// args: which wipe, delay, wipeTime, what next (fn)
dynObj.prototype.wipe=function(which,delay,wipeTime,fn) {
	this.wipeTime=wipeTime; this.fn=fn;
	switch (which) {
		// wipe into view by expanding to the right
		case "in right" :
			this.clipTo(0,0,this.height,0);
			this.show();
      setTimeout(this.obj+".wipe_in_rt()",delay);
  	break;
		
		// wipe into view by expanding from the center out
		case "in center" :
			this.vCenter = Math.ceil(this.height/2);
			this.hCenter = Math.ceil(this.width/2);
			this.clipTo(this.vCenter, this.hCenter,this.vCenter,this.hCenter);
			this.show();
			setTimeout(this.obj+".wipe_in_center()",delay);
		break;
		
		// wipe into view from upper left corner to lower right
		case "in corner" :
			this.clipTo(0,0,0,0);
			this.show();
			setTimeout(this.obj+".wipe_in_corner()",delay);
		break;
		
		// wipe out of view by contracting to the center
		case "out center" :
			this.vCenter = Math.ceil(this.height/2);
			this.hCenter = Math.ceil(this.width/2);
			setTimeout(this.obj+".wipe_out_center()",delay);
		break;
		
		// wipe out of view by contracting to the left
		case "out left" :
			setTimeout(this.obj+".wipe_out_left()",delay);
		break;
		
		// wipe out of view by contracting to the right
		case "out right" :
			setTimeout(this.obj+".wipe_out_right()",delay);
  	break;
		
		// wipe out of view by contracting from left and right
  	case "out middle" :
			this.dest=Math.ceil(this.width/2);
      setTimeout(this.obj+".wipe_out_mid()",delay);
		break;
		
		// wipe out of view from the upper left to lower right
		case "out corner" :
			setTimeout(this.obj+".wipe_out_corner()",delay);
		break;
		
  	default:
			alert("Oops! Check choices again.");
	}
	this.wipeStart = new Date().getTime()+delay;
	this.per = Math.PI/(2*this.wipeTime);
}

// wipe into view by expanding to the right
dynObj.prototype.wipe_in_rt=function() {
	var clipVal = this.getClipValues();
	var elapsed = (new Date().getTime())-this.wipeStart;
	if (elapsed<this.wipeTime) {
//	wipes could potentially be steady, accelerate, or decelerate
//	idea and math from Mike Foster at www.cross-browser.com
//	var inc = this.width*Math.sin(this.per*elapsed);
//	var inc = -this.width*Math.cos(this.per*elapsed)+this.width;
	var inc = this.width*((1/this.wipeTime)*elapsed);
	this.clipTo(0,inc,this.height,0);
	setTimeout(this.obj+".wipe_in_rt()",35);
	} else {
		this.clipTo(0,this.width,this.height,0);
		if (this.fn) eval(this.fn);
	}
}

// wipe into view by expanding from the center out
dynObj.prototype.wipe_in_center=function() {
	var clipVal = this.getClipValues();
	var elapsed = (new Date().getTime())-this.wipeStart;
	if (elapsed<this.wipeTime) {
	var vinc = this.vCenter*((1/this.wipeTime)*elapsed);
	var hinc = this.hCenter*((1/this.wipeTime)*elapsed);
	this.clipTo(this.vCenter-vinc,this.hCenter+hinc,this.vCenter+vinc,this.hCenter-hinc);
	setTimeout(this.obj+".wipe_in_center()",35);
	} else {
		this.clipTo(0,this.width,this.height,0);
		if (this.fn) eval(this.fn);
	}
}

// wipe into view from upper left corner to lower right
dynObj.prototype.wipe_in_corner=function() {
	var clipVal = this.getClipValues();
	var elapsed = (new Date().getTime())-this.wipeStart;
	if (elapsed<this.wipeTime) {
	var vinc = this.height*((1/this.wipeTime)*elapsed);
	var hinc = this.width*((1/this.wipeTime)*elapsed);
	this.clipTo(0,hinc,vinc,0);
	setTimeout(this.obj+".wipe_in_corner()",35);
	} else {
		this.clipTo(0,this.width,this.height,0);
		if (this.fn) eval(this.fn);
	}
}

// wipe out of view by contracting to the center
dynObj.prototype.wipe_out_center=function() {
	var clipVal = this.getClipValues();
	var elapsed = (new Date().getTime())-this.wipeStart;
	if (elapsed<this.wipeTime) {
	var vinc = this.vCenter*((1/this.wipeTime)*elapsed);
	var hinc = this.hCenter*((1/this.wipeTime)*elapsed);
	this.clipTo(vinc,this.width-hinc,this.height-vinc,hinc);
		setTimeout(this.obj+".wipe_out_center()",35);
	} else {
		this.clipTo(this.vCenter, this.hCenter,this.vCenter,this.hCenter);
		if (this.fn) eval(this.fn);
	}
}

// wipe out of view by contracting to the left
dynObj.prototype.wipe_out_left=function() {
	var clipVal = this.getClipValues();
	var elapsed = (new Date().getTime())-this.wipeStart;
	if (elapsed<this.wipeTime) {
		var inc = this.width*((1/this.wipeTime)*elapsed);
		this.clipTo(0,this.width-inc,this.height,0);
		setTimeout(this.obj+".wipe_out_left()",35);
	} else {
		this.clipTo(0,0,this.height,0);
		if (this.fn) eval(this.fn);
	}
}

// wipe out of view by contracting to the right
dynObj.prototype.wipe_out_right=function() {
	var clipVal = this.getClipValues();
	var elapsed = (new Date().getTime())-this.wipeStart;
	if (elapsed<this.wipeTime) {
		var inc = this.width*((1/this.wipeTime)*elapsed);
		this.clipTo(0,this.width,this.height,inc);
		setTimeout(this.obj+".wipe_out_right()",35);
	} else {
	this.clipTo(0,this.width,this.height,this.width);
		if (this.fn) eval(this.fn);
	}
}

// wipe out of view by contracting from left and right
dynObj.prototype.wipe_out_mid=function() {
	var clipVal = this.getClipValues();
	var elapsed = (new Date().getTime())-this.wipeStart;
	if (elapsed<this.wipeTime) {
//	var inc = this.dest*Math.sin(this.per*elapsed);
	var inc = -this.dest*Math.cos(this.per*elapsed)+this.dest;
//	var inc = this.dest*((1/this.wipeTime)*elapsed);
		this.clipTo(0,this.width-inc,this.height,inc);
		setTimeout(this.obj+".wipe_out_mid()",35);
	} else {
		this.clipTo(0,this.dest,this.height,this.dest);
		if (this.fn) eval(this.fn);
	}
}

dynObj.prototype.wipe_out_corner=function () {
	var clipVal = this.getClipValues();
	var elapsed = (new Date().getTime())-this.wipeStart;
	if (elapsed<this.wipeTime) {
	var vinc = -this.height*Math.cos(this.per*elapsed)+this.height;
	var hinc = -this.width*Math.cos(this.per*elapsed)+this.width;
		this.clipTo(vinc,this.width,this.height,hinc);
		setTimeout(this.obj+".wipe_out_corner()",35);
	} else {
		this.clipTo(this.height,this.width,this.height,this.width);
		if (this.fn) eval(this.fn);
	}
}

// end wipe methods

/////////////////////////////////////////////////////////////////////
// center in container (window or outer layer)
dynObj.prototype.centerIn = function(outer) {
	var outWd, outHt, inWd, inHt, x, y;
	if (eval(outer)==window) {
		outWd=(ie4||ie5)? document.body.clientWidth: window.innerWidth;
		outHt=(ie4||ie5)? document.body.clientHeight: window.innerHeight;
	} else {
		outWd=outer.width;
		outHt=outer.height;
	}
	inWd=this.width;
	inHt=this.height;
	x=Math.round((outWd-inWd)/2);
	y=Math.round((outHt-inHt)/2);
	this.shiftTo(x,y);
}

/////////////////////////////////////////////////////////////////////
// clip methods
// ideas from dynduo, brainjar and bratta
dynObj.prototype.getClipValues = function() {
	if (ns4) {
  	var clipVal = new Array();
		clipVal[0] = this.css.clip.top;
		clipVal[1] = this.css.clip.right;
		clipVal[2] = this.css.clip.bottom;
		clipVal[3] = this.css.clip.left;
  } else if (ie4||ie5||ns5) {
		var clipVal = this.css.clip.substring(5,this.css.clip.length-1).split(' ');
			for (var i=0; i<4; i++) {
				clipVal[i] = parseInt(clipVal[i]);
			}
  }
	return clipVal;
}

dynObj.prototype.clipBy = function(top,rt,btm,lft) {
	if (ns4) {
  	this.css.clip.top += top;
		this.css.clip.right += rt;
		this.css.clip.bottom += btm;
		this.css.clip.left += lft;
  } else if (ie4 || ie5 || ns5) {
		var clipVal = this.getClipValues();
  	this.css.clip = "rect(" + Number(clipVal[0]+top) + "px " + Number(clipVal[1]+rt)  + "px " + Number(clipVal[2]+btm) + "px " + Number(clipVal[3]+lft) + "px)"
  }
}

dynObj.prototype.clipTo = function(top,rt,btm,lft) {
	if (ns4) {
  	this.css.clip.top = top;
		this.css.clip.right = rt;
		this.css.clip.bottom = btm;
		this.css.clip.left = lft;
  } else if (ie4 || ie5 || ns5) {
  	this.css.clip = "rect("+top+"px "+rt+"px "+btm+"px "+lft+"px)";
  }
}
// end clip methods

dynObj.prototype.shiftTo = function (x,y) {
	// idea from dynduo.
	if (x!=null) this.x=x; if (y!=null) this.y=y;
	if (ns4) { this.css.moveTo(this.x,this.y); } 
	else { this.css.left=this.x+"px"; this.css.top=this.y+"px"; }
}

dynObj.prototype.shiftBy = function(x,y) {



	this.shiftTo(this.x+x,this.y+y);
}

dynObj.prototype.show = function() { this.css.visibility = "visible"; }
dynObj.prototype.hide = function() { this.css.visibility = "hidden"; }

dynObj.prototype.writeLyr=function(cntnt) {
	if (ns4) {
			this.doc.write(cntnt);
			this.doc.close();
  } else if (ie4||ie5||ns5) {
      this.doc.innerHTML = cntnt;
  }
}

// gets rendered height/width 
// for ns4, pass reference to layer. 
// for others, pass id of html element containing content
function getWidth(obj,id) {
	var wd =(ns4)? obj.document.width: (ie4)? document.all[id].offsetWidth: (ie5||ns5)? document.getElementById(id).offsetWidth: 0;
	return wd;
}

function getHeight(obj,id) {
	var ht =(ns4)? obj.document.height: (ie4)? document.all[id].offsetHeight: (ie5||ns5)? document.getElementById(id).offsetHeight: 0;
	return ht;
}

// get reference to nested layer for ns4
// from dhtmllib.js by Mike Hall of www.brainjar.com
function getLyrRef(lyr,doc) {
	if (ns4) {
		var theLyr;
		for (var i=0; i<doc.layers.length; i++) {
	  	theLyr = doc.layers[i];
			if (theLyr.name == lyr) return theLyr;
			else if (theLyr.document.layers.length > 0) 
	    	if ((theLyr = getLyrRef(lyr,theLyr.document)) != null)
					return theLyr;
	  }
		return null;
  }
}