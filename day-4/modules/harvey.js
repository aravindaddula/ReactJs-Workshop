import { Mike } from "./mike.js"

 export class Harvey extends Mike{
    fullName="Harvey Reginald ";
    _mission="practicing Law"

    constructor(argFn){
        super();
        this.fullName = this.fullName;
    }

    get one(){
        return this._mission;
    }
    set one(chMission){
        this._mission = chMission;         
    }

    name(){
        return this.fullName + "Mike";
    } 

}

