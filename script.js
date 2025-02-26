function adicionarTarefa() {
    let input = document.getElementById("inputAdd");
    let texto = input.value.trim(); 

    if (texto !== "") {
        let lista = document.querySelector(".lista");
        let novaTarefa = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox-tarefa");

        //DEIXAR PRIMEIRA LETRA MAIUSCULA-------

        let textoFormatado = texto.split(" ") 
            .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()) 
            .join(" "); 
        
        let textoTarefa = document.createElement("span");
        textoTarefa.textContent = textoFormatado;

         let lixeira = document.createElement("img");
         lixeira.src = "lixeira.png";
         lixeira.alt = "Excluir Tarefa";
         lixeira.classList.add("lixeira");

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                textoTarefa.classList.add("riscado");
            } else {
                textoTarefa.classList.remove("riscado");
            }
        });

         // Função para excluir o item quando a lixeira for clicada
         lixeira.addEventListener("click", function() {
            lista.removeChild(novaTarefa);
        });

        novaTarefa.appendChild(checkbox);
        novaTarefa.appendChild(textoTarefa);
        novaTarefa.appendChild(lixeira);

        lista.appendChild(novaTarefa);
        
        input.value = "";
    }
}

document.getElementById("inputAdd").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});