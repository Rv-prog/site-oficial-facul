function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11) return false;

    let soma = 0;
    let resto;
    if (cpf === "00000000000") return false;

    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

function cadastrar() {
    const nome = document.getElementById('nome');
    const cpf = document.getElementById('cpf');
    const dataNascimento = document.getElementById('dataNascimento');
    const numeroContato = document.getElementById('numeroContato');
    const result = document.getElementById('result');

    // Resetar estilos
    nome.style.border = '1px solid black';
    cpf.style.border = '1px solid black';
    dataNascimento.style.border = '1px solid black';
    numeroContato.style.border = '1px solid black';

    // Validar CPF
    if (!validarCPF(cpf.value)) {
        cpf.style.border = '1px solid red';
        result.innerHTML = "<p class='error'>CPF inválido. Por favor, tente novamente.</p>";
        return;
    }

    // Exibir resultado
    result.innerHTML =  `
        <h3 class='success'>Cadastro realizado com sucesso!</h3>
        <p><strong>Nome:</strong> ${nome.value}</p>
        <p><strong>CPF:</strong> ${cpf.value}</p>
        <p><strong>Data de Nascimento:</strong> ${dataNascimento.value}</p>
        <p><strong>Número para Contato:</strong> ${numeroContato.value}</p>
    `;
}