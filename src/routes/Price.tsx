import { useQuery } from "react-query";
import { fetchCoinPrice } from "../api";
import { ChartProps, IHistorical } from "./Chart";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkState } from "../atoms";
import styled from "styled-components";

interface IPriceHistorical {
  open: number;
  high: number;
  low: number;
  close: number;
}

function Price({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkState);
  const { isLoading, data } = useQuery<IHistorical[]>(["price", coinId], () =>
    fetchCoinPrice(coinId)
  );
  console.log(data?.map((price) => price));

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: data?.map((price) => {
                return {
                  x: price.time_close,
                  y: [price.open, price.high, price.low, price.close].map(
                    (price) => price.toFixed(3)
                  ),
                };
              }),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              background: "transparent",
              height: 400,
              width: 500,
              toolbar: {
                show: false,
              },
            },
            grid: {
              show: true,
            },
            yaxis: {
              show: true,
            },
            xaxis: {
              type: "datetime",
              labels: {
                show: false,
              },
              axisTicks: { show: false },
              axisBorder: { show: false },
            },
            tooltip: {
              enabled: true,
            },
          }}
        />
      )}
    </div>
  );
}
export default Price;
