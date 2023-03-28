const languageSwitcherButton = document.getElementById('language-switcher');
const serviceDescription = document.getElementById('service-description');

let language = 'english';

function sไทย() {
    if (language === 'english') {
        serviceDescription.textContent = 'บริการบัญชีของเรารวมถึงการบันทึกบ