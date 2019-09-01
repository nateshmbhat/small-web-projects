const name = document.getElementById('name');
const { x, y, width, depth } = name.getBoundingClientRect();
const namePos = {x:x , y:y} ;
const mousePos = {x:1 , y:1}
const xoffSetAdjust = 500; 
const yoffSetAdjust = 170 ; 

document.addEventListener('mousemove', (obj) => {
    mousePos.x = obj.screenX;
    mousePos.y = obj.screenY;

    const res = {x : namePos.x-mousePos.x , y : namePos.y-mousePos.y } ; 
    let xShadow = (res.x+xoffSetAdjust) , yShadow = (res.y+yoffSetAdjust) ;
    let xSign = xShadow/Math.abs(xShadow) , ySign = yShadow/Math.abs(yShadow)
    let xVal= Math.abs(xShadow) , yVal = Math.abs(yShadow) ; 
    
    name.style.textShadow = `${xSign==-1?'-':''}${Math.min(xVal,50)}px ${ySign==-1?'-':''}${Math.min(yVal,22)}px ${Math.max( (Math.max(xVal,yVal)-20)*0.1, 8)}px black` ;
    console.log( xSign , ySign ,  name.style.textShadow) 
})


