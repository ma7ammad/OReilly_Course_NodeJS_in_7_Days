let input = process.argv;

// function callFunc(para){
//   console.log(" +++ callFunc ")
//   evenNumberTimeout(para).then( number => 
//     console.log(`entered even number is ${number}`)
//   )
// }

let para = input[2];
const evenNumberTimeout = (number) => {
  
  return MoFunc = new Promise((resolve, reject) => {
    let reminder = number % 2;
    if(reminder != 0){
      reject(new Error(`Entered nuumber ${number} is not even`));
    } else {
      return setTimeout(() => {
        resolve(number) ;
      }, number);
    }
  })
}


evenNumberTimeout(para).then( number => 
  console.log(`entered even number is ${number}`)
)
.catch(err => console.log(err))


