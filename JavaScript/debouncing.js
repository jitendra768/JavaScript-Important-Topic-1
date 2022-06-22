
let counter = 0;
function getData(){
    console.log('fetching data'+ counter++)
}

function mydebounce(call,d){
    let timer;
    return function(...args){
        if (timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            call();
        },d)
    }
}


const bestFunction = mydebounce(getData, 1000);