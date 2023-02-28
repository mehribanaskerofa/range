const valuenumber=document.querySelector('.number')

const range=document.querySelector('.div')

const maxvaluenumber=document.querySelector('.faiz')


valuenumber.addEventListener('change',function(e){
    const value=e.target.value;

    if(value<=51){
    range.style.width=value+'%'//+': color:red'
    range.style.background='red'
    }
    else if(value>51 && value<=90){
    range.style.width=value+'%'//+': color:yellow'
    range.style.background='yellow'
    }
    else{
    range.style.width=value+'%'//+': color:green'
    range.style.background='green'
    }

    // console.log(value)
})
