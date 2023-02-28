const valuenumber=document.querySelector('.number')

const range=document.querySelector('.div')

const maxvaluenumber=document.querySelector('#faiz')
console.log(maxvaluenumber.value)

valuenumber.addEventListener('change',function(e){
    const value=e.target.value;

    if(value<=(maxvaluenumber/2)){
    range.style.width=value+'%'//+': color:red'
    range.style.background='red'
    }
    else if(value>(maxvaluenumber/2) && value<((maxvaluenumber*90)/100)){
    range.style.width=value+'%'//+': color:yellow'
    range.style.background='yellow'
    }
    else{
    range.style.width=value+'%'//+': color:green'
    range.style.background='green'
    }

    // console.log(value)
})
