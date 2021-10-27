import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { useEffect } from 'react';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

const query = gql`
query Test {
  cultures {
    id,
    name,
    producer,
    type,
    form,
    temperature_range {
      minimum {
        unit
        value
      },
      maximum {
        unit
        value
      }
    },
    alcohol_tolerance {
      unit
      value
    },
    flocculation,
    attenuation_range  {
      minimum {
        unit
        value
      },
      maximum {
        unit
        value
      }
    },
    pof,
    glucoamylase,
    zymocide {
      no1
      no2
      no28
      klus
      neutral
    }
  }
  hops {
    id,
    type,
    name,
    producer,
    notes,
    origin,
    form,
    alpha_acid {
      unit
      value
    },
    beta_acid {
      unit
      value
    },
    percent_lost {
      unit
      value
    }
    oil_content {
      total_oil_ml_per_100g,
      humulene {
        unit
        value
      }
    }
  }
  fermentables {
    id,
    product_id,
    moisture {
      unit
      value
    },
    producer,
    name,
    origin,
    yield {
      potential {
        unit
        value
      },
      fine_grind {
        unit
        value
      },
      coarse_grind {
        unit
        value
      },
      fine_coarse_difference {
        unit
        value
      }
    },
    color {
      value,
      unit
    },
    alpha_amylase
  }
}
`

function App() {
  useEffect(() => {
    client.query({ query }).then(result => {
      console.log(result);
    })
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
