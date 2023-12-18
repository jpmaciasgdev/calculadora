const pantalla = document.querySelector(".display");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if(boton.id === "ac"){return pantalla.textContent = "0"};
        if(boton.id ==="del"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent = "0";
                return;
            }else{
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            return;
            }
        }
        if(boton.id === "equal"){
            if(pantalla.textContent === "Error"){
                pantalla.textContent = "0";
                return;
            }else{
                try{
                pantalla.textContent = eval(pantalla.textContent.toString());
                }catch(error){
                console.error(error);
                pantalla.textContent = "Error";
                }
                return;
            }
        }
        if(pantalla.textContent === "0" || pantalla.textContent === "Error"){
            pantalla.textContent = botonApretado;
        }
        else {
            pantalla.textContent += botonApretado;
        }
    })
})
