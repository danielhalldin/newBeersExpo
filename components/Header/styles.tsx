import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 35px;
`;

export const Left = styled.View`
  flex: 6;
  justify-content: center;
`;

export const Center = styled.View`
  flex: 9;
  justify-content: center;
`;

export const Right = styled.View`
  flex: 6;
  justify-content: center;
`;

export const User = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const AvatarContainer = styled.View`
  justify-content: center;
  margin-left: 5px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const NameContainer = styled.View`
  justify-content: center;
  margin-left: 5px;
`;
export const Name = styled.Text`
  font-size: 15px;
  font-weight: bold;
  font-family: "Hind-Bold";
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Logo = styled.Text`
  font-size: 25px;
  font-weight: bold;
  font-family: "BowlbyOne-Regular";
  color: #fff;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Beers = styled.Text`
  font-size: 15px;
  font-weight: bold;
  font-family: "Hind-Bold";
  color: #fff;
  text-align: right;
  margin-right: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
