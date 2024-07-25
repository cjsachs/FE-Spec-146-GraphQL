import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

 const api: string = 'https://graphqlzero.almansi.me/api'

 const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: api
 })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>   
    </BrowserRouter>
  </React.StrictMode>,
)
