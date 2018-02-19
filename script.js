$(document).on('click', '.rg_ic.rg_i', function(event) {
  handleClick(event);
});

function handleClick(event) {
  const img = event.target;
  const container = img.closest('div');
  let meta = $(container).find('.notranslate')[0].innerHTML;
  meta = JSON.parse(meta);
  const url = meta.ou;
  insertButton(url);
}

function insertButton(url) {
  const section = $('#irc_cc');
  const layers = section[0].children;

  let layer;
  for (let i=0; i<layers.length; i++) {
    if (layers[i].style.transform === "translate3d(0px, 0px, 0px)") {
      layer = layers[i];
    }
  }

  const table = $(layer).find('table.irc_but_r')[0];
  const tr = $(table).find('tr');
  $('.view-image-td').remove();
  tr.prepend(renderButton(url));
}

function renderButton(url) {
  return $(`
    <td class="view-image-td">
      <a
        class="view-image-button"
        href="` + url + `"
        target="_blank"
      >
        <span>` + chrome.i18n.getMessage("buttonText") + `</span>
      </a>
    </td>
  `);
}
