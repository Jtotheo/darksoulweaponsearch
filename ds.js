

        const searchField = document.querySelector(".search");
        const searchValName = document.querySelector('.searchFieldName').value;
        const searchValType = document.querySelector('.searchFieldType').value;
        const searchRes = document.querySelector('.searchresult')
        const searchInfo = document.querySelector('.searchInfo')

 

    function fetchSearchData () {
        
        
        
        const searchValName = document.querySelector('.searchFieldName').value;
        const searchValType = document.querySelector('.searchFieldType').value;



        const data = fetch("https://jgalat.github.io/ds-weapons-api/");
        


            data
                .then(res => {
                    if (res.status === 200) {
                    
                    return res.json()
                    }
                    else {
                    throw new Error}
                })
                .then(data => {
                    console.log(data)
            

                    for (let i = 0; i < data.length; i++) {

                                               
                        if (data[i].name.toLowerCase() === searchValName.toLowerCase()) {
                            
                            searchInfo.innerHTML = `<span class= "searchInfo">Your search for weaponname: "${searchValName}" yielded the following results:</span> <br>`
                            searchRes.innerHTML += `<br>Name: "${data[i].name}" <br>
                            Type: "${data[i].weapon_type.charAt(0).toUpperCase() + data[i].weapon_type.slice(1)}" <br> Damage: ${data[i].damage.physical} physical; ${data[i].damage.magic} magic; ${data[i].damage.lightning} lightning; ${data[i].damage.fire} fire <br>Requirements: <br> <img class= "skillIcon" src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_strength.png" alt="strengthicon"</img> ${data[i].requirements.strength} <img class= "skillIcon" src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_dexterity.png" alt="strengthicon"</img> ${data[i].requirements.dexterity}  <img class= "skillIcon" src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_intelligence.png" alt="intelligencehicon"</img> ${data[i].requirements.intelligence}  <img class= "skillIcon" src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_faith.png" alt="faithicon"</img> ${data[i].requirements.faith}<br>`
                        }
                        
                        
                        else if (data[i].weapon_type.toLowerCase() === searchValType.toLowerCase()) {
                            searchInfo.innerHTML = `<span class= "searchInfo">Your search for weapon type: "${searchValType}" yielded the following results:</span> <br>`
                            
                             searchRes.innerHTML += `Name: "${data[i].name}" <br> Damage: ${data[i].damage.physical} physical; ${data[i].damage.magic} magic; ${data[i].damage.lightning} lightning; ${data[i].damage.fire} fire <br>Requirements: <br> <img class= "skillIcon" src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_strength.png" alt="strengthicon"</img> ${data[i].requirements.strength}  <img class= "skillIcon" src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_dexterity.png" alt="strengthicon"</img> ${data[i].requirements.dexterity}  <img class= "skillIcon" src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_intelligence.png" alt="intelligencehicon"</img> ${data[i].requirements.intelligence} <img class= "skillIcon" src="https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_faith.png" alt="faithicon"</img> ${data[i].requirements.faith} <br><br>`
                        }
                         
                    }
                    
                }).then(data => {
                    if (searchRes.innerHTML === "") {
                        searchInfo.innerHTML = "";
                        searchRes.innerHTML = '<p class="noMatch">Alas! Our quest to find what you are looking for was done in vain. Stay your course, and try again sir!</p>'
                    }
                })
                .catch(Error => console.log(`Something is amiss, the pits are to deep!`))

                
                
                

    }

    


        searchField.addEventListener('submit', ev => {
            searchRes.innerHTML = "";
            ev.preventDefault();
            fetchSearchData();
            searchField.reset();
            

        })

  



