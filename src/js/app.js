const container = document.querySelector('.container'),
    contLanguages = document.querySelector('.container__languages'),
    containerForm = document.querySelector('.container__form');
    rusLang = document.getElementById('rusLang'),
    engLang = document.getElementById('engLang'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    login = document.getElementById('login'),
    phone = document.getElementById('phone'),
    email = document.getElementById('email'),
    password1 = document.getElementById('password1'),
    password2 = document.getElementById('password2'),
    submitBtn = document.getElementById('submitBtn'),
    resetBtn = document.getElementById('resetBtn'),
    errorWindow = document.querySelector('.error'),
    sighUpTitle = document.querySelector('.sighUp');
    emailValidation = /\S+@\S+\.ru|com|net/g,
    phoneValidation = /79\d{9}/g,
    dataBaseUsers = [],
    user = {};

function createPlaceholderRus(){
    rusLang.setAttribute('checked', true);
    sighUpTitle.innerText = 'Регистрация пользователя';
    firstName.setAttribute('placeholder', 'Введите имя');
    lastName.setAttribute('placeholder','Введите фамилию');
    login.setAttribute('placeholder','Введите логин');
    phone.setAttribute('placeholder','Введите номер телефона');
    email.setAttribute('placeholder','Введите email');
    password1.setAttribute('placeholder','Введите пароль');
    password2.setAttribute('placeholder','Повторите пароль');
    submitBtn.innerText = 'Зарегистрироваться';
    resetBtn.innerText = 'Сбросить';
};
function createPlaceholderEng(){
    engLang.setAttribute('checked', true);
    sighUpTitle.innerText = 'Sigh Up';
    firstName.setAttribute('placeholder', 'Enter your first name');
    lastName.setAttribute('placeholder','Enter your last name');
    login.setAttribute('placeholder','Enter your login');
    phone.setAttribute('placeholder','Enter your phone number');
    email.setAttribute('placeholder','Enter your email');
    password1.setAttribute('placeholder','Enter your password');
    password2.setAttribute('placeholder','Repeat your password');
    submitBtn.innerText = 'Rigistrate';
    resetBtn.innerText = 'Reset';
}

function changePlaceholder(){
    const checkValue = localStorage.getItem('dataBaseLanguage');
    if(!checkValue){
        localStorage.setItem('dataBaseLanguage', 'rus');
        createPlaceholderRus();
    }
    if(checkValue === 'rus'){
        createPlaceholderRus();
    }
    if(checkValue === 'eng'){
        createPlaceholderEng();
    }
};

function addUserToLocalDB(){
    user.name = firstName.value,
    user.last = lastName.value,
    user.login = login.value,
    user.phone = phone.value,
    user.email =email.value,
    user.password = password1.value;
    user.registerDate = new Date();
    dataBaseUsers.push(user);
    const checkUser = localStorage.getItem('dataBaseUsers');
    if(!checkUser){
        let newUser = JSON.stringify(dataBaseUsers)
        localStorage.setItem('dataBaseUsers', newUser);
    }
    else{
        const dataBaseUsersJson = localStorage.getItem('dataBaseUsers');
        let newUser = JSON.parse(dataBaseUsersJson);
        newUser.push(user);
        let updateUsersDB = JSON.stringify(newUser);
        localStorage.setItem('dataBaseUsers', updateUsersDB);
    }
}

contLanguages.addEventListener('click', (e) => {
    if(rusLang.checked){
        createPlaceholderRus();
        localStorage.setItem('dataBaseLanguage', 'rus');
    }
    if(engLang.checked){
        createPlaceholderEng();
        localStorage.setItem('dataBaseLanguage', 'eng');
    }
});

function clearInput(){
    firstName.value = '';
    lastName.value = '';
    login.value = '';
    phone.value = '';
    email.value = '';
    password1.value = '';
    password2.value = '';
}

function showError(text){
    errorWindow.innerText = text;
    errorWindow.style.top = '10px';
    setTimeout(() => {
        errorWindow.style.top = '-60px';
    }, 2000);
};

function checkValidate(regExp, element){
    if(regExp.test(element.value)){
        element.value = element.value;
        return true;
    }
}

function checkErorrs(){
    const checkLang = localStorage.getItem('dataBaseLanguage');
    if(firstName.value.length === 0){
        checkLang === 'rus' ? showError('Введите имя!') : showError('Enter your name!') ;
        return false;
    }
    else if(lastName.value.length === 0){
        checkLang === 'rus' ?  showError('Введите фамилию!') : showError('Enter your last name!');
        return false;
    }
    else if(login.value.length === 0){
        checkLang === 'rus' ?  showError('Введите логин!') : showError('Enter your login!');
        return false;
    }
    else if(phone.value.length === 0){
        checkLang === 'rus' ?  showError('Введите телефон!') : showError('Enter your phone number!');
        return false;
    }
    else if(phone.value.length < 11 || phone.value.length > 11){
        checkLang === 'rus' ?  showError('Лимит символов 11!') : showError('Limit symbols is 11!');
        return false;
    }
    // else if(phone.value.length === 11 && !checkValidate(phoneValidation, phone)){
    //     checkLang === 'rus' ?  showError('Некорректный формат номера!') : showError('Uncorrect phone format!');
    //     return false;
    // }
    else if(email.value.length === 0){
        checkLang === 'rus' ?  showError('Введите email!') : showError('Enter your email!');
        return false;
    }
    // else if(email.value.length > 0 && !checkValidate(emailValidation, email)){
    //     checkLang === 'rus' ?  showError('Введите корректный email!') : showError('Enter valid email!');
    //     return false;
    // }
    else if(password1.value.length === 0){
        checkLang === 'rus' ?  showError('Введите пароль!') : showError('Enter your password!');
        return false;
    }
    else if(password2.value.length === 0){
        checkLang === 'rus' ?  showError('Введите повторный пароль') : showError('Repeat your password!');
        return false;
    }
    else if(password1.value !== password2.value){
        checkLang === 'rus' ?  showError('Пароли не совпадают') : showError('Passwords ain`t equal!');
        return false;
    }
    else{
        addUserToLocalDB();
        clearInput();
    }
};

function showUserInfo(){
    const language = localStorage.getItem('dataBaseLanguage')
    const allUsers = JSON.parse(localStorage.getItem('dataBaseUsers'));
    const lastUser = allUsers[Object.keys(allUsers)[Object.keys(allUsers).length - 1]];
    let title = 'Данные пользователя',
        name = 'Имя:' 
        lastname = 'Фамилия',
        login = 'Логин:';
        phone = 'Телефон',
        email = 'email',
        date = 'Дата регистрации';
        backBtn = 'Назад';
    if(language === 'eng'){
        title = 'Use\'s information';
        name = 'Name:';
        lastname = 'Last Name:';
        login = 'Login:';
        phone = 'Phone:';
        date = 'Registration data';
        backBtn = 'Back';
    };
    container.innerHTML=`
        <div class="container__form signUp-data">
            <h1 class="container__titleH1 data">${title}</h1>
            <div class="container__box">
                <div class="container__titles">
                    <p class="container__p">${name}</p>
                    <p class="container__p">${lastname}</p>
                    <p class="container__p">${login}</p>
                    <p class="container__p">${phone}</p>
                    <p class="container__p">${email}</p>
                    <p class="container__p">${date}</p>
                </div>
                <div class="container__values">
                    <p class="container__p">${lastUser.name}</p>
                    <p class="container__p">${lastUser.lastName}</p>
                    <p class="container__p">${lastUser.login}</p>
                    <p class="container__p">${lastUser.phone}</p>
                    <p class="container__p">${lastUser.email}</p>
                    <p class="container__p">${lastUser.registerDate}</p>
                </div>
            </div>
        </div>
    `;
}

containerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkErorrs();

    showUserInfo();
});

window.onload = () => {
    changePlaceholder();
}