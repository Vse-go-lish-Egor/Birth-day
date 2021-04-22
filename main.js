const title = document.getElementById('secret-text')


setInterval(() => {
  addStyle(title)
}, 300);

setInterval(() =>{
  addStyle1(title)
}, 600 )



function addStyle(node){
  node.style.color ="#44342f";
 

}

function addStyle1(node){
  node.style.color="#7e1613";
 
    
}