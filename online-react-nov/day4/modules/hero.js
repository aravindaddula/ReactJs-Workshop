import { Person } from "./person.js";

export class Hero extends Person{
    title = 'default title';
    firstname = 'default firstname';
    lastname = 'default lastname';
    city = 'default city';
    _mission = "my secret mission";
    static version = 1001;
    constructor(argTitle, argFirstName, argLastName, argCity, argMsg){
        super(argMsg);
        this.title = argTitle;
        this.firstname = argFirstName;
        this.lastname = argLastName;
        this.city = argCity;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get mission(){
        return this._mission;
    }
    set mission(nmission){
        this._mission = nmission;
    }
};