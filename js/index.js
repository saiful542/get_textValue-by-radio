const radio_input = document.getElementsByClassName('radio-field')

const radio_array = Array.from(radio_input)

const display_value = document.querySelector('.output .value');

const handleRadio = () => {
    radio_array.forEach(element => {
        uncheck_radio();
        if (element.checked) {
            element.classList.add('checked')
            const checked_text = document.querySelector('.checked + .text-field')
            console.log(checked_text.value)
            display_value.innerHTML=`<p>${checked_text.value}</p>`
        }
    });
}

const uncheck_radio = () => {
    radio_array.forEach(e => {
        if (!e.checked) {
            e.classList.remove('checked')
        }
    });
}