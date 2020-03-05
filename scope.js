function sum(first,second)
{
    let result=first+second;
    console.log(result);

    return result;

}
const output=sum(3,7);
console.log(output);

function watch()
{
    let count=0;
    return function(){
        count++;
        return count;
    }
}

const clock1=watch();
console.log(clock1);
console.log(clock1());
console.log(clock1());