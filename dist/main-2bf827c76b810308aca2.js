!function(){var e={553:function(){const e=document.querySelector(".container"),t=document.querySelector(".container__languages"),a=document.querySelector(".container__form");function n(){rusLang.setAttribute("checked",!0),sighUpTitle.innerText="Регистрация пользователя",firstName.setAttribute("placeholder","Введите имя"),lastName.setAttribute("placeholder","Введите фамилию"),login.setAttribute("placeholder","Введите логин"),phone.setAttribute("placeholder","Введите номер телефона"),email.setAttribute("placeholder","Введите email"),password1.setAttribute("placeholder","Введите пароль"),password2.setAttribute("placeholder","Повторите пароль"),submitBtn.innerText="Зарегистрироваться",resetBtn.innerText="Сбросить"}function r(){engLang.setAttribute("checked",!0),sighUpTitle.innerText="Sigh Up",firstName.setAttribute("placeholder","Enter your first name"),lastName.setAttribute("placeholder","Enter your last name"),login.setAttribute("placeholder","Enter your login"),phone.setAttribute("placeholder","Enter your phone number"),email.setAttribute("placeholder","Enter your email"),password1.setAttribute("placeholder","Enter your password"),password2.setAttribute("placeholder","Repeat your password"),submitBtn.innerText="Rigistrate",resetBtn.innerText="Reset"}function s(e){errorWindow.innerText=e,errorWindow.style.top="10px",setTimeout((()=>{errorWindow.style.top="-60px"}),2e3)}rusLang=document.getElementById("rusLang"),engLang=document.getElementById("engLang"),firstName=document.getElementById("firstName"),lastName=document.getElementById("lastName"),login=document.getElementById("login"),phone=document.getElementById("phone"),email=document.getElementById("email"),password1=document.getElementById("password1"),password2=document.getElementById("password2"),submitBtn=document.getElementById("submitBtn"),resetBtn=document.getElementById("resetBtn"),errorWindow=document.querySelector(".error"),sighUpTitle=document.querySelector(".sighUp"),emailValidation=/\S+@\S+\.ru|com|net/g,phoneValidation=/79\d{9}/g,dataBaseUsers=[],user={},t.addEventListener("click",(e=>{rusLang.checked&&(n(),localStorage.setItem("dataBaseLanguage","rus")),engLang.checked&&(r(),localStorage.setItem("dataBaseLanguage","eng"))})),a.addEventListener("submit",(t=>{t.preventDefault(),function(){const e=localStorage.getItem("dataBaseLanguage");0===firstName.value.length?s("rus"===e?"Введите имя!":"Enter your name!"):0===lastName.value.length?s("rus"===e?"Введите фамилию!":"Enter your last name!"):0===login.value.length?s("rus"===e?"Введите логин!":"Enter your login!"):0===phone.value.length?s("rus"===e?"Введите телефон!":"Enter your phone number!"):phone.value.length<11||phone.value.length>11?s("rus"===e?"Лимит символов 11!":"Limit symbols is 11!"):0===email.value.length?s("rus"===e?"Введите email!":"Enter your email!"):0===password1.value.length?s("rus"===e?"Введите пароль!":"Enter your password!"):0===password2.value.length?s("rus"===e?"Введите повторный пароль":"Repeat your password!"):password1.value!==password2.value?s("rus"===e?"Пароли не совпадают":"Passwords ain`t equal!"):(function(){if(user.name=firstName.value,user.last=lastName.value,user.login=login.value,user.phone=phone.value,user.email=email.value,user.password=password1.value,user.registerDate=new Date,dataBaseUsers.push(user),localStorage.getItem("dataBaseUsers")){const e=localStorage.getItem("dataBaseUsers");let t=JSON.parse(e);t.push(user);let a=JSON.stringify(t);localStorage.setItem("dataBaseUsers",a)}else{let e=JSON.stringify(dataBaseUsers);localStorage.setItem("dataBaseUsers",e)}}(),firstName.value="",lastName.value="",login.value="",phone.value="",email.value="",password1.value="",password2.value="")}(),function(){const t=localStorage.getItem("dataBaseLanguage"),a=JSON.parse(localStorage.getItem("dataBaseUsers")),n=a[Object.keys(a)[Object.keys(a).length-1]];let r="Данные пользователя",s="Имя:";lastname="Фамилия",login="Логин:",phone="Телефон",email="email",date="Дата регистрации",backBtn="Назад","eng"===t&&(r="Use's information",s="Name:",lastname="Last Name:",login="Login:",phone="Phone:",date="Registration data",backBtn="Back"),e.innerHTML=`\n        <div class="container__form signUp-data">\n            <h1 class="container__titleH1 data">${r}</h1>\n            <div class="container__box">\n                <div class="container__titles">\n                    <p class="container__p">${s}</p>\n                    <p class="container__p">${lastname}</p>\n                    <p class="container__p">${login}</p>\n                    <p class="container__p">${phone}</p>\n                    <p class="container__p">${email}</p>\n                    <p class="container__p">${date}</p>\n                </div>\n                <div class="container__values">\n                    <p class="container__p">${n.name}</p>\n                    <p class="container__p">${n.lastName}</p>\n                    <p class="container__p">${n.login}</p>\n                    <p class="container__p">${n.phone}</p>\n                    <p class="container__p">${n.email}</p>\n                    <p class="container__p">${n.registerDate}</p>\n                </div>\n            </div>\n        </div>\n    `}()})),window.onload=()=>{!function(){const e=localStorage.getItem("dataBaseLanguage");e||(localStorage.setItem("dataBaseLanguage","rus"),n()),"rus"===e&&n(),"eng"===e&&r()}()}}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,a),s.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";a(553)}()}();
//# sourceMappingURL=main-2bf827c76b810308aca2.js.map