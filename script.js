// Elementos del DOM
const textDisplay = document.getElementById('textDisplay');
const timerDisplay = document.getElementById('timerDisplay');
const addVehicleBtn = document.getElementById('addVehicle');
const deleteVehicleBtn = document.getElementById('deleteVehicle');
const modifyDataBtn = document.getElementById('modifyData');
const vehicleMaintenanceBtn = document.getElementById('vehicleMaintenance');
const startTimerBtn = document.getElementById('startTimer');
const pauseTimerBtn = document.getElementById('pauseTimer');

// Variables para el temporizador
let timerInterval;
let timerSeconds = 0;
let timerRunning = false;

// Funciones para los botones
addVehicleBtn.addEventListener('click', function() {
    textDisplay.textContent = "Proceso: Añadir nuevo vehículo al sistema";
    textDisplay.classList.add('active');
    setTimeout(() => textDisplay.classList.remove('active'), 2000);
});

deleteVehicleBtn.addEventListener('click', function() {
    textDisplay.textContent = "Proceso: Eliminar vehículo seleccionado";
    textDisplay.classList.add('active');
    setTimeout(() => textDisplay.classList.remove('active'), 2000);
});

modifyDataBtn.addEventListener('click', function() {
    textDisplay.textContent = "Proceso: Modificar datos del vehículo";
    textDisplay.classList.add('active');
    setTimeout(() => textDisplay.classList.remove('active'), 2000);
});

vehicleMaintenanceBtn.addEventListener('click', function() {
    textDisplay.textContent = "Proceso: Registrar mantenimiento del vehículo";
    textDisplay.classList.add('active');
    setTimeout(() => textDisplay.classList.remove('active'), 2000);
});

startTimerBtn.addEventListener('click', function() {
    if (!timerRunning) {
        timerRunning = true;
        textDisplay.textContent = "Temporizador iniciado - Actividad en curso";
        textDisplay.classList.add('active');
        
        timerInterval = setInterval(function() {
            timerSeconds++;
            updateTimerDisplay();
        }, 1000);
    }
});

pauseTimerBtn.addEventListener('click', function() {
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        textDisplay.textContent = "Temporizador pausado - Actividad detenida";
        textDisplay.classList.add('active');
        setTimeout(() => textDisplay.classList.remove('active'), 2000);
    } else {
        timerSeconds = 0;
        updateTimerDisplay();
        textDisplay.textContent = "Temporizador reiniciado - Listo para nueva actividad";
        textDisplay.classList.add('active');
        setTimeout(() => textDisplay.classList.remove('active'), 2000);
    }
});

// Función para actualizar la visualización del temporizador
function updateTimerDisplay() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}