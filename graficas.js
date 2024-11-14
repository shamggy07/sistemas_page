// Gráfica de Clasificación en TODES
const ctxTODES = document.getElementById('graficaTODES').getContext('2d');
const graficaTODES = new Chart(ctxTODES, {
    type: 'bar',
    data: {
        labels: ['Rehabilitación', 'Masaje', 'Terapía Física', 'Exfoliación corporal', 'Radiofrecuencia', 'Presoterapia', 'Quiromasaje'],
        datasets: [{
            label: 'Ventas',
            data: [1200, 1500, 800, 600, 1500, 300, 856],
            backgroundColor: ['#9d00d3', '#d30602', '#46ff00', '#ffe100', '#00faff', '#ff008b', '#00ff79'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: true, text: 'Cantidad de unidades vendidas' }
        }
    }
});

// Gráfica de Correlación en UNE
const ctxUNE = document.getElementById('graficaUNE').getContext('2d');
const graficaUNE = new Chart(ctxUNE, {
    type: 'bar',
    data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
        datasets: [{
            label: 'Cantidad de productos más vendidos',
            data: [20, 150, 70, 100, 15],
            backgroundColor: ['blue', 'purple', 'green', 'yellow', "red"]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true },
            title: { display: true, text: 'Productos más vendidos' }
        },
        scales: {
            x: { stacked: true },
            y: { stacked: false }
        }
    }
});
