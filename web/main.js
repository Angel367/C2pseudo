document.body.onclick = function (e) {
    let target = e.target || e.srcElement;
    if ((target.id === "butt")){

        let inpData = document.getElementById("a").value;
        inpData = inpData.replaceAll("int", "ЦЕЛ");
        inpData = inpData.replaceAll("if", "ЕСЛИ");
        console.log(inpData);
        document.getElementById("a2").value = inpData;
    }
}