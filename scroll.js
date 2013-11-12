var scrollerwidth="157px"
var scrollerheight="186px"

var scrollerspeed=1

var scrollercontent="<center>Rechtsanwalt Pepa Natschkova bietet aktuelle Information und Beratung vor Ort in Wien, &Ouml;sterreich im Buro des Kunden an. Information &uuml;ber die Eintragung von Handelsgesellschaften, Rechts- und Verwaltungsordnung, sowie Bedingungen f&uuml;r den Investionen- und Gesch&auml;fteablauf in Bulgarien, Ankauf von Immobilien und Beratungen &uuml;ber Bulgarisches Recht aller Art. Arbeitssprache – Englisch, aber wenn n&ouml;tig, ist es m&ouml;glich einen deutsch-bulgarischen Dolmetscher sichern.</center>"
var pauseit=1


// Change nothing below!


function open_link(url,txt){
	write('<a style="font-size:10px" href="" OnClick="')
	windowVar=window.open('scroll.html', '' ,'width=500, height=500, scrollbars=yes, toolbars=no,location=no, resizable=no');
	windowVar.focus(); return false; 
	write('>'+txt+'</a>')
}

scrollerspeed=(document.all)? scrollerspeed : Math.max(1, scrollerspeed-1) //slow speed down by 1 for NS
var copyspeed=scrollerspeed
var iedom=document.all||document.getElementById
var actualheight=''
var cross_scroller, ns_scroller
var pausespeed=(pauseit==0)? copyspeed: 0

function populate(){
if (iedom){
cross_scroller=document.getElementById? document.getElementById("iescroller") : document.all.iescroller
cross_scroller.style.top=parseInt(scrollerheight)+8+"px"
cross_scroller.innerHTML=scrollercontent
actualheight=cross_scroller.offsetHeight
}
else if (document.layers){
ns_scroller=document.ns_scroller.document.ns_scroller2
ns_scroller.top=parseInt(scrollerheight)+8
ns_scroller.document.write(scrollercontent)
ns_scroller.document.close()
actualheight=ns_scroller.document.height
}
lefttime=setInterval("scrollscroller()",25)
}
window.onload=populate

function scrollscroller(){

if (iedom){
if (parseInt(cross_scroller.style.top)>(actualheight*(-1)+8))
cross_scroller.style.top=parseInt(cross_scroller.style.top)-copyspeed+"px"
else
cross_scroller.style.top=parseInt(scrollerheight)+8+"px"
}
else if (document.layers){
if (ns_scroller.top>(actualheight*(-1)+8))
ns_scroller.top-=copyspeed
else
ns_scroller.top=parseInt(scrollerheight)+8
}
}

if (iedom||document.layers){
with (document){
if (iedom){
write('<div border=0  bgcolor=blue style="position:relative;width:'+scrollerwidth+';height:'+scrollerheight+';overflow:hidden" onMouseover="copyspeed=pausespeed" onMouseout="copyspeed=scrollerspeed">')
write('<div  border=0 bgcolor=blue id="iescroller" style="position:absolute;left:0px;top:0px;width:100%;">')
write('</div></div>')
}
else if (document.layers){
write('<ilayer border=0 bgcolor=blue width='+scrollerwidth+' height='+scrollerheight+' name="ns_scroller">')
write('<layer border=0 bgcolor=blue name="ns_scroller2" width='+scrollerwidth+' height='+scrollerheight+' left=0 top=0 onMouseover="copyspeed=pausespeed" onMouseout="copyspeed=scrollerspeed"></layer>')
write('</ilayer>')
}
}
}
