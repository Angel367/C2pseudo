document.body.onclick = function (e) {
    let target = e.target || e.srcElement;
    if ((target.id === "butt")){
        let inpData = document.getElementById("input").value;
        inpData = inpData.replaceAll("int", "ЦЕЛ");
        inpData = inpData.replaceAll("string", "СТРОКА");
        inpData = inpData.replaceAll("double", "ВЕЩ");
        inpData = inpData.replaceAll("bool", "ЛОГ");
        inpData = inpData.replaceAll("char", "СИМВ");
        // Логические значения
        inpData = inpData.replaceAll("true", "ПРАВДА");
        inpData = inpData.replaceAll("false", "ЛОЖЬ");
        // Условные операторы
        inpData = inpData.replaceAll("if", "ЕСЛИ");
        inpData = inpData.replaceAll("else if", "ТАКЖЕ ЕСЛИ");
        inpData = inpData.replaceAll("else", "ИНАЧЕ");
        // Операторы циклов
        inpData = inpData.replaceAll("while", "ПОКА");
        inpData = inpData.replaceAll("do", "ДЕЛ");
        // Отдельные символы
        inpData = inpData.replaceAll("!=", "НЕ РАВНО");
        inpData = inpData.replaceAll("==", "РАВНО");
        inpData = inpData.replaceAll(">", "БОЛЬШЕ");
        inpData = inpData.replaceAll(">=", "БОЛЬШЕ ИЛИ РАВНО");
        inpData = inpData.replaceAll("<", "МЕНЬШЕ");
        inpData = inpData.replaceAll("<=", "МЕНЬШЕ ИЛИ РАВНО");
        inpData = inpData.replaceAll("=", "←");
        // Какие-то операторы
        inpData = inpData.replaceAll("return", "ВЕРНУТЬ");
        inpData = inpData.replaceAll("cout", "ВЫВОД");
        // Обработка ошибок
        inpData = inpData.replaceAll("МЕНЬШЕМЕНЬШЕ", "<<");
        inpData = inpData.replaceAll("БОЛЬШЕБОЛЬШЕ", ">>");
        inpData = inpData.replaceAll("-БОЛЬШЕ", "->");

        document.getElementById("output").value = inpData;
    }
}