export default async function (response) {
    const json = await response.json();
    const address = json.resolvedAddress;
    const currentDay = json.days[0];
    const temp = currentDay.temp;
    const precipprob = currentDay.precipprob;
    const cloudcover = currentDay.cloudcover;
    const conditions = currentDay.conditions;
    const windspeed = currentDay.windspeed;
    return {
        temp, 
        precipprob,
        cloudcover,
        conditions,
        windspeed,
        address,
    };
} 