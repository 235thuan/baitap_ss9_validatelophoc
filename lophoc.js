let name='A1234G';
let name1="E1234G";
let name2="A123G";
let name3="A1234A";
let pattern=/^[ACP]+([0-9]{4,})[GHIKLM]$/;
let result=pattern.test(name);
alert(result);

