const menuMobileButton = document.getElementById("button-mobile-menu");
const menuMobile = document.getElementById("mobile-menu");
let menuOptions = document.querySelectorAll(".menu-option");

/*SVG*/
let line1 = document.getElementById("line1"); 
let line2 = document.getElementById("line2"); 

menuMobileButton.addEventListener('click', function(){
    if(menuMobile.classList.contains('opened')){
        menuMobile.classList.remove('opened');
        menuMobile.classList.add('closed');
        line1.setAttribute('x1', '20');
        line1.setAttribute('y1', '35');
        line1.setAttribute('x2', '80');
        line1.setAttribute('y2', '35');
        line2.setAttribute('x1', '20');
        line2.setAttribute('y1', '65');
        line2.setAttribute('x2', '80');
        line2.setAttribute('y2', '65');
        menuMobileButton.style.backgroundColor = '#00A5CF';
        line1.setAttribute('stroke', 'black');
        line2.setAttribute('stroke', 'black');
        
    } else {
        menuMobile.classList.add('opened');
        menuMobile.classList.remove('closed');
        line1.setAttribute('x1', '20');
        line1.setAttribute('y1', '20');
        line1.setAttribute('x2', '80');
        line1.setAttribute('y2', '80');
        line2.setAttribute('x1', '80');
        line2.setAttribute('y1', '20');
        line2.setAttribute('x2', '20');
        line2.setAttribute('y2', '80');
        menuMobileButton.style.backgroundColor = 'transparent';
        line1.setAttribute('stroke', '#00A5CF');
        line2.setAttribute('stroke', '#00A5CF');
    }
});
menuOptions.forEach(function(menuOption) {
    menuOption.addEventListener("click", function() {
        console.log('working');
        menuMobile.classList.remove('opened');
        menuMobile.classList.add('closed');
        line1.setAttribute('x1', '20');
        line1.setAttribute('y1', '35');
        line1.setAttribute('x2', '80');
        line1.setAttribute('y2', '35');
        line2.setAttribute('x1', '20');
        line2.setAttribute('y1', '65');
        line2.setAttribute('x2', '80');
        line2.setAttribute('y2', '65');
        menuMobileButton.style.backgroundColor = '#00A5CF';
        line1.setAttribute('stroke', 'black');
        line2.setAttribute('stroke', 'black');
    });
});

