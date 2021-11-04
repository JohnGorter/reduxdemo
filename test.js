


function* mydata(a) {
    yield 10
    yield* moredata()
    yield 20 
}
function* moredata(a) {
    yield 15
    yield 17
}


for (var i of mydata()){
    console.log("i", i);
}


