$(document).ready(function() {
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });
    $('#phone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    $('form').validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
            },
            email: {
                required: true
            },
            phone: {
                required: true
            },
            cpf: {
                required: true
            },
            address: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages: {
            name: {
                required: 'Por favor, informe seu nome'
            },
            email: {
                required: 'Por favor, informe seu email'
            },
            phone: {
                required: 'Por favor, informe seu telefone'
            },
            cpf: {
                required: 'Por favor, informe seu CPF'
            },
            address: {
                required: 'Por favor, informe seu endereço'
            },
            cep: {
                required: 'Por favor, informe seu CEP'
            },
        },
        submitHandler: function(form) {
            console.log(form);
            form.submit();
        },
        invalidHandler: function(event, validator) {
            let incorrectFields = validator.numberOfInvalids();
            if (incorrectFields) {
                alert(`Please fill in ${incorrectFields} fields`);
            }
        }
    })
});