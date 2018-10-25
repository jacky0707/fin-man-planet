function skip(){
    let skipButton = document.getElementById('skip-button')

    if(teach){    
        tools.clearTimeOuts()        
        viewThings.guideStep(6)
    }else{
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


let handler = function(event){
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
    tools.clearTimeOuts()
    viewThings.removeDreamAction()
    viewThings.createFinalDiv()
    window.scrollTo(0,0)
    viewThings.changeInputToDiv()

    let secondPageWord = "這邊診斷收入總值的計算是：將您的年薪扣掉每年的生活費，再乘以工作年數，暫時忽略加薪及通膨的部分。"
    viewThings.drSay(secondPageWord)
}  
    /*let nextHandler = function(){
        let skipButton = document.getElementById('skip-button')
        let nextStage = document.getElementById('next')
        let moneyDetailPart = document.getElementsByClassName('money-detail-part')[0]
        let ageBalls = document.getElementsByClassName('age-ball-part')[0]
        let order = ageBalls.children.length - ageStage -1
        let outsideWidth = (document.body.clientWidth - document.getElementsByClassName('test-part')[0].offsetWidth)/2
           
        statePositionX = getPosition(document.getElementsByClassName("age-ball-part")[0].children[order]).x

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

        if(document.getElementsByClassName('money-detail')[0]){
            document.getElementsByClassName('money-detail')[0].innerHTML = "支出 <br> $25 萬<br> 收入 <br>$"+saveIncome[ageStage-1]+" 萬"
            let savingDiv = document.getElementsByClassName('money-detail')[0]
            let costDes = createElement("BUTTON",{atrs:{
                className:"cost-des"
            }},savingDiv)
            costDes.addEventListener('click',function(){
                if(document.getElementById('saving-close')){

                }else{
                    let desPart = createElement("DIV",{atrs:{
                        id:"saving-close",
                        className:"des-part",
                        innerHTML:"此處範例使用一年 1% 的利率"
                    }},document.getElementsByClassName('test-part')[0])
                    let closeDesPart = createElement("BUTTON",{atrs:{
                        className:"close-button",
                    }},desPart)
                    closeDesPart.addEventListener("click",function(){
                        document.getElementById('saving-close').remove()
                    })
                }
            })
        }
        
        let moneyWidth = (805/ageBalls.children.length)
        if(order == ageBalls.children.length -1){
            // 第一步
            let savingWord = '信箱裡寄來一封六年期，每年五萬保費的儲蓄險宣傳單。'
            drSay(savingWord)
            let savingDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            savingDiv.style.width = moneyWidth+"px"
            savingDiv.innerHTML = "支出 <br> $0 萬<br> 收入 <br>$0 萬"
            let costDes = createElement("BUTTON",{atrs:{
                className:"cost-des"
            }},savingDiv)
            accident = accident + 0
            barChart.data.datasets[0].data = [dreamTotal,nowFortune,accident]
            barChart.update()
            costDes.addEventListener('click',function(){
                if(document.getElementById('saving-close')){

                }else{
                    let desPart = createElement("DIV",{atrs:{
                        id:"saving-close",
                        className:"des-part",
                        innerHTML:"此處範例使用一年 1% 的利率"
                    }},document.getElementsByClassName('test-part')[0])
                    let closeDesPart = createElement("BUTTON",{atrs:{
                        className:"close-button",
                    }},desPart)
                    closeDesPart.addEventListener("click",function(){
                        document.getElementById('saving-close').remove()
                    })
                }
            })
        }else if(order == 0){
            // 最後一步
            let finWord = '小白機器人度過了'+ (newAge - age) +'年，也到了機器人生的畢業典禮，謝謝機器人的付出。那麼來看看小白機器人的機器人生吧！'
            drSay(finWord)
            let finDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            finDiv.style.width = moneyWidth+"px"
            finDiv.innerHTML = "謝謝付出"
            accident = accident + 0
            barChart.data.datasets[0].data = [dreamTotal,nowFortune,accident]
            barChart.update()
        }else if(order == 1 && newAge >= 65){
            let longWord = '到了這個歲數，小白機器人然漸漸地無法自理生活而需要看護的幫助，因此找了一位外國看護來協助打理生活。'
            drSay(longWord)
            let longDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            longDiv.style.width = moneyWidth+"px"
            longDiv.innerHTML = "支出 <br> $240 萬 / $600 萬"
            let costDes = createElement("BUTTON",{atrs:{
                className:"cost-des"
            }},longDiv)
            accident = accident + 2400000
            barChart.data.datasets[0].data = [dreamTotal,nowFortune,accident]
            barChart.update()
            costDes.addEventListener('click',function(){
                if(document.getElementById('long-close')){

                }else{
                    let desPart = createElement("DIV",{atrs:{
                        id:"long-close",
                        className:"des-part",
                        innerHTML:"外國看護一個月兩萬薪資，台灣看護一個月四萬薪資，台灣平均長照時間為 10 年<br>20000*12*10=240 萬<br>50000*12*10=600 萬"
                    }},document.getElementsByClassName('test-part')[0])
                    let closeDesPart = createElement("BUTTON",{atrs:{
                        className:"close-button",
                    }},desPart)
                    closeDesPart.addEventListener("click",function(){
                        document.getElementById('long-close').remove()
                    })
                }
            })
        }else if(newAge >= retireAge && newAge < (retireAge+10)){
            let retireWord = '退休了，小白機器人在家裡舒舒服服，享受回歸自由。但同時也不再有收入了。'
            drSay(retireWord)
            let retireDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            retireDiv.style.width = moneyWidth+"px"
            retireDiv.innerHTML = "支出<br>$0 萬"
            accident = accident + 0
            barChart.data.datasets[0].data = [dreamTotal,nowFortune,accident]
            barChart.update()
        }else if(order == ageBalls.children.length -2){
            let tripWord = '小白機器人到日本玩。出發前在機場買了旅行平安險。回程時剛好遇上颱風，讓小白機器人在機場多待了兩天。'
            drSay(tripWord)
            let tripDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            tripDiv.style.width = moneyWidth+"px"
            tripDiv.innerHTML = "支出<br> $500 元<br> 收入 <br> $3000 元"
            let costDes = createElement("BUTTON",{atrs:{
                className:"cost-des"
            }},tripDiv)
            accident = accident + 0
            barChart.data.datasets[0].data = [dreamTotal,nowFortune,accident]
            barChart.update()
            costDes.addEventListener('click',function(){
                if(document.getElementById('trip-close')){

                }else{
                    let desPart = createElement("DIV",{atrs:{
                        id:"trip-close",
                        className:"des-part",
                        innerHTML:"各家旅遊平安險理賠項目不盡相同，購買前請詳細查閱條款。"
                    }},document.getElementsByClassName('test-part')[0])
                    let closeDesPart = createElement("BUTTON",{atrs:{
                        className:"close-button",
                    }},desPart)
                    closeDesPart.addEventListener("click",function(){
                        document.getElementById('trip-close').remove()
                    })
                }
            })
        }else if(order == ageBalls.children.length -3){
            let sickWord = '這個夏天流感盛行，小白機器人的病情嚴重到需要住院了，但是健保病床全部爆滿，小白機器人只能自費醫院單人房，一住就是一個星期。'
            drSay(sickWord)
            let sickDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            sickDiv.style.width = moneyWidth+"px"
            sickDiv.innerHTML = "支出<br> $35000 元"
            let costDes = createElement("BUTTON",{atrs:{
                className:"cost-des"
            }},sickDiv)
            accident = accident + 35000
            barChart.data.datasets[0].data = [dreamTotal,nowFortune,accident]
            barChart.update()
            costDes.addEventListener('click',function(){
                if(document.getElementById('sick-close')){

                }else{
                    let desPart = createElement("DIV",{atrs:{
                        id:"sick-close",
                        className:"des-part",
                        innerHTML:"各家醫院自費病床價格不盡相同，此處以台大醫院<br>(2080 元～ 8000 元)<br>之平均為範例。"
                    }},document.getElementsByClassName('test-part')[0])
                    let closeDesPart = createElement("BUTTON",{atrs:{
                        className:"close-button",
                    }},desPart)
                    closeDesPart.addEventListener("click",function(){
                        document.getElementById('sick-close').remove()
                    })
                }
            })
        }else if(order == ageBalls.children.length -4){
            let cancerWord = '今年的壓力特別大，小白機器人不幸的被診斷出了機器癌第一期 ( 在台灣每五分鐘就有一人罹癌 )。經過三年的療程，小白順利完全康復了！'
            drSay(cancerWord)
            let cancerDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            cancerDiv.style.width = moneyWidth+"px"
            cancerDiv.innerHTML = "支出 <br>$240 萬"
            let costDes = createElement("BUTTON",{atrs:{
                className:"cost-des"
            }},cancerDiv)
            accident = accident + 2400000
            barChart.data.datasets[0].data = [dreamTotal,nowFortune,accident]
            barChart.update()
            costDes.addEventListener('click',function(){
                if(document.getElementById('cancel-close')){

                }else{
                    let desPart = createElement("DIV",{atrs:{
                        id:"cancel-close",
                        className:"des-part",
                        innerHTML:"用於治療癌症之藥物，平均每年花費 80~120 萬。"
                    }},document.getElementsByClassName('test-part')[0])
                    let closeDesPart = createElement("BUTTON",{atrs:{
                        className:"close-button",
                    }},desPart)
                    closeDesPart.addEventListener("click",function(){
                        document.getElementById('cancel-close').remove()
                    })
                }
            })
        }else if(order == ageBalls.children.length -5){
            let catWord = '小白機器人騎著機車，眼看要撞上一隻在過馬路的貓咪，鐵漢柔情的他最後一刻閃開了貓咪但撞上了旁邊的奧迪。'
            drSay(catWord)
            let catDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            catDiv.style.width = moneyWidth+"px"
            catDiv.innerHTML = "支出<br>$5 萬"
            let costDes = createElement("BUTTON",{atrs:{
                className:"cost-des"
            }},catDiv)
            accident = accident + 50000
            barChart.data.datasets[0].data = [dreamTotal,nowFortune,accident]
            barChart.update()
            costDes.addEventListener('click',function(){
                if(document.getElementById('cat-close')){

                }else{
                    let desPart = createElement("DIV",{atrs:{
                        id:"cat-close",
                        className:"des-part",
                        innerHTML:"所幸撞得不嚴重，花錢消災就好。"
                    }},document.getElementsByClassName('test-part')[0])
                    let closeDesPart = createElement("BUTTON",{atrs:{
                        className:"close-button",
                    }},desPart)
                    closeDesPart.addEventListener("click",function(){
                        document.getElementById('cat-close').remove()
                    })
                }
            })
        }else{
            drSay("")
            let noDiv = createElement("DIV",{atrs:{
                className:"money-detail"
            }},moneyDetailPart)
            noDiv.style.width = moneyWidth+"px"
            noDiv.innerHTML = "風平浪靜"
        }
        ageStage++
        
    }*/








