import { ChartDonutUtilization } from '@patternfly/react-charts/victory';
import { useEffect, useState } from 'react';

interface UsageData {
  x?: string;
  y?: number;
  name?: string;
}

export const ChartUtilInvertedRightLegend: React.FunctionComponent = () => {
  const [spacer, setSpacer] = useState('');
  const [used, setUsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsed((prevUsed) => {
        const val = (((prevUsed - 10) % 100) + 100) % 100;
        setSpacer(val < 10 ? ' ' : '');
        return val;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const data: UsageData = { x: 'GBps capacity', y: used };
  const legendData: UsageData[] = [{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }];

  return (
    <div style={{ height: '230px', width: '435px' }}>
      <ChartDonutUtilization
        ariaDesc="Storage capacity"
        ariaTitle="Donut utilization chart example"
        constrainToVisibleArea
        data={data}
        invert
        labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
        legendData={legendData}
        legendOrientation="vertical"
        name="chart3"
        padding={{
          bottom: 20,
          left: 20,
          right: 225, // Adjusted to accommodate legend
          top: 20
        }}
        subTitle="of 100 GBps"
        title={`${used}%`}
        thresholds={[{ value: 60 }, { value: 20 }]}
        width={435}
      />
    </div>
  );
};
