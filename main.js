function guideStep(step){
    let doctor = document.getElementsByClassName("doctor")[0]
    let bb = document.getElementsByClassName("black-background")[0]
    let planetPart = document.getElementsByClassName('planet-part')[0]

    switch(step){
        case 0:
        doctor.style.opacity = 1
        //快速跳過用 eventListener
        doctor.addEventListener("transitionend",function(){
            guideStep(1)
        })
        break;

        case 1:
        let welcomeWords = "歡迎來到『理財宇宙』，我是星球醫生阿傑。"
        printVerbatim(welcomeWords)
        let saying = document.getElementsByClassName("saying")[0]
        setTimeout(function(){
            guideStep(1.1)
        },3500)
        break;

        case 1.1:
        let myFaultwords = "你沒看到宇宙？？喔...抱歉我的錯。"
        printVerbatim(myFaultwords)
        setTimeout(function(){
            guideStep(1.2)
        },2000)
        break;

        case 1.2:
        bb.style.background = "rgba(0,0,0,0)"
        setTimeout(function(){
            guideStep(2.0)
        },2000)
        break;

        case 2.0:
        let showPlanetWords = "如剛剛所說，我是個醫生，專門診斷宇宙間各顆星球的問題。我先送你一顆，再跟你說明。"
        printVerbatim(showPlanetWords)
        setTimeout(function(){
            guideStep(3.0)
        },3000)
        break;

        case 3.0:
        planetPart.style.opacity = 1;
        planetPart.addEventListener("transitionend",function(){
            guideStep(3.1)
        })
        break;

        case 3.1:
        let ableToClickWords = "很漂亮吧！之後你可以點選星球周圍各種使你人生更豐富圓滿的元素，他們便會出現在你的星球中。"
        printVerbatim(ableToClickWords)
        setTimeout(function(){
            guideStep(3.2)
        },3500)
        break;

        case 3.2:
        let ableToAdjustWords = "同時，加入後的元素可以調整成你真正希望他所應該擁有的價值。"
        printVerbatim(ableToAdjustWords)
        document.getElementsByClassName("list-part")[0].style.opacity = 1
        setTimeout(function(){
            guideStep(3.3)
        },3500)
        break;

        case 3.3:
        let basicInfoWords = "在按下最下面的診斷前的最後一步，請填入框框裡的基本資料，對你的生活狀況越清楚，診斷書的內容就會越詳細喔。"
        printVerbatim(basicInfoWords)
        document.getElementsByClassName("basic-information-part")[0].style.opacity = 1
        setTimeout(function(){
            guideStep(3.4)
        },4500)
        break;

        case 3.4:
        let getStartWords = "現在就開始嘗試把夢想加入星球吧！"
        printVerbatim(getStartWords)
        setTimeout(function(){
            document.getElementsByClassName("talk-place")[0].style.background = "none"
            document.getElementsByClassName("saying")[0].innerHTML =""
        },3000)
        break;
    }
}
function createElement(tagName,settings,parentElement){
    let obj=document.createElement(tagName);
	if(settings.atrs){setAttributes(obj,settings.atrs);}
    if(settings.stys){setStyles(obj,settings.stys);}
	if(parentElement instanceof Element){parentElement.appendChild(obj);}
    return obj;
}
function getPosition(element){
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
function setAttributes(obj,attributes){
    for(let name in attributes){
		obj[name]=attributes[name];
	}
	return obj;
}

function setStyles(obj,styles){
    for(let name in styles){
		obj.style[name]=styles[name];
	}
	return obj;
}
function printVerbatim(words){
    let talkBack = document.getElementsByClassName("talk-place")[0]
    talkBack.style.background = "url('./img/talk.png')"
    talkBack.style.backgroundSize = "100% 100%"
    let saying = document.getElementsByClassName("saying")[0]
    saying.innerHTML = ""
    for(let wordsNum = 0;wordsNum<=words.length;wordsNum++){      
        setTimeout(function(){
            saying.innerHTML = words.substr(0,wordsNum)
        },50*wordsNum)
    }
}
function flyInToPlanet(event){
    //按鈕座標
    buttonX = getPosition(event.target).x
    buttonY = getPosition(event.target).y
    
    //動畫主角
    let flyingDream = document.createElement("DIV")
    flyingDream.classList.add('adding-dream')
    flyingDream.setAttribute("style","position:absolute;left:"+buttonX+"px;top:"+buttonY+"px;background:"+getComputedStyle(event.target).backgroundImage+"no-repeat scroll 50% 50% / contain padding-box border-box")
    document.body.appendChild(flyingDream)

    //飛行終點
    setTimeout(function(){
        flyingDream.style.transform="scale(2)"
        flyingDream.style.left = "calc(50vw - 50px)"
        flyingDream.style.top = "265px"
        flyingDream.style.zIndex = 500
    },1)
    
    
    flyingDream.addEventListener('transitionend',function(){
        flyingDream.style.transform="scale(0)"
        setTimeout(function(){flyingDream.remove()},1100)
    })
}