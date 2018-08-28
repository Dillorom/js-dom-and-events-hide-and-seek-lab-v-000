function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget(){
    return document.querySelector(".target")
}

function deepestChild(){
    let grandNode = document.querySelector("#grand-node")
    return grandNode.children[0].querySelector("div div div div div")
}

function increaseRankBy(n){
    const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list')
    for (let i = 0; i < ranks.length; i++) {
        let children = ranks[i].children

        for (let j = 0; j < children.length; j++){
            children[j].innerHTML = parseInt(children[j].innerHTML)+n
        }
    }

}
