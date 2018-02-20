function collectIds(movies) {
    const filter = getFilteredArray(movies, el => {
        return el.rating > 3;
    });
    return getTransformedArray(filter, el => {
        return el.id;
    });
}