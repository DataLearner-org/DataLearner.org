import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container-fluid container">
        {logo && <div className="margin-bottom--sm">{logo}</div>}
        <p className="footer__description mb-8">
            Nhiệm vụ của chúng tôi là cùng nhau xây dựng
            cộng đồng khoa học dữ liệu đa nghành, từ đó phối hợp nghiên cứu
            nhằm đạt được các mục tiêu phát triển bền vững tại Việt Nam.
        </p>
        <div className="footer__row">
          <div className="footer__data">
            <div className="footer__cta">
              <p>Đăng ký nhận thông báo!</p>
              <Link href="#">Đăng ký</Link>
            </div>
          </div>
          <div className="links">{links}</div>
        </div>
        {copyright && (
          <div className="footer__bottom text--center">{copyright}</div>
        )}
      </div>
    </footer>
  );
}
