import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

import { GitHub } from 'react-feather';
import { DiscordIcon, TelegramIcon } from '@site/src/icons';

export default function HomeFooter({ className }) {
  return (
    <footer className="bg-secondary-900">
      <div
        className={clsx(
          'mx-auto flex max-w-7xl flex-col gap-4 px-10 py-8 lg:flex-row lg:items-center lg:gap-8',
          className
        )}
      >
        <div>
          <ThemedImage
            sources={{ light: '/logo/light.svg', dark: '/logo/dark.svg' }}
            alt="Logo"
            className="h-10"
          />
        </div>
        <div className="flex items-center gap-3">
          <Link href="https://discord.gg/QnkvBEJ3kn" aria-label="Discord community">
            <DiscordIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
          </Link>
          <Link href="https://github.com/Khoa-Hoc-Du-Lieu" aria-label="GitHub">
            <GitHub className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
          <Link
            href="https://t.me/khoahocdulieu"
            aria-label="Telegram"
          >
            <TelegramIcon className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
        </div>
        <div className="flex-1 text-zinc-400 lg:text-right">
          Copyright &copy; Khoahocdulieu since 2021. 
          All rights reserved. 
          Built with <Link href="https://docusaurus.io" aria-label="Docusarus">Docusarus</Link>. 
          Using templates from <Link href="https://docs.dyte.io/" aria-label="Dyte">Dyte</Link>, 
          and <Link href="https://ionicframework.com/docs" aria-label="Ionic">Ionic</Link>
        </div>
      </div>
    </footer>
  );
}
