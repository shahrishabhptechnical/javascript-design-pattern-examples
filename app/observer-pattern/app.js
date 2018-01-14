class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(obsr) {
        this.observers.push(obsr);
    }

    unsubscribe(obsr) {
        var index = this.observers.indexOf(obsr);
        if (index !== -1) {
            this.observers.splice(index, -1);
        } 
    }

    notify() {
        
    }
}