// Event Bubling And Event Cpturing Event Propagation, preventdfault,

// 1-- Event Bubling going child to parent 


// const div = document.querySelector('div');
// const button = document.querySelector('button');

// div.addEventListener("click",()=>{
//     console.log("div");
// })

// button.addEventListener("click",()=>{
//     console.log("button");
// })


// 2-- Event Capturing going to parent to child 


// const div = document.querySelector('div');
// const button = document.querySelector('button');

// div.addEventListener("click",()=>{
//     console.log("div");
// },true)

// button.addEventListener("click",()=>{
//     console.log("button");
// },true)

// 3-- Event stopPropagation stop child to parent and parent to child 


// const div = document.querySelector('div');
// const button = document.querySelector('button');

// div.addEventListener("click",(event)=>{
//     console.log("div");
// })

// button.addEventListener("click",(event)=>{
//     event.stopPropagation();
//     console.log("button");
// })

// 4-- immediatePropagation means we have multiple button event wahi se stop kr do parent pe nai jaana h


// const div = document.querySelector('div');
// const button = document.querySelector('button');

// div.addEventListener("click",(event)=>{
//     console.log("div");
// })

// button.addEventListener("click",(event)=>{
//     console.log("button");
// });

// button.addEventListener("click",(event)=>{
//     event.stopImmediatePropagation();
//     console.log("button1");
// })

// button.addEventListener("click",(event)=>{
//     console.log("button2");
// })

// 5-- prevent Dfault 

const div = document.querySelector('div');
const button = document.querySelector('button');
const a = document.querySelector('a');

div.addEventListener("click",(event)=>{
    console.log("div");
})

button.addEventListener("click",(event)=>{
    console.log("button");
});

a.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log('home');
})

