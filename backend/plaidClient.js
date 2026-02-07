import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const config = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});

export const plaidClient = new PlaidApi(config);

app.post('/create_link_token', async (req, res) => {
  const response = await plaidClient.linkTokenCreate({
    user: {
      client_user_id: 'user-id-123',
    },
    client_name: 'Your App Name',
    products: ['transactions'],
    country_codes: ['US'],
    language: 'en',
  });

  res.json(response.data);
});
