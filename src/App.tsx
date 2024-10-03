import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import { signOut } from "aws-amplify/auth";

function App() {

  return (

    <Authenticator>
      <main>
        {/*...*/}
      </main>
    </Authenticator>

  );
}

export default App;
