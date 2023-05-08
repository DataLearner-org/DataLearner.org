import type { ComponentProps, ReactNode } from 'react';
import {
  ReactIcon,
  AngularIcon,
  AndroidIcon,
  AppleIcon,
  FlutterIcon,
  HTMLIcon,
  JSIcon,
  ListIcon,
  PythonIcon,
  GitHubIcon,
  PresentationChartIcon,
  ChartBarIcon,
  TableCellsIcon,
  ArrowDownIcon,
} from './icons';

export type Section = { docId: string } & (
  | {
      section: false;
    }
  | {
      section: string;
      icon: (props: ComponentProps<'svg'>) => ReactNode;
      name: string;
    }
);

const SECTIONS: Section[] = [
  {
    name: 'Danh sách khoá học',
    docId: 'khoa-hoc',
    icon: ListIcon,
    section: 'courses',
  },
  {
    name: 'Python cho người mới bắt đầu',
    docId: 'python-cho-nguoi-moi-bat-dau',
    icon: PythonIcon,
    section: 'courses',
  },
  {
    name: 'Version control và GitHub',
    docId: 'version-control-va-github',
    icon: GitHubIcon,
    section: 'courses',
  },
  {
    name: 'Thống kê cơ bản',
    docId: 'thong-ke-co-ban',
    icon: ChartBarIcon,
    section: 'courses',
  },
  {
    name: 'Khoa học dữ liệu cho người mới bắt đầu',
    docId: 'khoa-hoc-du-lieu-cho-nguoi-moi-bat-dau',
    icon: TableCellsIcon,
    section: 'courses',
  },
  {
    name: 'Các thư viện Python thường dùng trong Khoa học Dữ liệu',
    docId: 'cac-thu-vien-python-thuong-dung-trong-khoa-hoc-du-lieu',
    icon: ArrowDownIcon,
    section: 'courses',
  },
  {
    name: 'Trực quan hoá dữ liệu',
    docId: 'truc-quan-hoa-du-lieu',
    icon: PresentationChartIcon,
    section: 'courses',
  },
];

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
    name: 'Khoá học',
    section: 'courses',
    },
  ],
];

export { SECTIONS, SECTION_GROUPS };
