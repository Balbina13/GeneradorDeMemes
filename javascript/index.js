/*  VARIABLES  */

const imgPanel = document.querySelector(".aside_section_img")

const txtPanel = document.querySelector(".aside_section_text")

const openPanelImg = document.querySelector(".active_img_panel")



/*     FUNCIONES    */

const $ = (selector) => document.querySelector(selector)

// $(imgPanel).style.display = "block"
// $(txtPanel).style.display = "block"



/*    EVENTOS      */

/*para que se esconda la sidebar*/

$(".active_img_panel").addEventListener("click", () =>   {
    if ($("#aside_section_img").style.display = "none")  {
    $("#aside_section_img").style.display = "block"
    $("#aside_section_img").style.width = "100"
}
})

$("#close_panel_control_img").addEventListener("click", () =>   {
    if ($("#aside_section_img").style.display = "block")  {
    $("#aside_section_img").style.display = "none"
}
})

$(".active_text_panel").addEventListener("click", () => {
    if ($("#aside_section_text").style.display = "none") {
        $("#aside_section_text").style.display = "block"
    }
})

$("#close_panel_control_text").addEventListener("click", () =>    {
    if ($("#aside_section_text").style.display = "block") {
    $("#aside_section_text").style.display = "none"
    }
})

/*para que se suba la imagen de la url*/


