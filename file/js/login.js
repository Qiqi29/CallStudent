
let Account_input = document.getElementById("account");
let Password_input = document.getElementById("password");
let errorTxt = document.getElementById("errorTxt");

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


$("#loginButt").click(function(){
    if(Account_input.value == "" || Password_input.value == ""){
        errorTxt.innerHTML = "请输入账号或密码";
    }else{
        data();
    }
})

function data(){
    $.get("file/data/data.json",{},function(data){
        for(let i=0; i < data.length; i++){
            let user = data[i];
            if(Account_input.value == user.userAccount && Password_input.value == user.userPassword){
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
const menu = document.querySelector('.className')
let show = 0
butt.addEventListener('click', ()=> {
    if(show == 0){
        menu.style.opacity = "1"
        menu.style.transform = "scale(1)"
        show = 1
    }else{
        menu.style.opacity = "0"
        menu.style.transform = "scale(.1)"
        show = 0
    }
})

