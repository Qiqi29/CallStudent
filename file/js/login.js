
// 欢迎文本打字机特效
let helloText = document.getElementById('helloText');
let Text = "岁月漫长，欢迎来访。";
let index = 0;

function helloTxtVFX(){
    if(Text.length > index){
        helloText.innerHTML += Text.charAt(index);  //逐个添加字符
        index++;
        setTimeout(helloTxtVFX, 80);  //设置每个字符的时间
    }else{
        helloText.style.borderRight = "none";
    }
}
helloTxtVFX();


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
let classNum = 0;
function data(){
    $.get("file/data/data.json",{},function(data){
        for(let i=0; i < data.length; i++){
            let user = data[i];
            if(Account_input.innerText == user.className && Password_input.value == user.classPassword){
                classNum = user.classNum;
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
    document.cookie = "classNum=" + classNum + "; expires=0";
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