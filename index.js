
function takeANumber(line, new_name) {
  console.log (`Welcome, ${new_name}. You are number ${line.length+1} in line.`)
  line.push(new_name);
  return line, `Welcome, ${new_name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine){
 if (katzDeliLine.length<1){
   
   return "There is nobody waiting to be served!"
 }
 else {var 
// console.log(`Currently serving ${output}.`)
 return katzDeliLine, `Currently serving ${katzDeliLine.shift()}.`
 }
}

function currentLine (line){
   if (line.length<1){
   return "The line is currently empty."
   }
  if(line.length>=1){
    var text = "The line is currently: ";
    for (var i = 0; i < line.length; i++){
      if (i< line.length-1){console.log(i)
      text += `${i+1}. ${line[i]}, `}
      if (i=== line.length-1){console.log(i)
      text += `${i+1}. ${line[i]}`}
    }
    return text
}}

var  deliLine = ['srs','nat']
console.log(currentLine (deliLine))
// console.log(deliLine)
// console.log(nowServing (deliLine))
// console.log(deliLine)
// console.log(nowServing (deliLine))
// console.log(deliLine)
// console.log(nowServing (deliLine))
// console.log(deliLine)