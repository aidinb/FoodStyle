import {
  StackActions,
  createNavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<ParamListBase>();

const navigate = (name: string, params?: ParamListBase) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
    // navigationRef.navigate(name, params);
  }
};

/**
 * Go back to the previous screen in app's navigation history.
 */
const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

/**
 * Check if dispatching back action will be handled by navigation
 */
const canGoBack = () => {
  if (navigationRef.isReady()) {
    return navigationRef.canGoBack();
  }
};

/**
 * Pop the specified number of screens from the navigation stack.
 * @param count - Number of screens to pop.
 */
const pop = (count?: number) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count));
  }
};

export default {
  navigate,
  goBack,
  pop,
  canGoBack,
};
