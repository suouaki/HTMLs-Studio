// sidebar-shortcuts.js
// 侧边栏快捷插入内容的结构与渲染逻辑

const sidebarShortcutsData = {
  tags: [
    { label: '段落', tag: '<p></p>' },
    { label: '超链接', tag: "<a href=''>超链接</a>" },
    { label: '!DOCTYPE html', tag: '<!DOCTYPE html>' },
    { label: '缩写', tag: '<abbr></abbr>' },
    { label: '地址', tag: '<address></address>' }
  ],
  css: [
    { label: '定义元素的显示类型 示例：display: flex;', tag: 'display: ' },
    { label: '设置定位方式 示例：position: absolute;', tag: 'position: ' },
    { label: '顶部偏移量 示例：top: 10px;', tag: 'top: ' },
    { label: '右侧偏移量 示例：right: 20px;', tag: 'right: ' },
    { label: '底部偏移量 示例：bottom: 0;', tag: 'bottom: ' },
    { label: '左侧偏移量 示例：left: 0;', tag: 'left: ' },
    { label: '层叠顺序 示例：z-index: 100;', tag: 'z-index: ' }
  ],
  selectors: [
    { label: '包含获得焦点元素的祖先元素 示例：form:focus-within { ... }', tag: ':focus-within: ' },
    { label: '当元素获得键盘焦点或适合视觉焦点的元素 示例：button:focus-visible { ... }', tag: ':focus-visible: ' },
    { label: '匹配指定选择器列表的元素 示例：:where(.class1, .class2) { ... }', tag: ':where(selector): ' },
    { label: '匹配指定选择器列表的元素（与:where类似但优先级不同） 示例：:is(h1, h2, h3) { ... }', tag: ':is(selector): ' },
    { label: '包含指定选择器元素的父元素 示例：div:has(> p) { ... }', tag: ':has(selector): ' },
    { label: '表单默认选中的元素 示例：option:default { ... }', tag: ':default: ' }
  ]
};

function renderSidebarShortcuts() {
  const shortcutsTab = document.getElementById('shortcuts-tab');
  if (!shortcutsTab) return;
  shortcutsTab.innerHTML = `
    <div class="guide-section">
      <h3>🏷️ 常用标签写入</h3>
      <div class="shortcuts-grid" id="insert-tags-grid-tags"></div>
      <h3>🎨 CSS属性写入</h3>
      <div class="shortcuts-grid" id="insert-tags-grid-css"></div>
      <h3>😶‍🌫️ 选择器写入</h3>
      <div class="shortcuts-grid" id="insert-tags-grid-selectors"></div>
    </div>
  `;
  // 渲染各类按钮
  const renderBtns = (arr, gridId) => {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    arr.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-secondary tag-insert-btn';
      btn.setAttribute('data-tag', item.tag);
      btn.textContent = item.label;
      grid.appendChild(btn);
    });
  };
  renderBtns(sidebarShortcutsData.tags, 'insert-tags-grid-tags');
  renderBtns(sidebarShortcutsData.css, 'insert-tags-grid-css');
  renderBtns(sidebarShortcutsData.selectors, 'insert-tags-grid-selectors');

  // 渲染后绑定插入事件
  bindTagInsertEvents();
}

function bindTagInsertEvents() {
  // 兼容CodeMirror全局变量editor
  if (typeof window.editor === 'undefined' || !window.editor) return;
  document.querySelectorAll('.tag-insert-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var tag = btn.getAttribute('data-tag');
      var doc = window.editor.getDoc();
      var sel = doc.getSelection();
      if (sel) {
        doc.replaceSelection(tag);
      } else {
        var cursor = doc.getCursor();
        doc.replaceRange(tag, cursor);
      }
      if (typeof window.showToast === 'function') {
        window.showToast('标签已插入！');
      }
    });
  });
}


document.addEventListener('DOMContentLoaded', renderSidebarShortcuts);
// 若页面已加载（如异步插入js），也尝试渲染
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(renderSidebarShortcuts, 0);
}
// 事件绑定逻辑（如原有功能）请在主页面继续处理
