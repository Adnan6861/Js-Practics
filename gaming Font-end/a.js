const inputText=document.getElementsByClassName('q1');
const buttonClick=document.getElementsByClassName('q2');
const resultContainer=document.createElement('div');
document.body.appendChild(resultContainer);
buttonClick.addEventListener('click', async function(){
    const searchTerm=inputText.value;
    if(searchTerm){
        try {
            const response=await fetch((`https://api.example.com/search?q=${encodeURIComponent(searchTerm)}`))
            if(!response.ok) throw new Error("Not Fetch any Information")
            const data= await response.json;
        resultContainer.innerHTML()="";
        data.results.forEach(element => {
            const resultItems=document.createElement('div');
            resultItems.textContent=resultItems.title;
            resultContainer.appendChild(resultItems);
            
        });
        }
        catch {
            console.error("Not Fechhh");
            resultContainer.innerHTML='sorry No Match Found';
        }
       
    }
        else{
            resultsContainer.innerHTML = 'Please enter a search term.';
        }

    
});

inputText.document.addEventListener('keydown', async function(event){
    if(event.key==='Enter'){
        buttonClick.click();
    }

});
