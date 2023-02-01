let move = 40;
gsap .from(".boxes",{ ease: "bounce", duration: 1, delay: 0.5, stagger: .1, y: function(i){

if (i%1 ===1) return move
else return -move
}
})

gsap .from( ".photo-background",{duration: 3, delay: 2, y: 100, opacity: 0}) 
gsap .from( ".photo-img",{duration: 5, delay: 4, y: 100, opacity: 0}) 