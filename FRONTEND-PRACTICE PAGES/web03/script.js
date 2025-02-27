var track = document.querySelector("#rectangle");

track.addEventListener("mousemove", function(properties){
    var rectangleLocation = track.getBoundingClientRect();

    var mouseInRectangle = (properties.clientX-rectangleLocation.left);
    
    if(mouseInRectangle < rectangleLocation.width/2){
        var redColor = gsap.utils.mapRange(0,rectangleLocation.width/2,250,0,mouseInRectangle);
        gsap.to(track,{
            backgroundColor: "rgb(0,0,"+redColor+")",
            ease: Power4
        })

    }else{
        var greenColor = gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,250,mouseInRectangle);
        gsap.to(track,{
            backgroundColor: "rgb(0,"+greenColor+",0)",
            ease: Power4
        })
    }
    
}) 



track.addEventListener("mouseleave", function(){
    gsap.to(track,{
        backgroundColor: "rgb(255,255,255)",
        ease: Power4
    })
 
})