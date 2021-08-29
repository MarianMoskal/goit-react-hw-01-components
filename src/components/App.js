// import PropTypes from 'prop-types';
import Profile from "./social-profile/Profile.jsx";
import u from "./social-profile/user.json";
import Statistics from "./statistics/Statistics.jsx";
import statisticalData from "./statistics/statistical-data.json";

function App() {
  return (
    <>
      <Profile user={u} />
      <Statistics stats={statisticalData} title="Upload Stats" />
    </>
  );
}

export default App;
