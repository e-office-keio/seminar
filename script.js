/* ===================================================
   李光鎬研究会 公式サイト JavaScript
   インタラクティブ機能：メニュー、タブ、FAQ、スムーススクロール
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. コピーライトの年を自動設定
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. モバイルハンバーガーメニュー
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // メニュー項目をクリックしたらメニューを閉じる
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileMenuBtn.setAttribute('aria-expanded', false);
        }
      });
    });
  }

  // 3. 卒論・三田論 タブ切り替え
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      // 全ボタンのアクティブ解除
      tabButtons.forEach(b => b.classList.remove('active'));
      // 全ペインの非表示
      tabPanes.forEach(pane => pane.classList.remove('active'));

      // 該当ボタンとペインをアクティブ化
      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // 4. FAQ アコーディオン
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');

    if (header && body) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // クリックされたアイテムのトグル
        if (isActive) {
          item.classList.remove('active');
          body.style.maxHeight = null;
        } else {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    }
  });

  // 5. スクロールに応じたナビゲーションのアクティブ追従
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  const onScroll = () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('current');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('current');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll);
});
