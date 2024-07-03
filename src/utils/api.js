import axios from 'axios';

const data = new FormData();
data.append('q', 'English is hard, but detectably so');

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
  headers: {
    'x-rapidapi-key': '3c3bff822bmsh1cda8993fd0ff53p19c3b4jsnc9422d8a4f01',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    'Accept-Encoding': 'application/gzip'
  },
  data: data
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}