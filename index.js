const app = document.getElementById("app")

var savings = {}

function main(){
    createUpload()
    createGraph()
}

function createGraph(){
    var canvas = document.createElement("canvas")
    app.appendChild(canvas)
    canvas = canvas.getContext("2d")

    const graph = new Chart(canvas, {
            type: 'line',
            data: {
                labels: Object.keys(savings),
                datasets: [{
                    label: 'Savings ($)',
                    data: Object.values(savings),
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
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