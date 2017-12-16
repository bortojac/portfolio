
// yelp is down right now. try this and if it works, remove OAuth2 code commented out below.
const apiKey = 'heH5QuAaiiSTIVICDPVIpaUhVReJp1SijwS1WI4LHK-ccOSwuRDPkQ6JVwLdDOg5pFgDtka55iJNQ8kJLjS1Po1E8cvglV1z4sN4KdUSC-ho2vqU1J9eJ6Kj1-8xWnYx';

let Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
             {headers: {
                 Authorization: `Bearer ${apiKey}`
                }
            }
        ).then(
        response => {
            if(response.ok) {
               return response.json();
            }
            //console.log(response);
            throw new Error('Request failed!');
        },
        networkError => console.log(networkError.message)).then(
            jsonResponse => {
                if(jsonResponse.businesses) {
                    return jsonResponse.businesses.map(
                        business => ({
                               id: business.id,
                               imageSrc: business.image_url,
                               name: business.name,
                               address: business.location.address1,
                               city: business.location.city,
                               state: business.location.state,
                               zipcode: business.location.zipcode,
                               category: business.categories[0].title,
                               rating: business.rating,
                               reviewCount: business.review_count
                           }));
                }
            }
        )
    }
};

  export default Yelp;
  

// OAuth2.0. This method of authentication will be deprecated 3/2018
/*const clientId = 'MnQJHtEysCNlY8sJa4cUEA';
const clientSecret = 'wesAur4IirbXH0xF4dJhHgo0yBVzC6x7Cd6hfQfFiWSopv2NegYxCVhFnNBrZ2ph';
let accessToken = '';

let Yelp = {
    getAccessToken() {
        if(accessToken) {
            return new Promise(resolve => resolve(accessToken));
        }
    
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
         {
            method: 'POST'
        }).then(response => {
            if(response.ok) {
                return response.json();
            }
            console.log(response);
            throw new Error('Request failed!');
        },
    networkError => console.log(networkError.message)
).then(jsonResponse => {
            accessToken = jsonResponse.access_token;
            console.log("accessTokenOkay");
        });
    },

    search(term, location, sortBy) {
        return Yelp.getAccessToken().then(() => {
            return fetch(
                `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                {
                    headers : { Authorization : `Bearer ${accessToken}`, 'origin' : 'origin' }
                  }

            ).then(
            response => {
                if(response.ok) {
                    console.log(response.json());
                    return response.json();
                }
                console.log(response);
                throw new Error('Request failed!');
            },
            networkError => console.log(networkError.message)).then(
                jsonResponse => {
                    // check if there is a businesses key in jsonResponse
                    if(jsonResponse.businesses) {
                        jsonResponse.businesses.map(
                            business => {
                               return {
                                   id: business.id,
                                   imageSrc: business.image_url,
                                   name: business.name,
                                   address: business.location.address1,
                                   city: business.location.city,
                                   state: business.location.state,
                                   zipcode: business.location.zipcode,
                                   category: business.categories['title'],
                                   rating: business.rating,
                                   reviewCount: business.review_count
                               };
                            });
                    }
                }
            )
        });

        }
        

        }*/


