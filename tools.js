let tools = {}
tools.formatNumber = function(n){ 
    n += ""; 
    var re = /(\d{1,3})(?=(\d{3})+$)/g; 
    return n.replace(re,"$1,"); 
}
tools.inputKeyup = function(){
    for(let i=0;i<document.getElementsByClassName('dream-total').length;i++){
        document.getElementsByClassName('dream-total')[i].addEventListener('keyup',function(e){
            let theValue = e.target.value
            document.getElementsByClassName('dream-total')[i].value = tools.formatNumber(theValue)
        })
    }
}
tools.delComma = function(data){ 
    if(data) { 
        data = data.replace(/[,]/g, ''); 
        return data; 
    } 
} 

tools.setAttributes = function(obj,attributes){
    for(let name in attributes){
		obj[name]=attributes[name];
	}
	return obj;
}
tools.setStyles = function(obj,styles){
    for(let name in styles){
		obj.style[name]=styles[name];
	}
	return obj;
}
tools.createElement = function(tagName,settings,parentElement){
    let obj=document.createElement(tagName);
	if(settings.atrs){tools.setAttributes(obj,settings.atrs);}
    if(settings.stys){tools.setStyles(obj,settings.stys);}
    //if(parentElement instanceof Element){parentElement.appendChild(obj);} => Element 無法被測試辨認
    parentElement.appendChild(obj)
    return obj;
}
tools.getPosition = function(element){
    let elementBox = element.getBoundingClientRect()
    let elementPosition = {}
    let elementLeft = elementBox.left
    let elementTop = elementBox.top
    let scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
    let topBorder = elementTop+scrollDistance
    elementPosition.x=elementLeft
    elementPosition.y=topBorder
    return elementPosition
}

let observeRobot
let spaceTalk
let step0
let step1
let step1_1
let step1_2
let step2_0
let step3_0
let step3_1
let step3_2
let step3_3
let step3_4
let oneWordByOneWord

tools.clearTimeOuts = function(){
    clearTimeout(oneWordByOneWord)
    clearTimeout(step0)
    clearTimeout(step1)
    clearTimeout(step1_1)
    clearTimeout(step1_2)
    clearTimeout(step2_0)
    clearTimeout(step3_0)
    clearTimeout(step3_1)
    clearTimeout(step3_2)
    clearTimeout(step3_3)
    clearTimeout(observeRobot)
    clearTimeout(spaceTalk)
}
module.exports = {
    tools:tools
}