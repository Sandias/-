// JavaScript Document
function getStyle(obj,attr){
return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];}
function $ (id){
	if(typeof(id)=='string'){
		return document.getElementById(id);}
	else if(typeof(id)=='function'){
		return window.onload = id;}
	else if( typeof(id)=='object'){
		return id;}
}
function getPosition(obj)
{
	var json = {'left':0,'top':0};
	while(obj)
	{
		json.left +=obj.offsetLeft;
		json.top +=obj.offsetTop;
		obj = obj.offsetParent;
	}	
	return json;
}

function downMove(ele,ele2,adsorb){	
	ele.onmousedown = function(ev){
		var ev = ev || event;
		if(ele.setCapture){ele.setCapture();}	//�ж�������Ƿ�ΪIE�����
		var scrollTop =  document.body.scrollTop || document.documentElement.scrollTop;
		var scrollLeft =  document.body.scrollLeft || document.documentElement.scrollLeft;	//��ȡ������������ľ���
		var disX = ev.clientX - ele.offsetLeft + scrollLeft;
		var disY = ev.clientY - ele.offsetTop + scrollTop;	//����λ��-�������ڵ�λ��+��������λ��
		document.onmousemove = function(ev){	//�������ҳ���ƶ���ʱ��
			var ev = ev || event;
			var scrollTop =  document.body.scrollTop || document.documentElement.scrollTop;
			var scrollLeft =  document.body.scrollLeft || document.documentElement.scrollLeft;
			var oLeft = ev.clientX - disX + scrollLeft;
			if(oLeft-adsorb<ele2.offsetLeft){	//���oleftС��ele2����߽磬���ele2����߽縳��oleft
				oLeft = ele2.offsetLeft;
			}
			if(oLeft+adsorb>ele2.offsetLeft+ele2.offsetWidth-ele.offsetWidth){
				oLeft = ele2.offsetLeft+ele2.offsetWidth-ele.offsetWidth;
			}
			var oTop = ev.clientY - disY + scrollTop;
			if(oTop-adsorb<ele2.offsetTop){
				oTop = ele2.offsetTop;
			}
			if(oTop+adsorb>ele2.offsetTop+ele2.offsetHeight-ele.offsetHeight){
				oTop = ele2.offsetTop+ele2.offsetHeight-ele.offsetHeight;
			}
			ele.style.left = oLeft +'px';
			ele.style.top = oTop + 'px';
		}
		document.onmouseup = function(){
			if(ele.releaseCapture){ele.releaseCapture();}
			document.onmousemove = document.onmouseup = null;
		}
		return false;
	}
}
