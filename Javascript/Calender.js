//import eventFile from "./JSON/events.json" with {type:"json"} //fix Import Statment
//console.log(eventFile)

//const Events = JSON.parse(eventFile)

const WeekDays = [
    {name:"Sunday",value:0},
    {name:"Monday",value:1},
    {name:"Tuesday",value:2},
    {name:"Wednesday",value:3},
    {name:"Thursday",value:4},
    {name:"Friday",value:5},
    {name:"Saturday",value:6}
]

const Months = [
    {name:"January",value:0},
    {name:"Febuary",value:1},
    {name:"March",value:2},
    {name:"April",value:3},
    {name:"May",value:4},
    {name:"June",value:5},
    {name:"July",value:6},
    {name:"August",value:7},
    {name:"September",value:8},
    {name:"October",value:9},
    {name:"November",value:10},
    {name:"December",value:11}
]

function generateCalender(containterId,startWeekDay,DayAmt){
    let month = document.getElementById(containterId)
    let addValue = 0 //Value that the calender will start appending values at

    WeekDays.forEach(WeekDays => { //Obtain Start Week Day
        if (WeekDays.name == startWeekDay){
            addValue = WeekDays.value
        }
    })

    let weekHeader = document.createElement('tr') //Not Aligning Properly
    weekHeader.setAttribute("id","WeekHeader")

    WeekDays.forEach(WeekDays => {
        weekNode = document.createElement('th')
        weekNode.setAttribute("class", "week gridItemWeek")
        weekNode.appendChild(document.createTextNode(WeekDays.name))
        weekHeader.appendChild(weekNode)
    })

    month.appendChild(weekHeader)

    let rowNum = Math.ceil(DayAmt / 7)
    let totalCount = 0
    let dayCount = 0

    for (let i = 0; i < rowNum; i++){
        week = document.createElement('tr') //Week
        
        for (let j = 0; j < 7; j++){
            day = document.createElement('td') //Day
            day.setAttribute("class","days gridItem")
            totalCount += 1
            if (totalCount > addValue && dayCount < DayAmt){
                dayCount += 1
                spanText = document.createTextNode(dayCount.toString())
            }else{
                spanText = document.createTextNode("N/A")
            }

            let numlabel = document.createElement("span")
            numlabel.setAttribute("class","dayNum")
            numlabel.appendChild(spanText)

            //let eventList = Events.forEach(Events => {
            //    let eventList = document.createElement("li")
            //    eventList.setAttribute("class","eventLabel")
            //    if (Events.month == containterId && Events.day == dayCount){
            //        eventLabel = document.createElement("ul")
            //        eventText = document.createTextNode(Events.text)
            //        eventLabel.appendChild(eventText)
            //        eventList.appendChild(eventLabel)
            //    }
            //})

            day.appendChild(numlabel)
            day.appendChild(document.createElement("br"))
            //day.appendChild(eventList)
            week.appendChild(day)
        }
        
        month.appendChild(week)
    }
}

function makeCalenderBody(){
    let body = document.getElementById("Calenders")

    for (let i = 0; i < 12; ++i){
        let title = document.createElement("p")
        title.appendChild(document.createTextNode(Months[i].name))
        title.setAttribute("class","monthName")
        let cal = document.createElement("table")
        cal.setAttribute("id",Months[i].name)
        cal.setAttribute("class","Calender")

        body.appendChild(title)
        body.appendChild(cal)
    }
}

makeCalenderBody()

const Calenders = document.getElementsByClassName("Calender")
const StartDays = ["Monday","Thursday","Friday","Monday","Wednesday","Saturday","Monday","Thursday","Sunday","Tuesday","Friday","Sunday"]
const StartDayNum = [31,29,31,30,31,30,31,31,30,31,30,31]

let count = 0

for (let i = 0; i < Calenders.length + 1; i++){ 
    let item = Calenders[i]
    generateCalender(item.id,StartDays[count],StartDayNum[count])
    count += 1
}