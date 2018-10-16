function skip(){
    guideStep(3.4)
    document.getElementsByClassName("doctor")[0].style.opacity = 1
    document.getElementsByClassName("black-background")[0].style.background = "rgba(0,0,0,0)"
    document.getElementsByClassName('planet-part')[0].style.opacity = 1;
    document.getElementsByClassName("list-part")[0].style.opacity = 1
    document.getElementsByClassName("basic-information-part")[0].style.opacity = 1
    document.getElementsByClassName('next-button')[0].remove()
}
function guideStep(step){
    let doctor = document.getElementsByClassName("doctor")[0]
    let bb = document.getElementsByClassName("black-background")[0]
    let planetPart = document.getElementsByClassName('planet-part')[0]

    switch(step){
        case 0:
        doctor.style.opacity = 1
        setTimeout(function(){
            guideStep(1)
        },1500)
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
        setTimeout(function(){
            guideStep(3.1)
        },1500)
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
            document.getElementsByClassName("saying")[0].innerHTML =""
        },3000)
        break;
    }
}
let handler = function(event){
    switch(event.target.id){
        case "house":
            if(document.getElementsByClassName('house-planet').length==5){
                event.target.disabled = true
            }else{
                if(document.getElementsByClassName('house-planet').length==0){
                    printVerbatim("北市一間 20 坪房平均約 1000 萬")
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
                    printVerbatim("基本的車款約 50 萬元")
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
                    printVerbatim("一生一次一場難忘的婚禮大約花費 50 萬元") 
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
                    printVerbatim("一個小孩從出生到大學畢業平均花費 400 萬元")
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
                    printVerbatim("預設的奉養費：一個月 5000 * 12 個月 * 40 年 = 240 萬元")
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
                    printVerbatim("預設的旅遊費：一年出遊 3 次 * 一次 2500元 * 60 年 = 45 萬元")
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
                    printVerbatim("預設理想的退休費：退休後每月生活費 20000 * 12 個月 * 20 年 = 480 萬元")
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
                    printVerbatim("預設創業準備金： 100 萬元")
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
function initDreams(){
    let numberOfDreams = document.getElementsByClassName('dream-button').length
    for(dream=0;dream<numberOfDreams;dream++){
        let dreamElement = document.getElementsByClassName('dream-button')[dream]
        
        dreamElement.addEventListener("mousedown",handler)
    } 
}
function startTest(){
    let numberOfDreams = document.getElementsByClassName('dream-button').length
    for(dream=0;dream<numberOfDreams;dream++){
        let dreamElement = document.getElementsByClassName('dream-button')[dream]
        dreamElement.removeEventListener("mousedown",handler)
    } 
    let testPart = document.getElementsByClassName("test-part")[0]
    testPart.style.height = "400px";
    testPart.style.boxShadow = "0px 0px 3px 3px greenyellow"

    let salary = parseInt(document.getElementsByName("salary")[0].value)
    let age = parseInt(document.getElementsByName("age")[0].value)
    let retireAge = parseInt(document.getElementsByName("retire-age")[0].value)
    let fortune = parseInt(document.getElementsByName("fortune")[0].value)
    let dieAge = parseInt(document.getElementsByName("die-age")[0].value)
    let cost = parseInt(document.getElementsByName("cost")[0].value)

    let house = parseInt(document.getElementsByName("house")[0].value)
    let car = parseInt(document.getElementsByName("car")[0].value)
    let wedding = parseInt(document.getElementsByName("wedding")[0].value)
    let kid = parseInt(document.getElementsByName("kid")[0].value)
    let parent = parseInt(document.getElementsByName("parent")[0].value)
    let plane = parseInt(document.getElementsByName("plane")[0].value)
    let retire = parseInt(document.getElementsByName("retire")[0].value)
    let company = parseInt(document.getElementsByName("company")[0].value)

    let dreamTotal = house+car+wedding+kid+parent+plane+retire+company
    let testTalk1 = "這星球價值 "+ dreamTotal +" 元呢...... 好的，那現在讓我派出硬漢機器人來嘗試為你打造出這顆星球吧！"
    printVerbatim(testTalk1)
    let testTalk2 = "硬漢機器人有著與您相同的收入和生活支出，同時他將面對所有人生中所可能發生的事情，唯一不同的是：硬漢機器人十分硬漢，周圍發生的一切都不會影響他的資產。" 
    setTimeout(function(){
        printVerbatim(testTalk2)
    },3500)
    let testTalk3 = "現在可以按下左側的『下一階段』按鈕來觀察硬漢機器人的機器人生囉！"
    setTimeout(function(){
        printVerbatim(testTalk3)
        let nextStage = createElement("BUTTON",{atrs:{
            className:"next-button",
            innerHTML:"下一階段"
        }},document.getElementsByClassName("next-stage-button-place")[0])
        nextStage.addEventListener('click',nextHandler)
    },9000)
    setTimeout(function(){
        document.getElementsByClassName("saying")[0].innerHTML =""
    },1100)
    var pieLabels= ['過了的人生','有收入的人生','沒收入的人生'];
    let piePart = document.getElementById('pie').getContext('2d')
    let pieChart = new Chart(piePart,{
        type: 'pie',
            data : {
                labels:pieLabels,
                datasets: [{
                    data:[age,retireAge - age,dieAge - retireAge],
                    backgroundColor: [
                        "rgb(119,136,153,0.5)",
                        "rgb(255,215,0,0.5)",
                        "rgb(127,255,212,0.5)"
                    ],
                    borderColor:"transparent",
                }],
            },
            options: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        fontColor: 'white'
                    }
                }
            }
    })

    var barLabels= ['夢想總值','現有資產'];
    let barPart = document.getElementById('bar').getContext('2d')
    let barChart = new Chart(barPart,{
        type: 'horizontalBar',
            data : {
                labels:barLabels,
                datasets: [{
                    label: "金錢表",
                    data:[dreamTotal,fortune],
                    backgroundColor: [
                        "rgb(119,136,153,0.5)",
                        "rgb(255,255,255,0.5)",
                    ],
                    borderColor: "transparent",
                }],
            },
            options: {
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                },
                scales:{
                    yAxes:[{
                        ticks:{
                            fontColor:"rgb(255,215,0)",
                            fontSize: 14
                        }
                    }],
                    xAxes:[{
                        ticks:{
                            fontColor:"rgb(255,215,0)",
                            fontSize: 12,
                            min:0
                        }
                    }]
                }
            }
    })
    for(let lifeExpectancy = dieAge - age;lifeExpectancy>0;lifeExpectancy = lifeExpectancy-10){
        let ageBall = createElement("DIV",{atrs:{
            className:"age-ball",
            innerHTML:parseInt(lifeExpectancy) + parseInt(age)
        }},document.getElementsByClassName("age-ball-part")[0])
    }
    
    let nextHandler = function(){
        let moneyDetailPart = document.getElementsByClassName('money-detail-part')[0]
        let ageBalls = document.getElementsByClassName('age-ball-part')[0]
        let order = ageBalls.children.length - ageStage -1
        let outsideWidth = (document.body.clientWidth - document.getElementsByClassName('test-part')[0].offsetWidth)/2
        
        statePositionX = getPosition(document.getElementsByClassName("age-ball-part")[0].children[order]).x
        
        let robot = document.getElementsByClassName('robot')[0]
        robot.style.left = (statePositionX - outsideWidth - 9) + "px"

        let newAge = parseInt(document.getElementsByClassName("age-ball-part")[0].children[order].innerHTML)
        let nowFortune
        if(newAge <=(retireAge)){
            nowFortune = fortune + (newAge-age)*(salary - (cost*12))
        }else{
            nowFortune = fortune + (retireAge-age)*(salary - (cost*12))
        }
        
        if(newAge <= (retireAge+10)){
            barChart.data.datasets[0].data = [dreamTotal,nowFortune]
            barChart.update()
        }
        
        if(newAge<=retireAge){
            pieChart.data.datasets[0].data = [newAge,retireAge - newAge,dieAge - retireAge]
            pieChart.update()
        }else if(newAge >= retireAge){
            pieChart.data.datasets[0].data = [newAge,0,dieAge - newAge]
            pieChart.update()
        }else{
            pieChart.data.datasets[0].data = [newAge,0,0]
            pieChart.update()
        }

        let saveIncome = [27,29,31,34,37,40,44,48,52,57]
        if(document.getElementsByClassName('money-detail')[0]){
            document.getElementsByClassName('money-detail')[0].innerHTML = "支出 <br> 25萬 <br> 收入 <br>"+saveIncome[ageStage-1]+"萬"
        }

        let moneyWidth = (805/ageBalls.children.length)
        if(order == ageBalls.children.length -1){
            // 第一步
            let savingWord = '信箱裡寄來一封六年期，每年五萬保費的儲蓄險宣傳單，但硬漢機器人十分硬漢，他只將宣傳單記錄下來，不會做任何購買。'
            printVerbatim(savingWord)
            let savingDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            savingDiv.style.width = moneyWidth+"px"
            savingDiv.innerHTML = "支出 <br> 0萬 <br> 收入 <br> 0萬"
        }else if(order == 0){
            // 最後一步
            let finWord = '硬漢機器人度過了'+ (newAge - age) +'年，也到了機器人生的畢業典禮，謝謝機器人的付出。那麼星球診斷的結果吧！'
            printVerbatim(finWord)
            let finDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            finDiv.style.width = moneyWidth+"px"
            finDiv.innerHTML = "謝謝付出"
        }else if(order == 1 && newAge >= 65){
            let longWord = '雖然名為硬漢，但到了這個歲數，硬漢機器人仍然漸漸地無法自理生活而需要看護的幫助。但在金錢這個方面，硬漢機器人依舊十分硬漢，不花半點孔方兄。'
            printVerbatim(longWord)
            let longDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            longDiv.style.width = moneyWidth+"px"
            longDiv.innerHTML = "支出 <br> ２萬(外勞)/5萬(台灣) <br>* 12個月 <br>* 平均十年 <br>= 240 萬 / 600 萬"
        }else if(newAge >= retireAge && newAge < (retireAge+10)){
            let retireWord = '退休了，硬漢機器人在家裡舒舒服服，享受回歸自由。(但同時也不再有收入了)'
            printVerbatim(retireWord)
            let retireDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            retireDiv.style.width = moneyWidth+"px"
            retireDiv.innerHTML = "支出<br>0 萬"
        }else if(order == ageBalls.children.length -2){
            let tripWord = '硬漢機器人到金門玩。出發前機場詢問是否需要旅行平安險，但硬漢機器人十分硬漢，他只將詢問記錄下來不做購買。回程時金門機場起了大霧，讓硬漢機器人在機場多待了一天。'
            printVerbatim(tripWord)
            let tripDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            tripDiv.style.width = moneyWidth+"px"
            tripDiv.innerHTML = "支出<br> 100 <br> 收入 <br> 3000 "
        }else if(order == ageBalls.children.length -3){
            let sickWord = '這個夏天流感盛行，硬漢機器人的病情嚴重到需要住院了，但是健保病床全部爆滿，硬漢機器人只能自費醫院單人房，三天後醫師把硬漢機器人的螺絲鎖緊，硬漢機器人再度硬漢！'
            printVerbatim(sickWord)
            let sickDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            sickDiv.style.width = moneyWidth+"px"
            sickDiv.innerHTML = "支出<br> 病床一日5000 <br> * 3 日 <br> = 15000"
        }else if(order == ageBalls.children.length -4){
            let cancerWord = '今年的壓力特別大，硬漢機器人不幸的被診斷出了機器癌第一期 ( 在台灣每五分鐘就有一人罹癌 ) ，但硬漢機器人十分硬漢，經過兩年的療程，機器人順利完全康復了！'
            printVerbatim(cancerWord)
            let cancerDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            cancerDiv.style.width = moneyWidth+"px"
            cancerDiv.innerHTML = "支出 <br>一年 80 萬 <br> * 2 年 <br> =160 萬"
        }else if(order == ageBalls.children.length -5){
            let catWord = '硬漢機器人騎著機車，眼看要撞上一隻在過馬路的貓咪，鐵漢柔情的他最後一刻閃開了貓咪但撞上了旁邊的奧迪。硬漢機器人沒有第三責任險，但硬漢機器人十分硬漢，不必付錢。'
            printVerbatim(catWord)
            let catDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            catDiv.style.width = moneyWidth+"px"
            catDiv.innerHTML = "支出<br>50 萬"
        }else{
            printVerbatim("")
            let noDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            noDiv.style.width = moneyWidth+"px"
            noDiv.innerHTML = "風平浪靜"
        }
        
        ageStage++

        // 最後結果
        let finalHandler = function(){
            let result={}
            if(nowFortune<dreamTotal){
                result.type="入<br>不<br>敷<br>出"
                result.typeDiscript="收入總值："+nowFortune+"<br>夢想總值："+dreamTotal+"<br>結果：收入不敷夢想的支出。這顆星球無法在這樣的收入情況下，完成星球中的夢想<br><br>參考處方籤：(1)增加收入(2)減少夢想價值"
                result.summary=""
            }else if(nowFortune >= dreamTotal && nowFortune < (dreamTotal+30000000)){
                result.type="精<br>益<br>求<br>精"
                result.typeDiscript="收入總值："+nowFortune+"<br>夢想總值："+dreamTotal+"<br>結果：收入足以負擔夢想價值。"
                result.summary=""
            }else{
                console.log(dreamTotal)
                result.type="無<br>所<br>畏<br>懼"
                result.typeDiscript="收入總值："+nowFortune+"<br>夢想總值："+dreamTotal+"<br>結果：收入爆表，財力驚人。"
                result.summary=""
            }
            
            


            let finalReport = createElement("DIV",{atrs:{
                className:"final-report"
            }},document.getElementsByTagName('body')[0])

            let finalReportContent = createElement("DIV",{atrs:{
                className:"final-report-content"
            }},finalReport)

            let finalTitle = createElement("DIV",{atrs:{
                className:"final-title",
                innerHTML:"診斷結果"
            }},finalReportContent)

            let finalContent = createElement("DIV",{atrs:{
                className:"final-content",
            }},finalReportContent)

            let finalContentType = createElement("DIV",{atrs:{
                className:"final-content-type",
                innerHTML:result.type
            }},finalContent)

            let finalContentTypeDiscript = createElement("DIV",{atrs:{
                className:"final-content-type-discript",
                innerHTML:result.typeDiscript
            }},finalContent)

            let finalContentSummary= createElement("DIV",{atrs:{
                className:"final-content-type-summary",
                innerHTML:result.summary
            }},finalReportContent)

            
        }

        if(ageStage == ageBalls.children.length){
            document.getElementsByClassName("next-button")[0].remove()
            let finalStage = createElement("BUTTON",{atrs:{
                className:"next-button",
                innerHTML:"診斷結果"
            }},document.getElementsByClassName("next-stage-button-place")[0])
            finalStage.addEventListener('click',finalHandler)
        }
        
    }
    window.scrollTo(0,0)
    document.getElementsByClassName('test-button')[0].disabled=true
    document.getElementsByClassName('test-button')[0].innerHTML="星球總價<br>"+dreamTotal

    let inputNum = document.getElementsByClassName("dream-total").length-1
    for(inputNum;inputNum >= 0; inputNum--){
        let inputValue = document.getElementsByClassName("dream-total")[inputNum].value
        document.getElementsByClassName("dream-total")[inputNum].remove()
        if(inputNum > 7){
            createElement("DIV",{atrs:{
                className:"dream-total-div",
                innerHTML:inputValue
            }},document.getElementsByClassName("basic-item")[inputNum-8])
        }else{
            createElement("DIV",{atrs:{
                className:"dream-total-div",
                innerHTML:inputValue
            }},document.getElementsByClassName("list-item")[inputNum])
        }
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
 
    setTimeout(function(){dreamBall.style.right="calc(0px + "+(amount*22)+"px)"},10)
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
