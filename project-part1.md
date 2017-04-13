### Project Part 1 (Due 4/15/17 11:59 pm)

In this assignment you are to create a Single Page Application (SPA) that allows a
user to search for an artist and display album details using the Spotify API.

Use AngularJS as your front-end and Node.js as your back-end. All API calls must be routed through your Node.js application. Your front-end must not directly connect to any external APIs.

## Spotify API
https://developer.spotify.com/web-api/endpoint-reference/

## Searching
Display a search box. Upon entering a search query, your application should query the Spotify API.

Your search results should include: <br/>
    - Artist Name <br/>
    - Artist Image (if no image is availble use a placeholder image) <br/>
    - Genres ( if available ) <br/>
*When genres are availabe display them seperated by a '|' (ex Pop | Dance | Rock)

## Details
Each search result should have a details button. Upon clicking that button, your application should get album details for the artist selected. Your results should not contain duplicates. Make sure you are using and understanding the Spotify API to ensure there are only albums and not duplicate albums. *Your application should NOT navigate to a new page/new url - everything should load on the main localhost page.*  

Your details display should include: <br/>
    - Artist Name (only once) <br/>
    - Artist Image (only once - if no image is availble use a placeholder image) <br/>
    - Album Name <br/>
    - Album Image ( if no image is availble use a placeholder image)

## Additional Notes
Make sure that as you are handling search results and details that you are correctly swapping out data displayed.  Meaning at no time should a user see both the stale search results and details or vice versa.

##  Extra Credit
- Create a custom directive to render the Details portion. (+ 10)
(ex - `<div custom-directive-to-render-details></div>`)
