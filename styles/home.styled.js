import styled from 'styled-components';

export const HomeWrap = styled.div`
  height: 100vh;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 100vw;
  height: 100vh;
`;

export const Card = styled.div`
  width: 600px;
  padding: 25px;
  background: #e9e9e9;
  border-radius: 5px;
  display: flex;
`;

export const Avatar = styled.div`
  width: 140px;
  height: 140px;
  background-image: url(https://avatars2.githubusercontent.com/u/1164024?s=460&u=4cab3f1b7649f957a4e719bb752a7a3686cf06b8&v=4);
  background-size: cover;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const InfoWrap = styled.div`
  padding: 24px;
  flex: 1;
`;

export const Info = styled.p`
  line-height: 20px;
`;

export const SocialLinks = styled.ul`
  margin: 0;
  padding: 10px 0;
  list-style: none;
`;

export const Icon = styled.li`
  margin: 0;
  padding: 5px;
  display: inline;
`;

export const Svg = styled.svg`
  fill: #999;
  height: 32px;
`;
