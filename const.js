const math=(x,y)=>{
    const add=x+y;
    const diff=x-y;
    const sum=add*diff;
    return sum;
}
const sum1=math(5,5);
console.log(sum1);


const ages=[12,14,16,13,17];
const ages2=[15,16,12];
const ages3=[25,36,22,29];
const all=ages.concat(ages2).concat(ages3).concat([60]);
const all2=[... ages,...ages2,...ages3];
console.log(all2);

const bus=450;
const mini=650;
const min=550;
const max=Math.max(bus,mini,min);
console.log(max);

const busy=[450,670,700];
const max2=Math.max(...busy);
console.log(max2);

class Student
{
    constructor(sid,sname)
    {
        this.id=sid;
        this.name=sname;
        this.school="aust"
    }

}
const student1=new Student("12","shuvo");
const student2=new Student("24","mahi");
 console.log(student1.name,student2.name);


class Parent
{
    constructor()
    {
        this.fatherName="schewneger";
    }
}
 class Child extends Parent
 {
     constructor(name)
     {
         super();
         this.name=name;
     }
     getFullName(){
         return this.name+" "+this.fatherName;
     }
 }

 const baby=new Child("Arnold");
const baby2=new Child("Tom");
 console.log(baby.getFullName());
 console.log(baby2.getFullName());
