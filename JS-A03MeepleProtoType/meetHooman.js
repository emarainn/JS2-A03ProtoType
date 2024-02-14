
const myModal = bootstrap.Modal('#entryModal');


setTimeout(() => {
    myModal.hide();
}, 3000);

function onclick(){
    myModal.show();
}
