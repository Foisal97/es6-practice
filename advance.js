//false
//0 "" undefined null nan
//truth 
//"0" ''
const name="shakib khan";
if(name.length>0)
{
    console.log("condition is true");
}
else
{
    console.log("condition is false");
}

//null vs undefined

//null=dont asign a value 
//undefined=did not have the property

var pakhi;
console.log(pakhi);
function add(n1,n2)
{
    console.log(n1+n2);
}
const result=add(10,12);
console.log(result);


//== vs ===
//== dont check type,,just check the value
//=== check the type whether it is int is string


//map filter

const num=[1,2,3,4,5];
const output=[];
for(let i=0;i<num.length;i++)
{
    const element=num[i];
    const result=element*element;
    output.push(result);

}
console.log(output);

/**function square(element)
{
return element*element;
}
const result1=num.map(function(element){
    return element*element;
})*/

const result1=num.map(x=>x*x);
console.log(result1);


const  result3=num.filter(x=> x>5);
console.log(result3);