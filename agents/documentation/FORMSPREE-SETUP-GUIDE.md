# 🚀 Formspree Setup Guide - KEMIA Website

## ❌ **PROBLEMA ACTUAL**
El endpoint `xpzgwqzg` no es real. Necesitas crear tu propio endpoint en Formspree.

## ✅ **SOLUCIÓN PASO A PASO**

### **PASO 1: Crear cuenta en Formspree**
1. Ve a [Formspree.io](https://formspree.io)
2. Haz clic en "Sign Up" o "Get Started"
3. Crea una cuenta gratuita (puedes usar Google/GitHub)

### **PASO 2: Crear nuevo formulario**
1. En el dashboard, haz clic en "New Form"
2. Configura el formulario:
   - **Form Name**: `KEMIA Contact`
   - **Email**: `lucas+kemiacontact@mazalan.com`
   - **Subject**: `Nueva invocación KEMIA`
3. Haz clic en "Create Form"

### **PASO 3: Obtener el endpoint real**
1. Después de crear el formulario, verás algo como:
   ```
   https://formspree.io/f/xpzgwqzg
   ```
2. **Copia ese endpoint** (será diferente al actual)

### **PASO 4: Actualizar el código**
Reemplaza en `index.html` línea 308:
```html
<!-- ANTES (incorrecto) -->
<form class="contact-form" action="https://formspree.io/f/xpzgwqzg" method="POST">

<!-- DESPUÉS (con tu endpoint real) -->
<form class="contact-form" action="https://formspree.io/f/TU_ENDPOINT_REAL" method="POST">
```

### **PASO 5: Verificar configuración**
1. En Formspree dashboard → Settings
2. Verifica que el email sea: `lucas+kemiacontact@mazalan.com`
3. Activa las notificaciones por email

---

## 🔧 **CONFIGURACIÓN ALTERNATIVA**

### **Opción A: Usar Netlify Forms (Recomendado si usas Netlify)**
```html
<form class="contact-form" name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <!-- resto del formulario igual -->
</form>
```

### **Opción B: Usar EmailJS (Alternativa gratuita)**
1. Ve a [EmailJS.com](https://emailjs.com)
2. Crea cuenta gratuita
3. Configura template de email
4. Usa su JavaScript SDK

---

## 🧪 **PRUEBAS**

### **Prueba 1: Verificar endpoint**
```bash
# En la consola del navegador, prueba:
fetch('https://formspree.io/f/TU_ENDPOINT_REAL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ test: 'data' })
})
.then(response => console.log('Status:', response.status))
.catch(error => console.error('Error:', error));
```

### **Prueba 2: Envío completo**
1. Completa el formulario en tu sitio
2. Envía el formulario
3. Verifica en Formspree dashboard que llegó
4. Revisa tu email

---

## 🚨 **SOLUCIÓN DE PROBLEMAS**

### **Error 404 en Formspree**
- **Causa**: Endpoint incorrecto
- **Solución**: Verificar que el endpoint sea el correcto

### **Error CORS**
- **Causa**: Dominio no autorizado
- **Solución**: En Formspree → Settings → Domains, agregar tu dominio

### **No llegan emails**
- **Causa**: Email mal configurado
- **Solución**: Verificar email en Formspree settings

### **Spam en dashboard**
- **Causa**: Formspree detecta spam
- **Solución**: Activar captcha o verificar contenido

---

## 📋 **CHECKLIST DE VERIFICACIÓN**

- [ ] Cuenta creada en Formspree
- [ ] Formulario creado con email correcto
- [ ] Endpoint copiado correctamente
- [ ] Código actualizado en `index.html`
- [ ] Sitio subido al servidor
- [ ] Prueba de envío realizada
- [ ] Email recibido en `lucas+kemiacontact@mazalan.com`
- [ ] Dashboard de Formspree muestra el envío

---

## 🎯 **PRÓXIMOS PASOS**

1. **Crear cuenta en Formspree** (5 minutos)
2. **Obtener endpoint real** (2 minutos)
3. **Actualizar código** (1 minuto)
4. **Subir cambios** (2 minutos)
5. **Probar envío** (1 minuto)

**Total estimado: 11 minutos**

---

## 💡 **CONSEJOS**

- **Usa el endpoint exacto** que te da Formspree
- **Verifica el email** antes de crear el formulario
- **Prueba en incógnito** para evitar cache
- **Revisa la consola** para errores específicos
- **Mantén una copia** del endpoint en un lugar seguro

**¡Una vez que tengas tu endpoint real, el formulario funcionará perfectamente!** 🚀 