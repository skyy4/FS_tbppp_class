// const head = document.getElementById('head');
// console.log(head);
//head.innerText = 'kuch bhi';
// head.style.color='red'
// head.style.border='5px solid green'
// const favCity= document.getElementsByClassName('favCity');
// console.log(favCity);

// for(let city of  favCity){
//     city.style.color='green'
// }
const container = document.querySelector('.container')
const btn = document.querySelector('#btn');
const para1 = document.createElement('p');
const para2 = document.createElement('p');
container.appendChild(para1)
container.appendChild(para2)

btn.addEventListener('click',()=>{
    console.log('button clicked');
    fetch('https://official-joke-api.appspot.com/random_joke')
.then((res)=>{
    console.log(res);
    return res.json();
   
})
.then((data)=>{
    console.log(data.setup);
    para1.innerText=data.setup
    setTimeout(()=>{
      para2.innerText= data.punchline
    },5000)

    
})
.catch((err)=>{
    console.log(err);
})
})



// let pr = new Promise((resolve, reject) => {
    
// })

