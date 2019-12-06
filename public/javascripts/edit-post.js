let edit = document.getElementById('edit')
let show = document.getElementById('show-page')
// let textArea = document.getElementById('input')
let form = document.getElementById('form')

edit.addEventListener('click', function(evt){
    evt.preventDefault()
    edit.classList = 'hide';
    form.classList = '';
    show.classList = 'hide';    
})