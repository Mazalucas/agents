# KEMIA Contact Form - Setup Guide

## 🚀 **OPCIÓN 1: Formspree (RECOMENDADA - Implementada)**

### ✅ **Ventajas:**
- ✅ **Sin servidor propio** - Funciona inmediatamente
- ✅ **Gratis** hasta 50 envíos/mes
- ✅ **Configuración en 2 minutos**
- ✅ **Spam protection** incluido
- ✅ **Notificaciones por email** automáticas

### 📋 **Pasos para activar:**

1. **Ir a [Formspree.io](https://formspree.io)**
2. **Crear cuenta gratuita**
3. **Crear nuevo formulario:**
   - Nombre: "KEMIA Contact"
   - Email: `lucas+kemiacontact@mazalan.com`
4. **Copiar el endpoint** (ej: `https://formspree.io/f/xpzgwqzg`)
5. **Reemplazar en `index.html` línea 308**

### 🔧 **Configuración actual:**
```html
<form class="contact-form" action="https://formspree.io/f/xpzgwqzg" method="POST">
```

### 📧 **Configurar email de destino:**
- En Formspree dashboard → Settings → Email
- Agregar: `lucas+kemiacontact@mazalan.com`

---

## 🛠️ **OPCIÓN 2: Netlify Forms (Alternativa)**

### ✅ **Ventajas:**
- ✅ **Gratis** e ilimitado
- ✅ **Integrado con Netlify** (si usas Netlify para hosting)
- ✅ **Spam protection** avanzado

### 📋 **Implementación:**
```html
<form class="contact-form" name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <!-- resto del formulario igual -->
</form>
```

---

## 🔥 **OPCIÓN 3: Backend propio (Más control)**

### 📋 **Requisitos:**
- Servidor Node.js/Python/PHP
- Configuración SMTP
- Dominio con SSL

### 🛠️ **Implementación Node.js:**
```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    const { nombre, email, mensaje } = req.body;
    
    // Configurar transporter
    const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
            user: 'tu-email@gmail.com',
            pass: 'tu-app-password'
        }
    });
    
    // Enviar email
    await transporter.sendMail({
        from: 'noreply@kemia.art',
        to: 'lucas+kemiacontact@mazalan.com',
        subject: `Nueva invocación de KEMIA - ${nombre}`,
        html: `
            <h2>Nueva invocación recibida</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${mensaje}</p>
        `
    });
    
    res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 🎯 **RECOMENDACIÓN ACTUAL:**

**Usar OPCIÓN 1 (Formspree)** porque:
- ✅ Funciona inmediatamente
- ✅ No requiere configuración de servidor
- ✅ Manejo automático de spam
- ✅ Notificaciones por email
- ✅ Dashboard para ver envíos

### 📞 **Siguiente paso:**
1. Crear cuenta en Formspree
2. Obtener endpoint real
3. Reemplazar `xpzgwqzg` con tu endpoint
4. Configurar email de destino
5. ¡Probar!

---

## 🔧 **Personalización adicional:**

### **Campos adicionales:**
```html
<input type="hidden" name="_subject" value="Nueva invocación KEMIA">
<input type="hidden" name="_next" value="https://kemia.art/gracias">
```

### **Redirección personalizada:**
```html
<input type="hidden" name="_next" value="https://kemia.art/gracias">
```

### **Captcha (opcional):**
```html
<div class="g-recaptcha" data-sitekey="tu-site-key"></div>
```

---

## 📊 **Monitoreo:**

### **Formspree Dashboard:**
- Ver todos los envíos
- Estadísticas de spam
- Configurar notificaciones
- Exportar datos

### **Email notifications:**
- Recibir cada envío en `lucas+kemiacontact@mazalan.com`
- Formato personalizable
- Filtros automáticos 