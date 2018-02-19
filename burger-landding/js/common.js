console.log('in common.js');
console.log('$');

$('#order-form').on('submit', submitForm);

function submitForm (ev) {
    console.log('in submitForm');
    ev.preventDefault();
    
    
    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');

    ajaxForm(form).done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        
        if (status === 'OK') {
            form.append('<div class="order__overlay"><div class="order__overlay-window"><div class="order__overlay-header"><a href="#" class="order__overlay-close"><img src = "../img/content/close-red.png" alt = "Close" class="close-link__img"></a></div><p class="order__success">' + mes + '</p></div></div>');
        } else{
            form.append('<div class="order__overlay"><div class="order__overlay-window"><div class="order__overlay-header"><a href="#" class="order__overlay-close"><img src = "../img/content/close-red.png" alt = "Close" class="close-link__img"></a></div><p class="order__success">' + mes + '</p></div></div>');
        }
    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};

// Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');
    
    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};