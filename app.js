document.addEventListener('keydown', function (event) {
  if (
    (event.metaKey && event.keyCode === 13) ||
    (event.ctrlKey && event.keyCode === 13)
  ) {
    document.getElementById('form').onsubmit();
  }
});

document.getElementById('form').onsubmit = function () {
  const textData = document
    .getElementById('worktext')
    .value.split('\n')
    .join('*');

  document.getElementById('worktext').value = '';
  var elem = document.querySelector('.encrypted-text');
  if (elem) {
    elem.parentNode.removeChild(elem);
  }

  let finalRes = '';

  for (var i = 0; i < textData.length; i++) {
    const char = textData.charAt(i);
    const prevChar = textData.charAt(i - 1);

    charCheckAndWrite = (c1, c2) => {
      if (prevChar === ' ' || prevChar === '*' || i == 0) {
        finalRes = finalRes.concat(c1);
      } else {
        finalRes = finalRes.concat(c2);
      }
    };

    switch (char) {
      case 'а':
      case 'А':
        charCheckAndWrite('1', '.1');
        break;
      case 'я':
      case 'Я':
        charCheckAndWrite('-1', ':1');
        break;

      case 'б':
      case 'Б':
        charCheckAndWrite('2', '.2');
        break;
      case 'ю':
      case 'Ю':
        charCheckAndWrite('-2', ':2');
        break;

      case 'в':
      case 'В':
        charCheckAndWrite('3', '.3');
        break;
      case 'э':
      case 'Э':
        charCheckAndWrite('-3', ':3');
        break;

      case 'г':
      case 'Г':
        charCheckAndWrite('4', '.4');
        break;
      case 'ь':
      case 'Ь':
        charCheckAndWrite('-4', ':4');
        break;

      case 'д':
      case 'Д':
        charCheckAndWrite('5', '.5');
        break;
      case 'ы':
      case 'Ы':
        charCheckAndWrite('-5', ':5');
        break;

      case 'е':
      case 'Е':
        charCheckAndWrite('6', '.6');
        break;
      case 'ъ':
      case 'Ъ':
        charCheckAndWrite('-6', ':6');
        break;

      case 'ё':
      case 'Ё':
        charCheckAndWrite('7', '.7');
        break;
      case 'щ':
      case 'Щ':
        charCheckAndWrite('-7', ':7');
        break;

      case 'ж':
      case 'Ж':
        charCheckAndWrite('8', '.8');
        break;
      case 'ш':
      case 'Ш':
        charCheckAndWrite('-8', ':8');
        break;

      case 'з':
      case 'З':
        charCheckAndWrite('9', '.9');
        break;
      case 'ч':
      case 'Ч':
        charCheckAndWrite('-9', ':9');
        break;

      case 'и':
      case 'И':
        charCheckAndWrite('10', '.10');
        break;
      case 'ц':
      case 'Ц':
        charCheckAndWrite('-10', ':10');
        break;

      case 'й':
      case 'Й':
        charCheckAndWrite('11', '.11');
        break;
      case 'х':
      case 'Х':
        charCheckAndWrite('-11', ':11');
        break;

      case 'к':
      case 'К':
        charCheckAndWrite('12', '.12');
        break;
      case 'ф':
      case 'Ф':
        charCheckAndWrite('-12', ':12');
        break;

      case 'л':
      case 'Л':
        charCheckAndWrite('13', '.13');
        break;
      case 'у':
      case 'У':
        charCheckAndWrite('-13', ':13');
        break;

      case 'м':
      case 'М':
        charCheckAndWrite('14', '.14');
        break;
      case 'т':
      case 'Т':
        charCheckAndWrite('-14', ':14');
        break;

      case 'н':
      case 'Н':
        charCheckAndWrite('15', '.15');
        break;
      case 'с':
      case 'С':
        charCheckAndWrite('-15', ':15');
        break;

      case 'о':
      case 'О':
        charCheckAndWrite('16', '.16');
        break;
      case 'р':
      case 'Р':
        charCheckAndWrite('-16', ':16');
        break;

      case 'п':
      case 'П':
        charCheckAndWrite('17', '.17');
        break;

      case ' ':
        finalRes = finalRes.concat(' / ');
        break;

      case '*':
        finalRes = finalRes.concat('<br />');
        break;

      default:
        finalRes = finalRes.concat(char);
        break;
    }
  }

  var newDiv = document.createElement('div');
  newDiv.className = 'encrypted-text';
  newDiv.innerHTML = `<p>${finalRes}</p>`;
  document.body.appendChild(newDiv);

  return false;
};
