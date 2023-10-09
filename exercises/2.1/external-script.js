function addDateTime(message){
    const dateTimeNow = new Date();
    const date= dateTimeNow.toLocaleDateString() + dateTimeNow.toLocaleTimeString();
    console.log(date);
    return date +" : "+message;
}

alert(addDateTime("hello"));