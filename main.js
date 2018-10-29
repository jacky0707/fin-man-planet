function skip(){
    // 跳過教學 
    let skipButton = document.getElementById('skip-button')
    if(teach){    
        // 開啟教學
        tools.clearTimeOuts()        
        viewThings.guideStep(6)
    }else{
        // 關閉教學-讓所有 part 顯示
        viewThings.guideStep(9)
        document.getElementsByClassName("doctor")[0].style.opacity = 1
        document.getElementsByClassName("black-background")[0].style.background = "rgba(0,0,0,0)"
        document.getElementsByClassName('planet-part')[0].style.opacity = 1;
        document.getElementsByClassName("list-part")[0].style.opacity = 1
        document.getElementsByClassName("basic-information-part")[0].style.opacity = 1
        document.getElementsByClassName('next-button')[0].innerHTML = "開<br>啟<br>教<br>學"
        tools.clearTimeOuts()
    }
}


let handler = function(event){
    // 夢想按鈕
    viewThings.handlerDream(event.target)
}
function initDreams(){
    let numberOfDreams = document.getElementsByClassName('dream-button').length
    for(dream=0;dream<numberOfDreams;dream++){
        let dreamElement = document.getElementsByClassName('dream-button')[dream]
        dreamElement.addEventListener("mousedown",handler)
    } 
}
function startTest(){
    // 進行診斷
    tools.clearTimeOuts()
    viewThings.removeDreamAction()
    viewThings.createFinalDiv()
    window.scrollTo(0,0)
    viewThings.changeInputToDiv()
    viewThings.createResetButton()
    let secondPageWord = "這邊診斷收入總值的計算是：將您的年薪扣掉每年的生活費，再乘以工作年數，暫時忽略加薪及通膨的部分。"
    viewThings.drSay(secondPageWord)
}  
