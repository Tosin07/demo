// function save() {console.log("button clicked")}
myLeads= []

const inputEl = document.getElementById("input-el")

const inputBtn=document.getElementById("input-btn")

const ulEl=document.querySelector("#ul-el")

inputBtn.addEventListener("click", function() {myLeads.push(inputEl.value)
    inputEl.value=" "
    renderLead()})

    function renderLead() {for(var i=0; i<myLeads.length; i++){ulEl.innerHTML+=`<li>
                 <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}
                    </a>
                   </li>`}}
        

                
    


    // {ulEl.innerHTML+="<li><a target='_blank' href=' " + myLeads[i]+ "'>"+ myLeads[i] + "</a></li>"}
    



 //const li=document.createElement("li")
 //li.textContent=myLeads[i]
 //ulEl.append(li)

 //let listItems=""
 //listItems+="<li>" + myLeads[i] + <li>
 //ulEl.innerHTML=listItems

 //ulEl.innerHTML+="<li><a target='_blank' href=' "+    myleads[i] + "'>"+myLeads[i]+"</a></li>"
 //OR
 //listItems +='<li> 
            //  <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}
            //  </a>
            //        </li>'}
            //     ulEl.innerHTML=listItems}

console.log(myLeads)