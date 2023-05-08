import React from 'react';
import Link from '@docusaurus/Link';

import { GitHub } from 'react-feather';
import { DiscordIcon, TelegramIcon } from '@site/src/icons';

const githubUsernames = [
  'nguyenkhangme',
  'kimdinhloc',
  'nguyenban',
];

export default function CommunitySection() {
  return (
    <section className="no-underline-links">
      <div className="mx-auto flex w-full flex-col items-center justify-center bg-gradient-to-b from-zinc-200/90 to-white px-4 py-16 pt-64 text-zinc dark:from-[#262626] dark:to-black dark:text-white">
        <h2 className="text-3xl">
          Tham gia <span className="text-primary-100">cộng đồng</span>
        </h2>
        <p className="mb-10 text-zinc-500">
          Tham gia với cộng đồng Khoahocdulieu.org để cùng chia sẻ đam mê, nhận hỗ trợ, hợp tác nghiên cứu,...
        </p>
        <div className="mx-auto mb-16 flex flex-wrap -space-x-1.5">
          {githubUsernames.map((username) => (
            <img
              key={username}
              src={`https://github.com/${username}.png?size=60`}
              alt={`User ${username}`}
              loading="lazy"
              className="h-6 w-6 rounded-full border-2 border-solid border-white transition hover:-translate-y-2 hover:scale-150 lg:h-12 lg:w-12"
            />
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 text-sm font-semibold lg:flex-row lg:gap-8">
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://discord.gg/QnkvBEJ3kn"
          >
            <DiscordIcon className="h-6 w-6" /> Discord &rarr;
          </Link>
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://github.com/Khoa-Hoc-Du-Lieu/docs/discussions"
          >
            <GitHub className="h-5 w-5" /> GitHub &rarr;
          </Link>
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://t.me/khoahocdulieu"
          >
            <TelegramIcon className="h-5 w-5" /> Telegram &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
