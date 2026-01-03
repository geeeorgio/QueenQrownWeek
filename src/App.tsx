import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GameBackground, GameContextProvider } from './components';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
  return (
    <GameContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <GameBackground>
            <RootNavigator />
          </GameBackground>
        </NavigationContainer>
      </SafeAreaProvider>
    </GameContextProvider>
  );
};

export default App;
