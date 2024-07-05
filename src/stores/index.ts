import React from 'react';
import HomeStore from '../stores/homeStore.ts';

class RootStore {
  homeStore: HomeStore;

  constructor() {
    this.homeStore = new HomeStore();
  }
}

const storesContext = React.createContext<RootStore>(new RootStore());

// This will be the function available for the app to connect to the stores
export const useStores = (): RootStore => React.useContext(storesContext);
