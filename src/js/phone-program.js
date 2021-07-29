var clockBoolean = false;

function phoneProgram() {

    var onOff = document.getElementById('phone_on_off');


    function ProgramOff() {
        var screen = document.getElementById('screen_on');

        onOff.removeEventListener('click', ProgramOff);
        onOff.addEventListener('click', ProgramOn);
        clockBoolean = false;
        screen.parentNode.removeChild(screen);
        /* newer method: screen.remove(); */

    };

    function ProgramOn() {

        onOff.removeEventListener('click', ProgramOn);
        onOff.addEventListener('click', ProgramOff);
        clockBoolean = true;
        
        var outScreen = document.getElementById('phone_top_screen');
        var screen = document.createElement('div');
        var topBar = document.createElement('div');
        var phoneNav = document.createElement('div');
        var teleContainer = document.createElement('div');
        
        topBar.classList.add('top__bar', 'no-select');
        topBar.innerHTML = '<i class="fa fa-signal top__bar--icon"></i><i class="fa fa-battery-half top__bar--icon"></i>';
        screen.appendChild(topBar);
        
        phoneNav.classList.add('phone__nav', 'no-select');
        phoneNav.innerHTML = 
            '<span id="phone-menu"class="phone__nav--icon">Menu</span>' + 
            '<span id="phone-contact" class="phone__nav--icon">Kontakt</span>';
        screen.appendChild(phoneNav);
        
        screen.setAttribute('id', 'screen_on');
        screen.classList.add('mainDesktop');
        outScreen.appendChild(screen);

        function mainDesktop() {
                
            while (teleContainer.firstChild) {
                    teleContainer.removeChild(teleContainer.firstChild) 
                };
            
                topBar.style.backgroundColor = 'rgba(0,0,0,0.5)';
                teleContainer.style.backgroundColor = 'transparent';
                phoneNav.style.backgroundColor = 'transparent';
            
            function clock() {
                var hoursMinutes = document.createElement('div');
                var dayMonthYear = document.createElement('div');

                teleContainer.classList.add('tele-container');
                hoursMinutes.classList.add('hours-minutes');
                dayMonthYear.classList.add('day-month-year');

                teleContainer.appendChild(hoursMinutes);
                teleContainer.appendChild(dayMonthYear);
                screen.appendChild(teleContainer);

                timer();
            };
            clock();
            
            
            
        };
        mainDesktop();
        
        var phoneCont = document.getElementById('phone-contact');
        phoneCont.addEventListener('click', contact);
        
        
        
        function contact(){
            
            clockBoolean = false;
                phoneCont.removeEventListener('click', contact);
            
                while (teleContainer.firstChild) {
                    teleContainer.removeChild(teleContainer.firstChild)
                };
            topBar.style.backgroundColor = 'rgba(0,0,0,0.8)';
            teleContainer.style.backgroundColor = 'rgba(0,0,0,0.8)';
            phoneNav.style.backgroundColor = 'rgba(0,0,0,0.8)';
            
            var contactContainer = document.createElement('div');
            var mailBox = document.createElement('div');
            var fbBox = document.createElement('div');
            var githubBox = document.createElement('div');
            
            contactContainer.classList.add('phone__contact-container');
            mailBox.classList.add('cc__box', 'cc__box--mail');
            fbBox.classList.add('cc__box', 'cc__box--fb');
            githubBox.classList.add('cc__box', 'cc__box--github');
            
            mailBox.innerHTML = '<span class="cc__link cc__box--mail-block">My mail</span>';
            fbBox.innerHTML = 
                '<a class="cc__link cc__box--fb-block" href="https://www.facebook.com/teofil.turczynowicz.73" title="Mój profil na Facebook\'u">Facebook</a>';
            githubBox.innerHTML = 
                '<a class="cc__link cc__link cc__box--github-block" href="https://github.com/kosmaTeo" title="Mój profil na GitHub">GitHub</a>';
            
                contactContainer.appendChild(mailBox);
                contactContainer.appendChild(fbBox);
                contactContainer.appendChild(githubBox);
                    teleContainer.appendChild(contactContainer);
            
            
            //show popup window with email
            
            mailBox.onclick = function(){
                var background = document.createElement('div');
                var showBox = document.createElement('div');
                
                background.classList.add('contacts__popup--bg');
                showBox.classList.add('contacts__popup');
                
                showBox.innerHTML = 
                    '<span class="contacts__popup--mail">mój adres email:<br> turczynowicz2018@gmail.com</span>' +
                    '<button id="closePopup" class="contacts__popup--button">ZAMKNIJ</button>';
                
                background.appendChild(showBox);
                document.body.appendChild(background);
                
                var closePopup = document.getElementById('closePopup');
                closePopup.onclick = function(){
                    background.parentNode.removeChild(background);
                };
                
            };
            
                phoneMenu.addEventListener('click', menu);
                phoneCont.addEventListener('click', deleteTime);
            };
        
        
        
        
            var phoneMenu = document.getElementById('phone-menu');
            phoneMenu.addEventListener('click', menu);
        
        function menu(){
            
            clockBoolean = false;
                phoneMenu.removeEventListener('click', menu);
            
                while (teleContainer.firstChild) {
                    teleContainer.removeChild(teleContainer.firstChild)
                };
            
            topBar.style.backgroundColor = 'rgba(0,0,0,0.8)';
            teleContainer.style.backgroundColor = 'rgba(0,0,0,0.8)';
            phoneNav.style.backgroundColor = 'rgba(0,0,0,0.8)';

            var appMenu = document.createElement('div');
            appMenu.classList.add('appmenu');
            
            appMenu.innerHTML = 
                '<i class="appmenu__icon fa fa-calculator"></i>' +
                '<i class="appmenu__icon fa fa-clock-o"></i>' +
                '<i class="appmenu__icon fa fa-headphones"></i>' +
                '<i class="appmenu__icon fa fa-video-camera"></i>' +
                '<i class="appmenu__icon fa fa-picture-o"></i>' +
                '<i class="appmenu__icon fa fa-cogs"></i>' +
                '<i class="appmenu__icon fa fa-gamepad"></i>' +
                '<span>Gotowe za jakiś czas</span>';    //delete this span when apps are ready
                
                
            teleContainer.appendChild(appMenu);
            
            phoneCont.addEventListener('click', contact);
            phoneMenu.addEventListener('click', deleteTime)
            
        };
        
        
function deleteTime(){
                
                clockBoolean = true;
                mainDesktop();
                phoneCont.removeEventListener('click', deleteTime);
                phoneCont.addEventListener('click', contact);
                phoneMenu.removeEventListener('click', deleteTime);
                phoneMenu.addEventListener('click', menu);
            };
        
    };


    onOff.addEventListener('click', ProgramOn);

};

phoneProgram();



function timer(){
    if(clockBoolean == false){return;} else{
    var hours = document.querySelector('.hours-minutes');
    var date = document.querySelector('.day-month-year');
    
    var time = new Date();
    var day = time.getDate();
        if(day<10) day = "0" + day;
    var month = time.getMonth()+1;
        if(month<10) month = "0" + month;
    var year = time.getFullYear();
    var hour = time.getHours();
        if(hour<10) hour = "0" + hour;
    var minute = time.getMinutes();
        if(minute<10) minute = "0" + minute;
        
                hours.innerHTML = hour + ':' + minute;
                date.innerHTML = day + '.' + month + '.' + year;
    
    setTimeout("timer()",1000);
};};

/* another option from StackOverflow

var shouldContinue = true;
var interval = 0;

function timer() {
    if (interval == 0) {
        interval = setInterval(function () {
            if (shouldContinue) {
                var hours = document.querySelector('.hours-minutes');
                var date = document.querySelector('.day-month-year');

                var time = new Date();
                var day = time.getDate();
                    if (day < 10) day = "0" + day;
                var month = time.getMonth() + 1;
                    if (month < 10) month = "0" + month;
                var year = time.getFullYear();
                var hour = time.getHours();
                    if (hour < 10) hour = "0" + hour;
                var minute = time.getMinutes();
                    if (minute < 10) minute = "0" + minute;
                var second = time.getSeconds();

                        hours.innerHTML = hour + ':' + minute + ':' + second;
                        date.innerHTML = day + '.' + month + '.' + year;
            } 
            else {
                clearInterval(interval);
                interval = 0;
            }
        }, 1000);
    }
};
*/


