# Challenge Encriptador

This project is a simple text encryption and decryption tool. It allows users to input text, encrypt it, and then decrypt it back to the original text. The tool also includes a copy feature to easily copy the encrypted text.

## Features

- Encrypt text using a simple substitution cipher.
- Decrypt text back to its original form.
- Copy the encrypted text to the clipboard.
- User-friendly interface with validation for input text.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/challenge-encriptador.git
    ```
2. Navigate to the project directory:
    ```sh
    cd challenge-encriptador
    ```

## Usage

1. Open the `index.html` file in your web browser.
2. Enter the text you want to encrypt in the textarea.
3. Click the "Encriptar" button to encrypt the text.
4. The encrypted text will appear in the output area.
5. Click the "Desencriptar" button to decrypt the text back to its original form.
6. Use the "Copiar" button to copy the encrypted text to the clipboard.

## Code Explanation

### HTML Structure

- The main container includes an input section for text input and an output section for displaying the encrypted/decrypted text.
- The `output-area` is initially hidden and will be displayed when text is encrypted or decrypted.
- The `placeholder` provides a message when no text is found.

### JavaScript Functions

- `encriptar()`: Encrypts the input text and displays the result.
- `desencriptar()`: Decrypts the input text and displays the result.
- `copiar()`: Copies the encrypted text to the clipboard.
- `comprobarValidez(t)`: Validates the input text to ensure it meets the criteria (lowercase letters, no accents, no special characters).
- `encriptarTexto(valor)`: Performs the encryption by replacing specific characters.
- `desencriptarTexto(valor)`: Reverts the encryption by replacing the encoded characters back to their original form.
