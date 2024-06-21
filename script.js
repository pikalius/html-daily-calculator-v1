function calculateTotal() {
  const com = parseFloat(document.querySelector('.js-com').value) || 0;
  const cash = parseFloat(document.querySelector('.js-cash').value) || 0;
  const pay = parseFloat(document.querySelector('.js-pay').value) || 0;
  const transfer = parseFloat(document.querySelector('.js-transfer').value) || 0;
  const keep = parseFloat(document.querySelector('.js-keep').value) || 0;

  const total = cash + pay + transfer + keep - 3000;

  document.getElementById('total').textContent = total;

  const messageElement = document.getElementById('message');

  if (total < com) {
    messageElement.textContent = `เงินขาด ${com - total}`;
  } else if (total === com) {
    messageElement.textContent = `ดีใจด้วยจั๊ฟเงินไม่ขาด`;
  } else if (total > com) {
    messageElement.textContent = `เงินเกิน ${-(com - total)}`;
  }
}
