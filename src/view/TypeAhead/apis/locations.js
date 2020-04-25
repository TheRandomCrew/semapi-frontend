import axios from 'axios';

const GET_LOCATIONS = 'https://restcountries.eu/rest/v2/name/';

export const getLocations = async name => (
	axios.get(`${GET_LOCATIONS}${name || 'a'}`, { params: { fields: "name" } })
);

