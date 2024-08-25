// ...........stack memory , Heap Memory ..............

let myName = 'Rehmat Ullah'
let anothername = myName
anothername = "Abdullah"

console.log(myName)
console.log(anothername)

let userone = {
    email:"rehmat.code@gmail.com",
    id:"rehmat@123"
}

let usertwo = userone 

usertwo.email = "user@google.com"
console.log(userone.email)
console.log(usertwo.email)