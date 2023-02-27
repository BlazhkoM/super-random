import './styles.css';
import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from 'recharts';
import { Flex, Text } from '@chakra-ui/react';

const data = [
  {
    name: '',
    uv: 8700,
  },
  {
    name: 'Aug',
    uv: 8700,
  },
  {
    name: 'Sep',
    uv: 9300,
  },
  {
    name: 'Oct',
    uv: 11100,
  },
  {
    name: 'Nov',
    uv: 12400,
  },
  {
    name: 'Dec',
    uv: 10300,
  },
  {
    name: 'Jan',
    uv: 10900,
  },
  {
    name: 'Feb',
    uv: 11200,
  },
  {
    name: '',
    uv: 11200,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Flex
        bg="primary.navy"
        w="70px"
        h="32px"
        // borderRadius="lg"
        justify="center"
        align="center"
        border="none"
      >
        <Text color="white">{payload[0].value}</Text>
      </Flex>
    );
  }

  return null;
};

const LineChart = ({ data: chartData }) => (
  <AreaChart
    width={400}
    height={300}
    data={chartData}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
  >
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="rgba(31, 142, 241, 0.07)" />
        <stop offset="95%" stopColor="rgba(31, 142, 241, 0)" />
      </linearGradient>
    </defs>
    <XAxis
      dataKey="name"
      axisLine={false}
      tickLine={false}
      tick={{ fill: '#98A5B7', fontSize: '12px' }}
      // padding={{ left: -14, right: 14 }}
    />
    <YAxis
      axisLine={false}
      tickCount={7}
      tickFormatter={v => '$ ' + v}
      tickLine={false}
      // domain={["auto", "dataMax + 200"]}
      // allowDataOverflow={true}
      // interval="preserveStart"
      tick={{ fill: '#98A5B7', fontSize: '12px' }}
    />
    <CartesianGrid
      horizontal={false}
      style={{ stroke: '#98A5B7' }}
      // horizontalPoints={[]}
    />
    <Tooltip content={<CustomTooltip />} />
    <Area
      type="monotone"
      dataKey="uv"
      stroke="#51D9B0"
      strokeWidth={1.9}
      fillOpacity={1}
      fill="url(#colorUv)"
    />
  </AreaChart>
);

export default LineChart;
