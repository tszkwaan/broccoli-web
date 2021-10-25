import axios from 'axios';
import { API_ENDPOINT_BACKEND } from '../config/config';

const apiEndpoint = API_ENDPOINT_BACKEND;

const createInvitation = form => axios.post(apiEndpoint, form);

export default {
  createInvitation,
};
