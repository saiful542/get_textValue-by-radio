const radio_input = document.querySelectorAll('.radio-field')
const delete_button = document.querySelectorAll('.button')
const add_field = document.querySelector('.add-field')
const field_parent = document.querySelector('.radio-form')
const radio_array = Array.from(radio_input)
const display_value = document.querySelector('.output .value');
const last_field = document.querySelector('.radio-form .field:last-child')


// item no
let item = field_parent.lastElementChild.firstElementChild.nextElementSibling.value
let item_int_value = parseInt(item[item.length - 1])
// item no



field_parent.addEventListener('click', (e) => {
    // delete
    if (e.target.className == 'button') {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode)
        item_int_value--;
    }

    // take value
    else if (e.target.parentNode.className == 'field') {
        display_value.innerHTML = `<p>${e.target.nextElementSibling.value}</p>`
    }

})



// add
add_field.addEventListener('click', (e) => {
    item_int_value++;
    const div = document.createElement('div')
    div.classList.add('field')
    div.innerHTML = `<input type="radio" name="radio" class="radio-field ">
                     <input type="text" class="text-field" value="option ${item_int_value}">
                     <button  class="button">delete</button>`
    field_parent.appendChild(div)
})





// OLD COLDE

// const handleRadio = () => {
//     radio_input.forEach(element => {
//         uncheck_radio();
//         if (element.checked) {
//             element.classList.add('checked')
//             const checked_text = document.querySelector('.checked + .text-field')
//             console.log(checked_text.value)
//
//         }
//     });
//     console.log(radio_input)
//     console.log(radio_array)
// }

// const uncheck_radio = () => {
//     radio_input.forEach(e => {
//         if (!e.checked) {
//             e.classList.remove('checked')
//         }
//     });
// }