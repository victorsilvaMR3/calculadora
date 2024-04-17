form.addEventListener('submit', function (event) {
    /* Previne o comportamento padrão do evento submit do JS, ou seja,
    impede o recarregamento da página */
    event.preventDefault();

    const vazao = document.getElementById('vazao').value;
    const peso = document.getElementById('peso').value;
    const dogra = document.getElementById('droga').value;
    const volume = document.getElementById('volume').value;

    /* Recebo dados dos inputs */
    const bmi = (vazao / volume * droga) / (60 * 1000 / peso).toFixed(3);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;

    form.addEventListener('keypress', function(event) {
        if (event.key === 'press') {
            document.getElementById('#calculate').click();
        }
});
