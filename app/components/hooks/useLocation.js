import { useEffect, useState } from 'react'
import * as Location from 'expo-location'

export default useLocation = () => {
    const [location, setLocation] = useState();
    const [errorMsg, setErrorMsg] = useState();

    useEffect(() => {
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    };

    return location;

};

