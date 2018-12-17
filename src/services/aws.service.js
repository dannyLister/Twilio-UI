import axios from 'axios';
import awsConfig from '../config/aws.config';

export const getCustomerByTelephone = async (telephone) => {
    const url = `${awsConfig.endpoints.getContactByTelephone}/${telephone}`;
    const result = await axios.get(url);
    return result;
};

export const getHubspotContactByEmail = async (email) => {
    const url =`${awsConfig.endpoints.getHubspotContactByEmail}/${email}`;
    console.log(url)
    const result = await axios.get(url);
    return result;
};