```javascript
// Corrected component
function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(setData);
  }, []);

  return (
    <View>
      {data ? <Text>{data.name}</Text> : <Text>Loading...</Text>}
    </View>
  );
}
```