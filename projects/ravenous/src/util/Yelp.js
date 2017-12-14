
const apiKey = 'xkv-ceEyC3CrdrVgjMfAxmdZlcWXI8uiKsDmdGLdJ38RNX6IjUlddd6cz_H_YrK7_IclQwFbW-bBRuxjyqlifKOnFllpbDwgupJDEmv_6Fc_XXO2mEBDfNE5DNExWnYx';

let Yelp = {
    search(term, location, sortBy) {
        //we are prepending the cors-anywhere url so that we can bypass CORS restrictions on cross-origin requests
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
             {headers: {
                 Authorization: `Bearer ${apiKey}`
                }
            }).then(
        response => {
            if(response.ok) {
                console.log(response.json());
                console.log('HEREEEEEE');
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
    }
};

export default Yelp;