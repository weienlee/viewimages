document.addEventListener('click', handleClick);

function handleClick(event) {
  const img = event.target.closest('.rg_ic.rg_i');
  if (!img) {
    return;
  }
  const json = img.closest('div').querySelector('.notranslate').innerHTML;
  const meta = JSON.parse(json);
  const url = meta.ou;
  insertButton(url);
}

function insertButton(url) {
  const section = document.querySelector('#irc_cc');
  const layer = section.querySelector('[style*="translate3d(0px, 0px, 0px)"]');

  const tr = layer.querySelector('table.irc_but_r tr');
  if(!tr.querySelector('.view-image-td')) {
    tr.insertAdjacentHTML('afterbegin', renderButton(url));
  }
}

function renderButton(url) {
  return `
    <td class="view-image-td">
      <a
        class="view-image-button"
        href="${url}"
        target="_blank"
      >
        <span>View Image</span>
      </a>
    </td>
  `;
}
