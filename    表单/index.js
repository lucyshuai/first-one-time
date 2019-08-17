$(document).ready(() => {
    $('#form-demo').submit(function(event) {
        const form = $(this)

        if(form[0].checkvalidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.addClass('was-validate')
    })
})