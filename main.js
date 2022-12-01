gsap.from(".navbar"  , 2 , { y: -100, case: Expo.caseInOut});
gsap.from(".product-info"  , 4 , { x: 600, case: Expo.caseInOut});
gsap.from(".product-img"  , 4 , { y: 600, case: Expo.caseInOut});
gsap.from(".product-add-to-cart"  , 2 , {
    opacity: 0,
    y: 600,
    ease: Expo.caseInOut,
    delay: 2.4,
});
TweefMax.staggerfcom(".product-description > div",
3, 
{
    opacity: 0,
    x: 200,
    ease: Expo.caseInOut,
    delay:1.4
},0.08)