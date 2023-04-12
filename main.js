window.onload =() =>{
  let resulText = document.querySelector('#resulText')
  let resultBtn = document.querySelector('#result')
  

  let choiceList1 = document.querySelectorAll("input[name='game']")
  let choiceGame1 = document.querySelector("input[name='result-game']")
  let trueChoice = null

  let choiceMaincraft = document.querySelectorAll("input[name='choiceMain']")

  let choiceList2 = document.querySelectorAll("input[name='game2']")
 
  const question1 = () =>{
    if(choiceGame1.checked)
    {
      truechoice = trueChoice + 30
      
    }
    else
    {
      for(let i = 0; i < choiceList1.length; i++)
      {
        let elem = choiceList1[i]  
        if(elem.checked)
        {
          trueChoice = trueChoice + 10
        }
      }
    }
  }
  const question2 = () =>{
  
    if(choiceMaincraft != null)
    {  
        if(choiceMaincraft[0].checked)
        {
          trueChoice += 30;
        }
      
    }
  }

  const question3  = () =>{
    if(choiceList2 != null)
    {
      choiceList2.forEach(elem => 
      {
        if(elem.checked)
        {
          if(elem.value === 'DarkSouls' ||  elem.valoe === 'Foddy')
          {
            trueChoice +=30
          }
        }
      });
    }  
      
  }


  resultBtn.addEventListener('click', ()=>{
      question1()
      question2()
      question3()
      
      resultText.innerText = `твой результат ${trueChoice}%`
      trueChoice = 0;
      
      
  })
}