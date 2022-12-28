import { Router } from "./router";
import { FormProvider } from "./contexts/FormContext";

import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <FormProvider>
      <Router />
      <GlobalStyle />
    </FormProvider>
  );
};

export default App;
