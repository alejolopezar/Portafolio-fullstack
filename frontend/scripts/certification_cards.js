//crear una funcion para crear certificaciones recibiendo los parametros
function createCertificate (certificate){

    //extraer sus propiedades en variables utilizando destructuring
    const {image, title, description, entity, date, URL} = certificate;
  
    //crear los elementos HTML que formaran parte de la tarjeta
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p_description = document.createElement("p");
    const p_entity = document.createElement("p");
    const p_date = document.createElement("p");
    const a_url = document.createElement("a");

    //asignar los valores a las propiedades correspondientes a cada uno de los elementos
    img.src = image;
    img.alt = title;
    h3.textContent = title;
    p_description.textContent = description;
    p_entity.textContent = entity;
    p_date.textContent = date;
    a_url.href = URL;
    a_url.textContent = "URL";
    
    //crear un <div> que sera la tarjeta donde incluiremos todo los demas elementos
    const div_img = document.createElement("div");
    const div_content = document.createElement("div");
    const article = document.createElement("article");

    //se agregan las classes para los estilos de las tarjetas

    div_img.classList.add("certification-icon");
    div_content.classList.add("card-content");
    article.classList.add("certification-card");

    //"Appendear" al nuevo <div> los elementos creados
    div_img.appendChild(img);
    div_content.appendChild(h3);
    div_content.appendChild(p_description);
    div_content.appendChild(p_entity);
    div_content.appendChild(p_date);
    div_content.appendChild(a_url);
    article.appendChild(div_img);
    article.appendChild(div_content);
    
    //Retorna <article> finalizado con todos los elementos correspondientes dentro
    return article;
}

// seleccionar el contenedor donde queremos agregar las peliculas
const certificate_container = document.getElementById ("certificates-container");

if(certificate_container){
    // vaciar el contenido actual del contenedor
    certificate_container.innerHTML = "";
}

export {
    createCertificate,
    certificate_container,
};