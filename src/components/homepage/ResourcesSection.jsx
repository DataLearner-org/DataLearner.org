import Link from '@docusaurus/Link';
import React from 'react';
import RESOURCES from '../../resources';

export default function ResourcesSection() {
  return (
    <section className="my-20 px-6">
      <div className="mx-auto max-w-5xl">
        <span className="dyte-badge">BLOG</span>
        <h2 className="lg:text-3xl">Những chia sẻ ngắn</h2>
        <p className="text-text-400">
          Khám phá kiến thức, góc nhìn, dự án, hội thảo từ Khoahocdulieu.org<br />
        </p>

        <div className="no-underline-links mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((resource) => (
            <Link
              className="group flex flex-col justify-between"
              key={resource.title}
              href={resource.url}
            >
              <div>
                <div className="mb-3 overflow-hidden rounded-lg">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    loading="lazy"
                    className="aspect-video lg:aspect-square h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary-100 lg:text-xl">
                  {resource.title}
                </h3>
                <p className="leading-snug text-text-400">
                  {resource.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="rounded-sm bg-primary-100/10 px-3 py-1 text-sm text-primary-100">
                  {resource.type}
                </div>
                <div className="text-text-400 text-sm">
                  {`${resource.duration} ${
                    resource.type === 'Video' ? 'watch' : 'read'
                  }`}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="my-20 flex flex-wrap items-center justify-center gap-3 text-center">
          <span>Xem thêm</span>
          <div className="flex gap-2">
            <Link className="underline underline-offset-8" href="/blog/kien-thuc">
              Kiến thức
            </Link>
            <Link
              className="underline underline-offset-8"
              href="/blog/goc-nhin"
            >
              Góc nhìn
            </Link>
            <Link
              className="underline underline-offset-8"
              href="/blog/du-an"
            >
              Dự án
            </Link>
            <Link
              className="underline underline-offset-8"
              href="/blog/hoi-thao"
            >
              Hội thảo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
