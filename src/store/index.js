import { extendObservable } from 'mobx';

class MyStorage {
    constructor() {
        extendObservable(this, {
            myData: 'Hello world'
        })
    }
}

const MyStore = new MyStorage();

export default MyStore;