
const getmindate = () =>{
    const date = Date.now() ;
    const newdate = new Date(date) ;

    const year = newdate.getFullYear() ;
    let month = newdate.getMonth()+1;
    const todaydate = newdate.getDate() ;

    console.log(month)

    if(month < 10){
        month = '0'+ month
    }
    console.log("month" , month)
    // let data = "2024-08-9"
    return `${year}-${month}-${todaydate}`
    // return data
    
}

module.exports = getmindate ;