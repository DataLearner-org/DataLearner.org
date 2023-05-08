import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import ThemedImage from '@theme/ThemedImage';
import {
  AngularIcon,
  // ElectronIcon,
  FlutterIcon,
  HTMLIcon,
  JSIcon,
  KotlinIcon,
  ReactIcon,
  SwiftIcon,
} from '../../icons';
import Head from '@docusaurus/Head';
import { useState } from 'react';

import DocsCard from '@site/src/components/global/DocsCard';
import DocsCards from '@site/src/components/global/DocsCards';


function SDKLink({ href, Icon, label, disabled = false }) {
  return (
    <Link
      className={clsx(
        'flex items-center gap-2 rounded-md p-2 text-current transition hover:bg-secondary-700 hover:text-black hover:no-underline dark:hover:text-white',
        disabled && 'cursor-default'
      )}
      href={!disabled ? href : undefined}
    >
      <Icon className="h-8 w-8" />
      {label}
    </Link>
  );
}

export default function SDKsSection() {
  const [visibleSection, setVisibleSection] = useState('Web');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target.getAttribute('data-section');

          if (entry.isIntersecting) {
            entry.target.classList.add('intersected');
            setVisibleSection(section);
          }
        }
      },
      { rootMargin: '-50% 0% -50% 0%' }
    );

    const elements = document.querySelectorAll('.sdk-section');
    for (const el of elements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  function Pill({ section }) {
    return (
      <div
        className={clsx(
          'flex-1 cursor-pointer rounded-md py-2 px-6 text-center font-jakarta text-sm font-semibold',
          visibleSection === section
            ? 'bg-primary text-white'
            : 'text-black dark:text-white'
        )}
        onClick={() => {
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }}
      >
        {`${section[0].toUpperCase()}${section.substring(1)}`}
      </div>
    );
  }

  return (
    <section className="bg-secondary-1000 py-20 px-4" id="start-learning">
      <Head>
        <link rel="prefetch" href="/static/landing-page/plugin-sdk-light.png" />
        <link rel="prefetch" href="/static/landing-page/plugin-sdk-dark.png" />
      </Head>
      <div className="mx-auto max-w-7xl">
        <div className="dyte-badge">Khoá học</div>

        <div className="sticky top-14 z-20 -mt-4 flex flex-col items-center gap-6 bg-secondary-1000 py-6 lg:flex-row lg:justify-between lg:py-0">
          <h2 className="my-0 text-center font-jakarta lg:text-3xl">
            Chúng tôi cung cấp các khóa học miễn phí!
          </h2>

          <div className="mx-auto flex h-20 w-full flex-1 items-center justify-center self-start lg:w-auto lg:justify-end">
            <div className="inline-flex items-center rounded-lg bg-zinc-100 p-2 text-sm dark:bg-zinc-800 lg:text-base">
              <Pill section="Nền tảng" />
              <Pill section="Nhập môn" />
              <Pill section="Trung bình" />
              <Pill section="Data Learner" />
            </div>
          </div>
        </div>

        <div
          className="sdk-section my-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="Nền tảng"
          id="Nền tảng"
        >
          <div className="flex flex-[1] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Nền tảng</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Xây dựng nền tảng vững chắc để bắt đầu.
            </p>
            {/* <Link className="text-sm">Learn More &rarr;</Link> */}
          </div>
          <div className="flex-1 bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            {/* <h4>UI Kit</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate video and voice calls to your app or website in minutes
              using Dyte&apos;s prebuilt design library of UI components.
            </p> */}
            <div>
            <DocsCards>
              <DocsCard header="Python cho người mới bắt đầu" href="/khoa-hoc/python-cho-nguoi-moi-bat-dau" icon="/static/landing-page/sdk-icons/python.svg">
                <p>Khóa học nền tảng về lập trình Python, tiếp cận dưới góc nhìn khoa học dữ liệu, các bạn học sinh cấp 2 đã có thể bắt đầu học</p>
              </DocsCard>
              <DocsCard header="Version control và Github" href="/khoa-hoc/version-control-va-github" icon="/static/landing-page/sdk-icons/resources/github.svg">
                <p>Khóa học giúp người học hiểu được các khái niệm căn bản và cần thiết về version control, đồng thời hướng dẫn sử dụng GitHub để cộng tác với nhau bằng các lệnh, chức năng cơ bản, cùng các quy ước</p>
              </DocsCard>
            </DocsCards>
              {/* <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink href="react-ui-kit" Icon={ReactIcon} label="Python cho người mới bắt đầu" />
                </li>
                <li>
                  <SDKLink
                    href="angular-ui-kit"
                    Icon={AngularIcon}
                    label="Angular"
                  />
                </li>
                <li>
                  <SDKLink
                    href="ui-kit"
                    Icon={HTMLIcon}
                    label="Web Components"
                  />
                </li>
              </ul> */}
            </div>
          </div>
          {/* <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Core SDK</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Build high-quality custom video and voice calls with real-time
              communication using fully customizable and easy to integrate Core
              SDKs.
            </p>
            <DocsCards>
              <DocsCard header="Version control và Github" href="api/alert" icon="/icons/book_cover_github.png">
                <p>Alerts are a great way to offer the user the ability to choose a specific action or list of actions.</p>
              </DocsCard>
            </DocsCards>
            <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="web-core" Icon={JSIcon} label="Version control và Github" />
              </li>
              <li>
                <SDKLink href="react-web-core" Icon={ReactIcon} label="React" />
              </li>
            </ul>
          </div> */}
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="Nhập môn"
          id="Nhập môn"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Nhập môn</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Sẵn sàng tìm hiểu về Khoa học Dữ liệu
            </p>
            {/* <Link className="text-sm" href="#">
              Learn More &rarr;
            </Link> */}
          </div>
          <div className="flex flex-1 flex-col bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>Toán</h4>
            {/* <p className="text-sm leading-relaxed text-text-400">
              Integrate video and voice calls to your app or website in minutes
              using Dyte&apos;s prebuilt design library of UI components.
            </p> */}
            <DocsCards>
            <DocsCard header="Thống kê cơ bản" href="/khoa-hoc/thong-ke-co-ban" icon="/static/landing-page/sdk-icons/chart-bar.svg">
              <p>Khóa học căn bản, cần thiết trước khi đi tiếp đến việc áp dụng thống kê trong khoa học dữ liệu</p>
            </DocsCard>
            </DocsCards>
            {/* <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="android" Icon={KotlinIcon} label="Android" />
              </li>
              <li>
                <SDKLink href="ios" Icon={SwiftIcon} label="iOS" />
              </li>
              <li>
                <SDKLink
                  href="react-native"
                  Icon={ReactIcon}
                  label="React Native"
                />
              </li>
              <li>
                <SDKLink href="flutter" Icon={FlutterIcon} label="Flutter" />
              </li>
            </ul> */}
            {/* <div className="flex flex-1 flex-col justify-end">
              <div className="rounded-2xl bg-secondary-700 p-4 dark:bg-secondary-900">
                <h5 className="text-center text-xs text-text-400">
                  COMING SOON: Huhu
                </h5>
                <ul className="mb-0 flex list-none flex-col gap-2 pl-0"></ul>
              </div>
            </div> */}
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Khoa học Dữ liệu</h4>
            {/* <p className="text-sm leading-relaxed text-text-400">
              Build high-quality custom video and voice calls with real-time
              communication using fully customizable and easy to integrate Core
              SDKs.
            </p> */}
            <DocsCards>
            <DocsCard header="Khoa học dữ liệu cho người mới bắt đầu" href="/khoa-hoc/khoa-hoc-du-lieu-cho-nguoi-moi-bat-dau" icon="/static/landing-page/sdk-icons/table-cells.svg">
              <p>Giới thiệu về Khoa Học Dữ Liệu ở mức căn bản</p>
            </DocsCard>

            <DocsCard header="Các thư viện Python thường dùng trong khoa học dữ liệu" href="/khoa-hoc/cac-thu-vien-python-thuong-dung-trong-khoa-hoc-du-lieu" icon="/static/landing-page/sdk-icons/arrow-down.svg">
              <p>
              Tiếp nối khóa học <a href="/khoa-hoc/khoa-hoc-du-lieu-cho-nguoi-moi-bat-dau">Python Cho Người Mới Bắt Đầu</a>, ở khóa học này chúng ta tìm hiểu sơ qua các thư viện sau: Numpy, Pandas, Matplotlib, Seaborn, Statsmodels, Scikit-learn, cProfile
              </p>
            </DocsCard>
            </DocsCards>
            {/* <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="android-core"
                  Icon={KotlinIcon}
                  label="Android"
                />
              </li>
              <li>
                <SDKLink
                  Icon={FlutterIcon}
                  label="Flutter"
                  href="flutter-core"
                />
              </li>
              <li>
                <SDKLink href="rn-core" Icon={ReactIcon} label="React Native" />
              </li>
              <li>
                <SDKLink href="ios-core" Icon={SwiftIcon} label="iOS" />
              </li>
            </ul> */}
          </div>
        </div>

        <div
          className="sdk-section my-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="Trung bình"
          id="Trung bình"
        >
          <div className="flex flex-[1] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Trung bình</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Cất cánh!
            </p>
            {/* <Link className="text-sm">Learn More &rarr;</Link> */}
          </div>
          <div className="flex-1 bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            {/* <h4>UI Kit</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate video and voice calls to your app or website in minutes
              using Dyte&apos;s prebuilt design library of UI components.
            </p> */}
            <div>
            <DocsCards>
            <DocsCard header="Trực quan hoá dữ liệu" href="/khoa-hoc/truc-quan-hoa-du-lieu" icon="/static/landing-page/sdk-icons/presentation-chart.svg">
              <p>Ở các khóa học ở cấp độ trước, ta đã biết truyền tải thông tin, kiến thức là một điều quan trọng trong Khoa Học Dữ Liệu. Trực quan hóa dữ liệu là một cách hiệu quả để chúng ta làm được việc đó</p>
            </DocsCard>
            </DocsCards>
              {/* <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink href="react-ui-kit" Icon={ReactIcon} label="Python cho người mới bắt đầu" />
                </li>
                <li>
                  <SDKLink
                    href="angular-ui-kit"
                    Icon={AngularIcon}
                    label="Angular"
                  />
                </li>
                <li>
                  <SDKLink
                    href="ui-kit"
                    Icon={HTMLIcon}
                    label="Web Components"
                  />
                </li>
              </ul> */}
            </div>
          </div>
          {/* <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Core SDK</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Build high-quality custom video and voice calls with real-time
              communication using fully customizable and easy to integrate Core
              SDKs.
            </p>
            <DocsCards>
              <DocsCard header="Version control và Github" href="api/alert" icon="/icons/book_cover_github.png">
                <p>Alerts are a great way to offer the user the ability to choose a specific action or list of actions.</p>
              </DocsCard>
            </DocsCards>
            <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="web-core" Icon={JSIcon} label="Version control và Github" />
              </li>
              <li>
                <SDKLink href="react-web-core" Icon={ReactIcon} label="React" />
              </li>
            </ul>
          </div> */}
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="Data Learner"
          id="Data Learner"
        >
          <div className="flex flex-1 flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Data Learner</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Là trang liên kết với Khoahocdulieu.org, datalearner.org sử dụng ngôn ngữ Tiếng Anh, 
              cung cấp các nội dung đơn giản, ngắn gọn, dễ học về các công cụ cho người học dữ liệu trong thực tiễn
            </p>
            <Link className="text-sm" href="https://www.datalearner.org">
              Ghé trang &rarr;
            </Link>
          </div>
          <div className="flex flex-[3] items-center justify-center rounded-3xl p-6 px-8 lg:justify-end">
            <ThemedImage
              sources={{
                light: '/static/landing-page/plugin-sdk-light.png',
                dark: '/static/landing-page/plugin-sdk-dark.png',
              }}
              alt="Plugin SDK Usage Preview"
              loading="lazy"
            />
          </div>
        </div>

        {/* <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="desktop"
          id="desktop"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <div className="mb-4 text-xs font-semibold">COMING SOON</div>
            <h3 className="text-4xl font-semibold">Desktop</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Take Dyte for a spin to build real-time communication solutions
              for Electron. Read the docs to get started with your desktop
              applications.
            </p>
            <Link href="#" className="text-sm">
              Learn More &rarr;
            </Link>
          </div>
          <div className="flex-1 rounded-3xl bg-secondary-800 p-6 px-8">
            <h4>Core SDK</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Build high-quality custom video and voice calls with real-time
              communication using fully customizable and easy to integrate Core
              SDKs.
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="#"
                  Icon={ElectronIcon}
                  label="Electron"
                  disabled
                />
              </li>
            </ul>
          </div>
          <div className="flex-1 p-6 px-8">
            <h4>UI Kit</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate video and voice calls to your app or website in minutes
              using Dyte&apos;s prebuilt design library of UI components.
            </p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink
                    href="#"
                    disabled
                    Icon={ElectronIcon}
                    label="Electron"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      <div className="text-center text-text-400">
        <p>
          Không tìm thấy khoá học bạn cần?{' '}
          <Link href="/lien-he">Liên hệ chúng tôi!</Link>
        </p>
      </div>
    </section>
  );
}
