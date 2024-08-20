# Challenge Encriptador

Este proyecto es una herramienta sencilla para encriptar y desencriptar texto. Permite a los usuarios ingresar texto, encriptarlo y luego desencriptarlo de nuevo a su forma original. También incluye una función para copiar fácilmente el texto encriptado.

## Características

- Encriptación de texto usando un cifrado de sustitución simple.
- Desencriptación del texto a su forma original.
- Copia del texto encriptado al portapapeles.
- Interfaz fácil de usar con validación del texto de entrada.

## Funcionamiento:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

    ```

## Uso

1. Abre el archivo `index.html` en tu navegador web.
2. Ingresa el texto que deseas encriptar en el área de texto.
3. Haz clic en el botón "Encriptar" para encriptar el texto.
4. El texto encriptado aparecerá en el área de salida.
5. Haz clic en el botón "Desencriptar" para devolver el texto a su forma original.
6. Usa el botón "Copiar" para copiar el texto encriptado al portapapeles.

## Explicación del Código

### Estructura HTML

- El contenedor principal incluye una sección de entrada para el texto y una sección de salida para mostrar el texto encriptado/desencriptado.
- El área de `output-area` está oculta inicialmente y se mostrará cuando el texto sea encriptado o desencriptado.
- El `placeholder` proporciona un mensaje cuando no se encuentra texto.

### Funciones JavaScript

- `encriptar()`: Encripta el texto ingresado y muestra el resultado.
- `desencriptar()`: Desencripta el texto encriptado y muestra el resultado.
- `copiar()`: Copia el texto encriptado al portapapeles.
- `comprobarValidez(t)`: Valida el texto de entrada para asegurar que cumple con los criterios (letras minúsculas, sin acentos ni caracteres especiales).
- `encriptarTexto(valor)`: Realiza la encriptación reemplazando caracteres específicos.
- `desencriptarTexto(valor)`: Revierte la encriptación reemplazando los caracteres codificados a su forma original.
