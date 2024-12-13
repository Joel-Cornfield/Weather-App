export default async function (location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=CDGN6KCXUAT6KSN683JPUEQKE`;
    const request = await fetch(url, {mode: "cors"});
    if (request.ok) { 
        return request;
    } 
    throw new Error(request.status);
}