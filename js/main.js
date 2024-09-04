let myhttp = new XMLHttpRequest
let row =document.querySelector(`.row`)
let select =document.querySelector(`select`)

select.addEventListener(`change`, function(){
    getData(this.value)
})
getData(`watermelon`)

function getData(data){
    myhttp.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${data}`)
myhttp.send()
myhttp.addEventListener(`readystatechange`, function(){

    if(this.readyState==4){
         let alldata = JSON.parse(this.response)
         
         showData(alldata.recipes)
    }
})
}

function showData(arr) {
    let cartona =``
    for (let index = 0; index < arr.length; index++) {
       cartona+=` <div class="col-md-4">
            <img class=" w-100 mb-2" src="${arr[index].image_url}" alt="">
            <p><b>Title:</b>${arr[index].title}</p>
            <p><b>Recipe Id:</b>${arr[index].recipe_id}</p>
            <p><b>puplisher:</b>${arr[index].publisher}</p>
            <p><b>Social Rank:</b>${arr[index].social_rank}</p>
        </div>`
        row.innerHTML=cartona
    }
}


let search=document.querySelector(`input`)
search.addEventListener(`keyup`,function(event){
    console.log(event);
    switch (event.key) {
        case "Enter":
            getData(this.value)
            break;
    
        default:
            break;
    }
})