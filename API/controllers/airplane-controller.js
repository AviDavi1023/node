import airplanes from './airplane-info.js';

function getAll(req, res){
    res.send(airplanes);
}

function airplaneFilter(searchPlane){
    let match = airplanes.find(airplane => {
        return searchPlane === airplane.name;
    });

    if (!match) {
        match = airplanes.filter(airplane => {
        return airplane.designation
        .replace('-','')
        .includes(searchPlane.replace('-',''));
    })};

    return match || {id: 'Not found'};
}

function getAirplane(req, res) {
    const findPlane = airplaneFilter(req.params.airplane);
    res.send(findPlane);
}


export {getAll, getAirplane};
