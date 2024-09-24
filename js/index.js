document.getElementById('blog-button').addEventListener('click', function(){
    window.location.href = './blog.html';
});

function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
};
function getInnerTextNum(id) {
    return parseFloat(document.getElementById(id).innerText);
};
function getValue(id) {
    return document.getElementById(id).value = '';
};

function getInnerText(id) {
    return document.getElementById(id).innerText;
};

function getClassRemove(id) {
    return document.getElementById(id).classList.remove('hidden');
};
function getClassAdd(id) {
    return document.getElementById(id).classList.add('hidden');
};

function getBtn1ClassAdd(id) {
    return document.getElementById(id).classList.add('bg-transparent', 'hover:bg-zinc-200', 'border', 'border-zinc-400', 'hover:border-transparent', 'font-medium', 'text-zinc-600');
};
function getBtn1ClassRemove(id) {
    return document.getElementById(id).classList.remove('bg-BtnBg', 'hover:bg-lime-400', 'text-TextCol', 'font-semibold');
};
function getBtn2ClassRemove(id) {
    return document.getElementById(id).classList.remove('bg-transparent', 'hover:bg-zinc-200', 'border', 'border-zinc-400', 'hover:border-transparent', 'font-medium', 'text-zinc-600');
};
function getBtn2ClassAdd(id) {
    return document.getElementById(id).classList.add('bg-BtnBg', 'hover:bg-lime-400', 'text-TextCol', 'font-semibold');
};

document.getElementById('btn-donation').addEventListener('click', function () {
    getBtn2ClassAdd('btn-donation');
    getBtn2ClassRemove('btn-donation');
    getBtn1ClassRemove('btn-history');
    getBtn1ClassAdd('btn-history');

    getClassRemove('donate-section');
    getClassRemove('footer-section');
    getClassAdd('history-section');
});
document.getElementById('btn-history').addEventListener('click', function () {
    getBtn2ClassAdd('btn-history');
    getBtn2ClassRemove('btn-history');
    getBtn1ClassRemove('btn-donation');
    getBtn1ClassAdd('btn-donation');

    getClassAdd('donate-section');
    getClassAdd('footer-section');
    getClassRemove('history-section');

    if(getInnerText('history-section')) {
        getClassRemove('footer-section');
    }
});

// 1st
document.getElementById('donate-now-btn1').addEventListener('click', function () {
    const donateInput1 = getInputValue('donate-input1');

    if (isNaN(donateInput1) || donateInput1 <= 0 || donateInput1 > getInnerTextNum('main-balance')) {
        getValue('donate-input1');
        return alert("Invalid Donation Amount");
    }

    document.getElementById('my_modal_5').showModal();

    const myMainBalance = getInnerTextNum('main-balance') - donateInput1;
    const allDonateAmount1 = getInnerTextNum('donate-amount1') + donateInput1;

    document.getElementById('main-balance').innerText = myMainBalance;
    document.getElementById('donate-amount1').innerText = allDonateAmount1;
    getValue('donate-input1');

    const historySection = document.createElement('div');
    historySection.setAttribute("class", "w-11/12 lg:w-10/12 mx-auto border border-zinc-200 rounded-2xl p-8 mb-6");
    historySection.innerHTML = `
        <div class="text-TextCol font-bold text-lg md:text-xl mb-4">${donateInput1} Taka is ${getInnerText('donate-heading1')}</div>
        <div class="font-light text-sm md:text-base text-zinc-600">Date: ${new Date()}</div>
    `;
    document.getElementById('history-section').appendChild(historySection);
});
// 2nd
document.getElementById('donate-now-btn2').addEventListener('click', function () {
    const donateInput2 = getInputValue('donate-input2');

    if (isNaN(donateInput2) || donateInput2 <= 0 || donateInput2 > getInnerTextNum('main-balance')) {
        getValue('donate-input2');
        return alert("Invalid Donation Amount");
    }

    document.getElementById('my_modal_5').showModal();

    const myMainBalance = getInnerTextNum('main-balance') - donateInput2;
    const allDonateAmount2 = getInnerTextNum('donate-amount2') + donateInput2;

    document.getElementById('main-balance').innerText = myMainBalance;
    document.getElementById('donate-amount2').innerText = allDonateAmount2;
    getValue('donate-input2');

    const historySection = document.createElement('div');
    historySection.setAttribute("class", "w-11/12 lg:w-10/12 mx-auto border border-zinc-200 rounded-2xl p-8 mb-6");
    historySection.innerHTML = `
        <div class="text-TextCol font-bold text-lg md:text-xl mb-4">${donateInput2} Taka is ${getInnerText('donate-heading2')}</div>
        <div class="font-light text-sm md:text-base text-zinc-600">Date: ${new Date()}</div>
    `;
    document.getElementById('history-section').appendChild(historySection);
});
// 3rd
document.getElementById('donate-now-btn3').addEventListener('click', function () {
    const donateInput3 = getInputValue('donate-input3');

    if (isNaN(donateInput3) || donateInput3 <= 0 || donateInput3 > getInnerTextNum('main-balance')) {
        getValue('donate-input3');
        return alert("Invalid Donation Amount");
    }

    document.getElementById('my_modal_5').showModal();

    const myMainBalance = getInnerTextNum('main-balance') - donateInput3;
    const allDonateAmount3 = getInnerTextNum('donate-amount3') + donateInput3;

    document.getElementById('main-balance').innerText = myMainBalance;
    document.getElementById('donate-amount3').innerText = allDonateAmount3;
    getValue('donate-input3');

    const historySection = document.createElement('div');
    historySection.setAttribute("class", "w-11/12 lg:w-10/12 mx-auto border border-zinc-200 rounded-2xl p-8 mb-6");
    historySection.innerHTML = `
        <div class="text-TextCol font-bold text-lg md:text-xl mb-4">${donateInput3} Taka is ${getInnerText('donate-heading3')}</div>
        <div class="font-light text-sm md:text-base text-zinc-600">Date: ${new Date()}</div>
    `;
    document.getElementById('history-section').appendChild(historySection);
});