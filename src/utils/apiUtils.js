//The intention of this file was to import the API calls where and when i needed them,
//in the instance I used the same call in more than one set of code. This is likely to be
//the case when i branch out into more functionality for the page. As of now i only call
//each API function once so it wasn't necessary to utilise these code imports.

//post api call.

export const setStats = async () => {
    const url = "http://localhost:8080/stats/all";
    const res = await fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json/csv",
            "Content-Type": "application/json/csv",
        },
        body: JSON.stringify({
            id: id,
            tier: tier,
            material: material,
            name: name,
            type: type,
            handle: handle,
            static_damage: sDamage,
            ability_damage: aDamage,
            accuracy: accuracy,
            prayer_bonus: pBonus,
            lifepoint_bonus: lpBonus,
            defence_rating: dRating,
            style: style,
        }),
    });
    const json = await res.json();
    return json;
};

//get all api call

export const getStats = async () => {
    let url = "http://localhost:8080/stats/all";
    const response = await fetch(url);
    const statsData = await response.json();
    return statsData;
};

// get bronze api call

export const getBronzeItems = async () => {
    let url = "http://localhost:8080/stats/material/bronze";
    const response = await fetch(url);
    const statsData = await response.json();
    return statsData;
};

// get iron api call

export const getIronItems = async () => {
    let url = "http://localhost:8080/stats/material/iron";
    const response = await fetch(url);
    const statsData = await response.json();
    return statsData;
};

// get steel api call

export const getSteelItems = async () => {
    let url = "http://localhost:8080/stats/material/steel";
    const response = await fetch(url);
    const statsData = await response.json();
    return statsData;
};
