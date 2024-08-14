import { CapsuleTabs } from 'antd-mobile';

interface TabsFilterOption {
  max?: number;
  min?: number;
  isIncludeBoundary?: boolean;
}

interface TabsFilterProps {
  options: TabsFilterOption[];
  onSelect?: (option: { max?: number; min?: number } | null) => void;
}

export default function TabsFilter({ options, onSelect }: TabsFilterProps) {
  const generateTitle = (option: TabsFilterOption) => {
    if (option.min === undefined && option.max === undefined) {
      throw new Error('min and max must be set at least one');
    }

    if (option.min !== undefined && option.max !== undefined) {
      if (option.isIncludeBoundary) {
        return `${option.min}<=积分<=${option.max}`;
      }
      return `${option.min}<积分<${option.max - 1}`;
    }

    if (option.min === undefined) {
      return `${option.max}积分以下`;
    }

    return `${option.min}积分以上`;
  };

  return (
    <CapsuleTabs
      onChange={(key: string) => {
        onSelect?.(options[parseInt(key)]);
      }}
    >
      <CapsuleTabs.Tab title="全部" key="-1" />
      {options.map((option, index) => (
        <CapsuleTabs.Tab
          title={generateTitle(option)}
          key={index}
        />
      ))}
    </CapsuleTabs>
  );
}
