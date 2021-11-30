 // ES6
      /*   class Hero{
            constructor(argTitle, argFirstName, argLastName, argCity){
                this.title = argTitle;
                this.firstname = argFirstName;
                this.lastname = argLastName;
                this.city = argCity;
            }
            fullname(){
                return this.firstname+" "+this.lastname;
            }
        } */
 
        // ES7 
        class Hero{
            title = 'default title';
            firstname = 'default firstname';
            lastname = 'default lastname';
            city = 'default city';
            _mission = "my secret mission";
            static version = 1001;
            constructor(argTitle, argFirstName, argLastName, argCity){
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
        let hero = new Hero("Ironman","Tony","Stark","New York");
        console.log(hero.firstname, hero.title);
        console.log(hero.fullname());
        console.log(hero.mission);
        hero.mission = "Modified Mission";
        console.log(hero.mission);
        console.log(Hero.version);