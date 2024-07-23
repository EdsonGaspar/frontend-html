const activity ={
    name:'Matabicho',
    data: new Date("2025-03-21  07:08"),
    finalizada: false
}

let activitys = [
    activity,
    {
        name:'Almoço',
        data: new Date("2024-07-20  06:26"),
        finalizada: true
    },
    {
        name: 'Jantar',
        data: new Date("2024-08-17 19:05"),
        finalizada: false
    },
]


// activitys = [];


const criarItems= (activity)=> {
    let input = '<input type="checkbox" '

    if(activity.finalizada){
        input += 'checked';
    }

    input +='>'

    return (`
            <div class="list-activity">
            <div class="list-activity-group">
                ${input}
                <p>${activity.name}</p>
            </div>
            <span>${activity.data}</span>
            </div>
        `)
}

const list = document.querySelector('.list');

let updateList = () => {
    if(activitys.length == 0){
        list.innerHTML = `<p>Nenhuma actividade cadastrada</p>`;
        return;
    }

    for(let activity of activitys){
        list.innerHTML += criarItems(activity);
    }
}

updateList();

//Formatação da data
let formatDate=(data)=>{
    
}