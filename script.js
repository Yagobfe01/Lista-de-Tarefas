function adicionarTarefa() {
    let input = document.getElementById("inputAdd");
    let texto = input.value.trim(); 

    if (texto !== "") {
        let lista = document.querySelector(".lista");
        let novaTarefa = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox-tarefa");

        let textoFormatado = texto.split(" ") 
            .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()) 
            .join(" "); 

        let textoTarefa = document.createElement("span");
        textoTarefa.textContent = textoFormatado;

        novaTarefa.appendChild(checkbox);
        novaTarefa.appendChild(textoTarefa);

        lista.appendChild(novaTarefa);
        
        input.value = "";
    }
}

document.getElementById("inputAdd").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});