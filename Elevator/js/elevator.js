class Elevator {
    constructor(size) {
        this.size = size;
        this.isReady = true;
    }
    moveDown() {
        let passengers = document.getElementById('count-passengers');
        let blockElevator = document.getElementById('block-elevator');

        if(passengers.value > this.size || this.isReady == false) {
            alert('Elevator is full!');
        } else {
            console.log('Elevator is move down!');
            blockElevator.style.animationName = 'move-down';
            blockElevator.style.marginTop = '350px';
            console.log(passengers.value);
            this.isReady = false;
            console.log(this.isReady);
            setTimeout (() => this.isReady = true, 6000);
        }   
    }
    moveUp() {
        let passengers = document.getElementById('count-passengers');
        let blockElevator = document.getElementById('block-elevator');

        if(passengers.value > this.size || this.isReady == false) {
            alert('Elevator is full!');
        } else {
            console.log('Elevator is move down!');
            blockElevator.style.animationName = 'move-up';
            blockElevator.style.marginTop = '0px';
            console.log(passengers.value);
            setTimeout (() => this.isReady = true, 6000);
            this.isReady = false;
        }                
    }    
}

let elevator1 = new Elevator (10);
// elevator1.moveDown();