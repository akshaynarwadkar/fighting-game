
const p1HealthEl=document.getElementById('p1-health')
const p2HealthEl=document.getElementById('p2-health')
const winnerEl=document.getElementById('winner')
const btnResetEl=document.getElementById('btn-reset')

let currentHealth1=100
let currentHealth2=100
let healthgain1
let healthgain2
    document.addEventListener('keydown',function(e){


        //strike section

        if(e.key==='q' & currentHealth2>=0 & currentHealth1!=0){
            
            let strike=Math.floor(Math.random()*9+1)
            // console.log(strike)
            currentHealth2=currentHealth2-strike
           
            if(currentHealth2<=0){

                currentHealth2=0
                p2HealthEl.innerText=0
    
                winnerEl.innerText='P1 is winner'
                
    
            }else{
                p2HealthEl.innerText=currentHealth2
            }
        }
    
        if(e.key==='a' & currentHealth1>=0 & currentHealth2!=0){
         
            let strike=Math.floor(Math.random()*9+1)
            // console.log(strike)
            currentHealth1=currentHealth1-strike
            if(currentHealth1<=0){
                currentHealth1=0
                p1HealthEl.innerText=0
                winnerEl.innerText='P2 is winner'
               
            }else{
                p1HealthEl.innerText=currentHealth1
            }
        }


        //health section

        if(e.key==='w'){
            if(currentHealth1>0&currentHealth1<100&currentHealth2!=0){
                healthgain1=Math.floor(Math.random()*4+1)
                currentHealth1=currentHealth1+healthgain1
                if(currentHealth1>100){
                    currentHealth1=100
                    p1HealthEl.innerText=currentHealth1
                }else{
                    p1HealthEl.innerText=currentHealth1
                }
            }        
        }

        if(e.key==='s'){
            if(currentHealth2>0&currentHealth2<100&currentHealth1!=0){
                healthgain2=Math.floor(Math.random()*4+1)
                currentHealth2=currentHealth2+healthgain2
                if(currentHealth2>100){
                    currentHealth2=100
                    p2HealthEl.innerText=currentHealth2
                }else{
                    p2HealthEl.innerText=currentHealth2
                }
            }        
        }

    
    
    })

    btnResetEl.onclick=()=>{
        currentHealth1=100
        currentHealth2=100
        p2HealthEl.innerText=currentHealth2
        p1HealthEl.innerText=currentHealth1
        winnerEl.innerText=''

    }
