
// 欢迎文本打字机特效
let helloTitle = document.getElementById('helloTitle');
let helloText = document.getElementById('helloText');
let Text1 = "Hello!👋😊";
let Text2 = "岁月漫长，欢迎来访。";
let index = 0;

// 第一行文本
function helloTxtVFX1(){
    if(Text1.length > index){
        helloTitle.innerHTML += Text1.charAt(index);  //逐个添加字符
        index++;
        setTimeout(helloTxtVFX1, 100);  //设置每个字符的时间
    }else{
        helloTitle.style.borderRight = "none";
        index = 0;
        helloTxtVFX2();
    }
}
helloTxtVFX1();
// 第二行文本
function helloTxtVFX2(){
    if(Text2.length > index){
        helloText.innerHTML += Text2.charAt(index);
        index++;
        setTimeout(helloTxtVFX2, 100);
    }else{
        helloText.style.borderRight = "none";
    }
}


const Account_input = document.querySelector("#classList .className");
const Password_input = document.getElementById("password");
const errorTxt = document.getElementById("errorTxt");

// 检测密码输入框是否有内容
$("#loginButt").click(function(){
    if(Password_input.value == ""){
        errorTxt.innerHTML = "请输入班级密码";
    }else{
        data();
    }
})
// 调用json文件，判断密码是否正确
function data(){
    $.get("file/data/data.json",{},function(data){
        for(let i=0; i < data.length; i++){
            let user = data[i];
            if(Account_input.innerText == user.userName && Password_input.value == user.userPassword){
                setCookie();
                errorTxt.innerHTML = "";
                window.location.href="home.html";
                break;
            }else{
                errorTxt.innerHTML = "× 密码错误 ×";
            }
        }
    });
}
// 设置班级Cookie
function setCookie(){
    document.cookie = "className=" + Account_input.innerText + "; expires=0";
}






// 显示隐藏班级列表
const butt = document.getElementById('classList')
const menu = document.querySelector('.classNameList')
const arrow = document.querySelector('#classList img');
let show = 0
butt.addEventListener('click', ()=> {
    if(show == 0){
        menu.style.opacity = "1"
        menu.style.transform = "scale(1)"
        arrow.style.transform = "rotate(180deg)"
        show = 1
    }else{
        menu.style.opacity = "0"
        menu.style.transform = "scale(0)"
        arrow.style.transform = "rotate(0deg)"
        show = 0
    }
})

// 选择班级后更新文本
const classList = document.querySelectorAll('#classList .className ul li');
const className = document.querySelector('#classList .className');

function setOption(option){
    let setText = option.innerText;
    className.innerText = setText;
}