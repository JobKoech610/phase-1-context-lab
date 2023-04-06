/*Your Code Here */
// function one
function createEmployeeRecord (array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
  }
  //function two
 function createEmployeeRecords (array2) {
    return array2.map(function(array){
        return createEmployeeRecord(array)
    })
  }
  //function three
 function createTimeInEvent (dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })
    return this
  }
  //function four
  function createTimeOutEvent (dateStamp){
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
  }
  //function five
   function hoursWorkedOnDate (date2){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === date2
    })
    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === date2
    })
    return (outEvent.hour - inEvent.hour) / 100
  }
  //function six
  const wagesEarnedOnDate = function(date3){
    let wage = hoursWorkedOnDate.call(this, date3)
        * this.payPerHour
    return parseFloat(wage.toString())
  }
  //function seven
 function allWagesFor(){
    let date4 = this.timeInEvents.map(function(e){
        return e.date
    })
    let payable = date4.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)
    return payable
  }
  //function eight
   function findEmployeeByFirstName (srcArray, firstName) {
  return srcArray.find(function(record){
    return record.firstName === firstName
  })
  }
  //function nine
   function calculatePayroll (arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, record){
        return memo + allWagesFor.call(record)
    }, 0)
  }
 