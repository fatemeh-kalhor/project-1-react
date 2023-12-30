import React from 'react';
import ReactDOM from 'react-dom/client';
import App from  './Components/App/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect:true
    }
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={client}>
    <App />
    <ReactQueryDevtools initialisopen={ false} />
  </QueryClientProvider>
  // <React.StrictMode>
    
  //   <App />
  // </React.StrictMode>
);
