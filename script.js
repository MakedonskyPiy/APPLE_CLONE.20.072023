//oбявление 
const Burger_Items1 = document.getElementsByClassName('Burger_Item1');
const Dop_blocks = document.getElementsByClassName('Nav_Burger_content_Main');
const Burger_remuver = document.getElementsByClassName('Burger_remuver_lvldva');
const NavBarHight = document.getElementsByClassName('Nav-item-delete');
const BlackFon = document.querySelector('.Background-Burger');
var Widthsearch = 0;







//анимированая кнопка бургера

document.querySelector('.Nav_Burger').addEventListener('click', function(){
 this.classList.toggle('active');
 document.getElementById('body').classList.toggle('overflowhiden');
 document.querySelector('#Burger_Section1').style.display = "flex";
 if(document.querySelector('.search_menu_block').classList[1] !== 'active'){
    document.querySelector('.Nav_Burger_Content').classList.toggle('active');
 }
 if(document.querySelector('.search_menu_block').classList[1] !== 'active'){
    document.querySelector('.Background-Burger').classList.toggle('active');
 }
 document.querySelector('.search_menu_block').classList.remove('active');
 document.querySelector('.inSearch_block').classList.remove('active');
for(const Dop_Block of Dop_blocks){
    Dop_Block.classList.remove('active');
}
for(const Remuver of Burger_remuver){
    Remuver.classList.remove('active');
}
document.querySelector('.Nav_Burger_Content').classList.remove('Header_Part_Remuver');
document.querySelector('.inSearch_block').classList.remove('displayflex');
})








for (const Burger of Burger_Items1) {
    //анимированое появление стрелочек в бургере
    Burger.addEventListener('mouseenter', function(){
        Burger.children[1].children[0].classList.add('active_listelem')
    });
    Burger.addEventListener('mouseout', function(){
        setTimeout(()=>{Burger.children[1].children[0].classList.remove('active_listelem')},200);
    });
    //выезжающее меню внутри бургера
    Burger.addEventListener('click',()=>{
        switch(Burger.children[0].outerText){
    case "Mac":{
        document.querySelector('.first_burger_block').classList.toggle('active');
        document.querySelector('.Nav_Burger_Content').classList.toggle('Header_Part_Remuver');
        Burger_remuver[0].classList.toggle('active');
    break;}
    case "iPad":{
        document.querySelector('.a_burger_block').classList.toggle('active');
        document.querySelector('.Nav_Burger_Content').classList.toggle('Header_Part_Remuver');
        Burger_remuver[1].classList.toggle('active');
    break;}
    case "iPhone":{
        document.querySelector('.s_burger_block').classList.toggle('active');
        document.querySelector('.Nav_Burger_Content').classList.toggle('Header_Part_Remuver');
        Burger_remuver[2].classList.toggle('active');
    break;}
    case "Watch":{
        document.querySelector('.d_burger_block').classList.toggle('active');
        document.querySelector('.Nav_Burger_Content').classList.toggle('Header_Part_Remuver');
        Burger_remuver[3].classList.toggle('active');
    break;}
    case "AirPods":{
        document.querySelector('.f_burger_block').classList.toggle('active');
        document.querySelector('.Nav_Burger_Content').classList.toggle('Header_Part_Remuver');
        Burger_remuver[4].classList.toggle('active');
    break;}
    case "TV і Дім":{
        document.querySelector('.g_burger_block').classList.toggle('active');
        document.querySelector('.Nav_Burger_Content').classList.toggle('Header_Part_Remuver');
        Burger_remuver[5].classList.toggle('active');
    break;}
    case "Сервіси":{
        document.querySelector('.h_burger_block').classList.toggle('active');
        document.querySelector('.Nav_Burger_Content').classList.toggle('Header_Part_Remuver');
        Burger_remuver[6].classList.toggle('active');
    break;}
    case "Підтримка":{
        document.querySelector('.j_burger_block').classList.toggle('active');
        document.querySelector('.Nav_Burger_Content').classList.toggle('Header_Part_Remuver');
        Burger_remuver[7].classList.toggle('active');
    break;}
    case "Де купити":{
        document.querySelector('.k_burger_block').classList.toggle('active');
        document.querySelector('.Nav_Burger_Content').classList.toggle('Header_Part_Remuver');
        Burger_remuver[8].classList.toggle('active');
    break;}
        }
    })
}






//при нажатии на кнопку назад в бургере (развернутом) возвращаемся на главный экран бургера
for(const Remuver of Burger_remuver){
    Remuver.addEventListener('click', function(){
        Remuver.classList.remove('active');
        for(const Block of Dop_blocks){
            Block.classList.remove('active');
        }
        document.querySelector('.Nav_Burger_Content').classList.remove('Header_Part_Remuver');
    })
}



//поиск
document.querySelector('.search_btn1').addEventListener('click', function(){
    if(innerWidth <= 830){
        Widthsearch = 1;
    }});







document.querySelector('.search_btn1').addEventListener('click', function(){
//if(innerWidth >= 830){document.querySelector('.inSearch_block').classList.toggle('displayflex');}
document.querySelector('.inSearch_block').classList.toggle('displayflex');
document.querySelector('.search_menu_block').classList.toggle('active');
if(Widthsearch == 1){document.querySelector('.Nav_Burger').classList.add('active');}
document.querySelector('.inSearch_block').classList.toggle('active');
document.querySelector('.Background').classList.remove('active');
document.querySelector('.Background_Fixed').classList.remove('active');
document.querySelector('.first').style.display = "none";
document.querySelector('.scnd').style.display = "none";
document.querySelector('.trd').style.display = "none";
document.querySelector('.four').style.display = "none";
document.querySelector('.five').style.display = "none";
document.querySelector('.six').style.display = "none";
document.querySelector('.seven').style.display = "none";
document.querySelector('.aight').style.display = "none";
document.querySelector('.nine').style.display = "none";
document.querySelector('#body').classList.toggle('overflowhiden');
document.querySelector('#Burger_Section1').classList.toggle('displaynone');
});







//navbar на широких экранах


for(const NavBar of NavBarHight){
    NavBar.addEventListener('mouseenter',function(){
       
        switch(NavBar.children[0].outerText){
            case "Mac":{
                setTimeout(function(){document.querySelector('.Background').classList.add('active');
                document.querySelector('.Background_Fixed').classList.add('active');
                document.querySelector('.Background_Fixed').style.maxHeight = "560px";
                document.querySelector('.Background_Fixed').style.height = "10000px";
                document.querySelector('.first').style.display = "flex";
                document.querySelector('.scnd').style.display = "none";
                document.querySelector('.trd').style.display = "none";
                document.querySelector('.four').style.display = "none";
                document.querySelector('.five').style.display = "none";
                document.querySelector('.six').style.display = "none";
                document.querySelector('.seven').style.display = "none";
                document.querySelector('.aight').style.display = "none";
                document.querySelector('.nine').style.display = "none";
                document.querySelector('#Sec2_box1_box2').classList.add('displaynone');
                document.querySelector('.Background_Blur').addEventListener('mouseenter',function(){
                    document.querySelector('.Background').classList.remove('active');
                    document.querySelector('.Background_Fixed').classList.remove('active');
                    document.querySelector('.first').style.display = "none";
                    document.querySelector('.scnd').style.display = "none";
                    document.querySelector('.trd').style.display = "none";
                    document.querySelector('.four').style.display = "none";
                    document.querySelector('.five').style.display = "none";
                    document.querySelector('.six').style.display = "none";
                    document.querySelector('.seven').style.display = "none";
                    document.querySelector('.aight').style.display = "none";
                    document.querySelector('.nine').style.display = "none";
                    document.querySelector('#Sec2_box1_box2').classList.remove('displaynone');
                    
            })},400);

            break;}
            case "iPad":{
                setTimeout(function(){document.querySelector('.Background').classList.add('active');
                console.log('hi');
                document.querySelector('.Background_Fixed').classList.add('active');
                document.querySelector('.Background_Fixed').style.maxHeight = "516px";
                document.querySelector('.first').style.display = "none";
                document.querySelector('.scnd').style.display = "flex";
                document.querySelector('.trd').style.display = "none";
                document.querySelector('.four').style.display = "none";
                document.querySelector('.five').style.display = "none";
                document.querySelector('.six').style.display = "none";
                document.querySelector('.seven').style.display = "none";
                document.querySelector('.aight').style.display = "none";
                document.querySelector('.nine').style.display = "none";
                document.querySelector('#Sec2_box1_box2').classList.add('displaynone');
                document.querySelector('.Background_Blur').addEventListener('mouseenter',function(){
                    document.querySelector('.Background').classList.remove('active');
                    document.querySelector('.Background_Fixed').classList.remove('active');
                    document.querySelector('.first').style.display = "none";
                    document.querySelector('.scnd').style.display = "none";
                    document.querySelector('.trd').style.display = "none";
                    document.querySelector('.four').style.display = "none";
                    document.querySelector('.five').style.display = "none";
                    document.querySelector('.six').style.display = "none";
                    document.querySelector('.seven').style.display = "none";
                    document.querySelector('.aight').style.display = "none";
                    document.querySelector('.nine').style.display = "none";
                    document.querySelector('#Sec2_box1_box2').classList.remove('displaynone');
           
            })},400);
            break;}
            case "iPhone":{
                setTimeout(function(){document.querySelector('.Background').classList.add('active');
                console.log('hi');
                document.querySelector('.Background_Fixed').classList.add('active');
                document.querySelector('.Background_Fixed').style.maxHeight = "443px";
                document.querySelector('.first').style.display = "none";
                document.querySelector('.scnd').style.display = "none";
                document.querySelector('.trd').style.display = "flex";
                document.querySelector('.four').style.display = "none";
                document.querySelector('.five').style.display = "none";
                document.querySelector('.six').style.display = "none";
                document.querySelector('.seven').style.display = "none";
                document.querySelector('.aight').style.display = "none";
                document.querySelector('.nine').style.display = "none";
                document.querySelector('#Sec2_box1_box2').classList.add('displaynone');
         
                document.querySelector('.Background_Blur').addEventListener('mouseenter',function(){
                    document.querySelector('.Background').classList.remove('active');
                    document.querySelector('.Background_Fixed').classList.remove('active');
                    document.querySelector('.first').style.display = "none";
                    document.querySelector('.scnd').style.display = "none";
                    document.querySelector('.trd').style.display = "none";
                    document.querySelector('.four').style.display = "none";
                    document.querySelector('.five').style.display = "none";
                    document.querySelector('.six').style.display = "none";
                    document.querySelector('.seven').style.display = "none";
                    document.querySelector('.aight').style.display = "none";
                    document.querySelector('.nine').style.display = "none";
                    document.querySelector('#Sec2_box1_box2').classList.remove('displaynone');
               
            })},400);
            break;}
            case "Watch":{
                setTimeout(function(){document.querySelector('.Background').classList.add('active');
                console.log('hi');
                document.querySelector('.Background_Fixed').classList.add('active');
                document.querySelector('.Background_Fixed').style.maxHeight = "428px";
                document.querySelector('.first').style.display = "none";
                document.querySelector('.scnd').style.display = "none";
                document.querySelector('.trd').style.display = "none";
                document.querySelector('.four').style.display = "flex";
                document.querySelector('.five').style.display = "none";
                document.querySelector('.six').style.display = "none";
                document.querySelector('.seven').style.display = "none";
                document.querySelector('.aight').style.display = "none";
                document.querySelector('.nine').style.display = "none";
                document.querySelector('#Sec2_box1_box2').classList.add('displaynone');
            
                document.querySelector('.Background_Blur').addEventListener('mouseenter',function(){
                    document.querySelector('.Background').classList.remove('active');
                    document.querySelector('.Background_Fixed').classList.remove('active');
                    document.querySelector('.first').style.display = "none";
                    document.querySelector('.scnd').style.display = "none";
                    document.querySelector('.trd').style.display = "none";
                    document.querySelector('.four').style.display = "none";
                    document.querySelector('.five').style.display = "none";
                    document.querySelector('.six').style.display = "none";
                    document.querySelector('.seven').style.display = "none";
                    document.querySelector('.aight').style.display = "none";
                    document.querySelector('.nine').style.display = "none";
                    document.querySelector('#Sec2_box1_box2').classList.remove('displaynone');
                 
            })},400);
            break;}
            case "AirPods":{
                setTimeout(function(){document.querySelector('.Background').classList.add('active');
                console.log('hi');
                document.querySelector('.Background_Fixed').classList.add('active');
                document.querySelector('.Background_Fixed').style.maxHeight = "399px";
                document.querySelector('.first').style.display = "none";
                document.querySelector('.scnd').style.display = "none";
                document.querySelector('.trd').style.display = "none";
                document.querySelector('.four').style.display = "none";
                document.querySelector('.five').style.display = "flex";
                document.querySelector('.six').style.display = "none";
                document.querySelector('.seven').style.display = "none";
                document.querySelector('.aight').style.display = "none";
                document.querySelector('.nine').style.display = "none";
                document.querySelector('#Sec2_box1_box2').classList.add('displaynone');
            
                document.querySelector('.Background_Blur').addEventListener('mouseenter',function(){
                    document.querySelector('.Background').classList.remove('active');
                    document.querySelector('.Background_Fixed').classList.remove('active');
                    document.querySelector('.first').style.display = "none";
                    document.querySelector('.scnd').style.display = "none";
                    document.querySelector('.trd').style.display = "none";
                    document.querySelector('.four').style.display = "none";
                    document.querySelector('.five').style.display = "none";
                    document.querySelector('.six').style.display = "none";
                    document.querySelector('.seven').style.display = "none";
                    document.querySelector('.aight').style.display = "none";
                    document.querySelector('.nine').style.display = "none";
                    document.querySelector('#Sec2_box1_box2').classList.remove('displaynone');
     
            })},400);          
            break;}
            case "TV і Дім":{
                setTimeout(function(){document.querySelector('.Background').classList.add('active');
                console.log('hi');
                document.querySelector('.Background_Fixed').classList.add('active');
                document.querySelector('.Background_Fixed').style.maxHeight = "321px";
                document.querySelector('.first').style.display = "none";
                document.querySelector('.scnd').style.display = "none";
                document.querySelector('.trd').style.display = "none";
                document.querySelector('.four').style.display = "none";
                document.querySelector('.five').style.display = "none";
                document.querySelector('.six').style.display = "flex";
                document.querySelector('.seven').style.display = "none";
                document.querySelector('.aight').style.display = "none";
                document.querySelector('.nine').style.display = "none";
                document.querySelector('#Sec2_box1_box2').classList.add('displaynone');
   
                document.querySelector('.Background_Blur').addEventListener('mouseenter',function(){
                    document.querySelector('.Background').classList.remove('active');
                    document.querySelector('.Background_Fixed').classList.remove('active');
                    document.querySelector('.first').style.display = "none";
                    document.querySelector('.scnd').style.display = "none";
                    document.querySelector('.trd').style.display = "none";
                    document.querySelector('.four').style.display = "none";
                    document.querySelector('.five').style.display = "none";
                    document.querySelector('.six').style.display = "none";
                    document.querySelector('.seven').style.display = "none";
                    document.querySelector('.aight').style.display = "none";
                    document.querySelector('.nine').style.display = "none";
                    document.querySelector('#Sec2_box1_box2').classList.remove('displaynone');
              
            })},400);        
            break;}
            case "Сервіси":{
                setTimeout(function(){document.querySelector('.Background').classList.add('active');
                console.log('hi');
                document.querySelector('.Background_Fixed').classList.add('active');
                document.querySelector('.Background_Fixed').style.maxHeight = "459px";
                document.querySelector('.first').style.display = "none";
                document.querySelector('.scnd').style.display = "none";
                document.querySelector('.trd').style.display = "none";
                document.querySelector('.four').style.display = "none";
                document.querySelector('.five').style.display = "none";
                document.querySelector('.six').style.display = "none";
                document.querySelector('.seven').style.display = "flex";
                document.querySelector('.aight').style.display = "none";
                document.querySelector('.nine').style.display = "none";
                document.querySelector('#Sec2_box1_box2').classList.add('displaynone');
          
                document.querySelector('.Background_Blur').addEventListener('mouseenter',function(){
                    document.querySelector('.Background').classList.remove('active');
                    document.querySelector('.Background_Fixed').classList.remove('active');
                    document.querySelector('.first').style.display = "none";
                    document.querySelector('.scnd').style.display = "none";
                    document.querySelector('.trd').style.display = "none";
                    document.querySelector('.four').style.display = "none";
                    document.querySelector('.five').style.display = "none";
                    document.querySelector('.six').style.display = "none";
                    document.querySelector('.seven').style.display = "none";
                    document.querySelector('.aight').style.display = "none";
                    document.querySelector('.nine').style.display = "none";
                    document.querySelector('#Sec2_box1_box2').classList.remove('displaynone');
   
            })},400);        
            break;}
            case "Підтримка":{
                setTimeout(function(){document.querySelector('.Background').classList.add('active');
                console.log('hi');
                document.querySelector('.Background_Fixed').classList.add('active');
                document.querySelector('.Background_Fixed').style.maxHeight = "503px";
                document.querySelector('.first').style.display = "none";
                document.querySelector('.scnd').style.display = "none";
                document.querySelector('.trd').style.display = "none";
                document.querySelector('.four').style.display = "none";
                document.querySelector('.five').style.display = "none";
                document.querySelector('.six').style.display = "none";
                document.querySelector('.seven').style.display = "none";
                document.querySelector('.aight').style.display = "flex";
                document.querySelector('.nine').style.display = "none";
                document.querySelector('#Sec2_box1_box2').classList.add('displaynone');
       
                document.querySelector('.Background_Blur').addEventListener('mouseenter',function(){
                    document.querySelector('.Background').classList.remove('active');
                    document.querySelector('.Background_Fixed').classList.remove('active');
                    document.querySelector('.first').style.display = "none";
                    document.querySelector('.scnd').style.display = "none";
                    document.querySelector('.trd').style.display = "none";
                    document.querySelector('.four').style.display = "none";
                    document.querySelector('.five').style.display = "none";
                    document.querySelector('.six').style.display = "none";
                    document.querySelector('.seven').style.display = "none";
                    document.querySelector('.aight').style.display = "none";
                    document.querySelector('.nine').style.display = "none";
                    document.querySelector('#Sec2_box1_box2').classList.remove('displaynone');
   
            })},400);        
            break;}
            case "Де купити":{
                setTimeout(function(){document.querySelector('.Background').classList.add('active');
                console.log('hi');
                document.querySelector('.Background_Fixed').classList.add('active');
                document.querySelector('.Background_Fixed').style.maxHeight = "283px";
                document.querySelector('.first').style.display = "none";
                document.querySelector('.scnd').style.display = "none";
                document.querySelector('.trd').style.display = "none";
                document.querySelector('.four').style.display = "none";
                document.querySelector('.five').style.display = "none";
                document.querySelector('.six').style.display = "none";
                document.querySelector('.seven').style.display = "none";
                document.querySelector('.aight').style.display = "none";
                document.querySelector('.nine').style.display = "flex";
         
                document.querySelector('#Sec2_box1_box2').classList.add('displaynone');
                document.querySelector('.Background_Blur').addEventListener('mouseenter',function(){
                    document.querySelector('.Background').classList.remove('active');
                    document.querySelector('.Background_Fixed').classList.remove('active');
                    document.querySelector('.first').style.display = "none";
                    document.querySelector('.scnd').style.display = "none";
                    document.querySelector('.trd').style.display = "none";
                    document.querySelector('.four').style.display = "none";
                    document.querySelector('.five').style.display = "none";
                    document.querySelector('.six').style.display = "none";
                    document.querySelector('.seven').style.display = "none";
                    document.querySelector('.aight').style.display = "none";
                    document.querySelector('.nine').style.display = "none";
                    document.querySelector('#Sec2_box1_box2').classList.remove('displaynone');
         

            })},400);       
            break;}
                }
    })
}

































// КОНЕЦ ШАПКИ










//бургер в меню айфон 14
var burger_deleter3000 = 0;
const UlElem = document.querySelector('#Burger_sec1_content').children[0]; 
document.querySelector('#Burger_Section1_box').addEventListener('click',function(){
    burger_deleter3000 += 1;
document.querySelector('#Burger_Section1').children[0].classList.toggle('active');
document.querySelector('#Burger_sec1_content').classList.toggle('active');
document.querySelector('#Burger_sec1_content').children[0].classList.toggle('active');
document.querySelector('#Burger_sec1_content').classList.toggle('paddinguli')
if(scrollY>=560 && innerWidth<=729){
    if(burger_deleter3000 % 2 == 0){
        setTimeout(function(){
            document.querySelector('#Sec2_box1').classList.remove('displaynone');
            },150);
    }else{
        document.querySelector('#Sec2_box1').classList.add('displaynone');
    }
}



setTimeout(function(){
    UlElem.classList.toggle('displayflex');
},100) 

});




//window scroll


window.addEventListener('scroll',function(){
    document.querySelector('.Background').classList.remove('active');
                    document.querySelector('.Background_Fixed').classList.remove('active');
                    document.querySelector('.first').style.display = "none";
                    document.querySelector('.scnd').style.display = "none";
                    document.querySelector('.trd').style.display = "none";
                    document.querySelector('.four').style.display = "none";
                    document.querySelector('.five').style.display = "none";
                    document.querySelector('.six').style.display = "none";
                    document.querySelector('.seven').style.display = "none";
                    document.querySelector('.aight').style.display = "none";
                    document.querySelector('.nine').style.display = "none";
    if(scrollY>=52){
        document.querySelector('#Section1').style.position = "fixed";
        document.querySelector('#Section1').style.top = "0";
        }
        else document.querySelector('#Section1').style.position = "static";
        if(this.innerWidth<=729){
            if(this.scrollY>=520){
                document.querySelector('#Sec2_box1').classList.add('Sec2_box1_scrolled');
                document.querySelector('#Sec2_input_box').classList.add('Sec2_input_box_scrolled');
                document.querySelector('#Sec2_box1_box2').classList.add('Sec2_box1_box2_scrolled');
            }
            else{
                document.querySelector('#Sec2_box1').classList.remove('Sec2_box1_scrolled');
                document.querySelector('#Sec2_input_box').classList.remove('Sec2_input_box_scrolled');
                document.querySelector('#Sec2_box1_box2').classList.remove('Sec2_box1_box2_scrolled');
            }
        }else{
            if(this.scrollY>=91){
                document.querySelector('#Sec2_box1').classList.add('Sec2_box1_scrolled2');
                document.querySelector('#Sec2_input_box').classList.add('Sec2_input_box_scrolled2');
                document.querySelector('#Sec2_box1_box2').classList.add('Sec2_box1_box2_scrolled2');
            }
            else{
                document.querySelector('#Sec2_box1').classList.remove('Sec2_box1_scrolled2');
                document.querySelector('#Sec2_input_box').classList.remove('Sec2_input_box_scrolled2');
                document.querySelector('#Sec2_box1_box2').classList.remove('Sec2_box1_box2_scrolled2');
            }
        }
});



























const purple_phone_imgs = document.getElementsByClassName('purple_phone_imgs2');
const golden_phone_imgs = document.getElementsByClassName('golden_phone_imgs2');
const white_phone_imgs = document.getElementsByClassName('white_phone_imgs2');
const black_phone_imgs = document.getElementsByClassName('black_phone_imgs2');
const radio_purple_p2 = document.getElementsByClassName('radio_purple_p2');
const radio_golden_p2 = document.getElementsByClassName('radio_golden_p2');
const radio_white_p2 = document.getElementsByClassName('radio_white_p2');
const radio_black_p2 = document.getElementsByClassName('radio_black_p2');

//videobox in load
document.querySelector('#Sec2_videobox').children[0].addEventListener('ended',function(){
    document.querySelector('#Sec2_videobox').children[0].classList.add('displaynone');
    document.querySelector('#Sec2_videobox').children[1].classList.add('displayflex');
    document.querySelector('.radio_purple_p').classList.add('active');
    document.querySelector('#radio_purple').style.cursor = "pointer";
    document.querySelector('#radio_golden').style.cursor = "pointer";
    document.querySelector('#radio_white').style.cursor = "pointer";
    document.querySelector('#radio_black').style.cursor = "pointer";

    //btns menu in videobox in load
    var color_btns = 1;
  document.querySelector('#radio_purple').addEventListener('click',function(){
    switch (color_btns){
        case 2:{
            document.querySelector('.golden_phone_imgs').style.opacity = "0";
            document.querySelector('.purple_phone_imgs').style.opacity = "1";
            document.querySelector('.radio_golden_p').classList.remove('active');
            setTimeout(function(){
                document.querySelector('.radio_golden_p').classList.add('displaynone');
                document.querySelector('.radio_purple_p').classList.remove('displaynone');
                document.querySelector('.radio_purple_p').classList.add('active');
            });
            for(const purple_phone_img of purple_phone_imgs){
                purple_phone_img.classList.remove('displaynone');
            }
            for(const golden_phone_img of golden_phone_imgs){
                golden_phone_img.classList.add('displaynone');
            }
            for(const radio_purple_p of radio_purple_p2){
                radio_purple_p.classList.remove('displaynone');
            }
            for(const radio_golden_p of radio_golden_p2){
                radio_golden_p.classList.add('displaynone');
            }

        break;}
        case 3:{
            document.querySelector('.white_phone_imgs').style.opacity = "0";
            document.querySelector('.purple_phone_imgs').style.opacity = "1";
            document.querySelector('.radio_white_p').classList.remove('active');
            setTimeout(function(){
                document.querySelector('.radio_white_p').classList.add('displaynone');
                document.querySelector('.radio_purple_p').classList.remove('displaynone');
                document.querySelector('.radio_purple_p').classList.add('active');
            });
            for(const purple_phone_img of purple_phone_imgs){
                purple_phone_img.classList.remove('displaynone');
            }
            for(const white_phone_img of white_phone_imgs){
                white_phone_img.classList.add('displaynone');
            }
            for(const radio_purple_p of radio_purple_p2){
                radio_purple_p.classList.remove('displaynone');
            }
            for(const radio_white_p of radio_white_p2){
                radio_white_p.classList.add('displaynone');
            }
        break;}
        case 4:{
            document.querySelector('.black_phone_imgs').style.opacity = "0";
            document.querySelector('.purple_phone_imgs').style.opacity = "1";
            document.querySelector('.radio_black_p').classList.remove('active');
            setTimeout(function(){
                document.querySelector('.radio_black_p').classList.add('displaynone');
                document.querySelector('.radio_purple_p').classList.remove('displaynone');
                document.querySelector('.radio_purple_p').classList.add('active');
            });
            for(const purple_phone_img of purple_phone_imgs){
                purple_phone_img.classList.remove('displaynone');
            }
            for(const black_phone_img of black_phone_imgs){
                black_phone_img.classList.add('displaynone');
            }
            for(const radio_purple_p of radio_purple_p2){
                radio_purple_p.classList.remove('displaynone');
            }
            for(const radio_black_p of radio_black_p2){
                radio_black_p.classList.add('displaynone');
            }
        break;}
    }
    document.querySelector('#radio_purple_box').classList.add('active');
    document.querySelector('#radio_golden_box').classList.remove('active');
    document.querySelector('#radio_white_box').classList.remove('active');
    document.querySelector('#radio_black_box').classList.remove('active');
    color_btns = 1;
    });
    
    document.querySelector('#radio_golden').addEventListener('click',function(){
        switch (color_btns){
            case 1:{
            document.querySelector('.purple_phone_imgs').style.opacity = "0";
            document.querySelector('.golden_phone_imgs').style.opacity = "1";
            document.querySelector('.radio_purple_p').classList.remove('active');
            setTimeout(function(){
                document.querySelector('.radio_purple_p').classList.add('displaynone');
                document.querySelector('.radio_golden_p').classList.remove('displaynone');
                document.querySelector('.radio_golden_p').classList.add('active');
            });
            for(const golden_phone_img of golden_phone_imgs){
                golden_phone_img.classList.remove('displaynone');
            }
            for(const purple_phone_img of purple_phone_imgs){
                purple_phone_img.classList.add('displaynone');
            }
            for(const radio_golden_p of radio_golden_p2){
                radio_golden_p.classList.remove('displaynone');
            }
            for(const radio_purple_p of radio_purple_p2){
                radio_purple_p.classList.add('displaynone');
            }
            break;}
            case 3:{
            document.querySelector('.white_phone_imgs').style.opacity = "0";
            document.querySelector('.golden_phone_imgs').style.opacity = "1";
            document.querySelector('.radio_white_p').classList.remove('active');
            setTimeout(function(){
                document.querySelector('.radio_white_p').classList.add('displaynone');
                document.querySelector('.radio_golden_p').classList.remove('displaynone');
                document.querySelector('.radio_golden_p').classList.add('active');
            });
            for(const golden_phone_img of golden_phone_imgs){
                golden_phone_img.classList.remove('displaynone');
            }
            for(const white_phone_img of white_phone_imgs){
                white_phone_img.classList.add('displaynone');
            }
            for(const radio_golden_p of radio_golden_p2){
                radio_golden_p.classList.remove('displaynone');
            }
            for(const radio_white_p of radio_white_p2){
                radio_white_p.classList.add('displaynone');
            }
            break;}
            case 4:{
            document.querySelector('.black_phone_imgs').style.opacity = "0";
            document.querySelector('.golden_phone_imgs').style.opacity = "1";
            document.querySelector('.radio_black_p').classList.remove('active');
            setTimeout(function(){
                document.querySelector('.radio_black_p').classList.add('displaynone');
                document.querySelector('.radio_golden_p').classList.remove('displaynone');
                document.querySelector('.radio_golden_p').classList.add('active');
            });
            for(const golden_phone_img of golden_phone_imgs){
                golden_phone_img.classList.remove('displaynone');
            }
            for(const black_phone_img of black_phone_imgs){
                black_phone_img.classList.add('displaynone');
            }
            for(const radio_golden_p of radio_golden_p2){
                radio_golden_p.classList.remove('displaynone');
            }
            for(const radio_black_p of radio_black_p2){
                radio_black_p.classList.add('displaynone');
            }
            break;}
        }
    document.querySelector('#radio_purple_box').classList.remove('active');
    document.querySelector('#radio_golden_box').classList.add('active');
    document.querySelector('#radio_white_box').classList.remove('active');
    document.querySelector('#radio_black_box').classList.remove('active');
    color_btns = 2;
    });
    
    document.querySelector('#radio_white').addEventListener('click',function(){
        switch (color_btns){
            case 1:{
            document.querySelector('.purple_phone_imgs').style.opacity = "0";
            document.querySelector('.white_phone_imgs').style.opacity = "1";
            document.querySelector('.radio_purple_p').classList.remove('active');
            setTimeout(function(){
                document.querySelector('.radio_purple_p').classList.add('displaynone');
                document.querySelector('.radio_white_p').classList.remove('displaynone');
                document.querySelector('.radio_white_p').classList.add('active');
            });
            for(const white_phone_img of white_phone_imgs){
                white_phone_img.classList.remove('displaynone');
            }
            for(const purple_phone_img of purple_phone_imgs){
                purple_phone_img.classList.add('displaynone');
            }
            for(const radio_white_p of radio_white_p2){
                radio_white_p.classList.remove('displaynone');
            }
            for(const radio_purple_p of radio_purple_p2){
                radio_purple_p.classList.add('displaynone');
            }
            break;}
            case 2:{
            document.querySelector('.golden_phone_imgs').style.opacity = "0";
            document.querySelector('.white_phone_imgs').style.opacity = "1";
            document.querySelector('.radio_golden_p').classList.remove('active');
            setTimeout(function(){
                document.querySelector('.radio_golden_p').classList.add('displaynone');
                document.querySelector('.radio_white_p').classList.remove('displaynone');
                document.querySelector('.radio_white_p').classList.add('active');
            });
            for(const white_phone_img of white_phone_imgs){
                white_phone_img.classList.remove('displaynone');
            }
            for(const golden_phone_img of golden_phone_imgs){
                golden_phone_img.classList.add('displaynone');
            }
            for(const radio_white_p of radio_white_p2){
                radio_white_p.classList.remove('displaynone');
            }
            for(const radio_golden_p of radio_golden_p2){
                radio_golden_p.classList.add('displaynone');
            }
            break;}
            case 4:{
            document.querySelector('.black_phone_imgs').style.opacity = "0";
            document.querySelector('.white_phone_imgs').style.opacity = "1";
            document.querySelector('.radio_black_p').classList.remove('active');
            setTimeout(function(){
                document.querySelector('.radio_black_p').classList.add('displaynone');
                document.querySelector('.radio_white_p').classList.remove('displaynone');
                document.querySelector('.radio_white_p').classList.add('active');
            });
            for(const white_phone_img of white_phone_imgs){
                white_phone_img.classList.remove('displaynone');
            }
            for(const black_phone_img of black_phone_imgs){
                black_phone_img.classList.add('displaynone');
            }
            for(const radio_white_p of radio_white_p2){
                radio_white_p.classList.remove('displaynone');
            }
            for(const radio_black_p of radio_black_p2){
                radio_black_p.classList.add('displaynone');
            }
            break;}
        }
    document.querySelector('#radio_purple_box').classList.remove('active');
    document.querySelector('#radio_golden_box').classList.remove('active');
    document.querySelector('#radio_white_box').classList.add('active');
    document.querySelector('#radio_black_box').classList.remove('active');
    color_btns = 3;
    });
    
    document.querySelector('#radio_black').addEventListener('click',function(){
        switch (color_btns){
            case 1:{
            document.querySelector('.purple_phone_imgs').style.opacity = "0";
            document.querySelector('.black_phone_imgs').style.opacity = "1";
            document.querySelector('.radio_purple_p').classList.remove('active');
            setTimeout(function(){
                document.querySelector('.radio_purple_p').classList.add('displaynone');
                document.querySelector('.radio_black_p').classList.remove('displaynone');
                document.querySelector('.radio_black_p').classList.add('active');
            });
            for(const black_phone_img of black_phone_imgs){
                black_phone_img.classList.remove('displaynone');
            }
            for(const purple_phone_img of purple_phone_imgs){
                purple_phone_img.classList.add('displaynone');
            }
            for(const radio_black_p of radio_black_p2){
                radio_black_p.classList.remove('displaynone');
            }
            for(const radio_purple_p of radio_purple_p2){
                radio_purple_p.classList.add('displaynone');
            }
            break;}
            case 2:{
            document.querySelector('.golden_phone_imgs').style.opacity = "0";
            document.querySelector('.black_phone_imgs').style.opacity = "1";
            document.querySelector('.radio_golden_p').classList.remove('active');
            setTimeout(function(){
                document.querySelector('.radio_golden_p').classList.add('displaynone');
                document.querySelector('.radio_black_p').classList.remove('displaynone');
                document.querySelector('.radio_black_p').classList.add('active');
            });
            for(const black_phone_img of black_phone_imgs){
                black_phone_img.classList.remove('displaynone');
            }
            for(const golden_phone_img of golden_phone_imgs){
                golden_phone_img.classList.add('displaynone');
            }
            for(const radio_black_p of radio_black_p2){
                radio_black_p.classList.remove('displaynone');
            }
            for(const radio_golden_p of radio_golden_p2){
                radio_golden_p.classList.add('displaynone');
            }
            break;}
            case 3:{
            document.querySelector('.white_phone_imgs').style.opacity = "0";
            document.querySelector('.black_phone_imgs').style.opacity = "1";
            document.querySelector('.radio_white_p').classList.remove('active');
            setTimeout(function(){
                document.querySelector('.radio_white_p').classList.add('displaynone');
                document.querySelector('.radio_black_p').classList.remove('displaynone');
                document.querySelector('.radio_black_p').classList.add('active');
            });
            for(const black_phone_img of black_phone_imgs){
                black_phone_img.classList.remove('displaynone');
            }
            for(const white_phone_img of white_phone_imgs){
                white_phone_img.classList.add('displaynone');
            }
            for(const radio_black_p of radio_black_p2){
                radio_black_p.classList.remove('displaynone');
            }
            for(const radio_white_p of radio_white_p2){
                radio_white_p.classList.add('displaynone');
            }
            break;}
        }
    document.querySelector('#radio_purple_box').classList.remove('active');
    document.querySelector('#radio_golden_box').classList.remove('active');
    document.querySelector('#radio_white_box').classList.remove('active');
    document.querySelector('#radio_black_box').classList.add('active');
    color_btns = 4;
    });
});








//chose video by screen size
if(innerWidth >= 730){
    document.querySelector('#Sec2_videobox').children[0].setAttribute('src','video/medium_2x.mp4');
}else{document.querySelector('#Sec2_videobox').children[0].setAttribute('src','video/small_2x.mp4');}



const unicalyeban3 = document.getElementsByClassName('unicalyeban3');
//sec3 scroll
window.addEventListener('scroll',function(){
if(this.innerWidth>=730){
    if(this.scrollY>=163){
        this.setTimeout(function(){
        this.document.querySelector('#Sec3_box1').classList.add('active');
        this.document.querySelector('#Sec3_box2').classList.add('active');
        },500);
        this.document.querySelector('.margin10top').style.opacity = '1';
        this.document.querySelector('#Sec3_cont1').style.opacity = '1';
    }
    else{
        this.document.querySelector('.margin10top').style.opacity = '0';
        this.document.querySelector('#Sec3_cont1').style.opacity = '0';
    }
}
if(this.innerWidth>1067){
    if(this.scrollY>=323){
        this.setTimeout(function(){
            this.document.querySelector('.unicalyeban3').classList.add('active');
        },500);
        this.document.querySelector('.margin10bot').style.opacity = '1';
    }
    else{this.document.querySelector('.margin10bot').style.opacity = '0';}
}
if(this.innerWidth>729 && this.innerWidth<1068){
    if(this.scrollY>=323){
        this.setTimeout(function(){
            this.document.querySelector('.unicalyeban3').classList.add('active_b');
        },500);
        this.document.querySelector('.margin10bot').style.opacity = '1';
    }
    else{this.document.querySelector('.margin10bot').style.opacity = '0';}
}
if(this.innerWidth<=729){
    if(this.scrollY>=606){
        this.setTimeout(function(){
            this.document.querySelector('#Sec3_box2').classList.add('active');
        },500);
        this.document.querySelector('.margin10bot').style.opacity = '1';
    }
    else{this.document.querySelector('.margin10bot').style.opacity = '0';}
    
    if(this.scrollY>=1152){
        this.setTimeout(function(){
            this.document.querySelector('.unicalyeban3').classList.add('active_v');
        },500);
        this.document.querySelector('.margin10top').style.opacity = '1';
    }
    else{this.document.querySelector('.margin10top').style.opacity = '0';}
    if(this.scrollY>=181){
        this.document.querySelector('#Sec3_cont1').style.opacity = '1';
    }
    else{this.document.querySelector('#Sec3_cont1').style.opacity = '0';}
}
});




//open pages on click
document.querySelector('#Sec3_cont1').addEventListener('click',function(){
document.querySelector('.container').classList.remove('displaynone');
setTimeout(function(){
    document.querySelector('.main-contant').classList.add('active');
    document.querySelector('.container').classList.add('active');
    scrollTo(0,0);
},100);
window.addEventListener('scroll',function(){
    console.log('hi');
    this.scrollTo(scrollY,this.scrollY);
});
});




