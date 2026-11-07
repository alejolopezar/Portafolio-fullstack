//crear una funcion para crear proyectos recibiendo los parametros
function createProyect(proyect){

    //extraer sus propiedades en variables utilizando destructuring
    const {image, title, description, technologies, github, URL} = proyect;
  
    //crear los elementos HTML que formaran parte de la tarjeta
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p_description = document.createElement("p");
    const a_github = document.createElement("a");
    const a_url = document.createElement("a");
    
    //asignar los valores a las propiedades correspondientes a cada uno de los elementos
    img.src = image;
    img.alt = title;
    h3.textContent = title;
    p_description.textContent = description;
    a_github.href = github;
    a_github.textContent = "Github";
    a_url.href = URL;
    a_url.textContent = "URL";
    
    //crear un <div> que sera la tarjeta donde incluiremos todo los demas elementos
    const div_img = document.createElement("div");
    const div_content = document.createElement("div");
    const div_links = document.createElement("div");
    const article = document.createElement("article");
    const div_tec = document.createElement("div");
    
    technologies.forEach(technology => {
        const span = document.createElement("span");
        span.textContent = technology;
        div_tec.appendChild(span);
    });
    //se agregan las classes para los estilos de las tarjetas

    div_img.classList.add("card-image");
    div_content.classList.add("card-content");
    div_tec.classList.add("technologies");
    div_links.classList.add("card-links");
    article.classList.add("project-card");

    //"Appendear" al nuevo <div> los elementos creados
    div_img.appendChild(img);
    div_links.appendChild(a_github);
    div_links.appendChild(a_url);
    div_content.appendChild(h3);
    div_content.appendChild(p_description);
    div_content.appendChild(div_tec);
    div_content.appendChild(div_links);
    article.appendChild(div_img);
    article.appendChild(div_content);
    
    //Retorna <article> finalizado con todos los elementos correspondientes dentro
    return article;
}

// seleccionar el contenedor donde queremos agregar las peliculas
const proyects_container = document.getElementById ("proyects-container");

if(proyects_container){
    // vaciar el contenido actual del contenedor
    proyects_container.innerHTML = "";
}

export {
    createProyect,
    proyects_container,
};