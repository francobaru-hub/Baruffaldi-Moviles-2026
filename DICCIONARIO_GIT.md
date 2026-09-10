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

## 3.  Enlazar con GitHub

### `git remote add origin`

Enlaza la carpeta local con un repositorio de GitHub.

**Comando:**

```bash
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
```
Ejemplo:
```bash
git remote add origin https://github.com/francobaru-hub/Baruffaldi-Moviles-2026.git
```
Para comprobar si el repositorio quedó enlazado:
```bash
git remote -v
```
Debería aparecer:
origin  https://github.com/USUARIO/REPOSITORIO.git (fetch)
origin  https://github.com/USUARIO/REPOSITORIO.git (push)

>Importante: este comando se hace normalmente una sola vez por proyecto.

---

## 4. Comprobar sesión de GitHub

### `gh auth status` 
Permite comprobar si estás conectado a tu cuenta de GitHub desde la consola.
Comando:
```bash
gh auth status
```
Si estás conectado, mostrará información sobre tu cuenta y la autenticación.

Para comprobar si GitHub CLI está instalado:
```bash
gh --version
```

>Importante: git remote add origin y gh auth status hacen cosas diferentes.
- git remote add origin → enlaza el proyecto local con GitHub.
- gh auth status → comprueba si tu cuenta de GitHub está autenticada en la consola.

---

## 5. Ver el estado

### `git status`

Muestra qué archivos fueron modificados, cuáles son nuevos y cuáles están preparados para un commit.

```bash
git status
```

Es uno de los comandos más importantes para saber qué está pasando en el repositorio.

---

## 6. Agregar cambios

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

## 7. Guardar cambios

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

## 8. Ver el historial

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

## 9. Conectar Git con GitHub

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

## 10. Subir cambios a GitHub

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

## 11. Descargar cambios de GitHub

### `git pull`

Descarga cambios de GitHub y los integra en el repositorio local.

```bash
git pull
```

Se utiliza cuando el repositorio remoto tiene cambios que todavía no tenemos en nuestra computadora.

---

## 12. Actualizar información remota

### `git fetch`

Descarga información del repositorio remoto, pero no modifica directamente nuestros archivos.

```bash
git fetch origin
```

Es útil para comprobar qué cambios existen en GitHub antes de integrarlos.

---

## 13. Ramas

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

## 14. Ver diferencias

### `git diff`

Muestra los cambios realizados en los archivos que todavía no fueron preparados con `git add`.

```bash
git diff
```

Sirve para revisar qué cambió antes de hacer un commit.

---

## 15. Eliminar archivos

### `git rm`

Elimina un archivo y registra ese cambio para el próximo commit.

```bash
git rm archivo.js
```

Después:

```bash
git commit -m "Elimina archivo innecesario"
git push
```

#### Si el archivo tiene cambios sin guardar

Si el archivo en el disco quedó distinto al que se guardó en el último commit, `git rm` se niega a borrarlo:

```text
error: the following file has local modifications:
    archivo.js
(use --cached to keep the file, or -f to force removal)
```

Si igual lo querés borrar (no te importa perder esos cambios), forzás con `-f`:

```bash
git rm -f archivo.js
git commit -m "elimina archivo.js"
git push
```

#### Borrar un archivo o carpeta que NO está en el repositorio (untracked)

Si nunca se agregó a git — aparece en `git status` bajo "Untracked files", o está ignorado por el `.gitignore` — `git rm` no aplica, porque no es algo que git esté siguiendo. Se borra con un comando normal del sistema, no de git:

```bash
# Git Bash / Linux / Mac
rm -rf nombre-carpeta

# PowerShell
Remove-Item -Recurse -Force nombre-carpeta
```

> ⚠️ `rm -rf` y `Remove-Item -Recurse -Force` borran directo, sin pasar por la papelera. Fijate bien la ruta antes de ejecutar.

---

## 16. Deshacer cambios básicos

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

Para sacar **todo** lo que quedó preparado (por ejemplo, después de un `git add .` que agarró más de lo que querías):

```bash
git restore --staged .
```

Deja todo "despreparado" otra vez, sin borrar ni modificar ningún archivo — solo saca del staging.

#### Cuidado con `git add .` y carpetas que son otro repositorio

Si adentro de tu repo tenés una carpeta que a su vez es OTRO repositorio git (tiene su propia carpeta `.git`, por ejemplo porque clonaste algo ahí dentro), `git add .` la va a agregar como "repositorio embebido" en vez de trackear sus archivos uno por uno:

```text
warning: adding embedded git repository: carpeta/subcarpeta
hint: You've added another git repository inside your current repository.
```

Esto casi nunca es lo que querés. Si pasó sin querer:

```bash
git restore --staged .
```

Y si esa carpeta no tiene que estar en tu repo, borrala (ver sección 15) o agregala a tu `.gitignore` para que git directamente no la mire.

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
git init
    ↓
git remote add origin URL
    ↓
git add .
    ↓
git commit -m "mensaje"
    ↓
git push
    ↓
GitHub
```

> **Importante:** `git commit` guarda los cambios en tu repositorio local. `git push` envía esos commits a GitHub.