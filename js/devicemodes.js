/**
 * The following lines capture the buttons for the device's modes.
 */
const record_button = document.querySelector('#record');
const setup_button = document.querySelector('#setup');
const playback_button = document.querySelector('#playback');

/**
 * For each button, when the user clicks, the value of the respective attributes is obtained and the fetch_device method is executed
 */
record_button.addEventListener("click", () =>{
    var command = record_button.getAttribute("cmd");
    var par = record_button.getAttribute("par");
    if(document.querySelector("#stations").value!=="default"){
        fetch_device(command,par)
    }else{
        alert("You must select a station.")
    }
})

setup_button.addEventListener("click", () =>{
    var command = setup_button.getAttribute("cmd");
    var par = setup_button.getAttribute("par");
    if(document.querySelector("#stations").value!=="default"){
        fetch_device(command,par)
    }else{
        alert("You must select a station.")
    }
})

playback_button.addEventListener("click",() => {
    var command = playback_button.getAttribute("cmd");
    var par = playback_button.getAttribute("par");
    if(document.querySelector("#stations").value!=="default"){
        fetch_device(command,par)
    }else{
        alert("You must select a station.")
    }
})


/**
 * This method is responsible for setting the mode of the device.
 * @param {string} command "mode"
 * @param {string} par "playback", "record" or "setup"
 */
async function fetch_device(command,par) {
    const response = await fetch(`/system/${document.querySelector("#stations").value}/dhs1`,{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({cmd:command, par:par})
    })
    console.log({"Ok":response.ok,"Status":response.status,"Message":command+"-"+par})
}