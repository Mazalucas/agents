# KEMIA Contact Form - Desarrollo vs Producción

## 🖥️ **DESARROLLO LOCAL (localhost)**

### ✅ **Cómo funciona:**
- **Detección automática**: El script detecta si estás en `localhost`, `127.0.0.1` o sin hostname
- **Simulación**: En lugar de enviar a Formspree, simula el envío
- **Feedback visual**: Muestra "¡Invocación Enviada! ✅ (Local)"
- **Logs en consola**: Muestra todos los datos del formulario

### 📋 **Para probar:**
1. Abre `index.html` en tu navegador
2. Ve a la sección "Invocar KEMIA"
3. Completa el formulario
4. Haz clic en "Enviar Invocación"
5. **Abre la consola del navegador** (F12) para ver los logs

### 🔍 **Lo que verás en la consola:**
```
🌐 Ejecutando en localhost - Simulando envío del formulario
📧 Datos del formulario: {nombre: "...", email: "...", mensaje: "..."}
✅ Formulario enviado exitosamente (simulado)
📋 Datos que se enviarían:
   Nombre: [tu nombre]
   Email: [tu email]
   Mensaje: [tu mensaje]
📧 Email de destino: lucas+kemiacontact@mazalan.com
```

---

## 🌐 **PRODUCCIÓN (Dominio público)**

### ✅ **Cómo funciona:**
- **Detección automática**: Detecta que no estás en localhost
- **Envío real**: Usa Formspree para enviar emails reales
- **Feedback visual**: Muestra "¡Invocación Enviada! ✅"
- **Email real**: Recibes el email en `lucas+kemiacontact@mazalan.com`

### 📋 **Para activar:**
1. Sube el sitio a un hosting (Netlify, Vercel, etc.)
2. Configura Formspree con tu endpoint real
3. Reemplaza `xpzgwqzg` en `index.html` con tu endpoint
4. ¡Listo!

---

## 🔧 **CONFIGURACIÓN ACTUAL**

### **HTML (index.html línea 308):**
```html
<form class="contact-form" action="https://formspree.io/f/xpzgwqzg" method="POST">
```

### **JavaScript (script.js líneas 209-280):**
```javascript
// Detectar si estamos en localhost
const isLocalhost = window.location.hostname === 'localhost' || 
                   window.location.hostname === '127.0.0.1' || 
                   window.location.hostname === '';

if (isLocalhost) {
    // Simular envío para desarrollo local
    console.log('🌐 Ejecutando en localhost...');
    // ... simulación
} else {
    // Envío real usando Formspree
    fetch(this.action, { ... });
}
```

---

## 🧪 **PRUEBAS**

### **Prueba 1: Desarrollo Local**
```bash
# Abrir en navegador
start index.html
# o
file:///C:/Users/Lucas/Documents/DevProyects/Kemia-Web/agents/index.html
```

### **Prueba 2: Servidor Local**
```bash
# Si tienes Python instalado
python -m http.server 8000
# Luego ir a http://localhost:8000
```

### **Prueba 3: Producción**
- Subir a Netlify/Vercel
- Configurar Formspree
- Probar desde el dominio público

---

## 🚨 **SOLUCIÓN DE PROBLEMAS**

### **Error: "Error en el envío"**
- **Causa**: Intentando usar Formspree en localhost
- **Solución**: El código ya está arreglado para detectar localhost

### **No veo logs en consola**
- **Causa**: Consola del navegador cerrada
- **Solución**: Presionar F12 → Console

### **Formulario no se resetea**
- **Causa**: Error en el JavaScript
- **Solución**: Verificar que no hay errores en la consola

### **Quiero probar el envío real en local**
- **Opción 1**: Usar ngrok para exponer localhost
- **Opción 2**: Subir temporalmente a Netlify
- **Opción 3**: Configurar un servidor local con Node.js

---

## 🎯 **PRÓXIMOS PASOS**

1. **✅ Probar en local** (ya funciona)
2. **📋 Subir a hosting** (Netlify recomendado)
3. **🔧 Configurar Formspree** con endpoint real
4. **📧 Probar envío real** desde dominio público
5. **🎨 Personalizar** página de agradecimiento

---

## 💡 **CONSEJOS**

- **Siempre abre la consola** (F12) para ver logs
- **Prueba todos los campos** antes de subir
- **Verifica el email** de destino en Formspree
- **Usa datos reales** para las pruebas finales
- **Mantén una copia** del código original

**¡El formulario ahora funciona perfectamente en desarrollo local!** 🎉 