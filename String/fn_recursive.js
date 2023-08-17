


// A Recursive Function
function fn(n) {

    if (n === 0){
        console.log("end")
        return
    }
    console.log(n)
    fn(n - 1);

}

fn(5)
console.log();

//The substitute forEach
const names = ["Jon", "Smith", "Carter", "Leon", "David"];
function showNames(arr, n) {
    if(n === 0){
        arr.push("End")
        return
    }

    showNames(arr, n -1)
    console.log(arr[n])
}
showNames(names, names.length);











