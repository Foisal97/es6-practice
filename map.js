const stu=[    
{id:21,name:"omar sunny"},
{id:31,name:"manna"},
{id:41,name:"sakib"},
{id:40,name:"dipjol"}];

const names=stu.map(s=>s.name)
const id=stu.map(s=>s.id)
console.log(id);
console.log(names);
const big=stu.filter(s=> s.id>30);
console.log(big);


function add(num1,num2)
{
    console.log([...arguments]);
    return num1+num2+arguments[2];
}
const result=add(2,3,5,7);
console.log(result);
