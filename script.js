function calculate() {
    // Получаем значения из input
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Проверка на пустые поля
    if (isNaN(num1) || isNaN(num2)) {
        alert("Пожалуйста, введите оба числа.");
        return;
    }

    // Сложение чисел
    const result = num1 + num2;

    // Отображение результата
    document.getElementById('result').textContent = result;
}
