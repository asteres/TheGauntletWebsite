export class User {


    constructor(
        public $key:string,
        public uid: string,
        public displayName:string,
        public email:string,
        public admin:boolean,
        public eventCreator:boolean,
        public patreon7Member:boolean,
        ) {

    }

    static fromJsonList(array): User[] {
        return array.map(User.fromJson);
    }

    static fromJson({$key,uid,displayName,email,admin,eventCreator,patreon7Member}):User {
        return new User(
            $key,
            uid,
            displayName,
            email,
            admin,
            eventCreator,
            patreon7Member);
    }

    }