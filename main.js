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
        initDreams()
        setTimeout(function(){
            document.getElementsByClassName("talk-place")[0].style.background = "none"
            document.getElementsByClassName("saying")[0].innerHTML =""
        },3000)
        break;
    }
}
function initDreams(){
    let numberOfDreams = document.getElementsByClassName('dream-button').length
    for(dream=0;dream<numberOfDreams;dream++){
        let dreamElement = document.getElementsByClassName('dream-button')[dream]
        let handler = function(event){
            switch(event.target.id){
                case "house":
                    if(document.getElementsByClassName('house-planet').length==5){
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('house-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"北市一間 20 坪房平均約 1000 萬"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        let chosenPlace = housePlace.pop()
                        dreamShowUp("house").style.transform = "rotate("+chosenPlace+"deg)"
                        addtoList("house")
                        let house = document.getElementsByName("house")[0].value
                        document.getElementsByName("house")[0].value = (parseInt(house) + 10000000) 
                    }
                    break;
                case "car":
                    if(document.getElementsByClassName('car-planet').length==8){
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('car-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"基本的車款約 50 萬元"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        dreamShowUp("car")
                        addtoList("car")
                        let car = document.getElementsByName("car")[0].value
                        document.getElementsByName("car")[0].value = (parseInt(car) + 500000)
                    }
                    break;
                case "wedding":
                    if(document.getElementsByClassName('wedding-planet').length==1){
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('wedding-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"一生一次一場難忘的婚禮大約花費 50 萬元"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        let chosenPlace = weddingPlace.pop()
                        dreamShowUp("wedding").style.transform = "rotate("+chosenPlace+"deg)"
                        addtoList("wedding")
                        let wedding = document.getElementsByName("wedding")[0].value
                        document.getElementsByName("wedding")[0].value = (parseInt(wedding) + 500000)
                    }
                    break;
                case "kid":
                    if(document.getElementsByClassName('kid-planet').length==10){
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('kid-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"一個小孩從出生到大學畢業平均花費 400 萬元"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        let chosenPlace = kidPlace.pop()
                        dreamShowUp("kid").style.transform = "rotate("+chosenPlace+"deg)"
                        addtoList("kid")
                        let kid = document.getElementsByName("kid")[0].value
                        document.getElementsByName("kid")[0].value = (parseInt(kid) + 4000000)
                    }
                    break;
                case "parent":
                    if(document.getElementsByClassName('parent-planet').length==1){
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('parent-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"預設的奉養費：一個月 5000 * 12 個月 * 40 年 = 24 萬元"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        let chosenPlace = parentPlace.pop()
                        dreamShowUp("parent").style.transform = "rotate("+chosenPlace+"deg)"
                        addtoList("parent")
                        let parent = document.getElementsByName("parent")[0].value
                        document.getElementsByName("parent")[0].value = (parseInt(parent) + 240000)
                    }
                    break;
                case "plane":
                    if(document.getElementsByClassName('plane-planet').length==1){
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('plane-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"預設的旅遊費：一個出遊 3 次 * 一次 2500元 * 60 年 = 45 萬元"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        dreamShowUp("plane")
                        addtoList("plane")
                        let plane = document.getElementsByName("plane")[0].value
                        document.getElementsByName("plane")[0].value = (parseInt(plane) + 450000)
                    }
                    break;
                case "retire":
                    if(document.getElementsByClassName('retire-planet').length==1){
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('retire-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"預設理想的退休費：退休後每月生活費 20000 * 12 個月 * 20 年 = 480 萬元"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        let chosenPlace = retirePlace.pop()
                        dreamShowUp("retire").style.transform = "rotate("+chosenPlace+"deg)"
                        addtoList("retire")
                        let retire = document.getElementsByName("retire")[0].value
                        document.getElementsByName("retire")[0].value = (parseInt(retire) + 4800000)
                    }
                    break;
                case "company":
                    if(document.getElementsByClassName('company-planet').length==3){
                        event.target.disabled = true
                    }else{
                        if(document.getElementsByClassName('company-planet').length==0){
                            if(document.getElementsByClassName('doctor-say')[0]){
                                document.getElementsByClassName('doctor-say')[0].remove()
                            }
                            let State = createElement("DIV",{atrs:{
                                style:"height:100px",
                                className:"doctor-say",
                                innerHTML:"預設創業準備金： 100 萬元"
                            }},document.getElementsByClassName("doctor-jacky-part")[0])
                            setTimeout(function(){
                                State.remove()
                            },4000)  
                        }
                        flyInToPlanet(event)
                        let chosenPlace = companyPlace.pop()
                        dreamShowUp("company").style.transform = "rotate("+chosenPlace+"deg)"
                        addtoList("company")
                        let company = document.getElementsByName("company")[0].value
                        document.getElementsByName("company")[0].value = (parseInt(company) + 1000000)
                    }
                    break;
            }
        }
        dreamElement.addEventListener("mousedown",handler)
    } 
}
function dreamShowUp(dream){
    let amount = document.getElementsByClassName(dream+"-planet").length
    let newDream = createElement("DIV",{atrs:{
        id:dream+amount,
        className:"planet-things "+dream+"-planet"
    }},document.getElementsByClassName("planet")[0])
    setTimeout(function(){
        newDream.style.display="block"
    },2100)
    return newDream
}
function addtoList(dream){
    let amount = document.getElementsByClassName(dream+'-ball').length
    let dreamBall = createElement("DIV",{atrs:{
        id:'list'+dream+amount,
        className:"dream-ball "+dream+"-ball",
    }},document.getElementsByClassName("list-"+dream+"-balls")[0])
 
    setTimeout(function(){dreamBall.style.right="calc(0px + "+(amount*32)+"px)"},10)
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
        flyingDream.style.top = "300px"
        flyingDream.style.zIndex = 500
    },1)
    
    
    flyingDream.addEventListener('transitionend',function(){
        flyingDream.style.transform="scale(0)"
        setTimeout(function(){flyingDream.remove()},1100)
    })
}