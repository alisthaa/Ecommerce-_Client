let categories = ["one","two","three"]
 
function changeCategoryValue(index,changeValue) {

   let temp = [...categories]
   temp[index] = changeValue
    return temp
    
    temp.map((el,index)=>{

    })
}
console.log(changeCategoryValue(1,'category-two'))

