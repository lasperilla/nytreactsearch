// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from 'axios'

// NYT API
const API_key = "defcdcfdde634a5d8c8bd2fd522eef32";

// Helper functions for making API Calls
// We export the API helper
export default {

    // This function serves our purpose of running the query to geolocate.
    runQuery(topic) {

            console.log(topic);
            let topic2 ="trump scandal"
            let uriTopic = encodeURIComponent(topic2)
            let start = 20170527
            let end = 20170627

            var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_key}&sort=newest&q=${uriTopic}&begin_date=${start}&end_date=${end}`;
            console.log("queryURL", queryURL)

            // Figure out the geotopic
            // const queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + topic + "&pretty=1&key=" + API_key;


            return axios.get(queryURL).then(function(response) {
                console.log("response", response.data.response.docs)
                if (response.data.response.docs) {
                    console.log("formatted", response.data.response.docs)
                    return response.data.response.docs;
                }
                // If we don't get any results, return an empty string
                return "";
            });
        },

        // This function hits our own server to retrieve the record of query results
        getHistory() {
            return axios.get("/api");
        },

        // This function posts new searches to our database.
        postHistory(topic) {
            return axios.post("/api", { topic: topic });
        }
};
