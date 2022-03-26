class Singleton {
  static instance: Singleton;
  private _userName: string;
  private _someObj: any;

  private constructor() {
    // since constructor is private, this class
    // cannot be instantiated in a normal way.
    this._userName = "some-name";
    this._someObj = {};
  }

  static getInstance() {
    if (!Singleton.instance) {
      console.log("First time calling - create and cache the instance");
      Singleton.instance = new Singleton();
    }
    console.log("Return the cached instance");
    return Singleton.instance;
  }

  get userName() {
    return this._userName;
  }
  get someObj() {
    return this._someObj;
  }
}

const s1 = Singleton.getInstance();

console.log(s1.userName);

const s2 = Singleton.getInstance();

// obj are work by reference, so we can use objs to test if there is
// actually only one instacne in memory
console.log("Testing two singleton instances: are they equal?");
console.log(s1.someObj === s2.someObj); // true, because its the same instance

//

class objtest {
  private _o: any;
  constructor() {
    this._o = {};
  }
  get o() {
    return this._o;
  }
}

const o1 = new objtest();
const o2 = new objtest();
// unlike Singleton, they are different!
console.log("Testing two non-singleton instances: are they equal?");
console.log(o1.o === o2.o); // false
