//Функція очищення полів
function clearTextarea() {
    // Знаходимо елемент textarea за його id
    var inputText = document.getElementById("inputText");
    var outputText = document.getElementById("outputText");
    // Очищаємо значення textarea
    inputText.value = '';
    outputText.value = '';
}


function selectOption(option) {
    document.getElementById('conversionType').value = option;
    closeOptionsModal();
}


//Необхідні зміннні
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const letterCount = document.getElementById('letterCount');
const letterCountWithoutSpaces = document.getElementById('letterCountWithoutSpaces');
const wordCount = document.getElementById('wordCount');
const lineCount = document.getElementById('lineCount');
const digitAndSymbolCount = document.getElementById('digitAndSymbolCount'); 


//Функція для автоматичного виведення результату в поле виводу 
document.addEventListener('DOMContentLoaded', function () {
    // Отримайте елементи textarea та inputText
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');

    // Додайте обробник подій для події 'input'
    inputText.addEventListener('input', function () {
        // Викликайте функцію конвертації при введенні тексту
        convert();
    });
});
inputText.addEventListener('input', updateCounters);


//Функція для оновлення лічильників 
function updateCounters() {
    const text = inputText.value;
    letterCount.textContent = text.length;
    letterCountWithoutSpaces.textContent = text.replace(/\s/g, '').length;
    wordCount.textContent = text.split(/\s+/).length;
    lineCount.textContent = text.split('\n').length;
    digitAndSymbolCount.textContent = countLatinDigitsAndSymbols(text);
    letterCountWithoutSpecial.textContent = text.replace(/[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g, '').length;
}


//Функція підрахунку кількості букв без спецсимволів 
function countLettersWithoutSpecial(text) {
    // Use a regular expression to match only letters (excluding special characters)
    const lettersWithoutSpecialRegex = /[a-zA-Z]/g;
    const matches = text.match(lettersWithoutSpecialRegex);
    return matches ? matches.length : 0;
}


//Функція підрахунку кількості спецсимволів 
function countLatinDigitsAndSymbols(text) {

    const latinDigitsAndSymbolsRegex = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g;
    const matches = text.match(latinDigitsAndSymbolsRegex);
    return matches ? matches.length : 0;
}



//Функції звязування кнопок з відповідними ім функціями
function convert() {
    const conversionType = document.getElementById('conversionType').value;
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').value = inputText;
    switch (conversionType) {
        case 'default':
            document.getElementById('outputText').value = inputText;
            break;
        case 'morse':
            document.getElementById('outputText').value = textToMorse(inputText);
            break;
        case 'transliterate':
            document.getElementById('outputText').value = transliterateText(inputText);
            break;
        case 'nato':
            document.getElementById('outputText').value = textToNato(inputText);
            break;
        case 'toupper':
            document.getElementById('outputText').value = convertUpperCase(inputText);
            break;
        case 'tolower':
            document.getElementById('outputText').value = convertLowerCase(inputText);
            break;
        case 'toupperlower':
            document.getElementById('outputText').value = convertUpperLowerCase(inputText);
            break;
        case 'clearhtml':
            document.getElementById('outputText').value = clearHtmlTags(inputText);
            break;
        case 'transiso':
            document.getElementById('outputText').value = transliterateISO(inputText);
            break;
        case 'transpolish':
            document.getElementById('outputText').value = transliteratePolishToUkrainian(inputText);
            break;


        default:
            break;
    }
}


//Функція копіювання тексту з поля виводу 
function copyOutput() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Результат скопійовано до буферу обміну!');
}


//Функції виводу результатів в відповідне поле виводу
function convertToMorseCode() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    const morseCode = textToMorse(inputText);
    document.getElementById('outputText').value = morseCode;
}

function transliterate() {
    const inputText = document.getElementById('inputText').value;
    const transliteratedText = transliterateText(inputText);
    document.getElementById('outputText').value = transliteratedText;
}
function toTransliterateISO() {
    const inputText = document.getElementById('inputText').value;
    const transliteratedText = transliterateISO(inputText);
    document.getElementById('outputText').value = transliteratedText;
}
function transliterateGerman() {
    const inputText = document.getElementById('inputText').value;
    const transliteratedText = transliterateGermanToUkrainian(inputText);
    document.getElementById('outputText').value = transliteratedText;
}

function transliteratePolish() {
    const inputText = document.getElementById('inputText').value;
    const transliteratedText = transliteratePolishToUkrainian(inputText);
    document.getElementById('outputText').value = transliteratedText;
}

function encodeNato() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    const natoCode = textToNato(inputText);
    document.getElementById('outputText').value = natoCode;
}

function ToUpperCase() {
    const outputText = document.getElementById('outputText').value;
    document.getElementById('outputText').value = convertUpperCase(outputText);
}
function ToLowerCase() {
    const outputText = document.getElementById('outputText').value;
    document.getElementById('outputText').value = convertLowerCase(outputText);
}
function toCapitalizeFirstLetter() {
    const outputText = document.getElementById('outputText').value;
    document.getElementById('outputText').value = capitalizeFirstLetter(outputText);
}
function toCapitalizeFirstLetterOfSentence() {
    const outputText = document.getElementById('outputText').value;
    document.getElementById('outputText').value = capitalizeFirstLetterOfSentence(outputText);
}

function ToUpperLowerCase() {
    const outputText = document.getElementById('outputText').value;
    document.getElementById('outputText').value = convertUpperLowerCase(outputText);
}
////////////////////////////////////////////////////////////////


//Функція зміни регістру кожної першої букви в слові
function capitalizeFirstLetter(text) {
    return text.replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
}

//Функція зміни регістру кожної першої букви в речені
function capitalizeFirstLetterOfSentence(text) {
    if (text.length === 0) {
        return "";
    }
    var sentences = text.split('. ');
    for (var i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
    }
    return sentences.join('. ');
}



//Функція зміни регістру в великий
function convertUpperCase(text) {
    return text.toUpperCase();
}


//Функція зміни регістру в малий
function convertLowerCase(text) {
    return text.toLowerCase();
}


//Функція зміни регістру в Alternating Case
function convertUpperLowerCase(text) {
    var result = "";

    for (var i = 0; i < text.length; i++) {
        if (i % 2 === 0) {
            result += text[i].toUpperCase();
        } else {
            result += text[i].toLowerCase();
        }
    }

    return result;
}


//Функція очистки HTML коду 
function ToclearHtmlTags() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    const clearHtml = clearHtmlTags(inputText);
    document.getElementById('outputText').value = clearHtml;
}
function clearHtmlTags(text) {
    return text.replace(/<[^>]+>/g, '');
}


// Функція Морзе
function textToMorse(text) {
    const morseCodeMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
        ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
    };

    text = text.toUpperCase();
    let morseCode = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === ' ') {
            morseCode += '   ';  // Вставляємо три пробіли між словами
        } else if (morseCodeMap[char]) {
            morseCode += morseCodeMap[char] + ' ';
        } else {
            morseCode += char;  // Залишаємо символи, які не входять до азбуки Морзе, незмінними
        }
    }

    return morseCode.trim();
}


// Функція для транслітерації з української в англійську
function transliterateText(text) {
    const transliterationMap = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ie', 'ж': 'zh', 'з': 'z',
        'и': 'i', 'і': 'i', 'ї': 'i', 'й': 'i', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p',
        'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
        'ю': 'iu', 'я': 'ia', 'зг': 'zgh',
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Ґ': 'G', 'Д': 'D', 'Е': 'E', 'Є': 'Ye', 'Ж': 'Zh', 'З': 'Z',
        'И': 'I', 'І': 'I', 'Ї': 'I', 'Й': 'I', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P',
        'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch',
        'Ь': '', 'Ю': 'Iu', 'Я': 'Ia'
    };

    let transliteratedText = '';
    let capitalizeNext = true;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === '’') {
            continue;
        }
        if (char === 'ь') {
            continue;
        }
        if (i < text.length - 1 && char === 'з' && text[i + 1] === 'г') {
            transliteratedText += transliterationMap['зг'];
            i++;
        } else if (transliterationMap[char]) {
            if (capitalizeNext) {
                switch (char) {
                    case 'я':
                        transliteratedText += 'ya';
                        break;
                    case 'є':
                        transliteratedText += 'ye';
                        break;
                    case 'ї':
                        transliteratedText += 'yi';
                        break;
                    case 'й':
                        transliteratedText += 'Y';
                        break;
                    case 'ю':
                        transliteratedText += 'yu';
                        break;
                    default:
                        transliteratedText += transliterationMap[char];
                        break;
                }
                capitalizeNext = false;
            } else {
                transliteratedText += transliterationMap[char];
            }
        } else {
            transliteratedText += char;
            capitalizeNext = char === ' ';
        }
    }

    return transliteratedText;
}


// Функція для транслітерації
function transliterateISO(text) {
    const transliterationMap = {
        'А': 'A', 'а': 'a',
        'Б': 'B', 'б': 'b',
        'В': 'V', 'в': 'v',
        'Г': 'G', 'г': 'g',
        'Ѓ': 'Ǵ', 'ѓ': 'ǵ',
        'Ґ': 'G̀', 'ґ': 'g̀',
        'Д': 'D', 'д': 'd',
        'Е': 'E', 'е': 'e',
        'Ё': 'IO', 'ё': 'io',
        'Є': 'Ê', 'є': 'ê',
        'Ж': 'Ž', 'ж': 'ž',
        'З': 'Z', 'з': 'z',
        'Ѕ': 'Ẑ', 'ѕ': 'ẑ',
        'И': 'I', 'и': 'i',
        'Й': 'J', 'й': 'j',
        'Ј': 'J̌', 'ј': 'ǰ',
        'І': 'Ì', 'і': 'ì',
        'Ї': 'Ï', 'ї': 'ï',
        'К': 'K', 'к': 'k',
        'Ќ': 'Ḱ', 'ќ': 'ḱ',
        'Л': 'L', 'л': 'l',
        'Љ': 'L̂', 'љ': 'l̂',
        'М': 'M', 'м': 'm',
        'Н': 'N', 'н': 'n',
        'Њ': 'N̂', 'њ': 'n̂',
        'О': 'O', 'о': 'o',
        'П': 'P', 'п': 'p',
        'Р': 'R', 'р': 'r',
        'С': 'S', 'с': 's',
        'Т': 'T', 'т': 't',
        'У': 'U', 'у': 'u',
        'Ў': 'Ǔ', 'ў': 'ǔ',
        'Ф': 'F', 'ф': 'f',
        'Х': 'H', 'х': 'h',
        'Ц': 'C', 'ц': 'c',
        'Ч': 'Č', 'ч': 'č',
        'Џ': 'D̂', 'џ': 'd̂',
        'Ш': 'Š', 'ш': 'š',
        'Щ': 'Ŝ', 'щ': 'ŝ',
        'Ъ': 'ʺ', 'ъ': 'ʺ',
        'Ы': 'Y', 'ы': 'y',
        'Ь': 'ʹ', 'ь': 'ʹ',
        'Э': 'È', 'э': 'è',
        'Ю': 'Û', 'ю': 'û',
        'Я': 'Â', 'я': 'â',
        'ʼ': 'ʼ',
        'Ѣ': 'Ě', 'ѣ': 'ě',
        'Ѫ': 'Ǎ', 'ѫ': 'ǎ',
        'Ѳ': 'F̀', 'ѳ': 'f̀',
        'Ѵ': 'Ỳ', 'ѵ': 'ỳ'
    };

    let result = '';
    let i = 0;

    while (i < text.length) {
        let currentChar = text[i];
        let nextChar = text.slice(i, i + 2);

        if (transliterationMap[nextChar]) {
            result += transliterationMap[nextChar];
            i += 2;
        } else if (transliterationMap[currentChar]) {
            result += transliterationMap[currentChar];
            i += 1;
        } else {
            result += currentChar;
            i += 1;
        }
    }

    return result;
}


// Функція для транслітерації польського тексту в уу
function transliteratePolishToUkrainian(text) {
    const transliterationMap = {
        'a': 'а', 'ą': 'он',
        'b': 'б', 'c': 'ц', 'ch': 'х', 'cz': 'ч', 'ć': 'ць',
        'd': 'д', 'dz': 'дз', 'dź': 'дзь', 'dż': 'дж',
        'e': 'е', 'ę': 'ен',
        'f': 'ф',
        'g': 'г', 'ґ': 'ґ', 'h': 'г',
        'i': 'і', 'ia': 'я', 'ią': 'ьон', 'ie': 'е', 'ię': 'єн', 'io': 'йо', 'ió': 'ю', 'iu': 'ю',
        'j': 'й', 'ja': 'я', 'ją': 'йон', 'je': 'є', 'ję': 'єн', 'jo': 'йо', 'jó': 'ю', 'ju': 'ю',
        'k': 'к',
        'l': 'л', 'ł': 'л',
        'm': 'м', 'n': 'н', 'ń': 'нь',
        'o': 'о', 'ó': 'у',
        'p': 'п',
        'r': 'р', 'rz': 'ж',
        's': 'с', 'sz': 'ш', 'szcz': 'щ', 'ś': 'сь',
        't': 'т',
        'u': 'у',
        'w': 'в',
        'y': 'и',
        'z': 'з', 'ź': 'Зь', 'ż': 'ж',
        'A': 'А', 'Ą': 'Он',
        'B': 'Б', 'C': 'Ц', 'Ch': 'Х', 'Cz': 'Ч', 'Ć': 'Ць',
        'D': 'Д', 'Dz': 'Дз', 'Dź': 'Дзь', 'Dż': 'Дж',
        'E': 'Е', 'Ę': 'Ен',
        'F': 'Ф',
        'G': 'Г', 'Ґ': 'Ґ', 'H': 'Г',
        'I': 'І', 'Ia': 'Я', 'Ią': 'Йон', 'Ie': 'Е', 'Ię': 'Єн', 'Io': 'Йо', 'Ió': 'Ю', 'Iu': 'Ю',
        'J': 'Й', 'Ja': 'Я', 'Ją': 'Йон', 'Je': 'Є', 'Ję': 'Єн', 'Jo': 'Йо', 'Jó': 'Ю', 'Ju': 'Ю',
        'K': 'К',
        'L': 'Л', 'Ł': 'Л',
        'M': 'М', 'N': 'Н', 'Ń': 'Нь',
        'O': 'О', 'Ó': 'У',
        'P': 'П',
        'R': 'Р', 'Rz': 'Ж',
        'S': 'С', 'Sz': 'Ш', 'Szcz': 'Щ', 'Ś': 'Сь',
        'T': 'Т',
        'U': 'У',
        'W': 'В',
        'Y': 'И',
        'Z': 'З', 'Ź': 'Зь', 'Ż': 'Ж'
    };

    let result = '';
    let i = 0;

    while (i < text.length) {
        let currentChar = text[i];
        let nextChar = text.slice(i, i + 2);

        if (transliterationMap[nextChar]) {
            result += transliterationMap[nextChar];
            i += 2;
        } else if (transliterationMap[currentChar]) {
            result += transliterationMap[currentChar];
            i += 1;
        } else {
            result += currentChar;
            i += 1;
        }
    }

    return result;
}



// Функція для перетворення тексту в шифр НАТО
function textToNato(text) {
    const natoAlphabet = {
        'A': 'Alpha', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo', 'F': 'Foxtrot', 'G': 'Golf',
        'H': 'Hotel', 'I': 'India', 'J': 'Juliett', 'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November',
        'O': 'Oscar', 'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango', 'U': 'Uniform',
        'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray', 'Y': 'Yankee', 'Z': 'Zulu',
        '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four', '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine',
        '.': 'Decimal Point', ',': 'Comma', '?': 'Question Mark', "'": 'Apostrophe', '!': 'Exclamation Mark', '/': 'Slash', '(': 'Left Parenthesis',
        ')': 'Right Parenthesis', '&': 'Ampersand', ':': 'Colon', ';': 'Semicolon', '=': 'Equals Sign', '+': 'Plus Sign', '-': 'Hyphen', '_': 'Underscore',
        '"': 'Double Quote', '$': 'Dollar Sign', '@': 'At Sign'
    };

    text = text.toUpperCase();
    let natoCode = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === ' ') {
            natoCode += ' ';  // Пробіл залишається незмінним
        } else if (natoAlphabet[char]) {
            natoCode += natoAlphabet[char] + ' ';
        } else {
            natoCode += char;  // Залишаємо символи, які не входять до шифру НАТО, незмінними
        }
    }

    return natoCode.trim();
}
