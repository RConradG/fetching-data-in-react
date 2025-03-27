const WeatherDetails = (props) => { // use destructuring instead of props
  // inside of props { weather: {location, temperature, condition} }
  // or cont {location, temperature, condition } = weather;
  console.log('WeatherDetails props: ', props);
  return (
    <section>
      <h2>Weather Details</h2>
      <p>Location: {props.weather.location}</p>
      <p>Temperature: {props.weather.temperature}</p>
      <>Condition: {props.weather.condition}</>
    </section>
  );
}

export default WeatherDetails;