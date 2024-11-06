// Selecciona las letras y zonas de clasificación
const letters = document.querySelectorAll('.letter');
const dropZones = document.querySelectorAll('.drop-zone');
const feedback = document.getElementById('feedback');

// Añadir eventos de arrastrar y soltar
letters.forEach(letter => {
    letter.addEventListener('dragstart', handleDragStart);
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('drop', handleDrop);
});

// Función que inicia el arrastre
function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.type);
    e.dataTransfer.setData('id', e.target.id);
    feedback.textContent = "";  // Limpiar feedback
}

// Permitir soltar en zonas de clasificación
function handleDragOver(e) {
    e.preventDefault();
}

// Función que maneja la acción al soltar
function handleDrop(e) {
    e.preventDefault();
    const letterType = e.dataTransfer.getData('text/plain');
    const zoneType = e.target.dataset.type;

    // Verificar si la letra coincide con la zona de clasificación
    if (letterType === zoneType) {
        e.target.classList.add('correct');
        feedback.textContent = "¡Correcto! 🎉";
        setTimeout(() => e.target.classList.remove('correct'), 1000);
    } else {
        feedback.textContent = "Intenta de nuevo.";
    }
}
