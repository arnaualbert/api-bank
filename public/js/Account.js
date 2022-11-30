class Account{
    //atributos
        #DNIClient;
        #FullNameClient;
        accountType=new AccountType(type);
        #amount;
        clientType;
        entryDate;
    //Constructor
    constructor(DNIClient,FullNameClient,accountType,amount,clientType,entryDate){
        this.#DNIClient=DNIClient;
        this.#FullNameClient=FullNameClient;
        this.accountType=accountType;
        this.#amount=amount;
        this.clientType=clientType
        this.entryDate=entryDate;
    }
    get DNIClient(){
        return this.#DNIClient;
    }
    set DNIClient(DNIClient){
        this.#DNIClient=DNIClient;
    }
    get FullNameClient(){
        return this.#FullNameClient;
    }
    set FullNameClient(FullNameClient){
        this.#FullNameClient=FullNameClient;
    } 
    get amount(){
        return this.#amount;
    }
    set amount(amount){
        this.#amount=amount;
    } 
    get clientType(){
        return this.clientType;
    }
    set clientType(clientType){
        this.clientType=clientType;
    } 
    get entryDate(){
        return this.entryDate;
    }
    set entryDate(entryDate){
        this.entryDate=entryDate;
    } 

    }