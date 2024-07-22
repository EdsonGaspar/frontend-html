// const activity ={
//     name:'Almoço',
//     data: new Date("2024-07-20  06:26"),
//     finalizada: true
// }


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

let activitys = [
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
for(let activity of activitys){
    list.innerHTML += criarItems(activity);
}

// sábado, dia 18 às 08:00
// Academia em grupo