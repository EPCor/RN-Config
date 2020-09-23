import { StackScreenProps } from '@react-navigation/stack';

export type RootParamList = {
  Home: undefined;
  About: undefined;
};

export type RootScreenProps<
  RouteName extends keyof RootParamList
> = StackScreenProps<RootParamList, RouteName>;
