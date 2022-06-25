import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import { Project } from "./Pages/Project";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          }
        },
      }
    }
  }
});

const Client = new ApolloClient({
  // uri: "http://localhost:5000/graphql",
  uri: "https://graphql-react-app.herokuapp.com/graphql",
  cache
});

const App = () => {
  return (
    <ApolloProvider client={Client}>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects/:id' element={<Project />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
