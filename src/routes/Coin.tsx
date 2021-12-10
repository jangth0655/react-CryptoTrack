import React from "react";
import { useQuery } from "react-query";
import { useLocation, useParams, Routes, Route, useMatch } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import Chart from "./Chart";
import Price from "./Price";
import { Helmet } from "react-helmet";

const Container = styled.div`
  position: relative;
  max-width: 30em;
  margin: auto;
  padding: 0.8em;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5em;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  font-size: 1.25rem;
`;

const Overview = styled.div`
  -webkit-box-shadow: 0px 7px 15px 0px #000000;
  box-shadow: 0px 7px 15px 0px #000000;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgColor};
  padding: 0.6em 1.25px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 0.5rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 0.3em;
  }
`;
const Description = styled.p`
  margin: 1.25em 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1.5rem 0px;
  gap: 0.6rem;
  height: 1em;
  line-height: 1em;
`;

const Tab = styled.p<{ isActive: boolean }>`
  -webkit-box-shadow: 0px 7px 15px 0px #000000;
  box-shadow: 0px 7px 15px 0px #000000;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 400;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
    height: 100%;
  }
  &:active {
    transform: scale(0.8);
  }
`;

const HomeBtn = styled.div`
  width: 100%;
  height: 1.8em;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5em;
  transition: all 0.2s ease-in;
  & button:hover {
    color: whitesmoke;
    background-color: ${(props) => props.theme.accentColor};
  }
  a {
    display: block;
    width: 5em;
    height: 1.8em;
    button {
      font-size: 0.5rem;
      border-radius: 15px;
      background-color: ${(props) => props.theme.bgColor};
      color: ${(props) => props.theme.textColor};
    }
  }
`;

interface InfoDataInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  contract: string;
  platform: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}
interface TickersDataInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Coin = () => {
  const { state } = useLocation();
  const { coinId } = useParams();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  const { isLoading: infoLoading, data: infoData } =
    useQuery<InfoDataInterface>(["info", coinId], () => fetchCoinInfo(coinId), {
      refetchInterval: 10000,
    });

  const { isLoading: tickersLoading, data: tickersData } =
    useQuery<TickersDataInterface>(["tickers", coinId], () =>
      fetchCoinTickers(coinId)
    );

  const loading = infoLoading || tickersLoading;
  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? state.name : loading ? "loading..." : infoData?.name}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? "loading..." : infoData?.name}
        </Title>
      </Header>
      <HomeBtn>
        <Link to={process.env.PUBLIC_URL + "/"}>
          <button>Go Home</button>
        </Link>
      </HomeBtn>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price :</span>
              <span>{tickersData?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to="chart">Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to="price">Price</Link>
            </Tab>
          </Tabs>

          <Routes>
            <Route path="price" element={<Price coinId={coinId} />} />
            <Route path="chart" element={<Chart coinId={coinId} />} />
          </Routes>
        </>
      )}
    </Container>
  );
};

export default Coin;
