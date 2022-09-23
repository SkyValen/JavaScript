let checkTemp = (temp) => {
    if (temp <= 20) {
        return -1 //too cold
    }
    else if (temp >= 21 && temp <= 40) {
        return 0 //perfect
    }
    else {
        return 1 //too hot
    }
}
