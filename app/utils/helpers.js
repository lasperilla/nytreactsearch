// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from 'axios'

// NYT API
const API_key = "defcdcfdde634a5d8c8bd2fd522eef32";

// Helper functions for making API Calls
// We export the API helper
export default {

    // This function serves our purpose of running the query to geolocate.
    runQuery(topic, start, end) {

            console.log(topic);
            let uriTopic = encodeURIComponent(topic)

            var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_key}&sort=newest&q=${uriTopic}`;
            if (start !== "") {
                queryURL+= `&begin_date=${start}`
                }
            if (end !== "") {
                queryURL+= `&begin_date=${end}`
                }
            console.log("queryURL", queryURL)

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

        // This function hits our own server to retrieve saved articles
        getSaved() {
            return axios.get("/api/saved");
        },

        // This function posts new saved articles to our database.
        postSaved(headline, url, _id) {
            return axios.post("/api", { headline: headline, url: url, article_id:_id });
        }

        //delete
};
