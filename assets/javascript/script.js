  let perc =0
  function enablereset(){
    let reset = document.getElementById("reset-button");
    reset.disabled = false
  }
  function reset(e){
    e.disabled=true;
    perc=0;
    desactivatebuttons();
    Array.from(document.getElementsByClassName("warning")).forEach(warning => {
      warning.style.display= "none"
    });
    Array.from(document.getElementsByClassName("input-n")).forEach(input => {
      input.value = "";
      input.classList.remove("invalid")
    });
    document.getElementById("custom").value = null;
    document.getElementById("result-tip").innerHTML = "$0.00";
    document.getElementById("result-total").innerHTML = "$0.00";
  }
  function myfocus(e){
    enablereset()
    e.classList.remove("invalid");
    e.parentElement.previousElementSibling.style.display ="none"
  }
  function myblur(e){
    if(e.value == 0 || e.value == null){
      e.classList.add("invalid");
      e.parentElement.previousElementSibling.style.display ="inline"
    }
  }
  function myclick(e){
    enablereset()
    custom = document.getElementById("custom")
    custom.value="";
    if(e.classList.contains("active")){
      desactivatebuttons()
      perc=0
    }else{
      desactivatebuttons()
      e.classList.add("active")
      perc = e.innerHTML
    }
  }
  function desactivatebuttons(){
    document.getElementById("container-perc").querySelectorAll("button").forEach(button => {
      button.classList.remove("active")
    });
  }
  function percent(e){
    if(e.value != "" || isNaN(e.value)){
      enablereset()
      desactivatebuttons()
      perc = e.value+'%'
    }else {
      e.value=""
    }
  }
function calculate() {
  bill = document.getElementById("input-bill").value;
  number = document.getElementById("input-number").value;
  if (perc != 0 && bill != "" & number != "" && bill !=0 & number != 0 &&!isNaN(bill) && !isNaN(number)) {
    perc = parseFloat(perc)
    resutip= document.getElementById("result-tip");
    resutot = document.getElementById("result-total");
    resutip.innerHTML = '$' + ((bill * (perc/100))/number).toFixed(2);
    resutot.innerHTML = '$' + (bill/number + (bill  * (perc/100))/number).toFixed(2);
  }
  
}
setInterval(calculate,500);