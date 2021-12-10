import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkState } from "../atoms";

export interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

export interface ChartProps {
  coinId?: string;
}

function Chart({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkState);
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        "Loading Chart"
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              background: "transparent",
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
            },
            stroke: {
              curve: "smooth",
              width: 5,
            },
            grid: {
              show: false,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              type: "datetime",
              labels: {
                show: false,
              },
              categories: data?.map((price) => price.time_close),
              axisTicks: { show: false },
              axisBorder: { show: false },
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}
export default Chart;
