$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(xx) xxxxx-xxxx'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: 'xxx.xxx.xxx-xx'
})

$('#cep').mask('00000-000', {
    placeholder: 'xxxxxx-xxx'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
    },
    submitHandler: function (form) {
        alert("Tudo certo! Em breve, um de nossos consultores entrará em contato.");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir!");
    }
})