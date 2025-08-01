# 🚀 EmailJS Quick Setup - Solución Inmediata

## ⚡ **SOLUCIÓN RÁPIDA (5 minutos)**

### **PASO 1: Crear cuenta en EmailJS**
1. Ve a [EmailJS.com](https://emailjs.com)
2. Haz clic en "Sign Up" (gratis)
3. Crea cuenta con Google/GitHub

### **PASO 2: Configurar Email Service**
1. En EmailJS dashboard → Email Services
2. Haz clic en "Add New Service"
3. Selecciona "Gmail" o "Outlook"
4. Conecta tu email: `lucas+kemiacontact@mazalan.com`
5. **Copia el Service ID** (ej: `service_abc123`)

### **PASO 3: Crear Email Template**
1. En EmailJS dashboard → Email Templates
2. Haz clic en "Create New Template"
3. Configura el template:

**Subject:**
```
Nueva invocación KEMIA - {{from_name}}
```

**Body:**
```html
<h2>Nueva invocación recibida</h2>
<p><strong>Nombre:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Mensaje:</strong></p>
<p>{{message}}</p>
<hr>
<p><em>Enviado desde el sitio web de KEMIA</em></p>
```

4. **Copia el Template ID** (ej: `template_xyz789`)

### **PASO 4: Obtener User ID**
1. En EmailJS dashboard → Account → API Keys
2. **Copia tu Public Key** (ej: `user_123456`)

### **PASO 5: Actualizar el código**
Reemplaza en `index.html` línea 15:
```javascript
emailjs.init("TU_PUBLIC_KEY"); // Reemplazar con tu Public Key
```

Reemplaza en `script.js` línea 250:
```javascript
emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', templateParams)
```

### **PASO 6: Probar**
1. Sube los cambios al servidor
2. Completa el formulario
3. ¡Deberías recibir el email!

---

## 🔧 **CONFIGURACIÓN COMPLETA**

### **index.html (línea 15):**
```javascript
emailjs.init("user_123456"); // Tu Public Key
```

### **script.js (línea 250):**
```javascript
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

---

## ✅ **VENTAJAS DE EMAILJS**

- ✅ **Configuración en 5 minutos**
- ✅ **Gratis** hasta 200 emails/mes
- ✅ **Funciona inmediatamente**
- ✅ **No requiere servidor**
- ✅ **Templates personalizables**
- ✅ **Dashboard para ver envíos**

---

## 🚨 **SOLUCIÓN DE PROBLEMAS**

### **Error: "emailjs is not defined"**
- **Causa**: SDK no cargado
- **Solución**: Verificar que el script de EmailJS esté en el HTML

### **Error: "Service ID not found"**
- **Causa**: Service ID incorrecto
- **Solución**: Copiar el Service ID correcto del dashboard

### **Error: "Template ID not found"**
- **Causa**: Template ID incorrecto
- **Solución**: Copiar el Template ID correcto del dashboard

### **No llegan emails**
- **Causa**: Email service no configurado
- **Solución**: Verificar conexión del email en EmailJS

---

## 📋 **CHECKLIST RÁPIDO**

- [ ] Cuenta creada en EmailJS
- [ ] Email service configurado
- [ ] Template creado
- [ ] Public Key copiado
- [ ] Service ID copiado
- [ ] Template ID copiado
- [ ] Código actualizado
- [ ] Sitio subido
- [ ] Prueba realizada
- [ ] Email recibido

---

## 🎯 **PRÓXIMOS PASOS**

1. **Configurar EmailJS** (5 minutos)
2. **Probar envío** (1 minuto)
3. **Personalizar template** (opcional)
4. **Configurar Formspree** (para respaldo)

**¡EmailJS te dará una solución inmediata mientras configuras Formspree!** ⚡ 