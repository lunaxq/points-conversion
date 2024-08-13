import { SideBar } from 'antd-mobile';
import { type CSSProperties } from 'react';

interface PageSideBarProps {
  items: {
    title: string;
    key: string;
  }[];
  onChange?: (key: string) => void;
}

export default function PageSideBar({ items, onChange }: PageSideBarProps) {
  return (
    <SideBar onChange={onChange}>
      {items.map((item) => (
        <SideBar.Item
          key={item.key}
          title={item.title}
          className="leading-[22px] text-sm !py-3 !pr-2"
          style={
            {
              '--item-border-radius': '0px',
              '--width': '92px',
              '--background-color': '#f3f5fb',
            } as CSSProperties
          }
        />
      ))}
    </SideBar>
  );
}
