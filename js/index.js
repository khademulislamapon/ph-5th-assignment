function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
};
function getInnerTextNum(id) {
    return parseFloat(document.getElementById(id).innerText);
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
    getClassRemove('donate-section');
    getClassAdd('history-section');

    getBtn2ClassAdd('btn-donation');
    getBtn2ClassRemove('btn-donation');
    getBtn1ClassRemove('btn-history');
    getBtn1ClassAdd('btn-history');
});

document.getElementById('btn-history').addEventListener('click', function () {
    getClassAdd('donate-section');
    getClassRemove('history-section');

    getBtn2ClassAdd('btn-history');
    getBtn2ClassRemove('btn-history');
    getBtn1ClassRemove('btn-donation');
    getBtn1ClassAdd('btn-donation');
});

document.getElementById('donate-now-btn1').addEventListener('click', function () {
    const donateInput1 = getInputValue('donate-input1');
    // const donateAmount1 = getInnerTextNum('donate-amount1');
    // const mainBalance = getInnerTextNum('main-balance');

    if (isNaN(donateInput1) || donateInput1 <= 0) {
        return alert("Invalid Donation Amount");
    }

    document.getElementById('my_modal_5').showModal();

    const myMainBalance = getInnerTextNum('main-balance') - donateInput1;
    const allDonateAmount1 = getInnerTextNum('donate-amount1') + donateInput1;

    document.getElementById('main-balance').innerText = myMainBalance;
    document.getElementById('donate-amount1').innerText = allDonateAmount1;
    document.getElementById('donate-input1').value = '';


    const historySection = document.createElement('div');
    historySection.setAttribute("class", "w-11/12 lg:w-10/12 mx-auto border border-zinc-200 rounded-2xl p-8 mb-6");
    historySection.innerHTML = `
        <div class="text-TextCol font-bold text-lg md:text-xl mb-4">${donateInput1} Taka is ${getInnerText('donate-heading1')}</div>
        <div class="font-light text-sm md:text-base text-zinc-600">Date: ${new Date()}</div>
    `;
    document.getElementById('history-section').appendChild(historySection);
});