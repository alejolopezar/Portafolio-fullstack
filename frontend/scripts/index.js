import { certificateData, proyectData } from "./tempData.js";
import { createProyect, proyects_container,} from"./proyect_cards.js";
import { createCertificate, certificate_container,} from"./certification_cards.js";
import { form } from "../../../../MODULO 2/PM2-alejolopezar/front/scripts/addForm.js";

const arrayTarjetas = certificateData.map(createCertificate);  
    
     //"Appendear" todos los elementos HTML del nuevo array dentro del contenedor
     arrayTarjetas.forEach(tarjeta => certificate_container.appendChild(tarjeta));
     console.log("se ejecuto then");

     const arrayTarjetas2 = proyectData.map(createProyect);  
    
     //"Appendear" todos los elementos HTML del nuevo array dentro del contenedor
     arrayTarjetas2.forEach(tarjeta => proyects_container.appendChild(tarjeta));
     console.log("se ejecuto then2");


     // lógica de los botones
const buttons = document.querySelectorAll(".filter-button");

const sections = document.querySelectorAll(".content-section");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const sectionName = button.dataset.section;

        buttons.forEach(button => {
            button.classList.remove("active");
        });

        button.classList.add("active");

        sections.forEach(section => {
            section.classList.remove("active");
        });

        const selectedSection = document.getElementById(
            `${sectionName}-section`
        );

        selectedSection.classList.add("active");

    });

});