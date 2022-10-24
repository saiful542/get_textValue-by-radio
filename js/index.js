const radio_input = document.querySelectorAll('.radio-field')
const delete_button = document.querySelectorAll('.button')
const add_field = document.querySelector('.add-field')
const field_parent=document.querySelector('.radio-form')
console.log(field_parent)

field_parent.addEventListener('click',(e)=>{
    console.log(e.target.value)
})

// const radio_array = Array.from(radio_input)
// const display_value = document.querySelector('.output .value');

// // add
// add_field.addEventListener('click', (e) => {
//     console.log(e.target.parentNode.firstElementChild.firstElementChild)
//     const div = document.createElement('div')
//     div.classList.add('field')
//     div.innerHTML = `<input type="radio" name="radio" class="radio-field ">
//                      <input type="text" class="text-field" value="second boy">
//                      <button  class="button">delete</button>`
//     e.target.parentNode.firstElementChild.appendChild(div)
//     console.log(div)
// })

// const last_field = document.querySelector('.field:last-child')
// console.log(last_field)
// console.log(radio_input)


// //delete
// delete_button.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         e.target.parentNode.parentNode.removeChild(e.target.parentNode)
//     })
// })




// radio_array.forEach(radio => {
//     radio.addEventListener('change', (e) => {
//         console.log(e.target.nextElementSibling.value)
//         display_value.innerHTML = `<p>${e.target.nextElementSibling.value}</p>`
//     })

// });













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