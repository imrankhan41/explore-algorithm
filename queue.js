class Queue{
    constructor(){
        this.queue=[]
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        this.queue.shift()
    }
}
const plates = new Queue();
console.log(plates.queue)
plates.enqueue("imran")
console.log(plates.queue)
plates.enqueue("imran1")
console.log(plates.queue)
plates.enqueue("imran2")
console.log(plates.queue)
plates.dequeue()
console.log(plates.queue)