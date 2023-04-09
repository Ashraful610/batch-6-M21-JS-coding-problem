const duplicate = ['asif' , 'arif','ash' , 'asif' ,'rafi' , 'ash' , 'rahim' ,'nobita' ,'rafi','rahim', 'arif']
function getUnique (nameArray){
    const unique = []
    for(let i=0; i<nameArray.length; i++){
        if(unique.includes(nameArray[i]) === false){
            unique.push(nameArray[i]);
        }
    }
    return unique ;
}
const allUnique = getUnique(duplicate)
console.log(allUnique) ;