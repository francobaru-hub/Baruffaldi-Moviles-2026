# Diccionario de comandos Git

Guía básica de Git para trabajar con los repositorios de la materia.

# Comandos que conviene memorizar primero

| Comando | ¿Para qué sirve? |
|---|---|
| `git status` | Ver el estado del repositorio |
| `git add .` | Preparar todos los cambios |
| `git commit -m "mensaje"` | Guardar cambios en el historial |
| `git push` | Subir cambios a GitHub |
| `git pull` | Descargar e integrar cambios de GitHub |
| `git log --oneline` | Ver el historial resumido |
| `git remote -v` | Ver el repositorio remoto |
| `git diff` | Ver los cambios realizados |
| `git fetch` | Actualizar información del repositorio remoto |
| `git branch` | Ver las ramas |
| `git switch` | Cambiar de rama |

---

## 1. Configuración inicial

### `git config`

Permite configurar los datos que Git utiliza para identificar al usuario.

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

Para ver la configuración:

```bash
git config --global --list
```

---

## 2. Crear un repositorio

### `git init`

Convierte una carpeta en un repositorio Git.

```bash
git init
```

Crea una carpeta oculta llamada `.git`, donde Git guarda la información del repositorio.

> Normalmente se utiliza una sola vez por proyecto.

---

## 3. Ver el estado

### `git status`

Muestra qué archivos fueron modificados, cuáles son nuevos y cuáles están preparados para un commit.

```bash
git status
```

Es uno de los comandos más importantes para saber qué está pasando en el repositorio.

---

## 4. Agregar cambios

### `git add`

Prepara archivos para incluirlos en el próximo commit.

Para agregar un archivo específico:

```bash
git add archivo.js
```

Para agregar todos los cambios:

```bash
git add .
```

El `.` significa "todos los archivos y carpetas de la ubicación actual".

---

## 5. Guardar cambios

### `git commit`

Guarda los cambios que preparaste con `git add` en el historial local de Git.

El mensaje debería explicar brevemente qué se modificó.

**Estructura:**

```bash
git commit -m "tipo(alcance): asunto"
```

Para hacer un buen commit:

- **Tipo:** indica qué cambio hiciste (`feat`, `fix`, `docs`, etc.).
- **Alcance:** indica dónde hiciste el cambio.
- **Asunto:** describe brevemente qué cambiaste.
- Usá un **verbo en presente**: `agrega`, `corrige`, `actualiza`, `elimina`.
- Debe ser **corto y claro**.

**Ejemplos:**

```bash
git commit -m "feat(clase-03): agrega ejercicio de JavaScript"
git commit -m "fix(clase-03): corrige cálculo del peaje"
git commit -m "docs: actualiza README de la materia"
```

> **Importante:** `git commit` guarda el cambio **localmente**. Para subirlo a GitHub después usás `git push`.

---

## 6. Ver el historial

### `git log`

Muestra los commits realizados.

```bash
git log
```

Una versión más resumida:

```bash
git log --oneline
```

Ejemplo:

```text
481090f Integra el repositorio de la materia y organiza Clase-03
a5cc424 Agrega README de la materia
```

Los primeros caracteres identifican al commit.

---

## 7. Conectar Git con GitHub

### `git remote`

Permite administrar la conexión entre el repositorio local y el repositorio remoto.

Para agregar un repositorio remoto:

```bash
git remote add origin URL_DEL_REPOSITORIO
```

Ejemplo:

```bash
git remote add origin https://github.com/usuario/repositorio.git
```

Para comprobar la conexión:

```bash
git remote -v
```

`origin` es el nombre habitual que se utiliza para el repositorio remoto principal.

---

## 8. Subir cambios a GitHub



### `git push`

Envía los commits del repositorio local a GitHub.

La primera vez:

```bash
git push -u origin master
```

Después de configurar la rama remota:

```bash
git push
```

---

## 9. Descargar cambios de GitHub

### `git pull`

Descarga cambios de GitHub y los integra en el repositorio local.

```bash
git pull
```

Se utiliza cuando el repositorio remoto tiene cambios que todavía no tenemos en nuestra computadora.

---

## 10. Actualizar información remota

### `git fetch`

Descarga información del repositorio remoto, pero no modifica directamente nuestros archivos.

```bash
git fetch origin
```

Es útil para comprobar qué cambios existen en GitHub antes de integrarlos.

---

## 11. Ramas

### `git branch`

Muestra las ramas disponibles.

```bash
git branch
```

La rama actual aparece marcada con `*`.

Para crear una rama:

```bash
git branch nombre-rama
```

---

### `git switch`

Permite cambiar de rama.

```bash
git switch nombre-rama
```

También permite crear y cambiar a una nueva rama:

```bash
git switch -c nombre-rama
```

> Para trabajos simples de la materia, probablemente trabajemos principalmente con `master` por ahora.

---

## 12. Ver diferencias

### `git diff`

Muestra los cambios realizados en los archivos que todavía no fueron preparados con `git add`.

```bash
git diff
```

Sirve para revisar qué cambió antes de hacer un commit.

---

## 13. Eliminar archivos

### `git rm`

Elimina un archivo y registra ese cambio para el próximo commit.

```bash
git rm archivo.js
```

Después:

```bash
git commit -m "Elimina archivo innecesario"
```

---

## 14. Deshacer cambios básicos

### `git restore`

Permite descartar cambios que todavía no fueron guardados en un commit.

```bash
git restore archivo.js
```

⚠️ Este comando puede eliminar los cambios realizados en ese archivo, por lo que hay que utilizarlo con cuidado.

Para sacar un archivo del área de preparación después de usar `git add`:

```bash
git restore --staged archivo.js
```

Esto quita el archivo del `staging`, pero conserva sus cambios.

---

# Flujo normal de trabajo

Para el trabajo cotidiano de la materia, lo más importante es recordar esta secuencia:

```bash
git status
git add .
git commit -m "Descripción del cambio"
git push
```

### ¿Qué hace cada uno?

**1. `git status`**

Comprueba qué cambió.

**2. `git add .`**

Prepara todos los cambios.

**3. `git commit -m "..."`**

Guarda esos cambios en el historial local.

**4. `git push`**

Sube los commits a GitHub.

---

# Regla fácil para recordar

```text
CAMBIO ARCHIVOS
      ↓
git status
      ↓
git add .
      ↓
git commit -m "mensaje"
      ↓
git push
      ↓
    GITHUB
```

> **Importante:** `git commit` guarda los cambios en tu repositorio local. `git push` envía esos commits a GitHub.