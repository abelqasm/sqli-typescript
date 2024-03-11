// Numeric Enums
enum Res {
    Yes = 1, No = 0
}

function yesNo(yn: Res): void {
    if (yn === Res.Yes) console.log('yes');
    else console.log('no');
}

yesNo(Res.No);
yesNo(1);
// String Enums

enum Message {Success = "SUCCESS", Failure = "FAILURE"}

function succes(suf: Message): string {
    if (suf === Message.Success) return 'succes';
    else return 'failure';
}

console.log(succes(Message.Failure))
console.log(succes(Message.Success))