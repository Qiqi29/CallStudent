

// 检测输入框是否输入内容
// account.addEventListener('blur', function(){
    //     if(account.value != ""){
        //         loginInput();
        //     }
        // })
        // password.addEventListener('blur', function(){
            //     if(password.value != ""){
                //         loginInput();
                //     }
                // })
                
// 检测账号密码输入框的内容
// function loginInput(){
    //     let loginButt = document.getElementById("loginButt");
    //     if(Account_input.value != "" && Password_input.value != ""){
        //         loginButt.disabled = false;
        //     }else{
            //         loginButt.disabled = true;
            //     }
            // }

const Account_input = document.querySelector("#classList .className");
const Password_input = document.getElementById("password");
const errorTxt = document.getElementById("errorTxt");

$("#loginButt").click(function(){
    if(Password_input.value == ""){
        errorTxt.innerHTML = "请输入班级密码";
    }else{
        data();
    }
})

function data(){
    $.get("file/data/data.json",{},function(data){
        for(let i=0; i < data.length; i++){
            let user = data[i];
            if(Account_input.innerText == user.userName && Password_input.value == user.userPassword){
                errorTxt.innerHTML = "";
                window.location.href="home.html";
                break;
            }else{
                errorTxt.innerHTML = "账号或密码错误";
            }
        }
    });
}

// 显示隐藏班级列表
const butt = document.getElementById('classList')
const menu = document.querySelector('.classNameList')
let show = 0
butt.addEventListener('click', ()=> {
    if(show == 0){
        menu.style.display = "block"
        show = 1
    }else{
        menu.style.display = "none"
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