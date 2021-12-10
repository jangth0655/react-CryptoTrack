import React from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { isDarkState } from "../atoms";

const Container = styled.div`
  position: relative;
  max-width: 30em;
  margin: auto;
  padding: 0.8em;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul`
  padding: 0 1.25em;
`;

const Coin = styled.li`
  -webkit-box-shadow: 0px 7px 15px 0px #000000;
  box-shadow: 0px 7px 15px 0px #000000;
  background-color: ${(props) => props.theme.coinLi};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 0.8em;
  border-radius: 15px;
  a {
    display: flex;
    align-items: center;
    padding: 1.25em;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Text = styled.p``;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  font-size: 1.25rem;
`;

const Img = styled.img`
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.5em;
`;

const DarkToggleBtn = styled.button`
  position: absolute;
  top: 1.5em;
  right: 0.5em;
  font-size: 0.5rem;
  padding: 0.5em;
  border-radius: 15px;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  transition: all 0.2s ease-in;
  &:hover {
    color: whitesmoke;
    background-color: ${(props) => props.theme.accentColor};
  }
`;
interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  const setIsDark = useSetRecoilState(isDarkState);
  const DarkBtn = () => {
    setIsDark((pre) => !pre);
  };
  return (
    <Container>
      <Helmet>
        <title>Coins</title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
      </Header>
      <DarkToggleBtn onClick={DarkBtn}>ToggleBtn</DarkToggleBtn>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt="logo"
                />
                <Text>{coin.name} &rarr;</Text>
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
};

export default Coins;
