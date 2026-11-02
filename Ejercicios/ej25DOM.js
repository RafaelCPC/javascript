window.onload = () => {
/*
        25.- Crea el efecto ‘ampliación’ de algunas galerías de fotos que podemos encontrar por
        internet.
        Para empezar, busca una imagen de gran tamaño (unos 1280x720px al menos) y coloca
        la imagen en HTML pero con la mitad de tamaño. Crea el código Javascript necesario
        para que , al hacer click sobre la imagen, suceda lo siguiente:
        • Aparecerá una capa semitransparente de color gris que tapará TODA la parte
        visible de la página y que no se moverá de sitio al hacer scroll.
        • Dentro de esa capa, aparecerá la imagen con su tamaño original centrada tanto
        horizontal como vertical y perfectamente visible.
        • Al hacer click en cualquier punto de la capa, desaparecerá junto con la imagen
        de tamaño original.
        Nota: Haz uso del objeto Screen y/o Window.
        b) Mejora el ejercicio anterior de modo que funcione para cualquier imagen que haya en
        una página. Al hacer click sobre cualquiera de las imágenes de la página, esta aparece
        con su tamaño original dentro de la capa semitransparente que lo cubre todo
   */
  let cont25 = document.querySelector(".contImg25");
  let img25 = document.querySelector(".ej25 img");
  img25.onclick = () => {
        cont25.classList.add("centrado");
        img25.classList.add("imgCent");  
  }
  cont25.onclick = () => {
        cont25.classList.remove("centrado");
        img25.classList.remove("imgCent"); 
    
  }
}