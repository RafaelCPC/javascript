/*
Apartado A: USANDO solo JS, inicializa los elementos al cargar la página:

    • btn-volumen debe estar con la clase active y highlighted.
    • btn-ecualizador debe tener solo la clase inactive.
    • El checkbox chk-mute debe mantener su clase actual (no la toques).

Apartado B: Comportamiento de los botones:

    • Al hacer click en #btn-volumen:
        ◦ Añade active y highlighted al boton.
        ◦ Si el usuario hace click una segunda vez, quita ambas clases.
    • Al hacer click en #btn-ecualizador:
        ◦ Si el volumen no está activo (sin clase active), añade la clase active al ecualizador y quita la clase inactive.
        ◦ Si el volumen sí está activo, no hagas nada. Muestra un alert("No puedes activar el ecualizador mientras suena la pista.").

Apartado C: Comportamiento del checkbox:

    - Cuando se desmarque el checkbox,añade la clase disabled a ambos botones.
    - Cuando se marque el checkbox, quita la clase disabled de los botones.

    checkbox.checked = T o F
*/