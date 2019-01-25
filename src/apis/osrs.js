import axios from 'axios';

export default axios.create({
    baseURL: "http://services.runescape.com/m=itemdb_oldschool/api/catalogue"
})