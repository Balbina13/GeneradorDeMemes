/*  VARIABLES  */

const imgPanel = document.querySelector(".aside_section_img")

const txtPanel = document.querySelector(".aside_section_text")

const openPanelImg = document.querySelector(".active_img_panel")

const memeImage = document.querySelector(".section_image")

const urlImg = document.querySelector("#input_url_img")

const downloadMeme = () => {
    domtoimage.toBlob($(".section_central")).then((blob) => {
        saveAs(blob, "my-meme.png")
    })
}



/*     FUNCIONES    */

const $ = (selector) => document.querySelector(selector)



// $(imgPanel).style.display = "block"
// $(txtPanel).style.display = "block"

// const showPanels = (imgPanel, txtPanel) =>  {
//  if ($(txtPanel).style.display = "block" )  {
//     $(imgPanel).style.display = "none"
//  } else if ($(imgPanel).style.display = "block")    {
//     $(txtPanel).style.display = "none"
//  }
// }

const allFilters = () =>  {
    $("#section_image").style.filter = `brightness(${$("#brightness").value}) opacity(${$("#opacity").value}) contrast(${$("#contrast").value}%) blur(${$("#blur").value}px) grayscale(${$("#grayscale").value}%) sepia(${$("#sepia").value}%) hue-rotate(${$("#hue-rotate").value}deg) saturate(${$("#saturate").value}%) invert(${$("#invert").value})`
}

/*    EVENTOS      */

const initializeProject = () => {

/*para que se esconda la sidebar*/

// $(openPanelImg).addEventListener("click", (showPanels))

$(".active_img_panel").addEventListener("click", () =>   {
    if ($("#aside_section_img").style.display = "none")  {
    $("#aside_section_img").style.display = "block"
    $("#aside_section_text").style.display = "none"
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
        $("#aside_section_img").style.display = "none"
    }
})

$("#close_panel_control_text").addEventListener("click", () =>    {
    if ($("#aside_section_text").style.display = "block") {
    $("#aside_section_text").style.display = "none"
    }
})

/*para que se suba la imagen de la url*/


$("#input_url_img").addEventListener("input", (e) =>    {
    if ($("#section_image").style.backgroundImage = "none") {
    $("#section_image").style.backgroundImage = `url(${e.target.value})`
    }
})


/*modificaciones del fondo*/

$("#input_colour_img").addEventListener("input", (e) => {
    $(".color_select_span").innerText = e.target.value.toUpperCase()
    $(".section_central").style.backgroundColor = e.target.value
})

 $("#effect_selector_section").addEventListener("input", (e) =>  {
     $("#section_image").style.mixBlendMode = e.target.value
 })

/*FILTROS*/

$("#brightness").addEventListener("input", allFilters)
$("#opacity").addEventListener("input", allFilters)
$("#contrast").addEventListener("input", allFilters)
$("#blur").addEventListener("input", allFilters)
$("#grayscale").addEventListener("input", allFilters)
$("#sepia").addEventListener("input", allFilters)
$("#hue-rotate").addEventListener("input", allFilters)
$("#saturate").addEventListener("input", allFilters)
$("#invert").addEventListener("input", allFilters)

$("#brightness").addEventListener("input", (e)  =>  {
    $("#section_image").style.filter = `brightness(${e.target.value})`
    allFilters(e.target.value)
})

$("#opacity").addEventListener("input", (e)  =>  {
    $("#section_image").style.filter = `opacity(${e.target.value})`
    allFilters(e.target.value)
})

$("#contrast").addEventListener("input", (e)  =>  {
    $("#section_image").style.filter = `contrast(${e.target.value}%)`
    allFilters(e.target.value)
})

$("#blur").addEventListener("input", (e)  =>  {
    $("#section_image").style.filter = `blur(${e.target.value}px)`
    allFilters(e.target.value)
})

$("#grayscale").addEventListener("input", (e)  =>  {
    $("#section_image").style.filter = `grayscale(${e.target.value}%)`
    allFilters(e.target.value)
})

$("#sepia").addEventListener("input", (e)  =>  {
    $("#section_image").style.filter = `sepia(${e.target.value}%)`
    allFilters(e.target.value)
})

$("#hue-rotate").addEventListener("input", (e)  =>  {
    $("#section_image").style.filter = `hue-rotate(${e.target.value}deg)`
    allFilters(e.target.value)
})

$("#saturate").addEventListener("input", (e)  =>  {
    $("#section_image").style.filter = `saturate(${e.target.value}%)`
    allFilters(e.target.value)
})

$("#invert").addEventListener("input", (e)  =>  {
    $("#section_image").style.filter = `invert(${e.target.value})`
    allFilters(e.target.value)
})

/*RESETEAR FILTROS*/

$("#reset_filters_button").addEventListener("click", () =>  {
    $("#brightness").value = "1"
    $("#opacity").value = "1"
    $("#contrast").value = "100"
    $("#blur").value = "0"
    $("#grayscale").value = "0"
    $("#sepia").value = "0"
    $("#hue-rotate").value = "0"
    $("#saturate").value = "100"
    $("#invert").value = "0"
    $("#section_image").style.filter = "none"

})


/*TEXT SECTION*/

$("#top_text_area").addEventListener("input", (e) => {
    $(".top_text_title").innerText = e.target.value.toUpperCase()
})

$("#non_text_top").addEventListener("input", (e) =>  {
    if (e.target.checked)   {
        $(".top_text_title").style.display = "none"
    } else  {
        $(".top_text_title").style.display = "block"
    }
})

$("#bottom_text_area").addEventListener("input", (e) => {
    $(".bottom_text_title").innerText = e.target.value.toUpperCase()
})

$("#non_text_bottom").addEventListener("input", (e) =>  {
    if (e.target.checked)   {
        $(".bottom_text_title").style.display = "none"
    } else  {
        $(".bottom_text_title").style.display = "block"
    }
})

/*FONT SECTION*/

$("#font_selection").addEventListener("input", (e) =>  {
    $(".top_text_title").style.fontFamily = e.target.value
    $(".bottom_text_title").style.fontFamily = e.target.value

})

$("#font_size").addEventListener("input", (e) =>    {
    $(".top_text_title").style.fontSize = `${e.target.value}px`
    $(".bottom_text_title").style.fontSize = `${ e.target.value}px`
})

$("#button_align_left").addEventListener("click", () =>  {
    $(".top_text_title").style.textAlign = "left"
    $(".bottom_text_title").style.textAlign = "left"
})

$("#button_align_center").addEventListener("click", () =>  {
    $(".top_text_title").style.textAlign = "center"
    $(".bottom_text_title").style.textAlign = "center"
})

$("#button_align_right").addEventListener("click", () =>  {
    $(".top_text_title").style.textAlign = "right"
    $(".bottom_text_title").style.textAlign = "right"
})

/*COLOR TEXT*/

$("#font_colours").addEventListener("input", (e) =>  {
    $("#text_color").innerText = e.target.value.toUpperCase()
    $(".top_text_title").style.color = e.target.value
    $(".bottom_text_title").style.color = e.target.value
})

/*COLOR BACKGROUND TEXT*/

$("#background_font_colours").addEventListener("input", (e) =>  {
   $("#text_background_color").innerText = e.target.value.toUpperCase()
    $(".top_text_title").style.backgroundColor = e.target.value
    $(".bottom_text_title").style.backgroundColor = e.target.value
})

/*FONDO TRANSPARENTE*/

$("#transparent_background").addEventListener("input", (e) =>  {
    if (e.target.checked)   {
        $(".top_text_title").style.display = "none"
        $(".bottom_text_title").style.display = "none"

    } else  {
        $(".top_text_title").style.display = "block"
        $(".bottom_text_title").style.display = "block"
    }
})

/*CONTORNO */

$(".dark_outline").addEventListener("click", () =>   {
    $(".top_text_title").classList.toggle("dark_stroke")
    $(".bottom_text_title").classList.toggle("dark_stroke")
})

$(".light_outline").addEventListener("click", () =>   {
    $(".top_text_title").classList.toggle("light_stroke")
    $(".bottom_text_title").classList.toggle("light_stroke")

$(".non_outline").addEventListener("click", () =>   {
    $(".top_text_title").classList.remove("light_stroke")
    $(".top_text_title").classList.remove("dark_stroke")
    $(".bottom_text_title").classList.remove("light_stroke")
    $(".bottom_text_title").classList.remove("dark_stroke")
})
})

/*TEXT SPACING*/

$("#spacing_setting").addEventListener("input", (e) =>   {
    $(".top_text_title").style.padding = `${ e.target.value}px`
    $(".bottom_text_title").style.padding = `${ e.target.value}px`
})

$("#line_spacing_setting").addEventListener("input", (e) => {
    $(".top_text_title").style.lineHeight = e.target.value
    $(".bottom_text_title").style.lineHeight = e.target.value
})

/*DARK-LIGHT THEME*/


// $(".active_light_mode").addEventListener("click", () => {
//     const currentTheme = $("body").getAttribute("data-theme")
//     if (currentTheme)   {
//        $("body").removeAttribute("data-theme", "light-theme") 
//        $(".active_dark_mode").style.display = "block"
//        $(".active_light_mode").style.display = "none"
//         } else if ($("body").getAttribute("data-theme", "light-theme") ) { 
//             $("body").removeAttribute("data-theme", "light-theme")
//             $("body").setAttribute("data-theme", "root")
//             $(".active_light_mode").style.display = "block"
            //$(".active_light_mode").style.display = "none"
          //$(".active_dark_mode").style.display = "block"
        //$(".active_light_mode").style.display = "none"
 //   } 
 //$(".active_light_mode").innerText = "Modo Oscuro"
 $(".active_light_mode").addEventListener("click", () => {
        const currentTheme = $("body").getAttribute("data-theme")
        if (currentTheme)   {
            $("body").removeAttribute("data-theme", "light-theme") 
            $(".text_mode").innerText = "Modo Claro"
 
        } else {    
            $("body").setAttribute("data-theme", "light-theme")
            $(".text_mode").innerText = "Modo Oscuro"
        }
        //$("#light_mode").classList.toggle("visibility--hidden")
        //$("#dark_mode").classList.toggle("visibility--hidden")
})   
    

//$(".active_dark_mode").addEventListener("click", () =>  {
  //  if($("body").setAttribute("data-theme", "root"))  {
    //    $(".active_light_mode").classList.toggle("visibility--hidden")
       // $(".active_dark_mode").style.display = "none"
    //}
//})    
    //$("#light_mode").classList.toggle("visibility--hidden")
    //$("#dark_mode").classList.toggle("visibility--hidden")


// $(".active_light_mode").addEventListener("click", () => {
//     $(".lightbulb-off").classList.add(".visibility--hidden")
// })

 //$(".active_light_mode").addEventListener("click", () => {
   // $("#off").style.display = "block"

   
   $(".button_download").addEventListener("click", downloadMeme)


}

/*DESCARGA MEME*/

//$(".button_download").addEventListener("click", downloadMeme)

window.addEventListener("load", initializeProject)
