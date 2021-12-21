// onclick Event function call to get all input value.
document.querySelector('#btn_sub').addEventListener('click',() =>{
 // first input value get
 let first_gpa=document.querySelector('#first-gpa').value;
 // two input value get
 let two_gpa=document.querySelector("#two-gpa").value;
 // three input value get
 let three_gpa=document.querySelector("#three-gpa").value;
 // four input value get
 let four_gpa=document.querySelector("#four-gpa").value;
 // five input value get
 let five_gpa=document.querySelector("#five-gpa").value;
 // six input value get
 let six_gpa=document.querySelector("#six-gpa").value;
 // seven input value get
 let seven_gpa=document.querySelector("#seven-gpa").value;

 // total final value sum
 let total =
 parseFloat(first_gpa)+
 parseFloat(two_gpa)+
 parseFloat(three_gpa)+
 parseFloat(four_gpa)+
 parseFloat(five_gpa)+
 parseFloat(six_gpa)+
 parseFloat(seven_gpa);
 let total_cgpa=total.toPrecision(3);
 // total value show output
 document.querySelector('.cgpa_output h1').innerHTML=`TOTAL CGPA = ${total_cgpa/7}`
 })

 document.querySelector('#btn_re').addEventListener('click',() =>{
   document.querySelector('.cgpa_output h1').innerHTML=`TOTAL CGPA =`
   document.querySelector('#first-gpa').value='';
   document.querySelector('#two-gpa').value='';
   document.querySelector('#three-gpa').value='';
   document.querySelector('#four-gpa').value='';
   document.querySelector('#five-gpa').value='';
   document.querySelector('#six-gpa').value='';
   document.querySelector('#seven-gpa').value='';
 })
 // onclick Event function call reset all input and output value
