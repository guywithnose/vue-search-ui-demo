import "regenerator-runtime/runtime";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";

const connector = new AppSearchAPIConnector({
  searchKey: "search-5adfohabkzz6gvz977hx9qat",
  engineName: "aeroads-prod",
  endpointBase:
    "https://enterprise-search-deployment-aa3ee1.ent.us-west1.gcp.cloud.es.io"
});

const config = {
  debug: true,
  apiConnector: connector,
  searchQuery: {
    disjunctiveFacets: ["make_name"],
    facets: {
      make_name: {
        type: "value"
      }
    }
  }
};

export default config;
