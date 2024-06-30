const characters = [
    {
        name: "Goku",
        images: ["img/Dragon Ball/cabelo colorido.jpg", "img/Dragon Ball/gorila.jpg", "img/Dragon Ball/DBS.jpeg"]
    },
    {
        name: "Vegeta",
        images: ["img/Dragon Ball/coroa.avif", "img/Dragon Ball/cabelo colorido.jpg", "img/Dragon Ball/gorila.jpg", "img/Dragon Ball/DBS.jpeg"]
    },
    {
        name: "Naruto",
        images: ["img/laranja.webp", "img/Naruto/raposa.jpg", "img/Naruto/Naruto.jpg"]
    },
    {
        name: "Sasuke",
        images: ["img/Naruto/cobra.avif", "img/Naruto/raio.jpg", "img/Naruto/Naruto.jpg"]
    },
    {
        name: "Luffy",
        images: ["img/One Piece/chinelho.webp", "img/One Piece/borracha.jpg", "img/One Piece/One Piece.webp"]
    },
    {
        name: "Zoro",
        images: ["img/One Piece/alcool.avif", "img/One Piece/tres espadas.jpg", "img/One Piece/One Piece.webp"]
    }
];

// escolhe um personagem aleatorio
let currentCharacterIndex = Math.floor(Math.random() * characters.length);
let currentCharacter = characters[currentCharacterIndex];
let currentImageIndex = 0;

// elementos
const characterImage = document.getElementById('characterImage');
const characterNameInput = document.getElementById('characterNameInput');
const guessButton = document.getElementById('guessButton');
const hintText = document.getElementById('hintText');
const hintButton = document.getElementById('hintButton');

// exibe imagem
characterImage.src = currentCharacter.images[currentImageIndex];

// adivinhar o personagem
guessButton.addEventListener('click', function() {
    const guessedName = characterNameInput.value.trim();

    if (guessedName.toLowerCase() === currentCharacter.name.toLowerCase()) {
        alert('Parabéns! Você acertou o personagem.');
        resetGame();
    } else {
        hintText.textContent = `O personagem não é o ${guessedName}.`;
    }
});

// Botão dica
hintButton.addEventListener('click', function() {
    // troca imagem 
    currentImageIndex = (currentImageIndex + 1) % currentCharacter.images.length;
    characterImage.src = currentCharacter.images[currentImageIndex];
    hintText.textContent = '';
});

// Função para reiniciar o jogo
function resetGame() {
    characterNameInput.value = ''; 
    hintText.textContent = ''; 
    currentImageIndex = 0; 
    //novo personagem 
    currentCharacterIndex = Math.floor(Math.random() * characters.length);
    currentCharacter = characters[currentCharacterIndex];
    characterImage.src = currentCharacter.images[currentImageIndex];
}
