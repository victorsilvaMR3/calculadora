form.addEventListener('submit', function (event) {
    /* Previne o comportamento padrão do evento submit do JS, ou seja,
    impede o recarregamento da página */
    event.preventDefault();

    const vazao = document.getElementById('vazao').value;
    const peso = document.getElementById('peso').value;
    const droga = document.getElementById('droga').value;
    const volume = document.getElementById('volume').value;
    const med = document.getElementById('plataforma').value;
    const fixo = 60;
    const mil = 1000;

    
  

  
    /* Recebo dados dos inputs */

    const bmi = (((((droga * med / volume) * vazao) / peso) / fixo) * mil).toFixed(2);


    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');


   

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;

    form.addEventListener ('keypress', function(event) {
        if (event.key === 'press') {
            document.getElementById('#calculate').click();
    }
    })
}


);







function getSelectValue()
{
    var selectedValue = document.getElementById("plataforma").value;
    console.log(selectedValue);
}
getSelectValue();
