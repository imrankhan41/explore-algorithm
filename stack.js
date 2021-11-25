class Stack {
    constructor() {
        this.stack=[]
    }
    add(element){
        this.stack.push(element);
    }
    remove(){
        return this.stack.pop()
    }
}
const plates = new Stack();
console.log(plates.stack)
plates.add("imran")
console.log(plates.stack)
plates.add("imran1")
console.log(plates.stack)
plates.add("imran2")
console.log(plates.stack)
plates.remove()
console.log(plates.stack)
