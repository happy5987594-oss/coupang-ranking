(function () {
  var data = window.RANKING || {};
  var items = Array.isArray(data.items) ? data.items : [];
  var list = document.getElementById('rank-list');
  var empty = document.getElementById('empty');
  var asOf = document.getElementById('as-of');

  if (data['기준일']) {
    asOf.textContent = data['기준일'] + ' 쿠팡 기준';
  }

  if (items.length === 0) {
    list.hidden = true;
    empty.hidden = false;
    return;
  }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function safeUrl(url) {
    try {
      var u = new URL(url);
      return u.protocol === 'https:' || u.protocol === 'http:' ? u.href : null;
    } catch (e) {
      return null;
    }
  }

  items.forEach(function (item, i) {
    var li = el('li', 'rank-item' + (i < 3 ? ' is-top' : ''));
    li.appendChild(el('span', 'rank-no', String(i + 1)));

    var body = el('div', 'rank-body');
    body.appendChild(el('h3', 'rank-name', item.name || '상품 이름 준비 중'));

    var price = el('p', 'rank-price');
    price.textContent = typeof item.price === 'number'
      ? item.price.toLocaleString('ko-KR') + '원'
      : '가격은 쿠팡에서 확인';
    body.appendChild(price);

    var facts = el('dl', 'rank-facts');
    function fact(label, value) {
      var row = el('div');
      row.appendChild(el('dt', null, label));
      row.appendChild(el('dd', null, value));
      facts.appendChild(row);
    }
    if (typeof item.rating === 'number') {
      var r = item.rating.toFixed(1);
      if (typeof item.reviews === 'number') r += ' (리뷰 ' + item.reviews.toLocaleString('ko-KR') + '개)';
      fact('평점', r);
    }
    fact('배송 예정', item.shipping || '쿠팡에서 확인');
    body.appendChild(facts);
    li.appendChild(body);

    var href = safeUrl(item.url);
    if (href) {
      var a = el('a', 'btn btn-go', '쿠팡에서 보기');
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer nofollow';
      a.setAttribute('aria-label', (i + 1) + '위 ' + (item.name || '상품') + ' 쿠팡에서 보기 (새 창)');
      li.appendChild(a);
    }

    list.appendChild(li);
  });
})();
