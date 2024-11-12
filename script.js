let f = () => {
  let star = document.querySelector(".maintainer")
   star.classList.add("l")
  
  let inp = document.querySelector(".inp")
  let inp2 = document.getElementById("p")
  inp2.innerText = inp.value
  let inp3 = document.querySelector(".kom")
  let inp4 = document.getElementById("1")
  let inp5 = document.querySelector(".kom1")
  inp4.innerText = inp3.value + inp5.value

  let inp7 = document.getElementById("2")

  let a = document.getElementById("kom2").value
  inp7.innerText = a
  let inp8 = document.querySelector(".kom3")
  let inp9 = document.getElementById("3")
  inp9.innerText = inp8.value
  let selected = document.querySelector('input[name="action"]:checked');
   document.getElementById("td").innerText=selected.value
 let inp10 = document.querySelector('input[name="dio"]:checked');
  document.getElementById("td2").innerText=inp10.value
  let inp11 = document.querySelector('input[name="io"]:checked');
  document.getElementById("td3").innerText=inp11.value
  let inp12 = document.querySelector('input[name="lo"]:checked');
  document.getElementById("td1").innerText=inp12.value
  let inp13 = document.querySelector('input[name="strong"]:checked');
  document.getElementById("td4").innerText=inp13.value
  let inp14 = document.querySelector('input[name="adio1"]:checked');
  document.getElementById("td5").innerText=inp14.value
  let inp15 = document.querySelector('input[name="dio1"]:checked');
  document.getElementById("td6").innerText=inp15.value
  let inp16 = document.querySelector('input[name="io1"]:checked');
  document.getElementById("td7").innerText=inp16.value
  let inp17 = document.querySelector("input[name='komal']:checked");
  document.getElementById("td8").innerText=inp17.value
  let inp18 = document.querySelector("input[name='komal1']:checked");
  document.getElementById("td9").innerText=inp18.value
  let inp19 = document.getElementById("name4")
  document.getElementById("td10").innerText=inp19.value
  let inp20 = document.getElementById("name5")
  document.getElementById("td11").innerText=inp20.value
  let inp21 = document.getElementById("name6")
  document.getElementById("td12").innerText=inp21.value
 
}
let k = ()=>{
  confirm("Do You Want To Sumbit Form?")
  document.write("You Have Successfully Submited The Form")
}
let g = ()=>{
  let star = document.querySelector(".maintainer")
 
   star.classList.remove("l")
}

let you = ()=>{
  document.getElementById("form").reset()
}