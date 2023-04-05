// http://kodesource.top/javascript-exercises/javascript-string-exercises.php

// String

// 1. Напишите функцию JavaScript, чтобы проверить, является ли `input` строкой или нет. Перейти к редактору
// Тестовые данные :
// console.log (is_string ( 'w3resource'));
// правда
// console.log (is_string ([1, 2, 4, 0]));
// ложный
// Нажмите меня, чтобы увидеть решение

// 2. Напишите функцию JavaScript, чтобы проверить, является ли строка пустой или нет. Перейти к редактору
// Тестовые данные :
// console.log (is_Blank ( ''));
// console.log (is_Blank ( 'ABC'));
// правда
// ложный
// Нажмите меня, чтобы увидеть решение

// 3. Напишите функцию JavaScript, чтобы разбить строку и преобразовать ее в массив слов. Перейти к редактору
// Тестовые данные :
// console.log (string_to_array ("Робин Сингх"));
// ["Робин", "Сингх"]
// Нажмите меня, чтобы увидеть решение

// 4. Напишите функцию JavaScript для извлечения указанного числа символов из строки. Перейти к редактору
// Тестовые данные :
// console.log (truncate_string ("Робин Сингх", 4));
// «Роби»
// Нажмите меня, чтобы увидеть решение .

// 5. Напишите функцию JavaScript для преобразования строки в сокращенную форму. Перейти к редактору
// Тестовые данные :
// console.log (abbrev_name ("Робин Сингх"));
// "Робин С."
// Нажмите меня, чтобы увидеть решение .

// 6. Напишите функцию JavaScript, чтобы скрыть адреса электронной почты для защиты от неавторизованного пользователя. Перейти к редактору
// Тестовые данные :
// console.log (protect_email (" robin_singh@example.com "));
// " robin...@example.com "
// Нажмите меня, чтобы увидеть решение .

// 7. Напишите функцию JavaScript для параметризации строки. Перейти к редактору
// Тестовые данные :
// console.log (string_parameterize («Робин Сингх из США.»));
// «Малиновка-Синг-из-США»
// Нажмите меня, чтобы увидеть решение .

// 8. Напишите функцию JavaScript, чтобы использовать заглавные буквы первой строки. Перейти к редактору
// Тестовые данные :
// console.log (capitalize ('js string упражнения'));
// «Струнные упражнения»
// Нажмите меня, чтобы увидеть решение .

// 9. Напишите функцию JavaScript, чтобы заглавные буквы первой буквы каждого слова в строке. Перейти к редактору
// Тестовые данные :
// console.log (capitalize_Words ('js string упражнения'));
// "Js String Exercises"
// Нажмите меня, чтобы увидеть решение .

// 10. Напишите функцию JavaScript, которая принимает строку, в которой в качестве параметра используются строчные и прописные буквы, и преобразует строчные буквы в строчные, а строчные - в прописные. Перейти к редактору
// Тестовые данные :
// console.log (swapcase ( 'AaBbc'));
// "AAbBC"
// Нажмите меня, чтобы увидеть решение .

// 11. Напишите функцию JavaScript для преобразования строки в случай верблюда. Перейти к редактору
// Тестовые данные :
// console.log (camelize ("Упражнения по JavaScript"));
// console.log (camelize ("упражнения JavaScript"));
// console.log (camelize ( "JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"
// Нажмите меня, чтобы увидеть решение .

// 12. Напишите функцию JavaScript для отмены кодирования строки. Перейти к редактору
// Тестовые данные :
// console.log (uncamelize ( 'HelloWorld'));
// console.log (uncamelize ( 'HelloWorld', '-'));
// console.log (uncamelize ( 'HelloWorld', '_'));
// "Привет, мир"
// "Привет, мир"
// "Привет, мир"
// Нажмите меня, чтобы увидеть решение .

// 13. Напишите функцию JavaScript для объединения данной строки n раз (по умолчанию 1). Перейти к редактору
// Тестовые данные :
// console.log (повтор ( 'Ха!'));
// console.log (повтор ( 'Ха!', 2));
// console.log (повтор ( 'Ха!', 3));
// «Ха!»
// «Ха! Ха!»
// «Ха! Ха! Ха!»
// Нажмите меня, чтобы увидеть решение .

// 14. Напишите функцию JavaScript для вставки строки в строку в определенной позиции (по умолчанию 1). Перейти к редактору
// Тестовые данные :
// console.log (insert ('Мы делаем несколько упражнений.'));
// console.log (insert ('Мы делаем несколько упражнений.', 'JavaScript'));
// console.log (insert («Мы делаем некоторые упражнения.», «JavaScript», 18));
// «Мы делаем некоторые упражнения».
// «JavaScript Мы делаем некоторые упражнения».
// «Мы делаем некоторые упражнения JavaScript».
// Нажмите меня, чтобы увидеть решение .

// 15. Напишите функцию JavaScript для гуманизированного числа (форматирует число в удобочитаемую строку.) С правильным суффиксом, таким как 1-й, 2-й, 3-й или 4-й. Перейти к редактору
// Тестовые данные :
// console.log (humanize_format ());
// console.log (humanize_format (1));
// console.log (humanize_format (8));
// console.log (humanize_format (301));
// console.log (humanize_format (402));
// «Первый»
// «Восьмой»
// «Триста первый»
// «Четыреста второй»
// Нажмите меня, чтобы увидеть решение .

// 16. Напишите функцию JavaScript для усечения строки, если она длиннее указанного количества символов. Усеченные строки заканчиваются переводимой последовательностью многоточия («…») (по умолчанию) или указанными символами. Перейти к редактору
// Тестовые данные :
// console.log (text_truncate («Мы выполняем строковые упражнения JS.»))
// console.log (text_truncate («Мы выполняем строковые упражнения JS.», 19))
// console.log (text_truncate («Мы выполняем строковые упражнения JS.», 15, «!!»))
// «Мы выполняем упражнения на струнах JS».
// «Мы делаем JS ...»
// "Мы делаем !!"
// Нажмите меня, чтобы увидеть решение .

// 17. Напишите функцию JavaScript, чтобы разрезать строку на куски заданной длины. Перейти к редактору
// Тестовые данные :
// console.log (string_chop ( 'w3resource'));
// console.log (string_chop ( 'w3resource', 2));
// console.log (string_chop ( 'w3resource', 3));
// [ "W3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]
// Нажмите меня, чтобы увидеть решение .

// 18. Напишите функцию JavaScript для подсчета вхождения подстроки в строку. Перейти к редактору
// Тестовые данные :
// console.log (count («Быстрая коричневая лиса перепрыгивает через ленивую собаку», «the»));
// Выход :
// 2
// console.log (count («Быстрая коричневая лиса перепрыгивает через ленивую собаку», «fox», false));
// Выход :
// 1
// Нажмите меня, чтобы увидеть решение .

// 19. Напишите функцию JavaScript для экранирования строки HTML. Перейти к редактору
// Тестовые данные :
// console.log (escape_HTML ('<a href="javascript-string-exercise-17.php" target="_blank">'));
// Выход :
// "& lt; a href =" javascript-string-упражнение-17.php "target =" _blank "& gt;"
// Нажмите меня, чтобы увидеть решение .

// 20. Напишите функцию JavaScript, которая может дополнить (влево, вправо) строку, чтобы получить определенную длину. Перейти к редактору
// Тестовые данные :
// console.log (formatted_string ( '0000', 123 'л'));
// console.log (formatted_string ( '00000000', 123 ''));
// Выход :
// "0123"
// "12300000"
// Нажмите меня, чтобы увидеть решение .

// 21. Напишите функцию JavaScript для повторения строки указанное время. Перейти к редактору
// Тестовые данные :
// console.log (repeat_string ('a', 4));
// console.log (repeat_string ( 'а'));
// Выход :
// «Аааа»
// "Ошибка в строке или числе."
// Нажмите меня, чтобы увидеть решение .

// 22. Напишите функцию JavaScript, чтобы получить часть строки после указанного символа. Перейти к редактору
// Тестовые данные :
// console.log (subStrAfterChars ('w3resource: JavaScript Exercises', ':', 'a'));
// console.log (subStrAfterChars ('w3resource: JavaScript Exercises', 'E', 'b'));
// Выход :
// "W3resource"
// "xercises"
// Нажмите меня, чтобы увидеть решение .

// 23. Напишите функцию JavaScript для удаления начальных и конечных пробелов из строки. Перейти к редактору
// Тестовые данные :
// console.log (strip ('w3resource'));
// console.log (strip ('w3resource'));
// console.log (strip ('w3resource'));
// Выход :
// "W3resource"
// "W3resource"
// "W3resource"
// Нажмите меня, чтобы увидеть решение .

// 24. Напишите функцию JavaScript для усечения строки до определенного количества слов. Перейти к редактору
// Тестовые данные :
// console.log (truncate («Быстрая коричневая лиса перепрыгивает через ленивую собаку», 4));
// Выход :
// "Быстрая коричневая лиса"
// Нажмите меня, чтобы увидеть решение .

// 25. Напишите функцию JavaScript для алфавитного размещения заданной строки. Перейти к редактору
// Строка алфавита: отдельная строка может быть в алфавитном порядке. Это переставляет буквы так, что они сортируются от А до Я.
// Тестовые данные :
// console.log (alphabetize_string ('Соединенные Штаты'));
// Выход :
// "SUadeeinsttt"
// Нажмите меня, чтобы увидеть решение .

// 26. Напишите функцию JavaScript, чтобы удалить первое вхождение данной «строки поиска» из строки. Перейти к редактору
// Тестовые данные :
// console.log (remove_first_occurrence («Быстрая коричневая лиса перепрыгивает через ленивую собаку», «the»));
// Выход :
// «Быстрая коричневая лиса перепрыгивает через ленивую собаку»
// Нажмите меня, чтобы увидеть решение .

// 27. Напишите функцию JavaScript для преобразования ASCII в шестнадцатеричный формат. Перейти к редактору
// Тестовые данные :
// console.log (ascii_to_hexa ('12' ));
// console.log (ascii_to_hexa ( '100'));
// Выход :
// "3132"
// "313030"
// Нажмите меня, чтобы увидеть решение .

// 28. Напишите функцию JavaScript для преобразования шестнадцатеричного в формат ASCII. Перейти к редактору
// Тестовые данные :
// console.log (hex_to_ascii ( '3132'));
// console.log (hex_to_ascii ( '313030'));
// Выход :
// "12"
// "100"
// Нажмите меня, чтобы увидеть решение .

// 29. Напишите функцию JavaScript, чтобы найти слово в строке. Перейти к редактору
// Тестовые данные :
// console.log (search_word ('Быстрая коричневая лиса', 'лиса'));
// console.log (search_word ('aa, bb, cc, dd, aa', 'aa'));
// Выход :
// «Лиса была найдена 1 раз».
// «АА был найден 2 раза».
// Нажмите меня, чтобы увидеть решение .

// 30. Напишите функцию проверки JavaScript, если строка заканчивается указанным суффиксом. Перейти к редактору
// Тестовые данные :
// console.log (string_endsWith ('JS PHP PYTHON', 'PYTHON'));
// правда
// console.log (string_endsWith ('JS PHP PYTHON', ''));
// ложный
// Нажмите меня, чтобы увидеть решение .

// 31. Напишите функцию JavaScript для экранирования специальных символов (&, <,>, ', ") для использования в HTML. Перейти к редактору
// Тестовые данные :
// console.log (escape_html ('PHP & MySQL'));
// "PHP & MySQL"
// console.log (escape_html ('3> 2'));
// "3 & gt; 2"
// Нажмите меня, чтобы увидеть решение .

// 32. Написать функцию JavaScript для удаления? непечатные символы ASCII . Перейти к редактору
// Тестовые данные :
// console.log (remove_non_ascii ( '??????? PHP-MySQL ??????'));
// "PHP-MySQL"
// Нажмите меня, чтобы увидеть решение .

// 33. Напишите функцию JavaScript для удаления несловесных символов. Перейти к редактору
// Тестовые данные :
// console.log (remove_non_word ('PHP ~!@ # $% ^ & * () + `- = {} [] | \:";' /?> <., MySQL '));
// "PHP - MySQL"
// Нажмите меня, чтобы увидеть решение .

// 34. Напишите функцию JavaScript для преобразования строки в регистр заголовков. Перейти к редактору
// Тестовые данные :
// console.log (terminceCase («PHP упражнения. Python упражнения.»));
// "Php упражнения. Python упражнения."
// Нажмите меня, чтобы увидеть решение .

// 35. Напишите функцию JavaScript для удаления тегов HTML / XML из строки. Перейти к редактору
// Тестовые данные :
// console.log (strip_html_tags ('<p> <strong> <em> PHP-упражнения </ em> </ strong> </ p>'));
// "PHP Упражнения"
// Нажмите меня, чтобы увидеть решение .

// 36. Напишите функцию JavaScript для создания значения с нулевым заполнением с необязательным знаком +, -. Перейти к редактору
// Тестовые данные :
// console.log (zeroFill (120, 5, '-'));
// "+00120"
// console.log (zeroFill (29, 4));
// "0029"
// Нажмите меня, чтобы увидеть решение .

// 37. Напишите функцию JavaScript для проверки нечувствительного к регистру (кроме специальных символов Юникода) сравнения строк. Перейти к редактору
// Тестовые данные :
// console.log (compare_strings ('abcd', 'AbcD'));
// правда
// console.log (Compare_strings ('ABCD', 'Abce'));
// ложный
// Нажмите меня, чтобы увидеть решение .

// 38. Напишите функцию JavaScript для создания поиска без учета регистра. Перейти к редактору
// Тестовые данные :
// console.log (case_insensitive_search («Упражнения JavaScript», «упражнения»));
// «Совпадение»
// console.log (case_insensitive_search («Упражнения JavaScript», «Упражнения»));
// «Совпадение»
// console.log (case_insensitive_search («Упражнения JavaScript», «Упражнения»));
// "Не соответствует"
// Нажмите меня, чтобы увидеть решение .

// 39. Написать функцию JavaScript в Uncapitalize? первый символ строки. Перейти к редактору
// Тестовые данные :
// console.log (Uncapitalize ('Строковые упражнения Js'));
// "JS струнные упражнения"
// Нажмите меня, чтобы увидеть решение .

// 40. Напишите функцию JavaScript, чтобы некапитализировать первую букву каждого слова строки. Перейти к редактору
// Тестовые данные :
// console.log (unCapitalize_Words ('Упражнения Js String'));
// "JS струнные упражнения"
// Нажмите меня, чтобы увидеть решение .

// 41. Напишите функцию JavaScript, чтобы заглавные буквы каждого слова в строке. Перейти к редактору
// Тестовые данные :
// console.log (capitalizeWords ('js string упражнения'));
// "JS STRING EXERCISES"
// Нажмите меня, чтобы увидеть решение .

// 42. Напишите функцию JavaScript, чтобы некапитализировать каждое слово в строке. Перейти к редактору
// Тестовые данные :
// console.log (unCapitalizeWords ('JS STRING EXERCISES'));
// "JS струнные упражнения"
// Нажмите меня, чтобы увидеть решение .

// 43. Напишите функцию JavaScript, чтобы проверить, является ли символ в указанном (символьном) индексе прописным. Перейти к редактору
// Тестовые данные :
// console.log (isUpperCaseAt ('Js STRING EXERCISES', 1));
// ложный
// Нажмите меня, чтобы увидеть решение .

// 44. Напишите функцию JavaScript, чтобы проверить, является ли символ в указанном (символьном) индексе строчным. Перейти к редактору
// Тестовые данные :
// console.log (isLowerCaseAt ('Js STRING EXERCISES', 1));
// правда
// Нажмите меня, чтобы увидеть решение .

// 45. Напишите функцию JavaScript для получения гуманизированного числа с правильным суффиксом, таким как 1-й, 2-й, 3-й или 4-й. Перейти к редактору
// Тестовые данные :
// console.log (гуманизировать (1));
// console.log (гуманизировать (20));
// console.log (гуманизировать (302));
// «Первый»
// «Двадцатый»
// «Триста второй»
// Нажмите меня, чтобы увидеть решение .

// 46. Напишите функцию JavaScript, чтобы проверить, начинается ли строка с указанной строки. Перейти к редактору
// Тестовые данные :
// console.log (startWith ('js string упражнения', 'js'));
// правда
// Нажмите меня, чтобы увидеть решение .

// 47. Напишите функцию JavaScript, чтобы проверить, заканчивается ли строка указанной строкой. Перейти к редактору
// Тестовые данные :
// console.log (окончание («Строковые упражнения JS», «упражнения»));
// правда
// Нажмите меня, чтобы увидеть решение .

// 48. Напишите функцию JavaScript, чтобы получить преемник строки. Перейти к редактору

// Примечание. Преемник вычисляется путем приращения символов, начиная с крайнего правого буквенно-цифрового (или крайнего правого символа, если буквенно-цифровые символы отсутствуют) в строке. Увеличение цифры всегда приводит к другой цифре, а увеличение буквы - к другой букве того же регистра. Если приращение генерирует перенос, символ слева от него увеличивается. Этот процесс повторяется до тех пор, пока нет переноса, добавляя дополнительный символ при необходимости.
// Пример :
// string.successor ("abcd") == "abce"
// string.successor ("THX1138") == "THX1139"
// string.successor ( "< > ") ==" < >»
// string.successor ("1999zzz") == "2000aaa"
// string.successor ("ZZZ9999") == "AAAA0000"

// Тестовые данные :
// console.log (преемник ( 'ABCD'));
// console.log (преемник ( '3456'));
// "ABCE"
// "3457"
// Нажмите меня, чтобы увидеть решение .

// 49. Напишите функцию JavaScript для получения уникального guid (сокращение от «Globally Unique Identifier?») Указанной длины или 32 по умолчанию. Перейти к редактору
// Тестовые данные :
// console.log (GUID ());
// console.log (GUID (15));
// "HRYilcoV7ajokxsYFl1dba41AyE0rUQR"
// "B7pwBqrZwqaDrex"