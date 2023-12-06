let car1={
    marka: 'Toyota',
    model: 'corolla',
    il : '2015',
    mator: '1.6'
}

let car2={
    marka: 'Mercedes',
    model: 'c-class',
    il: '2016',
    mator: '2'
}

 let select = document.getElementById('select');
 

 function SelectCar(){
    for(let key in car1){

    }
}
console.log(this.marka + '  ' +this.model +'  '+ this.il +'  '+ this.mator)

SelectCar.call(car1);
SelectCar.call(car2);

//  select.innerHTML = ;