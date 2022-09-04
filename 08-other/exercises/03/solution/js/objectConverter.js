'use strict';


const objectConverter = {
    arrayToMap(array) {
        const arrMap = new Map([]);
        array.forEach((val, i) => arrMap.set(i, val));
        return arrMap;
    },
    arrayToSet(array) {
        return new Set(array);
    },
    setToMap(set) {
        const setMap = new Map([]);
        Array.from(set).forEach((val, i) => setMap.set());
        return setMap;
    },
    setToArray(set) {
        return [...set]
    },
    mapToArray(map) {
        const mapArray = [];
        map.forEach((value) => {
            mapArray.push(value);
        });
        return mapArray;
    },
    mapToSet(map) {
        const mapSet = [];
        map.forEach((value) => mapSet.add(value));
        return new Set(mapSet);
    },
}


export default objectConverter;
