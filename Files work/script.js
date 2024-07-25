var xmlReq = new XMLHttpRequest();

xmlReq.open("GET", "data.xml", true);

xmlReq.onreadystatechange = function () {
    let box = document.getElementById("box");
    let teach = document.getElementById("teach");

    let xmlres = xmlReq.responseXML;

    let roots = xmlres.getElementsByTagName("teach");

    for (let i = 0; i < roots.length; i++) {

        function printData(id) {
            return roots[i].getElementsByTagName(id)[0].teach[0].nodeValue;
        }

        box.innerHTML += `
            <div class="col-4">
                            <div class="card">
                                <div class="card-header">
                                    ${printData("name")}
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Father Name: ${printData("name")}</h5>
                                    <p class="card-text">Age: ${printData("email")}</p>
                                    <p class="card-text">Class: ${printData("date")}</p>
                                    <p class="card-text">Gender: ${printData("phone")}</p>
                                    p class="card-text">Salary: ${printData("salary")}</p>
                                </div>
                            </div>
                        </div>
                        `
    }
    xmlReq.send();
};

