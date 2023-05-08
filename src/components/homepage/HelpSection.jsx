import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-4 pt-16">
      <div
        className={clsx(
          'mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20',
          className
        )}
      >
        <h2 className="mb-12 text-center lg:text-3xl">
          Chúng tôi có thể giúp bạn bằng cách nào?
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img src="/static/landing-page/discussions.svg" alt="Discussions" width="48" height="48" />
            <h3 className="my-3">Tham gia diễn đàn</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Tham gia diễn đàn cộng đồng trên GitHub
            </p>
            <Link
              href="https://github.com/Khoa-Hoc-Du-Lieu/docs/discussions"
              className="text-primary dark:text-primary-100"
            >
              Đến diễn đàn &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img src="/static/landing-page/question.svg" alt="Question" width="48" height="48" />
            <h3 className="my-3">Hướng dẫn</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Xem qua trang hướng dẫn gồm cách sử dụng website, sử dụng diễn đàn, đóng góp bài viết, báo lỗi,...
            </p>
            <Link
              href="/huong-dan"
              className="text-primary dark:text-primary-100"
            >
              Xem hướng dẫn &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img src="/static/landing-page/chat.svg" alt="FAQs" width="48" height="48" />
            <h3 className="my-3">FAQs</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Xem qua trang FAQs của chúng tôi để có trả lời cho những câu hỏi thường gặp 
            </p>
            <Link href="/faq" className="text-primary dark:text-primary-100">
              Xem FAQs &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
