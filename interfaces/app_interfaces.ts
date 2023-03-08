export interface navigationType {
  navigation: any;
}

export interface paramsInterface {
  navigation: navigationType;
  updateRoute: (arg: string) => void;
}
