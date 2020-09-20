function getAllSectionID()
{
    let ids = ['shopify-section-header'];
    document.querySelector(".gryffeditor").children[1].childNodes[0].querySelectorAll('.reading-glasses-sec-main').forEach(el => ids.push(el.id));
    ids.push(document.querySelector(".gryffeditor").children[2].id)
    return ids;
}

function createButton() {
    let ids = getAllSectionID();
    let list = `<ul style="list-style-type: square;position: fixed;right: 0;z-index: 999;background-color: #4f27859c;color: #fff;padding: 10px 5px 10px 5px;border-radius: 7px 0px 0px 8px;font-size: 25px;">`;
    ids.forEach(id =>{
        list += `<li style="padding: 5px 10px 5px 10px;cursor: pointer;" onclick="showSectionByID('${id}')" >&#8226;</li>`; 
    });
    list += "</ul>";

   document.getElementById("shopify-section-header").insertAdjacentHTML("afterend", list);
}


function showSectionByID(id) 
{
    document.querySelector(`#${id}`).scrollIntoView({ 
        behavior: 'smooth' 
    });
    
}

// Run all code f its product page
if (window.location.pathname == "/pages/product") {
    
    createButton();
}


//   window.scrollBy({ 
//     top: -100, // could be negative value
//     left: 0, 
//     behavior: 'smooth' 
//   });
