
const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');
const btnDescargar = document.getElementById('btnDescargar');
const colorQR = document.getElementById('colorQR');
const colorFondo = document.getElementById('colorFondo');
const colorMargen = document.getElementById('colorMargen');

// Crear un div específico para el QR
const qrContainer = document.createElement('div');
qrContainer.id = 'qr-code';
contenedorQR.insertBefore(qrContainer, btnDescargar);

let QR = new QRCode(qrContainer, {
    width: 280,
    height: 280,
    colorDark: colorQR.value,
    colorLight: colorFondo.value,
    correctLevel: QRCode.CorrectLevel.H
});

// Función para actualizar los nombres de colores
function actualizarNombresColores() {
    const grupos = document.querySelectorAll('.color-group');
    const nombreColorQR = grupos[0].querySelector('.color-name');
    const nombreColorFondo = grupos[1].querySelector('.color-name');
    const nombreColorMargen = grupos[2].querySelector('.color-name');
    
    nombreColorQR.textContent = obtenerNombreColor(colorQR.value);
    nombreColorFondo.textContent = obtenerNombreColor(colorFondo.value);
    nombreColorMargen.textContent = obtenerNombreColor(colorMargen.value);
}

// Función para obtener nombre aproximado del color
function obtenerNombreColor(hex) {
    const colores = {
        '#000000': 'Negro', '#ffffff': 'Blanco', '#ff0000': 'Rojo',
        '#00ff00': 'Verde', '#0000ff': 'Azul', '#ffff00': 'Amarillo',
        '#ff00ff': 'Magenta', '#00ffff': 'Cian', '#808080': 'Gris',
        '#2c3e50': 'Azul oscuro', '#e74c3c': 'Rojo vivo', '#3498db': 'Azul claro',
        '#2ecc71': 'Verde esmeralda', '#f39c12': 'Naranja', '#9b59b6': 'Púrpura'
    };
    
    return colores[hex.toLowerCase()] || 'Personalizado';
}

// Eventos para actualizar nombres cuando cambian los colores
colorQR.addEventListener('change', actualizarNombresColores);
colorFondo.addEventListener('change', actualizarNombresColores);
colorMargen.addEventListener('change', actualizarNombresColores);

// Inicializar nombres de colores al cargar la página
document.addEventListener('DOMContentLoaded', actualizarNombresColores);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = formulario.link.value.trim();
    
    if (texto) {
        // Ocultar el botón de descarga mientras se genera
        btnDescargar.classList.add('hidden');
        
        // Añadir efecto de carga
        qrContainer.style.opacity = '0.5';
        qrContainer.style.transform = 'scale(0.9)';
        
        // Recrear el QR con los colores actuales
        qrContainer.innerHTML = '';
        QR = new QRCode(qrContainer, {
            width: 280,
            height: 280,
            colorDark: colorQR.value,
            colorLight: colorFondo.value,
            correctLevel: QRCode.CorrectLevel.H
        });
        
        // Generar el nuevo código QR
        QR.makeCode(texto);
        
        // Mostrar el QR con animación y el botón de descarga
        setTimeout(() => {
            qrContainer.style.opacity = '1';
            qrContainer.style.transform = 'scale(1)';
            btnDescargar.classList.remove('hidden');
            
            // Añadir un título con el texto generado si es corto
            if (texto.length <= 50) {
                let titulo = qrContainer.querySelector('.qr-title');
                if (!titulo) {
                    titulo = document.createElement('div');
                    titulo.className = 'qr-title';
                    qrContainer.appendChild(titulo);
                }
                titulo.textContent = texto;
            } else {
                // Remover título si el texto es muy largo
                const titulo = qrContainer.querySelector('.qr-title');
                if (titulo) {
                    titulo.remove();
                }
            }
        }, 200);
    }
});

btnDescargar.addEventListener('click', () => {
    // Buscar el canvas generado por QRCode en el contenedor específico
    const canvasOriginal = qrContainer.querySelector('canvas');
    
    if (canvasOriginal) {
        // Crear un nuevo canvas de alta resolución para impresión
        const canvasConMargen = document.createElement('canvas');
        const ctx = canvasConMargen.getContext('2d');
        
        // Configuración para impresión de alta calidad
        // 600x600px (2x2 pulgadas a 300 DPI) - ideal para trípticos
        const tamañoFinal = 600;
        const margenPx = 60; // 10% del tamaño total como margen
        const tamañoQR = tamañoFinal - (margenPx * 2);
        
        // Configurar el canvas de alta resolución
        canvasConMargen.width = tamañoFinal;
        canvasConMargen.height = tamañoFinal;
        
        // Desactivar el suavizado para mantener líneas nítidas
        ctx.imageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;
        
        // Rellenar el fondo de la imagen con el color de margen seleccionado
        ctx.fillStyle = colorMargen.value;
        ctx.fillRect(0, 0, tamañoFinal, tamañoFinal);
        
        // Escalar y dibujar el QR original en el centro
        ctx.drawImage(canvasOriginal, margenPx, margenPx, tamañoQR, tamañoQR);
        
        // Crear un enlace temporal para la descarga
        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.download = 'codigo-qr-alta-resolucion.png';
        enlaceDescarga.href = canvasConMargen.toDataURL('image/png', 1.0); // Máxima calidad
        
        // Simular click para descargar
        document.body.appendChild(enlaceDescarga);
        enlaceDescarga.click();
        document.body.removeChild(enlaceDescarga);
    } else {
        alert('Error: No se encontró el código QR para descargar');
    }
});