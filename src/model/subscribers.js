// Here just local storage is declared and initialised

let myStorage = window.localStorage;
let subscribers = ["test@gmail.com"]
myStorage.setItem("subscribers", JSON.stringify(subscribers))

export {myStorage}