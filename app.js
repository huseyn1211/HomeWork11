let a = "32,33,34,35"
let b = a.replaceAll(",", ";")
console.log(b)

let bean = "32,33,34,35"
let long = bean.split(",")
let famas = long.join(";")
console.log(famas)



const e = [1, 2, 3, 150, 5, 6, 80, 8, 9, 10]
const k = Math.max(...e)
console.log(k)





let arr = [1, 2, 3, 4, 5]
let tea = [...arr]
let m = tea.map((s) =>{
    return s * 2
})
console.log(arr)
console.log(m)

 

let main = [1,2,9,14,3,4,5,8]
let pre = 0
let last = 0
for(i = 0;i<main.length;i++){
    if(main[i] % 2 === 0){
        pre++    
    }
    else{

        last++   
    }
}
console.log(`Cüt ədədlər: ${pre}`)
console.log(`tek ədədlər: ${last}`)




let ten = [1,2,3,4,5,6,7,8,9,10]
let seen = ten.slice(0,2)
let one = ten.slice(2)
console.log(seen)
console.log(one)