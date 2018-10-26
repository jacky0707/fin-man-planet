let viewThings = {
    housePlace : [90,135,225,315,0],
    companyPlace : [45,180,270],
    weddingPlace : [22],
    kidPlace : [36,72,108,144,180,216,252,288,324,360],
    parentPlace : [262],
    retirePlace : [142],
    houseWords : "北市一間 20 坪房平均約 1000 萬",
    carWords : "基本的車款約 50 萬元",
    weddingWords : "一生一次一場難忘的婚禮大約花費 50 萬元",
    kidWords : "一個小孩從出生到大學畢業平均花費 400 萬元",
    parentWords : "預設的奉養費：一個月 5000 * 12 個月 * 40 年 = 240 萬元",
    planeWords:"預設的旅遊費：一年出遊 3 次 * 一次 2500元 * 60 年 = 45 萬元",
    retireWords : "預設理想的退休費：退休後每月生活費 20000 * 12 個月 * 20 年 = 480 萬元",
    companyWords : "預設創業準備金： 100 萬元",
    houseLength : 5,
    carLength : 8,
    weddingLength : 1,
    kidLength : 10,
    parentLength : 1,
    planeLength : 1,
    retireLength : 1,
    companyLength : 3,
    houseCost:10000000,
    carCost:500000,
    weddingCost:500000,
    kidCost:4000000,
    parentCost:2400000,
    planeCost:450000,
    retireCost:4800000,
    companyCost:1000000
}
viewThings.guideStep = function(step){
    let doctor = document.getElementsByClassName("doctor")[0]
    let bb = document.getElementsByClassName("black-background")[0]
    let planetPart = document.getElementsByClassName('planet-part')[0]

    switch(step){
        case 0:
        doctor.style.opacity = 1
        step0 = setTimeout(function(){
            viewThings.guideStep(1)
        },1500)
        break;

        case 1:
        let welcomeWords = "歡迎來到『理財宇宙』，我是星球醫生阿傑。"
        viewThings.drSay(welcomeWords)
        let saying = document.getElementsByClassName("saying")[0]
        step1 = setTimeout(function(){
            viewThings.guideStep(2)
        },2300)
        break;

        case 2:
        let myFaultwords = "你沒看到宇宙？？喔...抱歉我的錯。"
        viewThings.drSay(myFaultwords)
        step1_1 = setTimeout(function(){
            viewThings.guideStep(3)
        },2000)
        break;

        case 3:
        bb.style.background = "rgba(0,0,0,0)"
        step1_2 = setTimeout(function(){
            viewThings.guideStep(4)
        },2000)
        break;

        case 4:
        let showPlanetWords = "如剛剛所說，我是個醫生，專門診斷宇宙間各顆星球的問題。我先送你一顆，再跟你說明。"
        viewThings.drSay(showPlanetWords)
        step2_0 = setTimeout(function(){
            viewThings.guideStep(5)
        },3000)
        break;

        case 5:
        planetPart.style.opacity = 1;
        step3_0 = setTimeout(function(){
            viewThings.guideStep(6)
        },1500)
        break;

        case 6:
        let ableToClickWords = "星球很漂亮吧！之後你可以點選星球周圍各種使你人生更豐富圓滿的元素，他們便會出現在你的星球中。"
        viewThings.drSay(ableToClickWords)
        step3_1 = setTimeout(function(){
            viewThings.guideStep(7)
        },3500)
        break;

        case 7:
        let ableToAdjustWords = "同時，加入後的元素可以調整成你真正希望他所應該擁有的價值。"
        viewThings.drSay(ableToAdjustWords)
        document.getElementsByClassName("list-part")[0].style.opacity = 1
        step3_2 = setTimeout(function(){
            viewThings.guideStep(8)
        },3500)
        break;

        case 8:
        let basicInfoWords = "在按下最下面的診斷前的最後一步，請填入框框裡的基本資料，對你的生活狀況越清楚，診斷書的內容就會越詳細喔。"
        viewThings.drSay(basicInfoWords)
        document.getElementsByClassName("basic-information-part")[0].style.opacity = 1
        step3_3 = setTimeout(function(){
            viewThings.guideStep(9)
        },4500)
        break;

        case 9:
        let getStartWords = "現在就開始嘗試把夢想加入星球吧！"
        viewThings.drSay(getStartWords)
        initDreams()
        step3_4 = setTimeout(function(){
            document.getElementsByClassName("saying")[0].innerHTML =""
            document.getElementsByClassName('next-button')[0].innerHTML = "開<br>啟<br>教<br>學"
            teach = true
        },2000)
        break;
    }
}
viewThings.flyInToPlanet = function(target){
    //按鈕座標
    buttonX = tools.getPosition(target).x
    buttonY = tools.getPosition(target).y
    
    //動畫主角
    let flyingDream = document.createElement("DIV")
    flyingDream.classList.add('adding-dream')
    flyingDream.setAttribute("style","position:absolute;left:"+buttonX+"px;top:"+buttonY+"px;background:"+getComputedStyle(target).backgroundImage+"no-repeat scroll 50% 50% / contain padding-box border-box")
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
viewThings.dreamShowUp = function(dream){
    let amount = document.getElementsByClassName(dream+"-planet").length
    let newDream = tools.createElement("DIV",{atrs:{
        id:dream+amount,
        className:"planet-things "+dream+"-planet"
    }},document.getElementsByClassName("planet")[0])
    setTimeout(function(){
        newDream.style.display="block"
    },2100)
    return newDream
}
viewThings.addtoList = function(dream){
    let amount = document.getElementsByClassName(dream+'-ball').length
    let dreamBall = tools.createElement("DIV",{atrs:{
        id:'list'+dream+amount,
        className:"dream-ball "+dream+"-ball",
    }},document.getElementsByClassName("list-"+dream+"-balls")[0])
 
    setTimeout(function(){dreamBall.style.right="calc(0px + "+(amount*22)+"px)"},10)
}
viewThings.drSay = function(words,spaceTime){
    if(document.getElementsByClassName("saying")[0]){    
        document.getElementsByClassName("saying")[0].remove()
    }
    let sayingDiv = tools.createElement("DIV",{atrs:{
        className:"saying"
    }},document.getElementsByClassName('talk-place')[0])
    for(let wordsNum = 0;wordsNum<=words.length;wordsNum++){      
        oneWordByOneWord = setTimeout(function(){
            sayingDiv.innerHTML = words.substr(0,wordsNum)
        },50*wordsNum)
    }
}
viewThings.changeInputToDiv = function(){
    let inputNum = document.getElementsByClassName("dream-total").length-1
    for(inputNum;inputNum >= 0; inputNum--){
        let inputValue = document.getElementsByClassName("dream-total")[inputNum].value
        document.getElementsByClassName("dream-total")[inputNum].remove()
        if(inputNum > 7){
            tools.createElement("DIV",{atrs:{
                className:"dream-total-div",
                innerHTML:inputValue
            }},document.getElementsByClassName("basic-item")[inputNum-8])
        }else{
            tools.createElement("DIV",{atrs:{
                className:"dream-total-div",
                innerHTML:inputValue
            }},document.getElementsByClassName("list-item")[inputNum])
        }
    }
}
viewThings.prepareFinalValue = function(){
    let userDatas={}

    userDatas.salary = parseInt(tools.delComma(document.getElementsByName("salary")[0].value))
    userDatas.age = parseInt(tools.delComma(document.getElementsByName("age")[0].value))
    userDatas.retireAge = parseInt(tools.delComma(document.getElementsByName("retire-age")[0].value))
    userDatas.fortune = parseInt(tools.delComma(document.getElementsByName("fortune")[0].value))
    userDatas.dieAge = parseInt(tools.delComma(document.getElementsByName("die-age")[0].value))
    userDatas.cost = parseInt(tools.delComma(document.getElementsByName("cost")[0].value))

    userDatas.house = parseInt(tools.delComma(document.getElementsByName("house")[0].value))
    userDatas.car = parseInt(tools.delComma(document.getElementsByName("car")[0].value))
    userDatas.wedding = parseInt(tools.delComma(document.getElementsByName("wedding")[0].value))
    userDatas.kid = parseInt(tools.delComma(document.getElementsByName("kid")[0].value))
    userDatas.parent = parseInt(tools.delComma(document.getElementsByName("parent")[0].value))
    userDatas.plane = parseInt(tools.delComma(document.getElementsByName("plane")[0].value))
    userDatas.retire = parseInt(tools.delComma(document.getElementsByName("retire")[0].value))
    userDatas.company = parseInt(tools.delComma(document.getElementsByName("company")[0].value))
    
    userDatas.dreamTotal = userDatas.house+userDatas.car+userDatas.wedding+userDatas.kid+userDatas.parent+userDatas.plane+userDatas.retire+userDatas.company
    userDatas.totalMoney = (userDatas.retireAge - userDatas.age)*(userDatas.salary - (userDatas.cost*12))+ userDatas.fortune

    if(userDatas.totalMoney<userDatas.dreamTotal){
        userDatas.resultType="入不敷出"
        userDatas.resultTypeDiscript="收入總值："+tools.formatNumber(userDatas.totalMoney)+"<br>夢想總值："+tools.formatNumber(userDatas.dreamTotal)+"<br>結果：收入不敷夢想的支出。<br><br>這顆星球無法在這樣的收入情況下，完成星球中的夢想"
        userDatas.resultSummary="<br>您目前的收入不足以打造出您的夢想星球，這意味著您可能需要有更多的收入、降低您夢想的總值或著用更有效的方式來規劃財務。而沒有避險的的人生，就像買大樂透，是一種隨機的賭博。以上的各種問題，星球醫生阿傑都可以成為您的咨詢師給予適合您的建議。"
    }else if(userDatas.totalMoney >= userDatas.dreamTotal && userDatas.totalMoney < (userDatas.dreamTotal+30000000)){
        userDatas.resultType="精益求精"
        userDatas.resultTypeDiscript="收入總值："+tools.formatNumber(userDatas.totalMoney)+"<br>夢想總值："+tools.formatNumber(userDatas.dreamTotal)+"<br>結果：收入足以負擔夢想價值。<br><br>此份收入足以在退休前完成所有夢想"
        userDatas.resultSummary="<br>您的收入足以在沒有任何意外發生的情況下打造出夢想星球，但沒有避險的的人生，就像買大樂透，是一種隨機的賭博。居安思危、防微杜漸的人有能力活得更加自由！阿傑隨時樂意為您服務(連結)。"
    }else{
        userDatas.resultType="無所畏懼"
        userDatas.resultTypeDiscript="收入總值："+tools.formatNumber(userDatas.totalMoney)+"<br>夢想總值："+tools.formatNumber(userDatas.dreamTotal)+"<br>結果：收入爆表，財力驚人。<br><br>太厲害了，完成夢想算是輕而易舉呢"
        userDatas.resultSummary="<br>您擁有十分突出的薪水收入，在達成夢想的部分算是毫無困難的。但阿傑仍然建議您可以在理財和避險的部分有更近一步的了解，歡迎您透過以下連結聯絡我。"
    }
    return userDatas
}
viewThings.removeDreamAction = function(){
    let numberOfDreams = document.getElementsByClassName('dream-button').length
    for(dream=0;dream<numberOfDreams;dream++){
        let dreamElement = document.getElementsByClassName('dream-button')[dream]
        dreamElement.removeEventListener("mousedown",handler)
    } 
}

viewThings.createFinalDiv = function(){
    let finalValue = viewThings.prepareFinalValue()
    let finalReport = document.getElementsByClassName("final-report")[0]
    let finalReportContent = tools.createElement("DIV",{atrs:{
        className:"final-report-content",
        style:"box-shadow: 0px 0px 3px 3px greenyellow"
    }},finalReport)

    let finalTitle = tools.createElement("DIV",{atrs:{
        className:"final-title",
        innerHTML:"診斷結果-"+finalValue.resultType
    }},finalReportContent)

    let finalContent = tools.createElement("DIV",{atrs:{
        className:"final-content",
    }},finalReportContent)

    let canvasPart = tools.createElement("DIV",{atrs:{
        className:"final-content-type",
        //innerHTML:result.type
    }},finalContent)
    let finalContentType = tools.createElement("CANVAS",{atrs:{
        className:"pie"
    }},canvasPart)

    let finalContentTypeDiscript = tools.createElement("DIV",{atrs:{
        className:"final-content-type-discript",
        innerHTML:finalValue.resultTypeDiscript
    }},finalContent)

    let finalContentSummary= tools.createElement("DIV",{atrs:{
        className:"final-content-type-summary",
        innerHTML:finalValue.resultSummary
    }},finalReportContent)
    
    if(document.body.offsetWidth<=600){
        finalReport.style.height = "750px"
    }else if(document.body.offsetWidth>=1000){
        finalReport.style.height = "600px";
    }else{
        finalReport.style.height = "400px";
    }
    document.getElementsByClassName('planet-part')[0].style.top="50px"
    document.getElementsByClassName('list-part')[0].style.top="80px"
    document.getElementsByClassName('basic-information-part')[0].style.top="110px"
    document.getElementsByClassName('test-button')[0].disabled=true
    document.getElementsByClassName('test-button')[0].innerHTML="星球總價<br>"+tools.formatNumber(finalValue.dreamTotal)
    viewThings.createChart(finalValue)
}
viewThings.createChart = function(finalValue){
    let piePartDiv = document.getElementsByClassName('final-content-type')
    let pieLabels = ['房子','汽車','婚禮','孩子','孝親費','旅遊','退休','創業']
    let piePart = document.getElementsByClassName('pie')[0]
    console.log(finalValue)
    let pieChart = new Chart(piePart,{
        type:'pie',
        data:{
            labels:pieLabels,
            datasets:[{
                data:[finalValue.house,finalValue.car,finalValue.wedding,finalValue.kid,finalValue.parent,finalValue.plane,finalValue.retire,finalValue.company],
                backgroundColor:[
                    "rgba(222,184,135)",
                    "rgba(255,250,250)",
                    "rgba(230,230,250)",
                    "rgba(193,255,193)",
                    "rgba(255,146,143)",
                    "rgba(187,255,255)",
                    "rgba(255,193,193)",
                    "rgba(255,187,255)"
                ],
                borderColor:"transparent",
                
            }]
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
}

viewThings.handlerDream = function(dreamTarget){
    if(document.getElementsByClassName(dreamTarget.id+'-planet').length == viewThings[dreamTarget.id+'Length']){
        dreamTarget.disabled = true
    }else{
        tools.clearTimeOuts()
        viewThings.drSay(viewThings[dreamTarget.id+'Words'])
        viewThings.flyInToPlanet(dreamTarget)
        let rotateDeg = (viewThings[dreamTarget.id+"Place"]) ? viewThings[dreamTarget.id+"Place"].pop() : 0
        viewThings.dreamShowUp(dreamTarget.id).style.transform = "rotate("+rotateDeg+"deg)"
        viewThings.addtoList(dreamTarget.id)
        let dreamValue = document.getElementsByName(dreamTarget.id)[0].value
        document.getElementsByName(dreamTarget.id)[0].value = tools.formatNumber(parseInt(tools.delComma(dreamValue)) + viewThings[dreamTarget.id+"Cost"])
    }
}