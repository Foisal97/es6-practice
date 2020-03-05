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
