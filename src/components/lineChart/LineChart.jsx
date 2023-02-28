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
import { Flex, Text, useMediaQuery } from '@chakra-ui/react';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Flex
        bg="primary.navy"
        w="70px"
        h="32px"
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

const LineChart = ({ data: chartData }) => {
  const [isLargerThan1144] = useMediaQuery('(min-width: 1144px)');

  return (
    <AreaChart
      width={isLargerThan1144 ? 400 : 340}
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
      />
      <YAxis
        axisLine={false}
        tickCount={7}
        tickFormatter={v => '$ ' + v}
        tickLine={false}
        tick={{ fill: '#98A5B7', fontSize: '12px' }}
      />
      <CartesianGrid horizontal={false} style={{ stroke: '#98A5B7' }} />
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
};
export default LineChart;
