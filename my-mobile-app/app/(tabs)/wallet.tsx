import { PlaidLink } from 'react-native-plaid-link-sdk';
import { Button } from 'react-native';

const openPlaid = () => {
  PlaidLink.open({
    token: linkToken,
    onSuccess: (success) => {
      console.log('Public token:', success.publicToken);
    },
    onExit: (exit) => {
      console.log('Exited:', exit);
    },
  });
};

<Button title="Connect Bank" onPress={openPlaid} />