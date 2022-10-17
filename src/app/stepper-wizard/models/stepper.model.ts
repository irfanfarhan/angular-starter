export class Qstnset1Model {
    cde: any;
    text: any;
    val: any;
    constructor(data: any) {
        this.cde = data?.q1;
        this.text = data?.q1text;
        this.val = data?.q1val;
    }
}

export class Qstnset2Model {
    cde: any;
    text: any;
    val: any;
    constructor(data: any) {
        this.cde = data?.q2;
        this.text = data?.q2text;
        this.val = data?.q2val;
    }
}
