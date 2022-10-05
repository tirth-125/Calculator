
let string = "";
let buttons = document.querySelectorAll('.button');
console.log('Tirth');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '=') {

            string=eval(string);
            document.querySelector('input').value=string;
            
        }
        else if (e.target.innerHTML == 'C') {

            string= "";
            document.querySelector('input').value=string;
            
        }
        else if (e.target.innerHTML == 'AC') {
            
            // string = string + e.target.innerHTML;
            
            // document.querySelector('input').value=string.slice(0,-1); 

            
            document.querySelector('input').value=document.querySelector('input').value.slice(0,-1);


        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
    })

})
