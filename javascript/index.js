/*  VARIABLES  */

const showPanel = document.querySelector("#aside_section")

const imgPanel = document.querySelector(".aside_imge")

const txtPanel = document.querySelector("#aside_text")

const openPanelImg = document.querySelector("href")

const imgUrl = document.querySelector("#input_url_img")

const containerImg = document.querySelector(".section_image")


/*     FUNCIONES    */

const $ = (selector) => document.querySelector(selector)

const urlImg = (e) => {
      $('section_image').style.backgroundImage = `url("${e.target.value}")`
}


/*    EVENTOS      */

/*para que se esconda la sidebar*/

$("#close_panel_control").addEventListener("click", () =>  {
    $("#aside_section").style.width = "0"
})

$("nav_bar").addEventListener("click", () => { 
    if ($("#aside_section").style.width === "0")  {
        $("#aside_section").style.width ="260"
    }  
    
})

/*para que se suba la imagen de la url*/

$("#input_url_img").addEventListener("input", (value) =>  {
    $(".section_image").style.backgroundImage = `url("${e.target.value}")`
})
