//capture
const fps = document.querySelector("#fps")
const exp = document.querySelector("#exposure")
const gain_cap = document.querySelector("#gain_cap")

//color
const red = document.querySelector("#red")
const blue = document.querySelector("#blue")
const imgbr = document.querySelector("#brightness")
const imgco = document.querySelector("#contrast")
const imgsat = document.querySelector("#saturation")
const imggain = document.querySelector("#gain_color")
const imggamma = document.querySelector("#gamma")

//shutter
const shutter=document.querySelector("#shutter")

//trigger
const trigger = document.querySelector("#trigger")

//tone curve
const toneCurve = document.querySelector("#tone_curve")

//fan
const fan = document.querySelector("#fan")

//light
const light = document.querySelector("#light")

/*
var url_par_list = `system/${document.getElementById("stations").value}/dhs1/parlist`
var url_cam_rst_time = `system/${document.getElementById("stations").value}/dhs1/par/cam-rst-time`
var url_cam_bref_add = `system/${document.getElementById("stations").value}/dhs1/par/cam-bref-add`
var url_cam_bref_del = `system/${document.getElementById("stations").value}/dhs1/par/cam-bref-del`
var url_cam_reset_spooler = `system/${document.getElementById("stations").value}/dhs1/par/cam-reset-spooler`
*/
    
// Width

document.getElementById("width").addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_width = `system/${document.getElementById("stations").value}/dhs1/par/width`
        fetch_post_params(url_width, parseInt(document.getElementById("width").value))
    }
})

document.getElementById("height").addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_height = `system/${document.getElementById("stations").value}/dhs1/par/height`
        fetch_post_params(url_height, parseInt(document.getElementById("height").value))
    }
})

document.getElementById("left").addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_left = `system/${document.getElementById("stations").value}/dhs1/par/left`
        fetch_post_params(url_left, parseInt(document.getElementById("left").value))
    }
})

document.getElementById("right").addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url = `system/${document.getElementById("stations").value}/dhs1/par/right`
        fetch_post_params(url, parseInt(document.getElementById("right").value))
    }
})





//CAPTURE
fps.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_fps = `system/${document.getElementById("stations").value}/dhs1/par/fps`
        var val = fps.value
        val = parseFloat(val)
        var url = url_fps
        document.getElementById("fps_value").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})

exp.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_exp = `system/${document.getElementById("stations").value}/dhs1/par/exp`
        var val = exp.value
        val = parseFloat(val)
        var url = url_exp
        document.getElementById("exposure_value").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})

gain_cap.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_gain = `system/${document.getElementById("stations").value}/dhs1/par/gain`
        var val = gain_cap.value
        val = parseFloat(val)
        var url = url_gain
        document.getElementById("gain_cap_value").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})

// top - depth consulta


//COLOR
red.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_wb_red = `system/${document.getElementById("stations").value}/dhs1/par/wb-red`
        var val = red.value
        val = parseFloat(val)
        var url = url_wb_red
        document.getElementById("value_red").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})

blue.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_wb_blue = `system/${document.getElementById("stations").value}/dhs1/par/wb-blue`
        var val = blue.value
        val = parseFloat(val)
        var url = url_wb_blue
        document.getElementById("value_blue").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})

imgbr.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_imgbr = `system/${document.getElementById("stations").value}/dhs1/par/img-br`
        var val = imgbr.value
        val = parseFloat(val)
        var url = url_imgbr
        document.getElementById("value_brightness").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})

imgco.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_imgco = `system/${document.getElementById("stations").value}/dhs1/par/img-co`
        var val = imgco.value
        val = parseFloat(val)
        var url = url_imgco
        document.getElementById("value_contrast").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})

imgsat.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_imgsat = `system/${document.getElementById("stations").value}/dhs1/par/img-sat`
        var val = imgsat.value
        val = parseFloat(val)
        var url = url_imgsat
        document.getElementById("value_saturation").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})

imggain.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_imggain = `system/${document.getElementById("stations").value}/dhs1/par/img-gain`
        var val = imggain.value
        val = parseFloat(val)
        var url = url_imggain
        document.getElementById("value_gain").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})

imggamma.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_imggamma = `system/${document.getElementById("stations").value}/dhs1/par/img-gamma`
        var val = imggamma.value
        val = parseFloat(val)
        var url = url_imggamma
        document.getElementById("value_gamma").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})

//SHUTTER
shutter.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_cam_shutter = `system/${document.getElementById("stations").value}/dhs1/par/cam-shutter`
        var val = shutter.value
        val = parseFloat(val)
        var url = url_cam_shutter
        document.getElementById("shutter").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})

//TRIGGER
trigger.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_cam_trigger = `system/${document.getElementById("stations").value}/dhs1/par/cam-trigger`
        var val = trigger.value
        val = parseFloat(val)
        var url = url_cam_trigger
        document.getElementById("trigger").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})

//TONES CURVE
toneCurve.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_cam_tones = `system/${document.getElementById("stations").value}/dhs1/par/cam-tones`
        var val = toneCurve.value
        val = parseInt(val)
        var url = url_cam_tones
        document.getElementById("tone_curve").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})
//FAN
fan.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_cam_fan = `system/${document.getElementById("stations").value}/dhs1/par/cam-fan`
        var val = fan.checked
        //console.log(val)
        var url = url_cam_fan
        document.getElementById("fan").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})

//LIGHT
light.addEventListener("change", () => {
    if (document.getElementById("stations").value !== "default") {
        var url_cam_lights = `system/${document.getElementById("stations").value}/dhs1/par/cam-lights`
        var val = light.checked
        console.log(val)
        var url = url_cam_lights
        document.getElementById("light").value = val
        fetch_post_params(url, val)
    }
    //console.log(val)
})

//fetch post
function fetch_post_params(url, val) {
    console.log(url)
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ value: val })
    })
}