Hooks.on('renderNoteConfig',async function(){
    document.querySelector('#note-config').style.height='auto';

    let fontSizeElement = document.querySelectorAll('#note-config .form-group')[7];
    console.log(fontSizeElement)
    let fg = document.createElement('div');
    fg.classList.add('form-group');

    let lbl = document.createElement('label')
    lbl.innerText = "Font Color";

    let ff = document.createElement('div');
    ff.classList.add('form-fields');

    let input1 = document.createElement('input')
    input1.classList.add('color');
    input1.type='text'
    input1.name='textColor';
    input1.value='#FFFFFF';

    let input2 = document.createElement('input');
    input2.type='color';
    input2.value='#FFFFFF'
    input2.setAttribute('data-edit','textColor');

    ff.appendChild(input1);
    ff.appendChild(input2);

    fg.appendChild(lbl);
    fg.appendChild(ff);
    fontSizeElement.insertAdjacentElement('afterend',fg);

});