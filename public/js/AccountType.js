class AccountType{
    //atributos
        type;
        id;
    //contructor
    constructor(type,id){
        this.type=type;
        this.id=id;
    }
    get type(){
        return this.type;
    }
    get id(){
        return this.id;
    }
    set type(type){
        this.type=type;
    }
    set id(id){
        this.id=id;
    }
    
    }