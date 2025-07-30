const app = document.getElementById("app")

function main(){
    createUpload()
}

function createUpload(){
    var upload = document.createElement("input")
    upload.id = "upload"
    upload.type = "file"
    upload.accept = ".csv"
    upload.addEventListener('change', handleUpload)
    app.appendChild(upload)
}

function handleUpload(event){
    const file = event.target.files[0];
    if (!file) return;
    if (file.name.split(".").pop() !== "csv"){
        event.target.value = null
        alert("File uploaded must be a .csv file")
    }
    console.log(file.name)
}

main()